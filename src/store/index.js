import { Log } from "@icon-park/vue-next";
import {
    defineStore
} from "pinia";

export const mainStore = defineStore("main", {
    state: () => {
        return {
            innerWidth: null, // 当前窗口宽度
            coverType: "0", // 壁纸种类
            siteStartShow: true, // 建站日期显示
            musicIsOk: false, // 音乐是否加载完成
            musicVolume: 0, // 音乐音量;
            musicOpenState: false, // 音乐面板开启状态
            backgroundShow: false, // 壁纸展示状态
            boxOpenState: false, // 盒子开启状态
            mobileOpenState: false, // 移动端开启状态
            mobileFuncState: false, // 移动端功能区开启状态
            setOpenState: false, // 设置页面开启状态
            playerState: false, // 当前播放状态
            playerTitle: null, // 当前播放歌曲名
            playerArtist: null, // 当前播放歌手名
            playerLrc: "歌词加载中", // 当前播放歌词
            isMobile: false, //是否是移动端
            //分割线，下面是今日热点
            // 系统主题
            siteTheme: "light",
            // 新闻类别
            newsArr: [
              {
                label: "哔哩哔哩",
                value: "bilibili",
                order: 0,
                show: true,
                icon:'./image/logo/36kr.png'
              },
              {
                label: "微博",
                value: "weibo",
                order: 1,
                show: true,
              },
              {
                label: "知乎",
                value: "zhihu",
                order: 2,
                show: true,
              },
              {
                label: "36氪",
                value: "36kr",
                order: 3,
                show: true,
              },
              {
                label: "百度",
                value: "baidu",
                order: 4,
                show: true,
              },
              {
                label: "少数派",
                value: "sspai",
                order: 5,
                show: true,
              },
              {
                label: "IT之家",
                value: "ithome",
                order: 6,
                show: true,
              },
              {
                label: "澎湃新闻",
                value: "thepaper",
                order: 7,
                show: true,
              },
              {
                label: "今日头条",
                value: "toutiao",
                order: 8,
                show: true,
              },
              {
                label: "百度贴吧",
                value: "tieba",
                order: 9,
                show: true,
              },
              {
                label: "稀土掘金",
                value: "juejin",
                order: 10,
                show: true,
              },
              {
                label: "腾讯新闻",
                value: "newsqq",
                order: 11,
                show: true,
              },
            ],
            // 链接跳转方式
            linkOpenType: "open",
            // 页头固定
            headerFixed: true,
            // 时间数据
            timeData: null,
        }
    },
    getters: {
        // 获取歌词
        getPlayerLrc(state) {
            return state.playerLrc;
        },
        // 获取歌曲信息
        getPlayerData(state) {
            return {
                name: state.playerTitle,
                artist: state.playerArtist,
            }
        },
        // 获取页面宽度
        getInnerWidth(state) {
            return state.innerWidth;
        }
    },
    actions: {
        // 更改当前页面宽度
        setInnerWidth(value) {
          console.log(111);
            this.innerWidth = value;
            if (value >= 720) {
                this.mobileOpenState = false;
                this.mobileFuncState = false;
                this.isMobile = false
            } else {
              this.isMobile = true;
            }
        },
        // 更改播放状态
        setPlayerState(value) {
            if (value) {
                this.playerState = false;
            } else {
                this.playerState = true;
            }

        },
        // 更改歌词
        setPlayerLrc(value) {
            this.playerLrc = value;
        },
        // 更改歌曲数据
        setPlayerData(title, artist) {
            this.playerTitle = title;
            this.playerArtist = artist;
        },
        //分割线  下面是今日热点
        // 更改系统主题
        setSiteTheme(val) {
          $message.info(`已切换至${val === "dark" ? "深色模式" : "浅色模式"}`, {
            showIcon: false,
          });
          this.siteTheme = val;
        },
    },
    persist: {
        key: 'data',
        storage: window.localStorage,
        paths: ['coverType', 'musicVolume', 'siteStartShow', "siteTheme", "newsArr", "linkOpenType", "headerFixed"],
    },
})
