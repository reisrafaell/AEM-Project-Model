<template>
  <div class="input-group">
    <template v-if="hasBirthday">
      <SelectBirthday :item="item" />
    </template>

    <template v-else>
      <label :for="idName" class="input-group__label"
        >{{ item.label }} {{ item.required ? '*' : '' }}</label
      >

      <input
        v-if="item.type === 'phone'"
        v-model.lazy="formFields[idName]"
        type="tel"
        :id="idName"
        :name="item.label"
        v-mask="['(##) ####-####', '(##) #####-####']"
        class="input-group__input"
        :required="item.required"
      />

      <input
        v-else
        v-model.lazy="formFields[idName]"
        :type="item.type"
        :id="idName"
        :name="item.label"
        class="input-group__input"
        :required="item.required"
      />
    </template>
  </div>
</template>

<script>
import SelectBirthday from './SelectBirthday.vue'
export default {
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      formFields: {}
    }
  },
  computed: {
    idName() {
      const { label } = this.item
      return label ? label.toLowerCase().replace(' ', '-') : ''
    },
    hasBirthday() {
      const { type } = this.item
      return type === 'birthday'
    }
  },
  components: { SelectBirthday },
  watch: {
    formFields: {
      handler(newValue) {
        if (newValue) {
          this.$store.commit('formManager/setFormFields', newValue)
        }
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import './inputGroup.scss';
</style>
