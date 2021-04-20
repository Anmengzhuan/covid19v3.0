import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
 




export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: false
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index'),
        name: 'Home',
        meta: { title: '首页', icon: 'list', affix: true }
      }
    ]
  },



  {
    path: '/test',
    component: Layout,
    hidden: true,
    children:[
      {
        path:'index',
        component:() => import('@/views/test/index'),
        name: 'test',
        meta: { title: 'test', icon: 'international', affix: true }
      }
    ]
  },



  {
    path: '/global',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/global/index'),
        name: 'Global',
        meta: { title: '全球疫情', icon: 'international', affix: true }
      }
    ]
  },
  {
    path: '/country',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/country/index'),
        name: 'Country',
        meta: { title: '全国疫情', icon: 'chart', affix: true }
      }
    ]
  },

  
  {
    path:'/city',
    component:Layout,
    redirect:'/city/index',
    meta: {
      title:'当地疫情',
      icon:'form',
    },
    children:[
      {
        path:'index',
        component: ()=>import('@/views/city/city'),
        
        meta:{title:'当地疫情',icon: 'example'}
      } 
    ]
  },

  {
    path:'/news',
    component:Layout,
    
    redirect:'/news',
    meta: {
      title:'新闻',
      icon:'form',
    },
    children:[
      {
        path:'index',
        component: ()=>import('@/views/news/news'),
        
        meta:{title:'新闻资讯'}
      } 
    ]

  }
  
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  

  {
    path: '/icon',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/icons/index'),
        name: 'Icons',
        meta: { title: 'Icons', icon: 'icon', noCache: true }
      }
    ]
  },

 


  

  {
    path: '/error',
    component: Layout,
    hidden: true,
    redirect: 'noRedirect',
    name: 'ErrorPages',
    meta: {
      title: 'Error Pages',
      icon: '404'
    },
    children: [
      {
        path: '401',
        component: () => import('@/views/error-page/401'),
        name: 'Page401',
        meta: { title: '401', noCache: true }
      },
      {
        path: '404',
        component: () => import('@/views/error-page/404'),
        name: 'Page404',
        meta: { title: '404', noCache: true }
      }
    ]
  },



  
  
  
  
 

  

 

  

  //***************************************************************************************** */
  

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()


export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
