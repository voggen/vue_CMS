<template>
 	<div class="dsh-aside">
 		<el-menu
	      :default-active="activeIndex"
	      class="el-menu-vertical-demo"
			@select = "handleSelect"
	      background-color="#545c64"
	      text-color="#fff"
	      active-text-color="#ffd04b">
	      <el-menu-item index="/">
            <i class="el-icon-menu"></i>
            <span slot="title">Home</span>
          </el-menu-item>
	      <el-submenu index="product">
	        <template slot="title">
	          <i class="el-icon-location"></i>
	          <span>商品管理</span>
	        </template>
	          <el-menu-item index="/product/add"> <i class="el-icon-edit"></i>添加商品</el-menu-item> 
				<el-menu-item index="/product/list"><i class="el-icon-edit"></i>管理商品</el-menu-item>
	      </el-submenu>
	      <el-submenu index="cate">
	        <template slot="title">
	          <i class="el-icon-location"></i>
	          <span>分类管理</span>
	        </template>
	          <el-menu-item index="/cate/add"><i class="el-icon-edit"></i>添加分类</el-menu-item> 
				<el-menu-item index="/cate/list"><i class="el-icon-edit"></i>管理分类</el-menu-item>
	      </el-submenu>
	      <el-submenu index="order">
	        <template slot="title">
	          <i class="el-icon-location"></i>
	          <span>订单管理</span>
	        </template>
	          <el-menu-item index="/order/add"><i class="el-icon-edit"></i>管理订单</el-menu-item> 
				<el-menu-item index="/order/tui"><i class="el-icon-edit"></i>退换货</el-menu-item>
	      </el-submenu>
		</el-menu>
 	</div>
</template>

<script>
export default {
	data () {
	    return {
	      activeIndex: "/"
	    }
	},
	methods:{
		handleSelect(index,indexPath){
			this.$router.push({ path: index, params: { userId: 123 }})
		}
	},
	mounted(){
		this.activeIndex = this.$route.path;
	}
}
</script>

<style scoped>
	.dsh-aside{
		width:10%;
		margin-top:61px;
		min-width: 201px;
		float: left;
		position: fixed;
		top:0;
		left: 0;
		height: 100%;
		background: rgb(84, 92, 100);
		z-index:999;
	}
</style>
