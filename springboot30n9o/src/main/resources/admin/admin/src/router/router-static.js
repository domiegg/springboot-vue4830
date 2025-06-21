import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import yuangong from '@/views/modules/yuangong/list'
    import yuangongpeixun from '@/views/modules/yuangongpeixun/list'
    import qingjiashenqing from '@/views/modules/qingjiashenqing/list'
    import yuangonggongzi from '@/views/modules/yuangonggongzi/list'
    import zhaopinjihua from '@/views/modules/zhaopinjihua/list'
    import bumenpeixun from '@/views/modules/bumenpeixun/list'
    import bumen from '@/views/modules/bumen/list'
    import jiabanshenqing from '@/views/modules/jiabanshenqing/list'
    import yuangongxiangxi from '@/views/modules/yuangongxiangxi/list'
    import yuangongkaoqin from '@/views/modules/yuangongkaoqin/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/yuangong',
        name: '员工',
        component: yuangong
      }
      ,{
	path: '/yuangongpeixun',
        name: '员工培训',
        component: yuangongpeixun
      }
      ,{
	path: '/qingjiashenqing',
        name: '请假申请',
        component: qingjiashenqing
      }
      ,{
	path: '/yuangonggongzi',
        name: '员工工资',
        component: yuangonggongzi
      }
      ,{
	path: '/zhaopinjihua',
        name: '招聘计划',
        component: zhaopinjihua
      }
      ,{
	path: '/bumenpeixun',
        name: '部门培训',
        component: bumenpeixun
      }
      ,{
	path: '/bumen',
        name: '部门',
        component: bumen
      }
      ,{
	path: '/jiabanshenqing',
        name: '加班申请',
        component: jiabanshenqing
      }
      ,{
	path: '/yuangongxiangxi',
        name: '员工详细',
        component: yuangongxiangxi
      }
      ,{
	path: '/yuangongkaoqin',
        name: '员工考勤',
        component: yuangongkaoqin
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
