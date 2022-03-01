export const state = () => ({
  listPackage: [],
  formPackage:{},
  successCreate: false
})

export const mutations = {
  SAVE_PACKAGE(state, data) {
    state.listPackage=data;
  }
}

export const getters = {
  getPackage: (state) => (id) => {
    return state.listPackage.find(item => item.id === id)
  }
}


export const actions = {
  getPackages ({ commit }) {
    this.$axios.$get('/package')
      .then(response => {
        commit('SAVE_PACKAGE', response.data)
      })
      .catch(error => {

      })
  },



  savePackage (state, params) {
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
