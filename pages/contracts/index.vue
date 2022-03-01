<template>
  <div>
    <!--begin::Toolbar-->
    <toolbar page="Contracts" page-create="/contracts"></toolbar>
    <!--end::Toolbar-->
    <div id="kt_content_container" class="d-flex flex-column-fluid align-items-start container-xxl">
      <!--begin::Post-->
      <div class="content flex-row-fluid" id="kt_content">

        <!--begin::Row-->
        <div class="row g-6 g-xl-9">
          <div class="py-5">
            <table class="table table-row-dashed table-row-gray-300 gy-7">
              <thead>
              <tr class="fw-bolder fs-6 text-gray-800">
                <th>Contract Number</th>
                <th>Date Contract</th>
                <th>Actions</th>
              </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in contracts">
                  <td>{{ item.number_contract }}</td>
                  <td>{{ item.dt_contract }}</td>
                  <td>
                    <Nuxt-link class="btn btn-primary" :to="'contracts/'+item.id">Edit</Nuxt-link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!--end::Row-->
      </div>
      <!--end::Post-->
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'ContractList',

  data() {
    return {
      contracts: []
    }
  },
  mounted() {
    this.getContracts();
  },

  methods: {
    getContracts () {
      this.$axios.$get('/contracts', this.form)
        .then(response => {
          console.log(response.data)
          this.contracts = response.data;
        })
        .catch(error => {

        })
    }
  }
}
</script>
