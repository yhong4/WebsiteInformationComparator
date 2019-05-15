import stateType from './type'
import {IState} from './state'
import { MutationTree } from 'vuex'
import Vue from 'vue';

const mutations:MutationTree<any> = {
    [stateType.SET_NEW_CATEGORIES](state:any, data:any):void{
        state.newCategories = [];
        state.newCategories = Object.assign([], data.categoryList);
        console.log("new",state.newCategories);
    },

    [stateType.SET_CATEGORIES](state:any, data:any):void {

        state.categories = [];
        state.dailyList = [];
        state.mondayList = [];
        state.wednesdayList = [];
        state.unassginedList = [];
        
        data.categorydailyList.forEach( (item:any) => {
            item.category = "0. Daily"
            state.dailyList.push(item)
        });
        data.categorymondayandthursdayList.forEach( (item:any) => {
            item.category = "1. Monday,Thursday"
            state.mondayList.push(item)
        });
        data.categorytuesdayandfridayList.forEach( (item:any) => {
            item.category = "2. Tuesday,Friday"
            state.thuesdayList.push(item)
        });
        data.categorywednesdayandsaturdayList.forEach( (item:any) => {
            item.category = "3.Wednesday,Saturday"
            state.wednesdayList.push(item)
        });
        data.categoryunassignedList.forEach( (item:any) => {
            item.category = "4.Unassigned"
            state.unassginedList.push(item)
        });
        state.categories = [
            {
                name:"Daily",
                data:state.dailyList
            },
            {
                name:"Monday, Thursday",
                data:state.mondayList
            },
            {
                name:"Tuesday,Friday",
                data:state.thuesdayList
            },
            {
                name:"Wednesday, Saturday",
                data:state.wednesdayList
            },
            {
                name:"Unassigned",
                data:state.unassginedList
            }
        ]
    },

    [stateType.SET_STATE_CATEGORIES](state:any, data:any):void {
        
        console.log("state.stateCategories",state.stateCategories)
        state.stateCategories = [];
        state.statedailyList = [];
        state.statemondayList = [];
        state.statewednesdayList = [];
        state.stateunassginedList = [];
        data.categorydailyList.forEach( (item:any) => {
            item.category = "0. Daily"
            state.statedailyList.push(item)
        });
        data.categorymondayandthursdayList.forEach( (item:any) => {
            item.category = "1. Monday,Thursday"
            state.statemondayList.push(item)
        });
        data.categorytuesdayandfridayList.forEach( (item:any) => {
            item.category = "2. Tuesday,Friday"
            state.statethuesdayList.push(item)
        });
        data.categorywednesdayandsaturdayList.forEach( (item:any) => {
            item.category = "3.Wednesday,Saturday"
            state.statewednesdayList.push(item)
        });
        data.categoryunassignedList.forEach( (item:any) => {
            item.category = "4.Unassigned"
            state.stateunassginedList.push(item)
        });
      
        state.stateCategories = [
            {
                name:"Daily",
                data:state.statedailyList
            },
            {
                name:"Monday, Thursday",
                data:state.statemondayList
            },
            {
                name:"Tuesday,Friday",
                data:state.statethuesdayList
            },
            {
                name:"Wednesday, Saturday",
                data:state.statewednesdayList
            },
            {
                name:"Unassigned",
                data:state.stateunassginedList
            }
        ]
    },

    [stateType.SET_MARGIN_CATEGORIES](state:any, data:any):void{
        let margins = Object.assign([],data.categorymarginsList);
        state.marginCategories = {};
        for(let item of margins){
            let margin = {
                end: item.margin.end,
                start: item.margin.start,
                target: parseFloat(item.margin.target).toFixed(2)
            }
            let marginItem = {
                id:item.id,
                margin: margin
            }
            if(!Object.keys(state.marginCategories).includes(item.name)){
                Vue.set(state.marginCategories,item.name,[marginItem])
            }else{
                let marginList = state.marginCategories[item.name]
                marginList.push(marginItem)
                Vue.set(state.marginCategories,item.name,marginList)
            }
        }
    },

    [stateType.SET_COMPETITORS](state:any, data:any):void {
        state.competitors = data;
        state.tierOneCompetitors = data.competitorstieroneList
        state.tierTwoCompetitors = data.competitorstiertwoList
    },

    [stateType.SET_COMPETITORSONE](state:any,data:any):void{
        state.tierOneCompetitors = data;
    },
    [stateType.SET_COMPETITORSTWO](state:any,data:any):void{
        state.tierTwoCompetitors = data;
    },
    
    [stateType.ADD_COMPETITORS](state:any, data:{tier:string,competitorName:string}):void {
        if(data.tier === "Tier 1"){
            state.tierOneCompetitors.push(data.competitorName);
        }else{
            state.tierTwoCompetitors.push(data.competitorName);
        }   
    },

    [stateType.SET_PRODUCTCOMPARISON](state:any,data:any):void{
        state.productComparisonData = [];
        let tableData = Object.assign({},data)
        let row:{
             id:string;
             productcode:string;
             productdescription:string;
             costprice:string;
             keywords:string;
             salesprice:string;
             competitorpricesList:string[]
           }
        tableData.productcomparisonList.forEach( (item:any) => {
            let competitorprices:string[] = []
            item.competitorpricesList.forEach( (competitorprice:{name:string,price:number})=>{
                competitorprices.push(`${competitorprice.name} AU$${competitorprice.price.toFixed(2)}`)
            })
            row = {
              id: item.productcode,
              productcode: item.productcode,
              productdescription: item.productdescription,
              keywords: item.keywords,
            //   costprice: `AU$${item.costprice.toFixed(2)}`,
            //   salesprice:`AU$${item.salesprice.toFixed(2)}`,
              costprice: item.costprice.toFixed(2),
              salesprice:item.salesprice.toFixed(2),
              competitorpricesList:competitorprices
            }
            state.productComparisonData.push(row)
        });
    }
}

export default mutations;
