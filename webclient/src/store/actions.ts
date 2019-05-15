import stateType from './type'
import { ActionTree } from 'vuex'
import {grpc} from "@improbable-eng/grpc-web";

import { PriceComparisonService } from '../typings/pricecomparison_pb_service';
import { GetAllCompetitorTypesRequest, 
         GetAllCategoryTypesRequest, 
         GetProductComparisonRequest, 
         AllStateCategoryTypesRequest, 
         GetCategoryMarginRequest,
         GetAllNewCategoryTypesRequest
    } from '../typings/pricecomparison_pb';

 
const host:string = "http://localhost:8080";

const actions: ActionTree<any, any> = {
    initData({dispatch}){
        dispatch('getCategories')
        dispatch('getCompetitors')
        dispatch('getStateCategories')
        dispatch('getCategoryMargin')
        dispatch('getNewCategories')
        console.log("init data.....")
    },
    getCategories({commit, state}){
      let request = new GetAllCategoryTypesRequest();
      try{
        grpc.unary(PriceComparisonService.GetAllProductCategories,{
          request:request,
          host:host,
          onEnd: res=>{
            const {status,message} = res;
            if(status === grpc.Code.OK && message){
              console.log( message.toObject())
              commit(stateType.SET_CATEGORIES, message.toObject());
            }
          }
        })
      }catch(e){
        console.log(e);
      }
    },

    getNewCategories({commit, state}){
      let request = new GetAllNewCategoryTypesRequest();
      try{
        grpc.unary(PriceComparisonService.GetAllNewCategoryTypes, {
          request:request,
          host:host,
          onEnd: res => {
              const {message, status} = res;
              if( status === grpc.Code.OK && message){
                  commit(stateType.SET_NEW_CATEGORIES, message.toObject())
              }else{
                console.log("fetch data fail")
              }
          }
        })
      }catch(e){
        console.log(e);
      }
    },

    getStateCategories({commit, state}){
      let request = new AllStateCategoryTypesRequest();
      try{
        grpc.unary(PriceComparisonService.GetAllStateProductCategories,{
          request:request,
          host:host,
          onEnd: res=>{
            const {status,message} = res;
            if(status === grpc.Code.OK && message){
              console.log( message.toObject())
              commit(stateType.SET_STATE_CATEGORIES, message.toObject());
            }
          }
        })
      }catch(e){
        console.log(e)
      }
    },

    getCategoryMargin({commit, state}){
      let request = new GetCategoryMarginRequest();
      try{
        grpc.unary(PriceComparisonService.GetCategoryMargin,{
         request:request,
         host:host,
         onEnd: res=>{
           const {status,message} = res;
           if(status === grpc.Code.OK && message){
             console.log( message.toObject())
             commit(stateType.SET_MARGIN_CATEGORIES, message.toObject());
           }
         }
       })
      }catch(e){
        console.log(e)
      }
    },

    getCompetitors({commit,state}){
        let request = new GetAllCompetitorTypesRequest();
        try{
          grpc.unary(PriceComparisonService.GetAllCompetitors,{
            request:request,
            host:host,
            onEnd: res=>{
              const { status,message } = res;
              if(status === grpc.Code.OK && message){
                console.log("com",message.toObject())
                commit(stateType.SET_COMPETITORS,message.toObject());
              }
            }
          })
        }catch(e){
          console.log(e)
        }
    },

    getProductComparison({commit,state}, request:{categoryTypes:number[],competitorsTypes:number[]}){
      state.isTableDataLoading = false;
      let queryRequest = new GetProductComparisonRequest()
      queryRequest.setCategorytypesList(request.categoryTypes)
      queryRequest.setCompetitorstypesList(request.competitorsTypes)
      try{
        grpc.unary(PriceComparisonService.GetLoadProductComparisonInfomation,{
          request:queryRequest,
          host:host,
          onEnd:res=>{
            const { status,message } = res;
            if(status ==grpc.Code.OK && message){
              console.log("resp,",message.toObject())
              commit(stateType.SET_PRODUCTCOMPARISON, message.toObject());
              state.isTableDataLoading = true;
            }else{
              commit(stateType.SET_PRODUCTCOMPARISON, {});
              state.isTableDataLoading = true;
            }
          }
        })
      }catch(e){
        console.log(e)
      }
    },

    getFilteredProductComparison({commit,state}, request:{categoryTypes:number[],competitorsTypes:number[]}){
      state.isTableDataLoading = false;
      let queryRequest = new GetProductComparisonRequest()
      queryRequest.setCategorytypesList(request.categoryTypes)
      queryRequest.setCompetitorstypesList(request.competitorsTypes)
      try{
        grpc.unary(PriceComparisonService.GetLoadProductComparisonInfomation,{
          request:queryRequest,
          host:host,
          onEnd:res=>{
            const { status,message } = res;
            if(status ==grpc.Code.OK && message){
              commit(stateType.SET_PRODUCTCOMPARISON, message.toObject());
              state.isTableDataLoading = true;
            }else{
              commit(stateType.SET_PRODUCTCOMPARISON, {});
              state.isTableDataLoading = true;
            }
          }
        })
      }catch(e){
        console.log(e)
      }
    },
}

export default actions;