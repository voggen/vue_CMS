<template>
 	<div class="dsh-header">
 		<el-header class="header-container">
            <el-menu
                class="el-menu-demo"
                mode="horizontal"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-menu-item index='logo'>
                	<i class="el-icon-goods"></i>
                </el-menu-item>
                <div class="right">
                	<el-dropdown split-button type="primary">
					  我的后台
					  <el-dropdown-menu slot="dropdown">
					    <el-dropdown-item>设置</el-dropdown-item>
					    <el-dropdown-item>消息</el-dropdown-item>
					    <el-dropdown-item>注销</el-dropdown-item>
					  </el-dropdown-menu>
					</el-dropdown>
                </div>
            </el-menu>
        </el-header>
 	</div>
</template>

<script>

export default {
 
}
</script>

<style scoped>
	.dsh-header{
		width:100%;
	}
	.header-container{
		padding:0;
	}
	.el-menu-item i{
		color:#fff;
		font-size: 30px;
	}
	.right{
		float: right;
		margin-right:20px;
	}
</style>
