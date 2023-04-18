const routes = [
  {
    path: "/",
    redirect: "/MainPages",
  },
  //引导页
  {
    path: "/MainPages",
    name: "MainPages",
    meta: {
      title: "引导页",
    },
    component: () => import("@/views/MainPages.vue"),
  },
  // 热点首页
  {
    path: "/Provider/",
    name: "Provider",
    component: () => import("@/pages/DailyHot/Provider.vue"),
    children:[
      {
        path: 'home',
        component: () => import("@/pages/DailyHot/components/Home.vue"),
      },
      {
        path: 'setting',
        component: () => import("@/pages/DailyHot/components/Setting.vue"),
      },
    ]
  },
  // 新闻列表
  {
    path: "/HotList",
    name: "HotList",
    meta: {
      title: "新闻列表",
    },
    component: () => import("@/pages/DailyHot/components/HotList.vue"),
  },
  // 热点详情页
  {
    path: "/list",
    name: "list",
    meta: {
      title: "全局设置",
    },
    component: () => import("@/pages/DailyHot/components/List.vue"),
  },
  // 网址集页
  {
    path: "/MapUrlList",
    name: "MapUrlList",
    meta: {
      title: "全局设置",
    },
    component: () => import("@/pages/OneNav/MapUrlList.vue")
  }
];

export default routes;
