<template>
  <section class="card">
    <h2>登录</h2>
    <form class="form" @submit.prevent="handleLogin">
      <label class="field">
        <span>用户名</span>
        <input v-model="form.username" type="text" placeholder="请输入用户名" required />
      </label>
      <label class="field">
        <span>密码</span>
        <input v-model="form.password" type="password" placeholder="请输入密码" required />
      </label>
      <button class="primary" type="submit" :disabled="loading">
        {{ loading ? '登录中...' : '登录' }}
      </button>
    </form>
    <p class="tips">提示：目前为 MVP，登录接口已 mock。</p>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const loading = ref(false);
const form = reactive({
  username: '',
  password: '',
});

const handleLogin = async () => {
  if (loading.value) return;
  loading.value = true;
  await new Promise((resolve) => setTimeout(resolve, 600));
  localStorage.setItem('video_ls_token', `mock-token-${form.username}`);
  loading.value = false;
  router.push('/subjects');
};
</script>

<style scoped>
.card {
  background: #ffffff;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
}

h2 {
  font-size: 20px;
  margin-bottom: 16px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  color: #5b5f73;
}

.field input {
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid #d7dbe8;
  font-size: 16px;
}

.primary {
  padding: 12px 16px;
  border-radius: 12px;
  border: none;
  background: #3b82f6;
  color: #ffffff;
  font-size: 16px;
}

.primary:disabled {
  opacity: 0.7;
}

.tips {
  margin-top: 12px;
  font-size: 12px;
  color: #8b90a0;
}
</style>
