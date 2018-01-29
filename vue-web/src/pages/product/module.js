import axios from 'axios';
export default {
	namespaced: true,
	state:{
		listData:[],
		totalNum:'',
		pageNo:1,
		pageSize:4,
		class_id:'',
		keyWords:''
	},
	mutations:{
		setProductList(state,payload){
			state.listData = payload.data.result;
			state.totalNum = payload.data.total_num;
		},
		changePage(state,payload){
			state.pageNo = payload.newPage
		},
		searchId(state,payload){
			state.class_id = payload.newId
			state.keyWords = payload.keyWords
		}
	},
	actions:{
		getProductList(context){
			const {commit,state} = context;
			const {pageNo,pageSize,class_id,keyWords} = state; 
			axios.get('http://localhost:3000/list/classData',{
				params:{
					pageNo:pageNo,
					pageSize:pageSize,
					class_id:class_id,
					keyWords:keyWords
				}
			})
			.then( res => {
				var data = res.data.data
				context.commit('setProductList',{data})
			})
		}
	},
	getters:{
		listData:state=>state.listData,
		totalPage:state=>{
			return Math.ceil(state.totalNum/state.pageSize)
		}
	}
}