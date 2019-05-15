<template>
<v-card style="overflow:scroll; " :style="`height:${height}px;width:100%`" >
    <div v-if="!isLoading">
      <atom-spinner :animation-duration="1000" :size="100" :color="'#ff1d5e'" class="spinner-position"></atom-spinner>
    </div>
    <div v-if="isLoading">
        <v-card>
          <v-card-title>
          <v-spacer></v-spacer>
          <div class="searchbar-position">
            <v-text-field
              v-model="searchText"
              label="Search"
              single-line
              hide-details
              style="padding:0px;margin:0px"
            ></v-text-field>
            <v-btn @click="searchTable" small class="search-btn">
              <v-icon>search</v-icon>
            </v-btn>
          </div>
          <span style="position:absolute">
            Colors:&nbsp;<span class="lowprice-table" style="padding:1px 5px;">UnderCost - Sales Price &lt; avg cost inc GST</span> 
            &nbsp;&nbsp;<span class="warn-table" style="padding:1px 5px;">Warning - Competitor's price lower than us</span>
            &nbsp;&nbsp;<span class="lowest-table" style="padding:1px 5px;">Lowest - Under market price</span>
            </span>
        </v-card-title>
        <v-data-table
          :headers="columns"
          :items="rows"
          :search="search"
          :pagination.sync="pagination"
          :rows-per-page-items="[100,200,300]"
          class="override-overflow"
        >
        <template v-slot:items="props">
          <td style="height:80px;padding:10px;font-size:12px" :style="{backgroundColor:(props.index%2 == 0 ? 'palegreen':'')}" pa-0>{{props.item.productcode}}</td>
          
          <td class="text-xs-center table-description"  :style="{backgroundColor:(props.index%2 == 0 ? 'palegreen':'')}">
            <div class="table-cell" style="text-align:center">
              {{props.item.productdescription}}
            </div>
          </td>
          <td style="height:80px;padding:25px;font-size:12px;border:1px solid rgba(0,0,0,.1);" :style="{backgroundColor:(props.index%2 == 0 ? 'palegreen':'')}">
            <v-edit-dialog
              :return-value.sync="props.item.keywords"
              lazy
              large
              @save="save(props.item.productcode, props.item.keywords)"
              >
              <div class="keyword-cell">{{props.item.keywords}}</div>
              <template v-slot:input>
                  <div class="mt-3 title ">Update Description</div>
                </template>
              <template v-slot:input>
                <v-text-field 
                  v-model="props.item.keywords" 
                  :rules="[max100chars]" 
                  label="Edit" 
                  single-line 
                  counter
                  autofocus
                  ></v-text-field>
              </template>
            </v-edit-dialog>
          </td>
          <td class="text-xs-center" style="border:1px solid rgba(0,0,0,.1);font-size:12px" :style="{backgroundColor:(props.index%2 == 0 ? 'palegreen':'')}">
          AU${{props.item.costprice}}</td>
          <td class="text-xs-center" style="border:1px solid rgba(0,0,0,.1);font-size:12px" 
              :class="[isPriceLow(props.item.costprice,props.item.salesprice) ? 'lowprice-table':'',
              isOddRow(props.index)?'normal-even-table':'normal-table',
              isLowestPrice(props.item.competitorpricesList,props.item.salesprice) ? 'lowest-table':'']"
                      >
            AU${{props.item.salesprice}}</td>
          <td style="border:1px solid rgba(0, 0, 0, 0.1);line-height:1.2;font-size:12px;width:20px;" v-for="(item, index) in props.item.competitorpricesList" :key="index" class="text-xs-center" 
              :class="[isCompetitorPriceLow(item,props.item.salesprice) ? 'warn-table':'',isOddRow(props.index)?'normal-even-table':'normal-table']">
            {{item}}
          </td>
        </template>

        </v-data-table>
        
        </v-card>
    </div>
</v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { AtomSpinner } from 'epic-spinners';
import {grpc} from "@improbable-eng/grpc-web";

import { PriceComparisonService } from '../typings/pricecomparison_pb_service';
import { UpdateProductDescriptionRequest, UpdateProductDescriptionResponse } from '../typings/pricecomparison_pb';

@Component({
  components:{AtomSpinner}
})
export default class DisplayData extends Vue {

        @State productComparisonData!:any;
        @State isTableDataLoading!:boolean;
        
   
        private search:string = '';
        private searchText:string ='';

        private pagination:any = {};
        private rowsPerPage:number = 100;
        private snack:boolean = false;
        private snackColor:string = '';
        private snackText:string = '';
        private tableData:any = {};
        private rows:any = [];
        private updatedKeywords:string ='';

        private isLoading:boolean = true;

        private height:number = 780;
        private width:number = 2000;

        $refs!: {
          tableBox:HTMLFormElement
        }

