import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/artist/:name',
    name: 'Artist',
    component: () => import('@/views/Artist.vue'),
  },
  {
    path: '/playlist/:id',
    name: 'Playlist',
    component: () => import('@/views/Playlist.vue'),
  },
  {
    path: '/404',
    name: 'NotFoundPage',
    component: () => import('@/views/NotFoundPage.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404',
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
