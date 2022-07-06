<template>
  <ul v-if="navs.length" class="nav-tabs">
    <li
      class="nav-tabs__item"
      :class="{ 'nav-tabs__item--active': isActive(item.tabName) }"
      v-for="(item, index) in navs"
      :key="`nav-${index}`"
    >
      <a
        :data-testid="`nav-tabs-${index}`"
        class="nav-tabs__link"
        :class="{ 'nav-tabs__link--active': isActive(item.tabName) }"
        :href="`#${idName(item.tabName)}`"
        @click.prevent="setActive(item.tabName)"
        >{{ item.tabName }}</a
      >
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    navs: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    ...mapState('formManager', ['activeItem'])
  },

  watch: {
    navs (newValue) {
      if (!this.activeItem && newValue.length) this.firstActiveItem()
    }
  },

  methods: {
    firstActiveItem () {
      const { navs } = this
      if (navs.length) this.setActive(navs[0].tabName)
    },
    setActive (item) {
      const name = this.idName(item)
      this.$store.commit('formManager/setActive', name)
    },
    isActive (item) {
      const name = this.idName(item)
      return this.activeItem === name
    },
    idName (link) {
      return link ? link.toLowerCase().replace(' ', '-') : ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import './navTabs.scss';
</style>
