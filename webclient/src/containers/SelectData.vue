<template>
  <div style="width:100%">
    <div v-show="isLoading">
      Loading
    </div>
    <select-categories :changeCategoryList.sync="categoryList"></select-categories>
    <select-competitors
                :changeSelectedTierOneList.sync="selectedTierOneList" 
                :changeSelectedTierTwoList.sync="selectedTierTwoList">
    </select-competitors>
    <div class="submit-block">
      <v-alert :value="alertCategory" type="error">Categories section can not be empty</v-alert>
      <v-alert :value="alertCompetitor" type="error">Competitors section can not be empty</v-alert>
      <div class="btn-container">
        <v-card-actions class="justify-center">
            <v-btn outline large @click="submitLoadData" color="indigo">Load Data</v-btn>
            <!-- <v-btn outline large @click="submitLoadFilteredData" color="indigo" v-show="isShow">Load Filtered Data</v-btn> -->
        </v-card-actions>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import SelectCategories from '@/components/SelectData/SelectCategories.vue';
import SelectCompetitors from '@/components/SelectData/SelectCompetitors.vue';

@Component({
  components:{
    SelectCategories,
    SelectCompetitors
    }
})
export default class SelectData extends Vue{
  @State competitors!: StoreState.competitors[];
  @Action getProductComparison!:(val:{categoryTypes:number[],competitorsTypes:number[]})=>void;

  get companyList():any[]{
    return this.selectedTierOneList.concat(this.selectedTierTwoList)
  }

  private isShow = false;

  private isLoading:boolean = false;
  private alertCategory:boolean = false;
  private alertCompetitor:boolean = false;

  private categoryList:any[] = [];
  private selectedTierOneList:string[] = [];
  private selectedTierTwoList:string[] = [];

  submitLoadData():void {
      let submit:{categoryTypes:number[],competitorsTypes:number[]} = {
        categoryTypes: this.categoryList.map(item=>item.id),
        competitorsTypes: this.companyList.map(item=>item.id)
        }
      this.submitValidation(submit);
      if (this.submitValidation(submit)) {
        console.log("submit",submit)
          this.getProductComparison(submit)
          this.$router.push("/display-data")
      }
    }
  // submitLoadFilteredData():void {
  //       let submit:{categoryTypes:number[],competitorsTypes:number[]} = {
  //       categoryTypes: this.categoryList.map(item=>item.id),
  //       competitorsTypes: this.companyList.map(item=>item.id)
  //       }
  //     this.submitValidation(submit);
  //     if (this.submitValidation(submit)) {
  //         this.getFilteredProductComparison(submit)
  //         this.$router.push("/display-data")
  //     }
      
  //   }
  submitValidation(submit:{categoryTypes:number[],competitorsTypes:number[]}):boolean {
      this.alertCategory = false;
      this.alertCompetitor = false;
      if (submit.categoryTypes.length === 0) {
        this.alertCategory = true;
      }
      if (submit.competitorsTypes.length === 0) {
        this.alertCompetitor = true;
      }
      if (this.alertCompetitor || this.alertCategory) {
        return false
      } else {
        return true
      }
    }
}

</script>

<style scoped>

  .submit-block {
    margin-top: 60px;
    position: relative;
  }
  .btn-container {
    display: flex;
    justify-content: center;
    
  }

</style>
