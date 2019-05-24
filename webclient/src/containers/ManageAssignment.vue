<template>
    <v-card style="width:100%;" v-if="stateCategories">
        <v-card-text>
            <v-container fluid>
                <v-dialog v-model="saveEditDialog" persistent max-width="600px">
                    <v-card>
                        <v-card-text grid-list-md>
                            <v-container style="padding:0 18px">
                                <v-card-title>
                                    <span class="headline" style="text-align:center">Saving all changes?</span>
                                </v-card-title>
                                 <v-card-actions class="justify-center">
                                    <v-btn outline @click="saveEditChange(true)">
                                        Confirm
                                    </v-btn>
                                    <v-btn outline @click="saveEditChange(false)">
                                        Close
                                    </v-btn>
                                </v-card-actions>
                            </v-container>
                        </v-card-text>
                    </v-card>
                </v-dialog>
                <div class="icon-container">
                    <v-icon large v-show="edit" @click="saveEdit">save</v-icon>
                    <v-icon large @click="enableEdit" style="margin-left:6px;">settings</v-icon>
                </div>
                <v-layout row wrap xs12>
                    <v-flex sm12 v-for="(item,index) in categoriesList" :key="index" style="margin-bottom:10px;">
                        <!-- <v-divider v-if="index !== 0"></v-divider> -->
                        <!-- <v-card-title primary-title style="font-size:20px;">{{item.name}}</v-card-title> -->
                        <v-layout row wrap>
                            <v-flex v-for="(item,index) in item.data" :key="`${index}$`" xs12 sm6 md6>
                                <v-list-tile v-show="!edit" style="height:=40px">
                                    <v-list-tile-content style="font-size:14px;height:40px">{{item.name}}</v-list-tile-content>
                                </v-list-tile>
                            </v-flex>
                        </v-layout>
                        <v-layout row wrap>
                            <v-flex v-for="(item,index) in item.data" :key="`${index}%`" xs12 sm6 md6>   
                                <v-list-tile v-show="edit" style="height:40px">
                                    <v-layout row wrap>
                                        <v-flex xs6>
                                            <v-list-tile-content style="font-size:14px;height:40px">{{item.name}}</v-list-tile-content>
                                        </v-flex>
                                        <v-flex xs6>
                                            <v-select 
                                                v-model="item.category"
                                                :items="selectItems"
                                                style="margin:0px;padding:0px;"
                                            ></v-select>
                                        </v-flex>
                                    </v-layout>
                                </v-list-tile>
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
import { Component, Watch } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import draggable from 'vuedraggable';

import {grpc} from "@improbable-eng/grpc-web";

import { PriceComparisonService } from '../typings/pricecomparison_pb_service';
import { UpdateCategoryStateRequest, StateCategory } from '../typings/pricecomparison_pb';

@Component({
    components:{draggable}
})
export default class ManageCompetitor extends Vue{
    @State stateCategories!: StoreState.categories[];
    @State host!:string;
    @Action getCategories!:()=>void;
    @Action getNewCategories!:()=>void;

    private categoriesModelList!:any;

    private saveEditDialog:boolean = false;

    private edit:boolean = false;
    private valid:boolean = false;

    private selectItems:string[] = ["0. Daily","1. Monday,Thursday","2. Tuesday,Friday","3.Wednesday,Saturday","4.Unassigned"]

    private updatedCategories:Array<StateCategory> = [];

    get categoriesList(){
        
        return this.stateCategories
    }

    enableEdit():void{
        this.edit = true;
    }

    saveEdit():void{
        this.saveEditDialog = true;
    }

    updateCategory(){
        let request = this.updateCategoryRequest();
        try{
            grpc.unary(PriceComparisonService.UpdateCategoryState,{
            request:request,
            host:this.host,
            onEnd: res=>{
                const { message, status } = res;
                if(status === grpc.Code.OK){
                    console.log("updated categories");
                    this.getNewCategories();
                }else{
                    console.log("fail to update")
                }
            }
        })
        }catch(e){
            console.log(e);
        }
    }

    updateCategoryRequest():UpdateCategoryStateRequest{
        let request = new UpdateCategoryStateRequest();

        this.updatedCategoryItems("Daily","0. Daily")
        this.updatedCategoryItems("Monday, Thursday","1. Monday,Thursday")
        this.updatedCategoryItems("Tuesday,Friday","2. Tuesday,Friday")
        this.updatedCategoryItems("Wednesday, Saturday","3.Wednesday,Saturday")
        this.updatedCategoryItems("Unassigned","4.Unassigned")
        
        request.setUpdatedcategoriesList(this.updatedCategories)
        return request;
    }

    updatedCategoryItems(date:string, dbdate:string):void{
        this.categoriesList.forEach( (categories:any)=>{
            if(categories.name === date){
                categories.data.forEach( (category:any)=>{
                    if(category.category !== dbdate){
                        let categoryItem = new StateCategory();
                        categoryItem.setId(category.id);
                        categoryItem.setName(category.name);
                        categoryItem.setCategory(category.category)
                        this.updatedCategories.push(categoryItem);
                    }
                })
            }
        })
    }

    saveEditChange(value:boolean):void{
        if(value){
            this.updateCategory();
            this.edit = false
            this.saveEditDialog = false
        }else{
            this.saveEditDialog = false
        }
    }
}
</script>

<style >
.icon-container{
    display: flex;
    justify-content: flex-end;
    padding:0 24px;
}
</style>