import axios from 'axios';
export default {
	namespaced: true,
	state:{
		classP:[],
		classC:[]
	},
	mutations:{
		setClassP(state,payload){
			state.classP = payload.data
		},
		setClassC(state,payload){
			state.classC = payload.data
		}
	},
	actions:{
		getClassP(context){
			axios.get('http://localhost:3000/list/lefttab')
			.then( res => {
				console.log(res.data.data)
				var data = res.data.data
				context.commit('setClassP',{data})
			})
		},
		getClassC(context,{parent_id}){
			axios.get('http://localhost:3000/list/rightlist',{
				params:{
					parent_id:parent_id
				}
			})
			.then( res => {
				console.log(res)
				var data = res.data.data
				context.commit('setClassC',{data})
			})
		}
	},
	getters:{
		classP:state=>state.classP,
		classC:state=>state.classC
	}
}