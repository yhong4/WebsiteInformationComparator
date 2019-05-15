<template>
    <v-card style="width:100%">
        <v-card-text>
            <v-container fluid>
                <v-dialog v-model="addEditDialog" persistent max-width="600px">
                    <v-card>
                        <v-card-text grid-list-md>
                            <v-container>
                                <v-card-title style="padding:16px 0">
                                    <span class="headline">Add New Competitor</span>
                                </v-card-title>
                                <v-form ref="form" v-model="valid" lazy-validation>
                                    <v-text-field
                                        v-model="inputCompetitorName"
                                        label="Please input new competitor"
                                        :rules="[inputRules]"
                                        required
                                    ></v-text-field>
                                    <v-select
                                        :items="selectItems"
                                        label="Please select Tier"
                                        outline
                                        v-model="selectedItem"
                                        required
                                    ></v-select>
                                </v-form>
                                <v-card-actions class="justify-center">
                                    <v-btn outline @click="addNewCompetitor" :disabled="!valid">
                                        Confirm
                                    </v-btn>
                                    <v-btn outline @click="addEditDialog = false">
                                        Close
                                    </v-btn>
                                </v-card-actions>
                            </v-container>
                        </v-card-text>
                    </v-card>
                </v-dialog>
                <v-dialog v-model="saveEditDialog" persistent max-width="600px">
                    <v-card>
                        <v-card-text grid-list-md>
                            <v-container style="padding:0 16px">
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
                    <v-icon large v-show="edit" @click="addEdit" style="margin-left:10px;">note_add</v-icon>
                    <v-icon large @click="enableEdit" style="margin-left:6px;">settings</v-icon>
                </div>
                <v-layout row wrap xs12>
                    <v-flex xs12 sm6 >
                            <v-card-title primary-title style="font-size:23px;">Tier 1</v-card-title>
                            <v-divider></v-divider>
                            <v-list-tile v-for="item of competitorTierOneList" :key="`${item.id}%`" style="height:40px;"  v-show="!edit">
                                    <v-list-tile-content style="font-size:14px;height:40px;">{{item.name}}</v-list-tile-content><v-icon color="red" v-show="edit" @click="deleteTierOneEdit(item)">cancel</v-icon>
                                </v-list-tile>
                            <draggable v-model="competitorTierOneList" group="competitors" :handle="!edit" style="margin-right:20px">
                                <v-btn v-for="item of competitorTierOneList" :key="item.id" style="cursor:pointer;width:100%;text-transform:none;height:40px" v-show="edit">
                                    <v-list-tile-content>{{item.name}}</v-list-tile-content><v-icon color="red" v-show="edit" @click="deleteTierOneEdit(item)">cancel</v-icon>
                                </v-btn>
                            </draggable>
                    </v-flex>
                    <v-flex xs12 sm6>
                            <v-card-title primary-title style="font-size:23px;">Tier 2</v-card-title>
                            <v-divider></v-divider>
                            <v-list-tile v-for="item of competitorTierTwoList" :key="`${item.id}%`" class="btn-width" style="height:40px;" v-show="!edit">
                                    <v-list-tile-content style="font-size:14px;height:40px;">{{item.name}}</v-list-tile-content><v-icon color="red" v-show="edit" @click="deleteTierTwoEdit(item)">cancel</v-icon>
                            </v-list-tile>
                            <draggable v-model="competitorTierTwoList" group="competitors" :handle="!edit" style="margin-right:20px">
                                <v-btn v-for="item of competitorTierTwoList" :key="item.id" style="cursor:pointer;width:100%;text-transform:none;height:40px;" v-show="edit">
                                    <v-list-tile-content>{{item.name}}</v-list-tile-content><v-icon color="red" v-show="edit" @click="deleteTierTwoEdit(item)">cancel</v-icon>
                                </v-btn>
                            </draggable>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import { State, Action, Mutation } from 'vuex-class';
import draggable from 'vuedraggable';

import {grpc} from "@improbable-eng/grpc-web";
import { PriceComparisonService, PriceComparisonServiceClient } from '../typings/pricecomparison_pb_service';
import { UpdateCompetitorTierRequest, UpdatedCompetitor, UpdateCategoryStateRequest, AddCompetitorRequest, DeleteCompetitorRequest } from '../typings/pricecomparison_pb';

@Component({
    components:{draggable}
})
export default class ManageCompetitor extends Vue{
    @State competitors!:StoreState.competitors[];
    @State tierOneCompetitors!:any[];
    @State tierTwoCompetitors!:any[];

    @State host!:string;

    @Action getCompetitors!:()=>void;

    private competitorTierOneList:any[] = [];
    private competitorTierTwoList:any[] = [];

    private inputCompetitorName:string = "";
    private selectedItem:string = "Tier 1";
    private selectItems:string[] = ["Tier 1","Tier 2"]
    private addEditDialog:boolean = false;
    private saveEditDialog:boolean = false;

    private edit:boolean = false;
    private valid:boolean = false;

    private competitorCount!:number;
    
