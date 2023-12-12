export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/detail/index',
    'pages/user/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  permission: {
    'scope.userLocation': {
      desc: '你的位置信息将用于小程序位置接口的效果展示'
    },
    'scope.writePhotosAlbum': {
      desc: '写入相册'
    }
  },
  tabBar: {
    color: "#8a8a8a",
    selectedColor: "#FF0000",
    backgroundColor: "#fafafa",
    borderStyle: 'black',
    list: [
      {
        pagePath: "pages/index/index",
        iconPath: "./static/tabBar/home.png",
        selectedIconPath: "./static/tabBar/home_selected.png",
        text: "首页"
      },
      // {
      //   pagePath: "pages/category/index",
      //   iconPath: "./static/tabBar/category.png",
      //   selectedIconPath: "./static/tabBar/category_selected.png",
      //   text: "分类"
      // },
      {
        pagePath: "pages/user/index",
        iconPath: "./static/tabBar/user.png",
        selectedIconPath: "./static/tabBar/user_selected.png",
        text: "我的"
      }
    ]
  }
})
