<template>
  <section class="player">
    <div class="title">
      <button class="back" type="button" @click="router.back()">返回</button>
      <div>
        <h2>视频学习</h2>
        <p>视频编号：{{ videoId }}</p>
      </div>
    </div>

    <div class="video-wrapper">
      <video
        ref="videoRef"
        class="video"
        controls
        playsinline
        :src="videoSrc"
        @timeupdate="handleTimeUpdate"
      ></video>
    </div>

    <div class="progress-card">
      <h3>学习进度</h3>
      <p>{{ progressText }}</p>
      <button class="primary" type="button" @click="loadProgress">重新加载进度</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const videoId = String(route.params.videoId ?? '');
const videoRef = ref<HTMLVideoElement | null>(null);
const progressText = ref('等待加载中...');

const videoSrc = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';

const loadProgress = async () => {
  progressText.value = '正在加载学习进度...';
  await new Promise((resolve) => setTimeout(resolve, 500));
  progressText.value = '已恢复到 25%（mock）';
  if (videoRef.value) {
    videoRef.value.currentTime = 6;
  }
};

const reportProgress = (currentTime: number, duration: number) => {
  const ratio = duration ? Math.round((currentTime / duration) * 100) : 0;
  progressText.value = `学习进度：${ratio}%（mock 上报）`;
};

const handleTimeUpdate = () => {
  if (!videoRef.value) return;
  reportProgress(videoRef.value.currentTime, videoRef.value.duration);
};

onMounted(() => {
  loadProgress();
});
</script>

<style scoped>
.player {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.title {
  display: flex;
  align-items: center;
  gap: 12px;
}

.back {
  border: none;
  background: #e5e7f0;
  color: #1f2937;
  padding: 8px 12px;
  border-radius: 10px;
}

h2 {
  margin: 0;
  font-size: 18px;
}

.title p {
  margin: 4px 0 0;
  font-size: 12px;
  color: #6b7280;
}

.video-wrapper {
  background: #0f172a;
  border-radius: 16px;
  padding: 12px;
}

.video {
  width: 100%;
  border-radius: 12px;
}

.progress-card {
  background: #ffffff;
  border-radius: 14px;
  padding: 16px;
  border: 1px solid #e6e8ef;
}

.progress-card h3 {
  margin: 0 0 8px;
  font-size: 16px;
}

.progress-card p {
  margin: 0 0 12px;
  font-size: 13px;
  color: #6b7280;
}

.primary {
  padding: 10px 14px;
  border-radius: 12px;
  border: none;
  background: #3b82f6;
  color: #ffffff;
}
</style>
