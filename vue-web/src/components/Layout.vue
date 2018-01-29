<template>
  <div id="m-home">
      <dsh-header></dsh-header>
      <div class="dsh-contain">
      	<dsh-aside></dsh-aside>
      	<dsh-main></dsh-main> 
      </div> 
  </div>
</template>
<script>
import axios from 'axios'
export default {
}
</script>
<style scoped>
	.el-main{
		margin: 10px;
		float: left;
	}
	.dsh-contain{
		overflow: hidden;
	}
</style>