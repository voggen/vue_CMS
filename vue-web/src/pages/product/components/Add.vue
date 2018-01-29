<template>
  <div>
      <el-form label-width="100px" class="demo-ruleForm">
		  <el-form-item label="商品名称">
		    <el-input type="text" v-model="pName" class="width-input1"></el-input>
		  </el-form-item>

		   <el-form-item label="商品价格">
		    <el-input type="text" v-model="pPrice" class="width-input2"></el-input>
		  </el-form-item>

		  <el-form-item label="选择分类">
		    <el-select v-model="selectP" placeholder="选择一级分类">
		      <el-option :label="item.name" v-for='item in classP' :value="item.category_id" :key="item.category_id"></el-option>
		    </el-select>
		    <el-select v-model="selectC" placeholder="选择二级分类">
		      <el-option :label="item.name" v-for='item in classC' :value="item.class_id" :key="item.category_id"></el-option>
		    </el-select>
		  </el-form-item>

	  </el-form>
  </div>
</template>
<script>
import axios from 'axios'
import { mapActions,mapGetters } from 'vuex'
export default {
  	data(){
  		return {
  			pName:'',
  			pPrice:'',
  			selectP:'',
  			selectC:''
  		}
  	},
  	watch:{
  		selectP(){
  			this.getClassC(this.selectP)
  		}
  	},
  	computed:{
  		...mapGetters('cate',[
  			'classP','classC'
  		])
	},
	methods:{
		...mapActions('cate',[
			'getClassP','getClassC'
		])
	},
	mounted(){
		this.getClassP();
	}
}
</script>
<style scoped>
	.width-input1{
		width:400px;
	}
	.width-input2{
		width:100px;
	}
</style>