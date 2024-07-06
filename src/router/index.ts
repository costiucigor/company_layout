import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUs from '../views/AboutUs.vue'
import Blog from '../views/Blog.vue'
import Services from "../views/Services.vue";
import CaseStudio from "../views/CaseStudio.vue";
import Industries from "../views/Industries.vue";
import {useMenuStore} from "@/stores/menuStore";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: "about",
      component: AboutUs
    },
    {
      path: '/blog',
      name: "blog",
      component: Blog
    },
    {
      path: '/services',
      name: "services",
      component: Services
    },
    {
      path: '/industries',
      name: "Industries",
      component: Industries
    },
    {
      path: '/casestudio',
      name: "Case studio",
      component: CaseStudio
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { left: 0, top: 0 };
  },
})

router.beforeEach((to, from) => {
  const menuStore = useMenuStore();
  menuStore.setMenu(false);
  return true;
});

export default router