        @Watch('searchText')
        onChangeSearch(){
          console.log(this.searchText);
        }

        @Watch("productComparisonData")
        onChangeProductComparisonData(){
            this.rows = [...this.productComparisonData]
            console.log("row",this.rows)
        }

        @Watch("isTableDataLoading")
        onChangeIsTableDataLoading(){
          if(this.isTableDataLoading){
            this.isLoading = true
          }else{
            this.isLoading = false
          }
        }

        mounted(){
          this.rows = [...this.productComparisonData]
          if(this.isTableDataLoading){
            this.isLoading = true
          }else{
            this.isLoading = false
          }
        }

        private columns:any = [
          {
            text: 'Product Code',
            value: 'productcode',
            sortable: false,
            width:'1%',
            align:'center'
          },
          {
            text: 'Description',
            value: 'productdescription',
            sortable: false,
            width:'1%',
            align:'center',
            filter:false
          },
          {
            text: 'Keyword',
            value: 'keywords',
            sortable: false,
            width:'1%',
            align:'center',
            filter:false
          },
          {
            text: 'Cost',
            value: 'costprice',
            width:'1%',
            align:'center',
            filter:false
            
          },
          {
            text: 'Sale',
            value: 'salesprice',
            width:'1%',
            align:'center',
            filter:false
          },
          {
            value: 'competitorpricesList',
            sortable: false,
            width:'1%',
            align:'center'
          },
        ];
      
      searchTable(){
        if(this.searchText !== null){
          this.search = this.searchText.trim();
        }
      }

      isLowestPrice(competitorpriceList:string[],salesprice:number):boolean{
        let reg = /AU\$-?\d+(.\d+)?/g;
        let priceList = competitorpriceList.map( item=>{
            return parseFloat(item.match(reg)![0].substring(3))
        })
        if( salesprice < Math.min(...priceList)){
          return true
        }else{
          return false
        }
      }

      isCompetitorPriceLow(competitorprice:string, salesprice:number):boolean{
        let reg = /AU\$-?\d+(.\d+)?/g;
        let price:number  = parseFloat(competitorprice.match(reg)![0].substring(3))
        if(salesprice > price){
          return true
        }else{
          return false
        }
        return false
      }

      isPriceLow(price:number, salesprice:number):boolean{
        if( price > salesprice ){
          return true
        }else{
          return false
        }
        return false
      }



      isOddRow(index:number){
        if(index%2 == 0){
          return false
        }else{
          return true
        }
      }

      max100chars(v:any):boolean|string{
        if(v.length <= 100){
          return true
        }else{
          return "Input too long!"
        }
      }
     
      save (productcode:string,keyword:string) {
        this.snack = true
        this.snackColor = 'success'
        this.snackText = 'Data saved'
        this.saveUpdatedKeywords(productcode,keyword);
      };

      saveUpdatedKeywords(productcode:string,keyword:string){
        let request = new UpdateProductDescriptionRequest();
        request.setProductcode(productcode);
        request.setUpdateddescription(keyword);

        try {
          grpc.unary(PriceComparisonService.UpdateProductDescription,{
          request:request,
          host:"http://localhost:8080",
          onEnd: res=>{
            const {status,message} = res;
            if(status === grpc.Code.OK && message){
               console.log("updated message",message.toObject())
            }
          }
        })
        } catch (error) {
          // this.cancel()
        }
      }

      cancel () {
        this.snack = true
        this.snackColor = 'error'
        this.snackText = 'Canceled'
      };
}
</script>
<style lang="scss">
.lowprice-table {
  background-color:red !important;
  color:#FFFFFF !important;
}

.warn-table{
  background-color:yellow !important;
  color:red !important;
}

.lowest-table {
  background-color:rgb(0, 174, 255) !important;
  color:#FFFFFF !important;
}

.normal-table{
  background-color:palegreen;
  color:#000000;
}

.normal-even-table{
  background-color:#FFFFFF;
  color:#000000;
}

.table-description{
  height:80px;
  padding:10px;
  line-height:1.2;
  
}

.table-cell{
  table-layout:fixed;
  width:100px;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;

  &:hover{
    text-overflow: initial;
    white-space: normal;
  }
}

.keyword-cell{
  table-layout:fixed;
  width:45px;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
}

table.v-table tbody td:not(:first-child){
    padding: 0px !important;
}

table.v-table tbody td, table.v-table tbody th {
    height: 45px !important;
}

.v-table__overflow{
  overflow-x:visible !important;
  overflow-y:visible !important;
}

.v-small-dialog a>*{
  width:90px !important;
}

.searchbar-position{
    position: fixed;
    right: 3%;
    display: flex;
    background-color: #ffffff;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #000000;
}

.search-btn{
  width:20px;
}

.spinner-position{
  position: absolute;
  left: 48%;
  top: 45%;
}
</style>
