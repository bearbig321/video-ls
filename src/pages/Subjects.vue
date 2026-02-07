<template>
  <section>
    <h2>选择学科</h2>
    <div class="list">
      <router-link
        v-for="subject in subjects"
        :key="subject.id"
        class="card"
        :to="`/courses/${subject.id}`"
      >
        <div>
          <h3>{{ subject.name }}</h3>
          <p>{{ subject.desc }}</p>
        </div>
        <span class="arrow">›</span>
      </router-link>
    </div>
  </section>
</template>

<script setup lang="ts">
const subjects = [
  { id: 'english', name: '英语', desc: '词汇 + 听力 + 阅读' },
  { id: 'math', name: '奥数', desc: '逻辑思维与竞赛专项' },
  { id: 'writing', name: '作文', desc: '结构化表达训练' },
];
</script>

<style scoped>
h2 {
  font-size: 18px;
  margin-bottom: 12px;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: inherit;
  border: 1px solid #e6e8ef;
}

.card h3 {
  margin: 0 0 6px;
  font-size: 16px;
}

.card p {
  margin: 0;
  color: #6b7280;
  font-size: 13px;
}

.arrow {
  font-size: 22px;
  color: #c0c4d4;
}
</style>
