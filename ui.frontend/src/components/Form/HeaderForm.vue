<template>
  <header class="header-form">
    <h4 class="header-form__title">{{title}}</h4>
    <h2 class="header-form__description">{{description}}</h2>

  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Forms'
    },
    description: {
      type: String,
      default: 'First Tab'
    }
  }
}
</script>

<style lang="scss" scoped>
@import './headerForm.scss';
</style>
