<template>
  <div>
    <!--begin::Toolbar-->
    <toolbar page="Create Product" page-create="products"></toolbar>
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
                <input type="text" class="form-control" v-model="form.title_ru" required placeholder="Наименование на русском"/>
              </div>
              <div class="input-group mb-5">
                <input type="text" class="form-control" v-model="form.title" required placeholder="Наименование на английском"/>
              </div>
              <div class="input-group mb-5">
                <input type="text" class="form-control" v-model="form.code" required placeholder="ТН ВЭД"/>
              </div>
              <div class="input-group mb-5">
                <input type="text" class="form-control" v-model="form.foreign_code" required placeholder="HS Code"/>
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
  name: 'PackageCreate',
  components: {AllertSuccess, ValidationProvider},
  data() {
    return {
      form: {
        title: '',
        title_ru: '',
        code:'',
        foreign_code:''
      },
      successCreate: false
    }
  },

  methods: {
    saveData() {
      this.successCreate = false;
      this.$axios.$post('/products', this.form)
        .then(response => {
          console.log(response)
          if (response.result == true) {
            this.successCreate = true;
            this.form.title = '';
            this.form.title_ru = '';
            this.form.code = '';
            this.form.foreign_code = '';
          }
        })
        .catch(error => {

        })
    }
  }
}
</script>
