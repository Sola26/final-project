import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import About from "@/components/About";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Journal from "@/components/Journal";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/work",
      name: "Work",
      component: Work
    },
    {
      path: "/journal",
      name: "Journal",
      component: Journal
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact
    }
  ]
});
