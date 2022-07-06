<template>
  <div class="select-birthday">
    <p class="select-birthday__title">{{ item.label }} {{ item.required ? '*' : '' }}</p>
    <div class="select-birthday__date">
      <div class="select-birthday__group">
        <label for="day" class="select-birthday__label">Day</label>
        <select
          v-model="day"
          id="day"
          name="day"
          class="select-birthday__select select-birthday__select-day"
          aria-label="Day"
          :required="item.required"
          @change="calcAge()"
        >
          <option disabled value="">Day</option>
          <option v-for="day in days" :key="`day-${day}`" :value="day">
            {{ day }}
          </option>
        </select>
      </div>
      <div class="select-birthday__group">
        <label for="month" class="select-birthday__label">Month</label>
        <select
          v-model="month"
          id="month"
          name="month"
          class="select-birthday__select select-birthday__select-month"
          aria-label="Month"
          :required="item.required"
          @change="calcAge()"
        >
          <option disabled value="">Month</option>
          <option
            v-for="month in months"
            :key="`month-${month}`"
            :value="month"
          >
            {{ month }}
          </option>
        </select>
      </div>
      <div class="select-birthday__group">
        <label for="year" class="select-birthday__label">Year</label>
        <select
          v-model="year"
          id="year"
          name="year"
          class="select-birthday__select select-birthday__select-year"
          aria-label="Year"
          :required="item.required"
          @change="calcAge()"
        >
          <option disabled value="">Year</option>
          <option v-for="year in years" :key="`year-${year}`" :value="year">
            {{ year }}
          </option>
        </select>
      </div>
      <div class="select-birthday__group">
        <label for="age" class="select-birthday__label">Age</label>
        <select
          class="select-birthday__select select-birthday__select-age"
          aria-label="Age"
          disabled
        >
          <option selected>{{ age }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      day: '',
      month: '',
      year: '',
      age: 'Age'
    }
  },
  computed: {
    days () {
      return this.list(1, 31)
    },
    months () {
      return this.list(1, 12)
    },
    years () {
      const date = new Date()
      const year = date.getFullYear()
      return this.list(year - 75, year)
    }
  },
  methods: {
    list (initial, length) {
      const element = []
      for (let index = initial; index <= length; index++) {
        element.push(index)
      }
      return element
    },
    calcAge () {
      const { day, month, year } = this
      if (day && month && year) {
        const date = new Date(`${year}-${month}-${day}`)
        const monthDiff = Date.now() - date.getTime()
        const ageDt = new Date(monthDiff)
        const yearCalc = ageDt.getFullYear()
        const age = Math.abs(yearCalc - 1970)
        this.age = age
        this.setFormFields()
      }
    },

    setFormFields(){
      const { day, month, year, age } = this
      const birthday = `${(`0${day}`).slice(-2)}/${(`0${month}`).slice(-2)}/${year}`
      const formFields = { birthday , age }
      this.$store.commit('formManager/setFormFields', formFields)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './selectBirthday.scss';
</style>
