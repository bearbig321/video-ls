import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '../pages/Login.vue';
import Subjects from '../pages/Subjects.vue';
import Courses from '../pages/Courses.vue';
import VideoPlayer from '../pages/VideoPlayer.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/subjects',
      component: Subjects,
    },
    {
      path: '/courses/:subjectId',
      component: Courses,
      props: true,
    },
    {
      path: '/video/:videoId',
      component: VideoPlayer,
      props: true,
    },
  ],
});

router.beforeEach((to) => {
  const publicRoutes = ['/login'];
  if (publicRoutes.includes(to.path)) {
    return true;
  }
  const token = localStorage.getItem('video_ls_token');
  if (!token) {
    return '/login';
  }
  return true;
});

export default router;
