import { createRouter, createWebHashHistory } from 'vue-router'

export const featureRoutes = {
  path: '/',
  component: () => import('@/layout/index.vue'),
  children: [
    {
      path: 'm3u8-player',
      component: () => import('@/views/m3u8-player.vue'),
      meta: {
        title: '🔥 m3u8 在线播放器'
      }
    },
    {
      path: 'radix',
      component: () => import('@/views/radix.vue'),
      meta: {
        title: '🔥 进制转换'
      }
    },
    {
      path: 'color',
      component: () => import('@/views/color/index.vue'),
      meta: {
        title: '🔥 颜色工具集'
      }
    },
    {
      path: 'markdown',
      component: () => import('@/views/markdown.vue'),
      meta: {
        title: '🔥 markdown'
      }
    },
    {
      path: 'events-keycode',
      component: () => import('@/views/events-keycode.vue'),
      meta: {
        title: '🔥 events-keycode'
      }
    },
    {
      path: 'cursor',
      component: () => import('@/views/cursor.vue'),
      meta: {
        title: '🔥 cursor'
      }
    },
    {
      path: 'fake-data',
      component: () => import('@/views/fake-data.vue'),
      meta: {
        title: '🔥 fake-data'
      }
    },
    {
      path: 'box-shadow',
      component: () => import('@/views/box-shadow.vue'),
      meta: {
        title: '🔥 box-shadow'
      }
    },
    {
      path: 'border-radius',
      component: () => import('@/views/border-radius.vue'),
      meta: {
        title: '🔥 border-radius'
      }
    },
    {
      path: 'codec',
      component: () => import('@/views/codec/index.vue'),
      meta: {
        title: '🔥 编码器'
      }
    }
  ]
}

export const routes = [
  {
    path: '/',
    component: () => import('@/views/index/index.vue'),
    meta: {
      title: "Vfan Lee's Tools"
    }
  },
  {
    path: '/tip',
    component: () => import('@/views/tip.vue')
  },
  featureRoutes
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
