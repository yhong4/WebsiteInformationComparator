<template>
<v-card>
  <v-card-text>
    <v-container fluid>
      <v-card-title primary-title style="font-size:23px;">Select Categories</v-card-title>
      <v-layout wrap>
        <v-btn flat color="#1976d2" @click="selectAllCategory" style="font-weight:600">Select All</v-btn>
        <v-btn flat color="#1976d2" @click="resetAllCategory" style="font-weight:600">Reset</v-btn>
      </v-layout>
      <v-divider></v-divider>
      <v-layout row wrap>
        <v-flex xs12 sm12 v-for="(item,index) in categoriesList" :key="getCategoryKey(index)">
           <v-divider v-if="index !== 0"></v-divider>
           <v-card-title primary-title style="font-size:20px;margin-bottom:10px; color:#000000">{{item.type}}</v-card-title>
           <v-layout wrap style="padding:0 14px;">
             <v-flex v-for="(category, index_data) in item.dataList" :key="index_data" xs12 sm6 md4 lg3>
               <v-checkbox v-model="categoryList" :value="category" :label="category.name" style="margin:0px;padding:0px;">
               </v-checkbox>
             </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card-text>
</v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Watch, Prop } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import { StateCategory } from '../../typings/pricecomparison_pb';

@Component
export default class SelectCategories extends Vue{
    @State newCategories!:any;
    @Action getStateCategories!:()=>void;

    @Prop()
    changeCategoryList!:string[];

    private categoryList:string[] = [];

    get categoriesList(){
      console.log("111",this.newCategories)
      return this.newCategories;
    }

    @Watch("categoryList")
    onChangeCategoryListChanged(){
        this.$emit("update:changeCategoryList",this.categoryList)
    }

    getCategoryKey(index:number):string {
      return "category" + index;
    }

    resetAllCategory():void {
      if ( this.categoryList.length !== 0) {
        this.categoryList = [];
      }
    }
    selectAllCategory():void {
      this.categoryList = [];
      for (let obj of this.categoriesList) {
        for (let value of obj.dataList) {
          this.categoryList.push(value)
        }
      }
    }

    mounted(){
        this.resetAllCategory();
    }

}
</script>
<style lang="scss">
.theme--light.v-label{
  color:#000000 !important;
  font-size:14px;
}

.theme--light.v-messages{
  display: none;
}
</style>

