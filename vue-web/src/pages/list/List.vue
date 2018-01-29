<template>
 	<div class="m-list">
 		<list-header>
 			<div class="m-header-tit">
 				分类
 			</div>
 		</list-header>
		<div class="m-list-container m-list-wrapper">
			<list-left :leftData = 'leftData' /> 
		</div>
		<list-footer />
 	</div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'

import header from '@/components/Header'
import footer from '@/components/Footer'
import left from './components/Left'
export default {
 	components:{
 		'list-header':header,
 		'list-footer':footer,
 		'list-left':left
 	},
 	mounted(){
 		this.getCateGoryData()
 	},
 	methods:{
 		...mapActions('list',[
 			'getCateGoryData'
 		])
 	},
 	computed:{
 		...mapGetters('list',[
 			'leftData'
 		])
 	}
}
</script>

<style>
	.m-list-container{
		padding-top: 50px;
		padding-bottom: 52px;
	}
	.m-list-wrapper{
	    position: absolute;
	    z-index: 999;
	    top: 0;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    height: 100%;
	    overflow-x: hidden;
	    overflow-y: auto;
	    transition: transform .4s cubic-bezier(.55,0,.1,1),-webkit-transform .4s cubic-bezier(.55,0,.1,1);
	    color:#3c3c3c;
	    background: #fff;
	}
</style>
