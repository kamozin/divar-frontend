export const state = () => ({
  listPackage: [],
  successCreate: false
})

export const mutations = {
  add(state, text) {

  },

  toggleAllert(state, value) {
    todo.done = !todo.done
  }
}

export const getters = {}


export const actions = {
  save (state, params) {
    this.$axios.$post('/package', params)
      .then(response => {
        if (response.result == true) {
          this.$store.successCreate = true;
          this.form.title = '';
          this.form.title_en = '';
        }
      })
      .catch(error => {

      })
  }
}
