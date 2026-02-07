<template>
  <div class="app">
    <header class="app-header">
      <h1>学生视频学习平台</h1>
    </header>
    <main class="app-main">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  background: #f6f7fb;
  color: #1c1c1e;
  font-family: "PingFang SC", "Helvetica Neue", Arial, sans-serif;
}

.app-header {
  padding: 16px 20px 8px;
  background: #ffffff;
  border-bottom: 1px solid #e6e8ef;
}

.app-header h1 {
  font-size: 18px;
  margin: 0;
}

.app-main {
  padding: 16px 20px 32px;
}
</style>
