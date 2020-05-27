import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import VueRouter from "vue-router";

Vue.use(Router);

// export default new Router({
//   routes: [
//     {
//       path: "/",
//       name: "HelloWorld",
//       component: HelloWorld
//     }
//   ]
// });

export const constantRoutes = [
  {
    path:'/index',
    component:()=>import('@/views/index.vue'),
    hidden:false,
  }
]; 

const createRouter = () =>
  new VueRouter({
    mode: "history",
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });
const router = createRouter();
