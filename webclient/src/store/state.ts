import stateType from './type';

export interface IState {
    categories:StoreState.categories[],
    competitors:StoreState.competitors[];
}


export let GlobalState:any = {
    categories:[],
    newCategories:[],
    stateCategories:[],
    marginCategories:{},
    competitors:[],
    tierOneCompetitors:[],
    tierTwoCompetitors:[],
    
    dailyList:[],
    mondayList:[],
    thuesdayList:[],
    wednesdayList:[],
    unassginedList:[],

    statedailyList:[],
    statemondayList:[],
    statethuesdayList:[],
    statewednesdayList:[],
    stateunassginedList:[],




    productComparisonData:[],
    isTableDataLoading: false,

    host:"http://localhost:8080"
}



