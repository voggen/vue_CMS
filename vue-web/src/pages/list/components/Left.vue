<template>
 	<div class="m-list-left">
 		<ul>
 			<li v-for='(item,index) in leftData' :key='item.category_id'>
 				<a href="">
 					{{item.category_name}}
 				</a>
 			</li>
 		</ul>
 	</div>
</template>

<script>
import axios from 'axios'
export default {
	props:['leftData'],
 	mounted(){
 		
 	},
 	methods:{
 		
 	}

}
</script>

<style>
	.m-list-left{
		position: fixed;
	    top: 49px;
	    bottom: 52px;
	    left: 0;
	    width: 1.331rem;
	    border-right: 1px solid #efefef;
	    overflow: hidden;
	}
	.m-list-left ul{
		z-index: 90;
	    position: absolute;
	    top: 0;
	    bottom: 0;
	    left: 0;
	    right: -.3rem;
	    padding: .2rem .3rem .2rem 0;
	    background: #fefefe;
	    overflow-y: auto;
	}
	.m-list-left ul li{
		font-size:.24rem;
		height: .9rem;
		line-height: .9rem;
		overflow: hidden;
		text-align: center;
		transform:scale(.9);
	}
	.m-list-left ul li a{
		color:#3c3c3c;
	}
</style>
