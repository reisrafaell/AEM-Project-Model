<template>
  <section class="card-finish">
    <article class="card-finish__body">
      <p class="card-finish__title">{{ title }}</p>
      <p
        class="card-finish__title"
        v-for="(item, name) in formFields"
        :key="name"
      >
        {{ toTitleCase(name) }}:&nbsp;{{ item }}
      </p>
      <button-form
        text="Return"
        :isFinish="true"
        clickButton="finish"
        @click.native="$router.go()"
      />
    </article>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import ButtonForm from './ButtonForm.vue'
export default {
  components: { ButtonForm },
  props: {
    title: {
      type: String,
      default: 'Your data has been sent successfully!'
    }
  },
  computed: {
    ...mapState('formManager', ['formFields'])
  },
  methods: {
    toTitleCase(str) {
      return str.replace('-', ' ').replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import './cardFinish.scss';
</style>