    @Watch('valid')
    onChangeValid(){
        if(this.inputCompetitorName){
            this.valid = true
        }else{
            this.valid = false
        }
    }

    @Watch('competitors')
    onChangeCompetitors(){
        this.initialTierTable()
    }


    inputRules(value:string){
        if(!value){
            return "Name is required"
        }else{
            return true
        }
    }

    enableEdit():void{
        this.edit = true;
    }

    saveEdit():void{
        this.saveEditDialog = true;
    }

    saveEditChange(value:boolean):void{
        if(value){
            this.UpdateCompetitorTier();
            this.edit = false
            this.saveEditDialog = false
        }else{
            this.saveEditDialog = false
        }
    }

    updateCompetitorTierRequest():UpdateCompetitorTierRequest{
        let updatedCompetitorList:Array<UpdatedCompetitor> = [];
        
        let request = new UpdateCompetitorTierRequest();

        this.competitorTierOneList.forEach( item => {
            if(item.tier === "T2"){
                let updatedCompetitorItem = new UpdatedCompetitor();
                updatedCompetitorItem.setCompetitorid(item.id);
                updatedCompetitorItem.setUpdatedtier("T1");
                updatedCompetitorList.push(updatedCompetitorItem)
            }
        })
        this.competitorTierTwoList.forEach( item => {
            if(item.tier == "T1"){
                let updatedCompetitorItem = new UpdatedCompetitor();
                updatedCompetitorItem.setCompetitorid(item.id);
                updatedCompetitorItem.setUpdatedtier("T2");
                updatedCompetitorList.push(updatedCompetitorItem)
            }
        })
        request.setUpdatedcompetitorList(updatedCompetitorList)
        return request
    }

    UpdateCompetitorTier(){
        let request = this.updateCompetitorTierRequest()
        try{
            grpc.unary(PriceComparisonService.UpdateCompetitorTier,{
            request:request,
            host:this.host,
            onEnd: res => {
                const {status, message } = res;
                if(status === grpc.Code.OK && message){
                    console.log(message.toObject())
                }
                this.getCompetitors();
            }
        })
        }catch(e){
            console.log(e)
        }
    }

    addEdit():void{
        this.addEditDialog = true;
    }

    addNewCompetitor():void{
        this.addEditDialog = false;
        let newCompetitor = {
            id: this.getNewCompetitorId(),
            name: this.inputCompetitorName,
            tier: this.selectedItem
        }
        if(this.selectedItem === "Tier 1"){
            this.competitorTierOneList.push(newCompetitor)
        }else{
            this.competitorTierTwoList.push(newCompetitor)
        }
        this.AddCompetitorService()
    }

    addNewCompetitorRequest():AddCompetitorRequest{
        let newCompetitor = new AddCompetitorRequest();
        newCompetitor.setName(this.inputCompetitorName);
        if(this.selectedItem === "Tier 1"){
            newCompetitor.setTier("T1");
        }else{
            newCompetitor.setTier("T2");
        }
        return newCompetitor;
    }

    AddCompetitorService(){
        let request = this.addNewCompetitorRequest();
        console.log("request add",request)
        try{
            grpc.unary(PriceComparisonService.AddCompetitor,{
            request:request,
            host:this.host,
            onEnd: res => {
                const { message, status } = res;
                if( status === grpc.Code.OK && message){
                    console.log(message.toObject())
                }
                this.getCompetitors();
            }
        })
        }catch(e){
            return 0
        }

        return 1
    }
   
    deleteTierOneEdit(item:any):void{
        this.competitorTierOneList.splice(this.competitorTierOneList.indexOf(item),1)
        this.deleteCompetitorService(item);
    }

    deleteTierTwoEdit(item:any):void{
        this.competitorTierTwoList.splice(this.competitorTierTwoList.indexOf(item),1)
        this.deleteCompetitorService(item);
    }

    deleteCompetitorRequest(item:{id:number,name:string,tier:string}):DeleteCompetitorRequest{
        let request = new DeleteCompetitorRequest()
        request.setCompetitorid(item.id)
        return request;
    }

    deleteCompetitorService(item:{id:number,name:string,tier:string}){
        let request = this.deleteCompetitorRequest(item);
        try{
            grpc.unary(PriceComparisonService.DeleteCompetitor,{
                request:request,
                host:this.host,
                onEnd: res=>{
                    const {message, status} = res;
                    if(status === grpc.Code.OK && message){
                        console.log(message.toObject())
                    }else{
                        console.log("fail to delete data")
                    }
                }
            })
        }catch(e){
            console.log("error:",e)
        }
    }

    initialTierTable():void {
        this.competitorTierOneList = [...this.tierOneCompetitors]
        this.competitorTierTwoList = [...this.tierTwoCompetitors]
    }

    getNewCompetitorId():number{
        return this.competitorTierOneList.length + this.competitorTierTwoList.length + 999
    }

    mounted(){
        this.initialTierTable()
    }

}
</script>

<style lang="scss">
.icon-container{
    display: flex;
    justify-content: flex-end;
    padding:0 24px;
}
</style>