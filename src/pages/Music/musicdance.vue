<template>
  <div>
    <canvas id="canvas" ref="canvasRef"></canvas>
  </div>
</template>
<script setup>
import { onMounted, ref, defineProps, watch } from 'vue';
import { mainStore } from '@/store';

const store = mainStore();
const canvasRef = ref(null);
const voicec1 = ['#0f0', '#f00', '#f0f'];
const audioCtx = ref(null);
const analyser = ref();
const audioSrc = ref();

let color = '';
let colort = '';

const props = defineProps({
  audioDom: {
    type: HTMLMediaElement,
    default: {},
  },
  musicPlayer: {
    type: Object,
    default: {},
  },
});
watch(
  () => store.musicPalying,
  (value) => {
    console.log(value);
    if (value) {
      console.log('进来了吗');
      initAudio();
      draw();
    }
  }
);
onMounted(() => {});

// 初始化音频播放
const initAudio = () => {
  props.audioDom.crossOrigin = 'anonymous';
  if (!audioCtx.value) {
    audioCtx.value = new (window.AudioContext || window.webkitAudioContext)();
  }

  if (!analyser.value) {
    analyser.value = audioCtx.value.createAnalyser();
  }

  if (!audioSrc.value) {
    analyser.value = audioCtx.value.createAnalyser();
    audioSrc.value = audioCtx.value.createMediaElementSource(props.audioDom);
    audioSrc.value.connect(analyser.value);
    analyser.value.connect(audioCtx.value.destination);
  }
};

// 绘画
const draw = () => {
  // 初始化canvas
  const canvas = canvasRef.value;
  if (!canvas || !analyser.value) return;

  const ctx = canvas.getContext('2d');
  color = ctx.createLinearGradient(canvas.width * 0.5, 0, canvas.width * 0.5, 300);
  color.addColorStop(0, voicec1[0]);
  color.addColorStop(0.5, voicec1[1]);
  color.addColorStop(1, voicec1[2]);

  colort = ctx.createLinearGradient(canvas.width * 0.5, 300, canvas.width * 0.5, 600);
  colort.addColorStop(0, 'rgba(125,225,133,0.7)');
  colort.addColorStop(0.5, 'rgba(225,225,0,0.1)');
  colort.addColorStop(1, 'rgba(125,0,133,0)');

  canvas.width = window.innerWidth * 0.7;
  canvas.height = window.innerHeight * 0.5;

  if (store.getInnerWidth <= 720) {
    canvas.width = window.innerWidth * 0.9;
    canvas.height = window.innerHeight * 0.5;
  }

  // 准备绘画数据
  const num = 80;
  const voicehigh = new Uint8Array(analyser.value.frequencyBinCount);
  analyser.value.getByteFrequencyData(voicehigh);
  const step = Math.round(voicehigh.length / num);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();

  for (var i = 1; i < num; i++) {
    var value = voicehigh[step * i];
    ctx.fillStyle = color;
    ctx.fillRect(i * 10 + canvas.width * 0.5, 250, 7, -value + 1);
    ctx.fillRect(canvas.width * 0.5 - (i - 1) * 10, 250, 7, -value + 1);
    ctx.fill();
    ctx.fillStyle = colort;
    ctx.fillRect(i * 10 + canvas.width * 0.5, 250, 7, value + 1);
    ctx.fillRect(canvas.width * 0.5 - (i - 1) * 10, 250, 7, value + 1);
  }
  requestAnimationFrame(draw);
};
</script>
<style lang="scss" scoped>
#canvas {
  width: 100%;
  height: 100%;
}
</style>
