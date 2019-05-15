<template>
<div class="overflow-hidden">
        <v-dialog v-model="editMarginDialog" max-width="800px" persistent>
            <v-card>
                <v-card-text grid-list-md>
                    <v-container grid-list-md>
                        <v-card-title style="padding:16px 0">
                            <span class="headline">Edit Rule</span>
                        </v-card-title>
                        <v-card-actions v-for="(marginItem) in editedItem.rule" :key="marginItem.id">
                            <v-layout>
                                <v-list-tile style="display:inline-block;">{{`Price Range: ${marginItem.margin.start}-${marginItem.margin.end}, Target Margin=${marginItem.margin.target*100}%`}}</v-list-tile>
                                <v-icon color="red" @click="deleteCategoryMargin(marginItem)" style="display:flex;align-item:center">cancel</v-icon>
                            </v-layout>
                        </v-card-actions>
                        <v-layout wrap style="margin-top:20px;">
                                <v-flex xs12 sm4>
                                    <v-text-field
                                        v-model="inputRule.start"
                                        label="Please input low price"
                                        :rules="[inputRules,inputRangeRule]"
                                        required
                                    ></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm4>
                                    <v-text-field
                                        v-model="inputRule.end"
                                        label="Please input high price"
                                        :rules="[inputRules,inputRangeRule]"
                                        required
                                    ></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm4>
                                    <v-text-field
                                        v-model="inputRule.target"
                                        label="Target margin between 0 and 1"
                                        :rules="[inputMarginRules,inputRules]"
                                        required
                                    ></v-text-field>
                                </v-flex>
                        </v-layout>
                        <v-card-actions class="justify-center">
                            <v-btn outline @click="addEdit" :disabled="!valid">
                                Add
                            </v-btn>
                            <v-btn outline @click="closeEdit">
                                Close
                            </v-btn>
                        </v-card-actions>
                    </v-container>
                </v-card-text>
            </v-card>
        </v-dialog>
    <v-card  style="width:100%">
    <v-data-table
      :headers="columns"
      :items="rows"
      :search="search"
      :pagination.sync="pagination"
      :rows-per-page-items="[15, 30, 50, 100]"
    >
    <template v-slot:items="props">
        <td style="height:80px;padding:10px" >{{props.item.name}}</td>
        <td>
             <v-icon small @click="editItem(props.item)">edit</v-icon>
        </td>
        <td style="padding:10px" v-for="(item, index) in props.item.rule" :key="index" class="text-xs-center">
            <div>{{`Price Range: ${item.margin.start}-${item.margin.end}, Target Margin=${item.margin.target*100}%`}}</div>
        </td>
    </template>
    </v-data-table>
    </v-card>
     <!-- <v-snackbar v-model="snack" :timeout="3000" :color="snackColor">
      {{ snackText }}
      <v-btn flat @click="snack = false">Close</v-btn>
    </v-snackbar> -->
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { grpc } from "@improbable-eng/grpc-web"
import { Component, Watch } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';

import { PriceComparisonService, PriceComparisonServiceClient } from '../typings/pricecomparison_pb_service';
import { AddCategoryMarginRequest, DeleteCategoryMarginRequest } from '../typings/pricecomparison_pb';

@Component({})
export default class DisplayData extends Vue {

        @State marginCategories!: any;
        @State host!:string;

        private search:string = '';
        private pagination:any = {};
        private rowsPerPage:number = 50;

        private editMarginDialog:boolean = false;

        private editIndex:number = -1;
        private editedItem:{name:string,margin:Array<{target:number,start:number,end:number}>} = {
            name:"",
            margin:[]
        }

        private inputRule:{ start:number,end:number,target:number|string} = {
            start:0,
            end:9999,
            target:0
        }

        private defaultInputRule:{ start:number,end:number,target:number|string} = {
            start:0,
            end:9999,
            target:0
        }

        private defaultItem:any={}

        private snack:boolean = false;
        private snackColor:string = '';
        private snackText:string = '';

        private maxIndex:number = -1;

        private columns:Array<Table.tableHeader> = [
          {
            text: 'Category',
            value: 'category',
            sortable: false,
          },
          {
            text:'Edit',
            value:'edit',
            sortable:false,
          },
          {
            text: 'Rule',
            value: 'rule',
            sortable: false,
          }
        ];
        private rows:any = [];

        private valid:boolean = false;

        @Watch("marginCategories")
        onChangeMarginCategories(){
            this.initialTable()
        }
        
