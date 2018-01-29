import Vue from 'vue'
import App from '@/app/App'
import router from './router'
import store from './vuex'
Vue.config.productionTip = false
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI)

//引入element部分组件
// import { Button,Select,Container,Header,Aside,Main,Tabs,TabPane,Menu,Submenu,MenuItem,Col,MenuItemGroup,Dropdown,DropdownMenu,DropdownItem,Form,FormItem,Input} from 'element-ui'

//全局注册element部分组件
// Vue.component(Button.name, Button)
// Vue.component(Select.name, Select)
// Vue.component('el-header', Header)
// Vue.component('el-container',Container)
// Vue.component('el-aside', Aside)
// Vue.component('el-main', Main)
// Vue.component('el-tabs', Tabs)
// Vue.component('el-tab-pane',TabPane)
// Vue.component('el-menu',Menu)
// Vue.component('el-submenu',Submenu)
// Vue.component('el-menu-item',MenuItem)
// Vue.component('el-col',Col)
// Vue.component('el-menu-item-group',MenuItemGroup)
// Vue.component('el-dropdown',Dropdown)
// Vue.component('el-dropdown-menu',DropdownMenu)
// Vue.component('el-dropdown-item',DropdownItem)
// Vue.component('el-form',Form)
// Vue.component('el-form-item',FormItem)
// Vue.component('el-input',Input)


//引入公用组件
import header from '@/components/Header'
import aside from '@/components/Aside'
import main from '@/components/Main'

//全局注册通用组件
Vue.component('dsh-header',header)
Vue.component('dsh-aside',aside)
Vue.component('dsh-main',main)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
