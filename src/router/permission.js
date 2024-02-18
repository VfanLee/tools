import router from '@/router'

router.beforeEach((to, form, next) => {
  next()
})

router.afterEach((to, form, failure) => {
  document.title = to.meta.title || "Vfan Lee's Tools"
})
