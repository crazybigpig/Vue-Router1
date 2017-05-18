import Vue from 'vue'
import Router from 'vue-router'
import Foo from '../components/Foo'
import Bar from '../components/Bar'

Vue.use(Router)
// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
/*
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
*/
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]
export default new Router({
  routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
// 可以在main.js中的app后挂载根实例，但是不挂载也没关系，目前还没弄太明白
/*
const app = new Vue({
  router
}).$mount('#app')
*/


