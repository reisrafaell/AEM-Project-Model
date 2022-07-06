<template>
  <div></div>
</template>

<script>
import ToggleBackgroundColorMixins from '@/mixins/ToggleBackgroundColor'
export default {
  mixins: [ToggleBackgroundColorMixins],
  props: {
    background: {
      type: String,
      default: 'light-gray'
    }
  }
}
</script>
