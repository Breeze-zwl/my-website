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
    path: "/Zone/",
    name: "Zone",
    component: () => import("@/pages/Zone/Zone.vue"),
    children:[
       //空间热点页面
       {
        path: 'work/',
        component: () => import("@/pages/Zone/components/work.vue"),
        children:[
          //好未来页面
          {
            path: 'tal',
            component: () => import("@/pages/Zone/components/workcomponents/tal.vue"),
          },
          //作业帮页面
          {
            path: 'zyb',
            component: () => import("@/pages/Zone/components/workcomponents/zyb.vue"),
          },
          //国美页面
          {
            path: 'gome',
            component: () => import("@/pages/Zone/components/workcomponents/gome.vue"),
          },
          //好未来详情页面
          {
            path: 'talTimeLine',
            name:'talTimeLine',
            component: () => import("@/pages/Zone/components/workcomponents/tal/talTimeLine.vue"),
          },
        ]
      },
      //空间生活页面
      {
        path: 'life',
        component: () => import("@/pages/Zone/components/life.vue"),
      },
      //空间Like页面
      {
        path: 'Like',
        component: () => import("@/pages/Zone/components/Like.vue"),
      },
       //空间She页面
       {
        path: 'She',
        component: () => import("@/pages/Zone/components/She.vue"),
      },
    ]
  }
];

export default routes;
