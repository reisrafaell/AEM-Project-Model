export const state = () => ({
  activeItem: '',
  formFields: {}
})

export const mutations = {
  setActive(state, payload) {
    state.activeItem = payload
  },
  setFormFields(state, payload) {
    const { formFields } = state
    state.formFields = { ...formFields, ...payload }
  }
}
