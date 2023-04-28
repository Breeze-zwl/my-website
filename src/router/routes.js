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
      //热点内容页面
      {
        path: 'home',
        component: () => import("@/pages/DailyHot/components/Home.vue"),
      },
      //热点设置页
      {
        path: 'setting',
        component: () => import("@/pages/DailyHot/components/Setting.vue"),
      },
      // 热点详情页
      {
        path: 'list',
        component: () => import("@/pages/DailyHot/components/List.vue"),
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
  // 网址集页
  {
    path: "/MapUrlList",
    name: "MapUrlList",
    component: () => import("@/pages/OneNav/MapUrlList.vue")
  },
    // 起始页
  {
    path: "/Snavigation",
    name: "Snavigation",
    component: () => import("@/pages/Snavigation/Snavigation.vue")
  },
   // 空间页
   {
    path: "/Zone",
    name: "Zone",
    component: () => import("@/pages/Zone/Zone.vue")
  }
];

export default routes;
