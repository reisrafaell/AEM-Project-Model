export default {
  methods: {
    setActive(item) {
      const name = this.idName(item)
      this.$store.commit('formManager/setActive', name)
    },
    idName(link) {
      return link ? link.toLowerCase().replace(' ', '-') : ''
    }
  }
}
