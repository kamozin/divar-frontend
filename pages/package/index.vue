<template>
  <div>
    <!--begin::Toolbar-->
    <toolbar page="Package" page-create="/package"></toolbar>
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
                <th>Name En</th>
                <th>Actions</th>
              </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in packages">
                  <td>{{ item.title }}</td>
                  <td>{{ item.title_en }}</td>
                  <td>
                    <Nuxt-link class="btn btn-primary" :to="'package/'+item.id">Edit</Nuxt-link>
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
  name: 'PackageList',

  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.getPackages();
  },
  computed:{
    packages () {
      return this.$store.state.package.listPackage
    }
  },
  methods: {
    ...mapActions({
      getPackages: 'package/getPackages',
    })
  }
}
</script>
