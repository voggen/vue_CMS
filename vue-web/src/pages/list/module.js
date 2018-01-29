import axios from 'axios'
export default {
	namespaced: true,
	state: {
		categoryLeftData:[]
	},
	mutations: {
		setDetailData(state,payload){
			state.categoryLeftData = payload.result
		}
	},
	actions:{
		getCateGoryData(context){
		    axios.get('http://localhost:3000/category_v2')
		    .then((res)=>{
		    	var result = res.data.data
		    	
		    	console.log(res.data.data)
		        context.commit('setDetailData',{result})
		    })
    	}
	},
	getters:{
		leftData:state=>state.categoryLeftData
	}
}
