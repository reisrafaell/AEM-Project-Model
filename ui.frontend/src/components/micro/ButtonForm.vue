<template>
  <section class="button-form">
    <button
      class="button-form__button"
      :class="{ 'button-form__button--finish': isFinish }"
      :title="text"
      @click.prevent="setActive(clickButton)"
    >
      {{ text }}
    </button>
  </section>
</template>

<script>
import SetActiveFormMixins from '@/mixins/SetActiveForm'
export default {
  props: {
    text: {
      type: String,
      default: 'Next'
    },
    isFinish: {
      type: Boolean,
      default: false
    },
    clickButton: {
      type:String,
      default: ''
    }
  },
  mixins: [SetActiveFormMixins]
}
</script>

<style lang="scss" scoped>
@import './buttonForm.scss';
</style>
