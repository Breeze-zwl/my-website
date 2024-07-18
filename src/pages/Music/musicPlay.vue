<template>
  <div class="music-player">
    <div class="disc-container" :class="{ spinning: isPlaying }">
      <img v-if="playMusic.pic" :src="playMusic.pic" alt="Disc" class="disc" @click="playPause" />
      <img
        v-else
        src="https://website-image-as.oss-cn-beijing.aliyuncs.com/image-bg/hjcp.jpeg"
        alt="Disc"
        class="disc"
        @click="playPause"
      />
    </div>
    <audio
      ref="audio"
      @timeupdate="updateTime"
      @loadedmetadata="updateDuration"
      @ended="resetPlayer"
      @canplay="onCanPlay"
      preload="auto"
    >
      <source :src="playMusic.url" type="audio/mp4" />
      Your browser does not support the audio element.
    </audio>
    <div class="controls">
      <button @click="prevTrack">
        <img :src="pre" />
      </button>
      <button @click="playPause" v-if="!isPlaying">
        <img :src="play" />
      </button>
      <button @click="playPause" v-if="isPlaying">
        <img :src="pause" />
      </button>
      <button @click="nextTrack">
        <img :src="next" />
      </button>
    </div>
    <div class="musicTitle" :class="store.getInnerWidth <= 720 ? 'mobile' : ''">
      {{ playMusic.title }}
    </div>
    <div v-show="store.getInnerWidth > 720" class="voice">
      <img :src="voiceN" />
      <input
        class="phoneRange"
        type="range"
        v-model="volume"
        min="0"
        max="1"
        step="0.01"
        @input="changeVolume"
      />
    </div>
    <div class="time">{{ formatTime(currentTime) }} / {{ formatTime(duration) }}</div>
    <div class="progress-container" @mousedown="startDrag" @mouseup="endDrag" @mousemove="drag">
      <div class="progress" :style="{ width: progressBarWidth }"></div>
      <div class="thumb" :style="{ left: progressBarWidth }"></div>
    </div>
  </div>
</template>

<script>
import play from './image/play.png';
import pause from './image/pause.png';
import pre from './image/pre.png';
import next from './image/next.png';
import voiceN from './image/voiceN.png';
import { mainStore } from '@/store';

export default {
  props: {
    playMusic: {
      type: Object,
      default: {},
    },
  },
  watch: {
    playMusic: {
      handler() {
        // 当播放链接变化时，重新加载音频并播放
        this.restartAudio();
      },
    },
  },
  data() {
    return {
      isPlaying: false,
      currentTime: 0,
      duration: 0,
      volume: 1,
      pre,
      next,
      pause,
      play,
      voiceN,
      store: {},
    };
  },
  computed: {
    progressBarWidth() {
      return (this.currentTime / this.duration) * 100 + '%';
    },
    innerWidth() {
      return this.$store;
    },
  },
  methods: {
    // 重新加载音频并播放
    restartAudio() {
      const audio = this.$refs.audio;
      audio.load(); // 重新加载音频
      audio.play(); // 播放音频
      this.isPlaying = true; // 更新播放状态
    },

    // 上一曲
    prevTrack() {
      console.log(111);
    },

    // 下一曲
    nextTrack() {
      console.log(222);
    },

    // 播放-暂停
    playPause() {
      const audio = this.$refs.audio;
      if (this.isPlaying) {
        audio.pause();
      } else if (this.canPlay) {
        audio.play();
      } else {
        audio.load(); // 加载音频文件
        audio.play();
      }
      this.isPlaying = !this.isPlaying;
    },

    // 停止
    stop() {
      const audio = this.$refs.audio;
      audio.pause();
      audio.currentTime = 0;
      this.isPlaying = false;
    },
    changeVolume() {
      const audio = this.$refs.audio;
      audio.volume = this.volume;
    },
    updateTime() {
      const audio = this.$refs.audio;
      this.currentTime = audio.currentTime;
    },
    updateDuration() {
      const audio = this.$refs.audio;
      this.duration = audio.duration;
    },
    resetPlayer() {
      this.isPlaying = false;
      this.currentTime = 0;
    },

    // 拖动滚动条
    startDrag(event) {
      this.isDragging = true;
      this.updateCurrentTime(event);
    },

    // 记录拖动时间
    drag(event) {
      if (this.isDragging) {
        this.updateCurrentTime(event);
      }
    },

    // 结束拖动
    endDrag(event) {
      if (this.isDragging) {
        this.updateCurrentTime(event);
        this.$refs.audio.currentTime = this.currentTime;
        this.isDragging = false;
      }
    },
    updateCurrentTime(event) {
      const progressContainer = this.$el.querySelector('.progress-container');
      const rect = progressContainer.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const width = rect.width;
      this.currentTime = (offsetX / width) * this.duration;
    },
    // 格式化时间
    formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const sec = Math.floor(seconds % 60);
      return `${minutes}:${sec < 10 ? '0' : ''}${sec}`;
    },
    onCanPlay() {
      this.canPlay = true;
    },
    // 当音频播放完成时触发，通知父组件
    onAudioEnded() {
      // 发送自定义事件到父组件
      this.$emit('audioEnded', this.playMusic);
    },
  },
  mounted() {
    const audio = this.$refs.audio;
    audio.volume = this.volume;
    // 监听音量事件
    audio.addEventListener('volumechange', this.changeVolume);
    // 监听播放事件
    audio.addEventListener('ended', this.onAudioEnded);
    this.audioSrc = this.audioSrc;
    this.store = mainStore();
  },
  beforeDestroy() {
    const audio = this.$refs.audio;
    audio.removeEventListener('volumechange', this.changeVolume);
    audio.removeEventListener('ended', this.onAudioEnded);
  },
};
</script>

<style scoped>
.music-player {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #667eea, #764ba2);
  padding: 20px;
  border-radius: 15px 15px 0 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  color: #fff;
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 18vh;
}

.controls {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  position: absolute;
  left: 5%;
  top: 40px;
  img {
    width: 4vh;
  }
}

.voice {
  position: absolute;
  right: 5%;
  top: 55px;
  display: flex;
  img {
    width: 30px;
  }
}

.musicTitle {
  margin-top: 8%;
}
.mobile {
  position: absolute;
  left: 5%;
  bottom: 30px;
}

.controls button {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  transition: transform 0.2s;
}

.controls button:hover {
  transform: scale(1.2);
}

.controls input[type='range'] {
  width: 100px;
}

.time {
  margin-left: 10px;
  font-size: 14px;
  position: absolute;
  right: 5%;
  bottom: 30px;
}

.progress-container {
  width: 90%;
  height: 5px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  margin-top: 10px;
  position: absolute;
  bottom: 20px;
}

.progress {
  height: 100%;
  background: #fff;
  border-radius: 5px;
  transition: width 0.1s;
}

.disc-container {
  position: absolute;
  top: -25%;
  cursor: pointer;
  width: 12vh;
}

.disc {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transition: transform 0.5s ease;
}

.spinning .disc {
  animation: spin 5s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.thumb {
  width: 10px;
  height: 10px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: -3px;
  transform: translateX(-50%);
  transition: left 0.1s;
}
</style>
