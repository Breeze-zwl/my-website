
<p>
<strong><h2>赵万龙の主页</h2></strong>
简单的小主页
</p>
>主页的 Logo 字体已经过压缩，若用本站 Logo 以外的字母会变回默认字体，这里是 [完整字体](https://file.4everland.app/font/Other/Pacifico-Regular.ttf)

### Demo

本站使用了很多API，如果某个功能不能用了，大概率API不稳定
 想要壁纸  https://www.dujin.org/  https://www.dmoe.cc
 一堆API  https://api.btstu.cn/
 打印机效果  https://github.com/pengqiangsheng/easy-typer-js

- [快速入口](https://zwl-turnback.cn/)

### 功能

- [x] 载入动画
- [x] 站点简介
- [x] Hitokoto 一言
- [x] 日期及时间
- [x] 实时天气
- [x] 时光进度条
- [x] 音乐播放器
- [x] 移动端适配

* [ ] 播放器取消使用 Aplayer

### 部署

* **安装** [node.js](https://nodejs.org/zh-cn/) **环境**

  > node > 16.16.0  
  > npm > 8.15.0
  
```bash
# 安装 yarn
npm install -g yarn

# 安装依赖
yarn install

# 预览
yarn dev

# 构建
yarn build

#.nvmrc文件制定了node版本，如果有自己的发布平台node版本要大于16.0.0 测试master
```
> 构建完成后，静态资源会在 **`dist` 目录** 中生成，可将 **`dist` 文件夹下的文件**上传至服务器，也可使用 `Vercel` 等托管平台一键导入并自动部署

### 天气

天气及地区获取需要 `高德开放平台` 相关 API  

- 前往 [高德开放平台控制台](https://console.amap.com/dev/index) 创建一个 `Web 服务` 类型的 `Key`，并将 `Key` 填入 `.env` 中的 `VITE_WEATHER_KEY` 中

也可自行更换其他方式

### 今日热点

接口测试地址：https://zwl-top.top/

服务部署在Vercel,代码在Gihuab

### 音乐

>本项目采用了基于 `MetingJS` 的 `Aplayer` 音乐播放器，可实现快速自定义歌单  
>*仅支持 **中国大陆地区**

请在 `.env` 文件中更改歌曲相关参数即可实现自定义歌单列表

```bash
# 歌曲 API 地址
VITE_SONG_API = "https://api-meting.imsyy.top"
# 歌曲服务器 ( netease-网易云, tencent-qq音乐 )
VITE_SONG_SERVER = "netease"
# 播放类型 ( song-歌曲, playlist-播放列表, album-专辑, search-搜索, artist-艺术家 )
VITE_SONG_TYPE = "playlist"
# 播放 ID
VITE_SONG_ID = "7452421335"
```
### icon 通过naive-ui 使用xicons

在使用前可以到网站进行预览和查询，https://www.xicons.org/#/

### 字体

现采用 `HarmonyOS Sans` 开源字体，采用字体拆分，提升加载速度


### 技术栈

* [Vue](https://cn.vuejs.org/)
* [Vite](https://vitejs.cn/vite3-cn/)
* [Pinia](https://pinia.vuejs.org/zh/)
* [IconPark](https://iconpark.oceanengine.com/official)
* [xicons](https://xicons.org/)
* [Aplayer](https://aplayer.js.org/)

### API

* [MetingAPI By 武恩赐](https://api.wuenci.com/meting/api/)
* [小歪 API](https://api.ixiaowai.cn/)
* [高德开放平台](https://lbs.amap.com/)
* [Hitokoto 一言](https://hitokoto.cn/)

