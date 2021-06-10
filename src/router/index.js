import { createRouter, createWebHashHistory } from 'vue-router';

import NotFoundPage from '@/views/NotFoundPage.vue';

const routes = [
  {
    path: '/',
    name: 'System',
    component: () => import('@/views/System.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'artist/:name',
        name: 'Artist',
        component: () => import('@/views/Artist.vue'),
      },
      {
        path: 'playlist/:id',
        name: 'Playlist',
        component: () => import('@/views/Playlist.vue'),
      },
    ],
  },
  {
    path: '/subscribe',
    name: 'Subscribe',
    component: () => import('@/views/Subscribe.vue'),
  },
  {
    path: '/404',
    name: 'NotFoundPage',
    component: NotFoundPage,
  },
  {
    path: '/:pathMatch(.*)',
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
