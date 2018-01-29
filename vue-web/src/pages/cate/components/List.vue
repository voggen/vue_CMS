<template>
  <div>
	
  </div>
</template>
<script>
import axios from 'axios'
import { mapActions } from 'vuex'
export default {
	computed:{

	},
	methods:{
		...mapActions('cate',[
			'getClassP','getClassC'
		])
	},
	mounted(){
		this.getClassP();
		this.getClassC();
	}
}
</script>
<style>

</style>



