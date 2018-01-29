<template>
  <div>
     <el-form label-width="100px" class="demo-ruleForm">
	  <el-form-item label="分类名称">
	    <el-input type="text" v-model="cateData.cateName" class="width-input"></el-input>
	  </el-form-item>

	  <el-form-item label="选择父类">
		  <el-select v-model="cateData.parent_id" placeholder="请选择">
		    <el-option
		      v-for="item in cateList"
		      :key="item.category_id"
		      :label="item.name"
		      :value="item.category_id">
		    </el-option>
		  </el-select>
		  <span><i style="color:#d00;font-size:20px">* </i><em style="color:#ccc">不选默认一级分类</em></span>
	  </el-form-item>

 	<el-form-item label="图片上传">
	  <el-upload
	  class="avatar-uploader"
	  action="http://localhost:3000/api/uploadImg"
	  name="roompic"
	  :show-file-list="false"
	  :on-success="handleAvatarSuccess"
	  :before-upload="beforeAvatarUpload">
	  <img v-if="imageUrl" :src="imageUrl" class="avatar">
	  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
	</el-upload>

	</el-form-item>
	  <el-form-item>
	    <el-button type="primary" @click="submitForm">提交</el-button>
	    <el-button @click="resetForm">重置</el-button>
	  </el-form-item>
	</el-form>
  </div>
</template>
<script>
import axios from 'axios'
import qs from 'qs'
export default {
	data(){
		return {
			cateData:{
				cateName:'',
				parent_id:'',
				catePic:''
			},
			imageUrl: '',
			cateList:[]
		}
	},
  	methods:{
  		submitForm(){
  			axios.post('http://localhost:3000/list/addClass',qs.stringify(this.cateData))
  			.then(res => {
  				this.resetForm();
  				this.imageUrl = ''
  			})
  		},
  		resetForm(){
  			Object.keys(this.cateData).forEach(key=>{
  				this.cateData[key] = ''
  			})
  		},
  		handleAvatarSuccess(res, file) {
  			var imgSrc = res.imgSrc
  			imgSrc = imgSrc.replace('public','')
  			this.cateData.catePic = imgSrc;
  			this.imageUrl = URL.createObjectURL(file.raw);
        	
      	},
	    beforeAvatarUpload(file) {
	        const isJPG = file.type === 'image/jpeg';
	        const isLt2M = file.size / 1024 / 1024 < 2;
	        if (!isJPG) {
	          this.$message.error('上传头像图片只能是 JPG 格式!');
	        }
	        if (!isLt2M) {
	          this.$message.error('上传头像图片大小不能超过 2MB!');
	        }
	        return isJPG && isLt2M;
	    }
	},
	mounted(){
		axios.get('http://localhost:3000/list/lefttab')
		.then(res => {
			this.cateList = res.data.data;
		})
	}
}
</script>
<style>
	.width-input{
		width:200px;
	}
	.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

</style>