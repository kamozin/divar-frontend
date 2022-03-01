<template>
  <div>
    <!--begin::Toolbar-->
    <toolbar page="Seller" page-create="/sellers"></toolbar>
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
                <th>Name</th>
                <th>E-mail</th>
                <th>Zip-code</th>
                <th>Actions</th>
              </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in list">
                  <td>{{ item.name }}</td>
                  <td>{{ item.email }}</td>
                  <td>{{ item.zip_code }}</td>
                  <td>
                    <Nuxt-link class="btn btn-primary" :to="'sellers/'+item.id">Edit</Nuxt-link>
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
export default {
  name: 'SellerList',

  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios.$get('/seller', this.form)
        .then(response => {
          console.log(response.data)
          this.list = response.data;
        })
        .catch(error => {

        })
    }
  }
}
</script>