        @Watch("inputRule.target")
        onChangeValid(){
            this.checkFormValid()
        }
        @Watch("inputRule.start")
        onChangeValidStart(){
            this.checkFormValid()
        }
        @Watch("inputRule.end")
        onChangeValidEnd(){
            this.checkFormValid()
        }

        checkFormValid(){
             let target;
            if(typeof(this.inputRule.target) === "string"){
                target = parseInt(this.inputRule.target);
            }else{
                target = this.inputRule.target
            }
            if( this.inputRule.start >= 0 &&
                this.inputRule.end &&
                this.inputRule.end > this.inputRule.start &&
                this.inputRule.target > 0 && 
                this.inputRule.target < 1
            ){
                this.valid = true
            }else{
                this.valid = false
            }
        }

        initialTable(){
            let rowsTable = [];
            if(this.marginCategories){
                for(let [key,value] of Object.entries(this.marginCategories)){
                    let rowItem:{name:any,rule:any} = {
                            name:key,
                            rule:value
                        }
                    rowsTable.push(rowItem)
                }
            }
            this.rows = Object.assign([],rowsTable);
        }

        inputRules(value:number){
            return !!value || 'Required.'
        }

        inputRangeRule(value:number){
            return (value >= 0 && this.inputRule.start < this.inputRule.end) || 'Value is invalid'
        }

        inputMarginRules(value:number){
            return (value <= 1 && value > 0) || 'Value is invalid.'
        }

        editItem(item:any){
            this.inputRule = Object.assign({},this.defaultInputRule)
            this.editIndex = this.rows.indexOf(item)
            this.editedItem = Object.assign({},item)
            this.editMarginDialog = true
        }

        addEdit(){
            if(this.maxIndex === -1){
                this.maxIndex = this.getCurrentMaxIndex();
            }else{
                this.maxIndex += 1;
            }
            let selectedItem = this.rows[this.editIndex]
            selectedItem.rule.push({
                id:this.maxIndex,
                margin:this.inputRule
                })
            Object.assign(this.rows[this.editIndex],selectedItem)
            console.log("this.rows[this.editIndex]",this.rows[this.editIndex])

            this.AddCategoryMargin(selectedItem)
        }

        getCurrentMaxIndex(){
            console.log("cuurent index",this.marginCategories)
            let indexList:any[] = [];
            if(this.marginCategories){
                for(let [key,value] of Object.entries(this.marginCategories)){
                            for(let [key,item] of Object.entries(value)){
                                indexList.push(item.id);
                            }
                    }
                }
            
            indexList.sort((firstIndex:number, secondIndex:number)=>{
                return firstIndex - secondIndex
            })
            return indexList[indexList.length - 1] + 1
            }
            

        AddCategoryMargin(selectedItem:any){
            let request = new AddCategoryMarginRequest();
            request.setId(this.maxIndex)
            request.setCategory(selectedItem.name);
            request.setPricerangestart(this.inputRule.start);
            request.setPricerangeend(this.inputRule.end);
            if(typeof(this.inputRule.target) === "string"){
                request.setMargin(parseFloat(this.inputRule.target));
            }else{
                request.setMargin(this.inputRule.target);
            }

            try{
                grpc.unary(PriceComparisonService.AddCategoryMargin, {
                    request:request,
                    host:this.host,
                    onEnd: res => {
                        const { message, status } = res;
                        if( status === grpc.Code.OK && message){
                            console.log(message.toObject());
                            this.editMarginDialog = false;
                        }
                    }, 
                })
            }catch(e){
                console.log(e);
            }
        }

        closeEdit(){
            this.editMarginDialog = false;
            this.editedItem = Object.assign({},this.defaultItem);
            this.editIndex = -1;
        }

        deleteCategoryMargin(marginItem:any){
            let id = marginItem.id;
            let request = new DeleteCategoryMarginRequest();
            request.setId(id);
            try{
                grpc.unary(PriceComparisonService.DeleteCategoryMargin,{
                    request:request,
                    host:this.host,
                    onEnd: res => {
                        const { message, status } = res;
                        if( status === grpc.Code.OK && message){
                            console.log( message.toObject())
                            this.deleteRule(marginItem);
                        }
                    }
                })
            }catch(e){
                console.log("error,", e);
            }
        }

        deleteRule(marginItem:any){
             let selectedItem = this.rows[this.editIndex];
             let index = selectedItem.rule.indexOf(marginItem);
             selectedItem.rule.splice(index,1);
             Object.assign(this.rows[this.editIndex],selectedItem);
        }

    mounted(){
        
        this.initialTable()
    }
}
</script>

