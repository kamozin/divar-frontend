<template>
  <div>
    <!--begin::Toolbar-->
    <toolbar page="Create Delivery Terms" page-create="/delivery-terms"></toolbar>
    <!--end::Toolbar-->
    <div id="kt_content_container" class="d-flex flex-column-fluid align-items-start container-xxl">
      <!--begin::Post-->
      <div class="content flex-row-fluid" id="kt_content">

        <!--begin::Toolbar-->
        <div class="my-5">
          <allert-success v-if="successCreate" title="Успешно" message="Запись успешно добавлена"></allert-success>
        </div>
        <!--end::Toolbar-->
        <!--begin::Row-->
        <div class="row g-6 g-xl-9">
          <div class="py-5">
            <form @submit.prevent="saveData">
              <div class="input-group mb-5">
                <input type="text" class="form-control" v-model="form.title" required placeholder="Наименование на русском"/>
              </div>
              <div class="input-group mb-5">
                <input type="text" class="form-control" v-model="form.title_en" required placeholder="Наименование на английском"/>
              </div>
              <div class="input-group mb-5">
                <button type="submit"  class="btn btn-success">Сохранить</button>
              </div>
            </form>
          </div>
        </div>
        <!--end::Row-->
      </div>
      <!--end::Post-->
    </div>
  </div>


</template>

<script>
import AllertSuccess from "~/components/allertSuccess";
import {ValidationProvider} from "vee-validate";

export default {
  name: 'deliveryTermsListCreate',
  components: {AllertSuccess, ValidationProvider},
  data() {
    return {
      form: {
        title: '',
        title_en: ''
      },
      successCreate: false
    }
  },

  methods: {
    saveData() {
      this.successCreate = false;
      this.$axios.$post('/delivery-terms', this.form)
        .then(response => {
          console.log(response)
          if (response.result == true) {
            this.successCreate = true;
            this.form.title = '';
            this.form.title_en = '';
          }
        })
        .catch(error => {

        })
    }
  }
}
</script>
