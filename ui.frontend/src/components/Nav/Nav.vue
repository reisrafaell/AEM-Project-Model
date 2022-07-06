<template>
  <div></div>
</template>

<script>
export default {
  props: {
    pageName: {
      type: String,
      default: ''
    },
    redirectPath: {
      type: String,
      default: '/content/vue/home.html'
    }
  },
  watch: {
    pageName () {
      this.checkUserLoginLocalStorage()
    }
  },
  mounted () {
    this.checkUserLoginLocalStorage()
  },

  methods: {
    checkUserLoginLocalStorage () {
      const userLogin = JSON.parse(localStorage.getItem('userLogin'))
      const { isInEditor } = this.$attrs.componentProperties
      const { pageName, redirectPath } = this

      if (!isInEditor) {
        if (pageName === 'login' && userLogin && userLogin.login) {
          this.$store.commit('loginManager/setLogin', userLogin)
          window.location.pathname = redirectPath
        } else if (pageName === 'home' && (!userLogin || (userLogin && !userLogin.login))) {
          window.location.pathname = redirectPath
        }
      }
    }
  }
}
</script>
