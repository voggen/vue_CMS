<template>
<div>
    <div style="margin-top: 15px;">
      <el-input placeholder="请输入内容" v-model="keyWords" class="input-with-select">
        <div slot="prepend">
            <el-select v-model="selectP" slot="prepend" placeholder="请选择">
              <el-option :label="item.name" :value="item.category_id" :key='item.category_id' v-for='item in cateListP'></el-option>
            </el-select>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <el-select v-model="selectC" slot="prepend" placeholder="请选择">
            <el-option :label="item.name" :value="item.class_id" :key='item.class_id' v-for='item in cateListC' ></el-option>
            </el-select>
        </div>
        <el-button slot="append" icon="el-icon-search" @click='handleSearch'></el-button>
      </el-input>
    </div>
  <el-table
    :data="listData"
    style="width: 100%">
    
    <el-table-column
      label="商品Id"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.p_id }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="分类Id"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.class_id }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="缩略图"
      width="180">
      <template slot-scope="scope">
       	<div class="img-box"><img :src='scope.row.img_url' alt=""></div>
      </template>
    </el-table-column>

    <el-table-column
      label="商品名称"
      width="180">
      <template slot-scope="scope">
       	<span>{{scope.row.p_name}}</span>	
      </template>
    </el-table-column>

    <el-table-column
      label="价格"
      width="180">
      <template slot-scope="scope">
       	<span>￥{{((scope.row.price/100).toString()+".00")}}</span>	
      </template>
    </el-table-column>

    <el-table-column
      label="销量"
      width="180">
      <template slot-scope="scope">
        <span>{{scope.row.sales_volume}}</span> 
      </template>
    </el-table-column>

	<el-table-column
      label="库存"
      width="180">
      <template slot-scope="scope">
       	<span>{{scope.row.inventory}}</span>	
      </template>
    </el-table-column>

    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>


  </el-table>
	<div class="pag">
		<el-pagination
		  background
		  layout="prev, pager, next"
		  :page-count='totalPage'
		  @current-change='handleChange'
		>
		</el-pagination>
	</div>
</div>
</template>
<script>
import axios from 'axios'
import { mapActions,mapGetters } from 'vuex'
export default {
    data(){
        return {
           selectP: '',
           selectC: '',
           cateListP:[],
           cateListC:[],
           keyWords:''
        }
    },
  	computed:{
  	...mapGetters('product',[
  		'listData','totalPage'
  	])
  },
  methods:{
  	...mapActions('product',[
  		'getProductList'
  	]),
  	handleChange(newPage){
  		this.$store.commit('product/changePage',{newPage})
  		this.getProductList()
  	},
    getClassPData(){
      axios.get('http://localhost:3000/list/lefttab')
      .then(res => {
        this.cateListP = res.data.data;
      })
    },
    getClassCData(id){
      axios.get('http://localhost:3000/list/rightlist',{
        params:{
          parent_id:id
        }
      })
      .then(res => {
        this.cateListC = res.data.data;
      })
    },
    handleSearch(){
      var newId = this.selectC
      var keyWords = this.keyWords
      this.$store.commit('product/searchId',{newId,keyWords})
      this.getProductList()
    }
  },
  watch:{
    selectP(){
        this.getClassCData(this.selectP)
        this.selectC = ''
    }
  },
  mounted(){
  	this.getProductList()
    this.getClassPData()
  }
}
</script>
<style >
.img-box{
margin-left: 10px;
width:100px;
height:100px;
}
.img-box img{
	width: 100%;
}
.pag{
	margin: 10px 0;
	text-align: center;
}
.input-with-select{
  width: 500px;
}
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>