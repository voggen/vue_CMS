import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import list from '@/pages/list/module'
import product from '@/pages/product/module'
import cate from '@/pages/cate/module'
export default new Vuex.Store({
	modules:{
		list,
		product,
		cate
	}
})