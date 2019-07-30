import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import OrderNum from '@/components/orderNum'
import OrderManage from '@/components/orderManage'
import StoreManage from '@/components/storeManage'
import ShelfManage from '@/components/shelfManage'
import AddNum from '@/components/addNum'
import EditPage from '@/components/editPage'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path:'/Home',
      name:'Home',
      component: Home,
      children:[
        // {
        //   path:'',redirect: orderNum
        // },
        {
          path:'/orderNum', component:OrderNum ,name:'orderNum'
        },
        {
          path:'/orderManage', component:OrderManage ,name:'orderManage'
        },
        {
          path:'/storeManage', component:StoreManage ,name:'storeManage'
        },
        {
          path:'/shelfManage', component:ShelfManage ,name:'shelfManage'
        },
        {
          path:'/addNum', component:AddNum ,name:'addNum'
        },
        {
          path:'/editPage', component:EditPage ,name:'editPage'
        }
      ]   
     }
  ]
})
