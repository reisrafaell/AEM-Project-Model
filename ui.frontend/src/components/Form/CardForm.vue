<template>
  <section class="container">
    <section class="card-form">
      <template v-if="isActive('finish')">
        <CardFinish />
      </template>
      <template v-else>
        <article class="card-form__header">
          <p class="card-form__title">Team Sign Up</p>
        </article>
        <NavTabs :navs="navTabs" />
        <article class="card-form__body">
          <div
            class="card-form__pane"
            v-for="(pane, p) in navTabs"
            :key="`pane-${p}`"
            :id="idName(pane.tabName)"
            :class="{ 'card-form__pane--active': isActive(`${pane.tabName}`) }"
          >
            <InputGroup
              v-for="(item, i) in pane.inputs"
              :key="`input-${i}`"
              :item="item"
            />
            <button-form
              v-if="pane.buttonName"
              :text="pane.buttonName"
              :isFinish="checkFinish(navTabs.length, p)"
              :clickButton="clickButton(p)"
            />
          </div>
        </article>
      </template>
    </section>
  </section>
</template>

<script>
import InputGroup from '../micro/InputGroup.vue'
import NavTabs from '../micro/NavTabs.vue'
import ButtonForm from '../micro/ButtonForm.vue'
import { mapState } from 'vuex'
import CardFinish from '../micro/CardFinish.vue'
export default {
  props: {
    navTabs: {
      type: Array,
      default: () => []
    }
  },
  components: { InputGroup, NavTabs, ButtonForm, CardFinish },
  computed: {
    ...mapState('formManager', ['activeItem'])
  },
  methods: {
    isActive(item) {
      const name = this.idName(item)
      return this.activeItem === name
    },
    idName(link) {
      return link ? link.toLowerCase().replace(' ', '-') : ''
    },
    checkFinish(length, index) {
      return length === index + 1
    },
    clickButton(index) {
      const isLast = this.checkFinish(this.navTabs.length, index)
      const tabName = !isLast ? this.navTabs[index + 1].tabName : 'finish'
      return tabName
    }
  }
}
</script>

<style lang="scss" scoped>
@import './cardForm.scss';
</style>
