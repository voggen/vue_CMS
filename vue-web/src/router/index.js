import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//同步加载commonjs
// import Layout from '@/components/Layout'
// import Home from '@/pages/home/Home'
// import Product from '@/pages/product/Product'
// import ProductAdd from '@/pages/product/components/Add'
// import ProductList from '@/pages/product/components/List'
// import Cate from '@/pages/cate/Cate'
// import CateAdd from '@/pages/cate/components/Add'

//异步加载 按需加载 amd
export default new Router({
  	routes: [
	  	{
		    path: '/',
		    component: ()=>import('@/components/Layout'),
		    children: [
		        {
		         	path: '',
		         	component: ()=>import('@/pages/home/Home')
		        },
		        {
		          	path: 'product',
		          	component: ()=>import('@/pages/product/Product'),
			        children:[
		          		{
		          			path:'add',
		          			component:()=>import('@/pages/product/components/Add')
		          		},
		          		{
		          			path:'list',
		          			component: ()=>import('@/pages/product/components/List')
		          		}
			        ]      
		        },
		        {
		        	path:'cate',
		        	component: ()=>import('@/pages/cate/Cate'),
		        	children:[
		        		{
		        			path:'add',
		        			component: ()=>import('@/pages/cate/components/Add')
		        		},
		        		{
		        			path:'list',
		        			component: ()=>import('@/pages/cate/components/List')
		        		}
		        	]
		        }
		    ]
	    },
	    {
	    	path:'*',
	    	redirect:'/'
	    }
  	]
})
