<template>
  <div class="music-player">
    <div class="disc-container" :class="{ spinning: isPlaying }">
      <img src="https://website-image-as.oss-cn-beijing.aliyuncs.com/image-bg/1.jpg" alt="Disc" class="disc" />
    </div>
    <audio ref="audio" @timeupdate="updateTime" @loadedmetadata="updateDuration" @ended="resetPlayer">
      <source :src="audioSrc" type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
    <div class="controls">
      <button @click="prevTrack">
        <i class="fas fa-backward"></i>
        上一曲
      </button>
      <button @click="playPause" v-if="!isPlaying">
        <i :class="isPlaying ? 'fas fa-pause' : 'fas fa-play'"></i>
        播放
      </button>
      <button @click="playPause" v-if="isPlaying">
        <i :class="isPlaying ? 'fas fa-pause' : 'fas fa-play'"></i>
        暂停
      </button>
      <button @click="nextTrack">
        <i class="fas fa-forward"></i>
        下一曲
      </button>
      <button @click="stop">
        停止
        <i class="fas fa-stop"></i>
      </button>
    </div>
    <div class="voice">
      <input type="range" v-model="volume" min="0" max="1" step="0.01" @input="changeVolume" />
      <div class="time">
        {{ formatTime(currentTime) }} / {{ formatTime(duration) }}
      </div>
    </div>
    <div class="progress-container" @mousedown="startDrag" @mouseup="endDrag" @mousemove="drag">
      <div class="progress" :style="{ width: progressBarWidth }"></div>
      <div class="thumb" :style="{ left: progressBarWidth }"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      audioSrc: 'https://website-image-as.oss-cn-beijing.aliyuncs.com/music/welove.mp4', // 你的音频文件路径
      isPlaying: false,
      currentTime: 0,
      duration: 0,
      volume: 0.5
    };
  },
  computed: {
    progressBarWidth() {
      return (this.currentTime / this.duration) * 100 + '%';
    },
    progressBarWidth() {
      return (this.currentTime / this.duration) * 100 + '%';
    }
  },
  methods: {
    // 上一曲
    prevTrack(){
      console.log(111);
    },

    // 下一曲
    nextTrack(){
      console.log(222);
    },

    // 播放-暂停
    playPause() {
      const audio = this.$refs.audio;
      if (this.isPlaying) {
        audio.pause();
      } else {
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
    }
  },
  mounted() {
    const audio = this.$refs.audio;
    audio.volume = this.volume;
  }
};
</script>

<style scoped>
.music-player {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #667eea, #764ba2);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  color: #fff;
  width: 100%;
  position: fixed;
  bottom: 0;
  padding-bottom: env(safe-area-inset-bottom);
  height: 18vh
}

.controls {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  position: absolute;
  left: 5%;
  bottom: 40px;
}

.voice{
  position: absolute;
  right: 5%;
  bottom: 40px;
  display: flex;
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

.controls input[type="range"] {
  width: 100px;
}

.time {
  margin-left: 10px;
  font-size: 14px;
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
  top: -25px;
}

.disc {
  width: 100px;
  height: 100px;
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
