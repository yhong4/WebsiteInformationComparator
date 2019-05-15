<template>
    <v-card style="margin-top:20px;">
    <v-card-text>
        <v-container fluid>
        <v-card-title primary-title style="font-size:23px;">Select Competitors</v-card-title>
        <div>
                <v-btn flat color="#1976d2" @click="selectAllCompany" style="font-weight:600">Select All</v-btn>
                <v-btn flat color="#1976d2" @click="resetAllCompany" style="font-weight:600">Reset</v-btn>
                 <v-btn flat color="#1976d2" @click="selectTierOneCompany" style="font-weight:600">Select All Tier 1</v-btn>
                <v-btn flat color="#1976d2" @click="selectTierTwoCompany" style="font-weight:600">Select All Tier 2</v-btn>
        </div>
        <v-divider></v-divider>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card-title primary-title style="font-size:20px;margin-bottom:10px">Tier 1</v-card-title>
                <v-layout wrap style="padding:0 14px;">
                    <v-flex v-for="(company, index_data) in companyTierOneList" :key="getCompanyKey(index_data,tierOne)" xs12 sm4 md3 lg3>
                    <v-checkbox v-model="selectedTierOneList" :value="company" :label="company.name" style="margin:0px;padding:0px">
                    </v-checkbox>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
            </v-flex>
            <v-flex xs12>
                <v-card-title primary-title style="font-size:20px;margin-bottom:10px">Tier 2</v-card-title>
                <v-layout wrap style="padding:0 14px;">
                    <v-flex v-for="(company, index_data) in companyTierTwoList" :key="getCompanyKey(index_data,tierOne)" xs12 sm4 md3 lg3>
                        <v-checkbox v-model="selectedTierTwoList" :value="company" :label="company.name" style="margin:0px;padding:0px">
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
import SelectCategories from '@/components/SelectData/SelectCategories.vue';

@Component
export default class SelectCompetitors extends Vue{
    @State competitors!:StoreState.competitors[];
    @State tierOneCompetitors!:any[];
    @State tierTwoCompetitors!:any[];

    @Prop()
    changeSelectedTierOneList!:any[];
    changeSelectedTierTwoList!:any[];

    private companyTierOneList:any[] = [];
    private companyTierTwoList:any[] = [];
    private selectedTierOneList:any[] = [];
    private selectedTierTwoList:any[] = [];

    // private competitorsList:StoreState.competitors[] = this.competitors;


    private tierOne:string = "tierOne";
    private tierTwo:string = "tierTwo";

    @Watch('selectedTierOneList')
    onChangeCompanyTierOneListChanged(){
        this.$emit('update:changeSelectedTierOneList',this.selectedTierOneList)
    }

    @Watch('selectedTierTwoList')
    onChangeCompanyTierTwoListChanged(){
        this.$emit('update:changeSelectedTierTwoList',this.selectedTierTwoList)
    }

    @Watch('competitors')
    onChangeCompetitors(){
        this.initialCompanyTierList()
    }

    getCompanyId(company:string):string {
      return "company_" + company;
    }

    getCompanyKey(index:number,tier:string):string {
        return "company" + tier + index;
        }
    resetAllCompany():void {
      this.selectedTierOneList = [];
      this.selectedTierTwoList = [];
    }
    selectAllCompany():void {
        this.selectedTierOneList = [];
        this.selectedTierOneList = this.companyTierOneList;
        this.selectedTierTwoList = [];
        this.selectedTierTwoList = this.companyTierTwoList;
        }
    selectTierOneCompany():void {
        this.selectedTierOneList = [];
        this.selectedTierOneList = this.companyTierOneList;
        }
    selectTierTwoCompany():void {
        this.selectedTierTwoList = [];
        this.selectedTierTwoList = this.companyTierTwoList;
        }
    initialCompanyTierList():void {
        this.companyTierOneList = [...this.tierOneCompetitors]
        this.companyTierTwoList = [...this.tierTwoCompetitors]
    }

    mounted(){
        this.resetAllCompany(); 
        this.initialCompanyTierList();
    }


}
</script>
