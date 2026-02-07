<template>
  <section>
    <div class="title">
      <button class="back" type="button" @click="router.back()">返回</button>
      <h2>{{ subjectName }}</h2>
    </div>
    <div class="list">
      <div v-for="course in courses" :key="course.id" class="card">
        <div>
          <h3>{{ course.title }}</h3>
          <p>{{ course.summary }}</p>
        </div>
        <router-link class="primary" :to="`/video/${course.videoId}`">去学习</router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const subjectName = computed(() => {
  const nameMap: Record<string, string> = {
    english: '英语课程',
    math: '奥数课程',
    writing: '作文课程',
  };
  return nameMap[String(route.params.subjectId)] ?? '课程列表';
});

const courses = computed(() => {
  const subjectId = String(route.params.subjectId);
  const base = [
    {
      id: `${subjectId}-01`,
      title: '核心知识点 01',
      summary: '课程目标与学习方法导览。',
      videoId: `${subjectId}-video-1`,
    },
    {
      id: `${subjectId}-02`,
      title: '核心知识点 02',
      summary: '关键案例与练习讲解。',
      videoId: `${subjectId}-video-2`,
    },
    {
      id: `${subjectId}-03`,
      title: '专项提升 03',
      summary: '结合实际题型的提升练习。',
      videoId: `${subjectId}-video-3`,
    },
  ];
  return base;
});
</script>

<style scoped>
.title {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.back {
  border: none;
  background: #e5e7f0;
  color: #1f2937;
  padding: 8px 12px;
  border-radius: 10px;
}

h2 {
  font-size: 18px;
  margin: 0;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.card {
  background: #ffffff;
  border-radius: 14px;
  padding: 16px;
  border: 1px solid #e6e8ef;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.card h3 {
  margin: 0 0 6px;
  font-size: 16px;
}

.card p {
  margin: 0;
  font-size: 13px;
  color: #6b7280;
}

.primary {
  text-decoration: none;
  display: inline-flex;
  justify-content: center;
  padding: 10px 14px;
  border-radius: 12px;
  background: #10b981;
  color: #ffffff;
  font-size: 14px;
}
</style>
