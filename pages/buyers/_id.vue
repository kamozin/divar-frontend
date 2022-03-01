<template>
  <div>
    <!--begin::Toolbar-->
    <toolbar page="Update Buyer" page-create="/buyers"></toolbar>
    <!--end::Toolbar-->
    <div id="kt_content_container" class="d-flex flex-column-fluid align-items-start container-xxl">
      <!--begin::Post-->
      <div class="content flex-row-fluid" id="kt_content">

        <!--begin::Toolbar-->
        <div class="my-5">
          <allert-success v-if="successCreate" title="Успешно" message="Запись успешно обновлена"></allert-success>
        </div>
        <!--end::Toolbar-->
        <!--begin::Row-->
        <div class="row g-6 g-xl-9">
          <div class="py-5">
            <form @submit.prevent="updateRecord">
              <div class="input-group mb-5">
                <input type="text" class="form-control" v-model="form.name" required placeholder="Наименование"/>
              </div>
              <div class="input-group mb-5">
                <input type="text" class="form-control" v-model="form.inn" required placeholder="ИНН"/>
              </div>
              <div class="input-group mb-5">
                <input type="text" class="form-control" v-model="form.kpp" required placeholder="КПП"/>
              </div>
              <div class="input-group mb-5">
                <input type="text" class="form-control" v-model="form.ogrn" required placeholder="ОГРН"/>
              </div>
              <div class="input-group mb-5">
                <input type="text" class="form-control" v-model="form.address" required placeholder="Адрес"/>
              </div>
              <div class="input-group mb-5">
                <input type="text" class="form-control" v-model="form.zip_code" required placeholder="Индекс"/>
              </div>
              <div class="input-group mb-5">
                <input type="text" class="form-control" v-model="form.bank_details" required placeholder="Банк"/>
              </div>
              <div class="input-group mb-5">
                <input type="text" class="form-control" v-model="form.bic" required placeholder="Банк"/>
              </div>
              <div class="input-group mb-5">
                <input type="text" class="form-control" v-model="form.bank_address" required placeholder="Адрес банка"/>
              </div>
              <div class="input-group mb-5">
                <input type="text" class="form-control" v-model="form.bank_account" required placeholder="Счет"/>
              </div>
              <div class="input-group mb-5">
                <input type="text" class="form-control" v-model="form.account_us" required placeholder="Счет"/>
              </div>
              <div class="input-group mb-5">
                <input type="text" class="form-control" v-model="form.account_eu" required placeholder="Счет"/>
              </div>
              <div class="input-group mb-5">
                <input type="text" class="form-control" v-model="form.corr_account" required placeholder="Счет"/>
              </div>
              <div class="input-group mb-5">
                <input type="text" class="form-control" v-model="form.where_corr_account" required placeholder="Счет"/>
              </div>
              <div class="input-group mb-5">
                <input type="text" class="form-control" v-model="form.swift_code" required placeholder="Swift code"/>
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
  name: 'BuyerUpdate',
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

  mounted() {
    this.getData();
  },

  methods: {
    getData() {

      this.$axios.$get('/buyer/'+this.$route.params.id)
        .then(response => {
          if (response.result == true) {
            this.form=response.data;
          }
        })
        .catch(error => {
        })
    },

    updateRecord () {
      this.successCreate = false;
      this.$axios.$patch('/buyer/'+this.form.id, this.form)
        .then(response => {
          console.log(response)
          if (response.result == true) {
            this.successCreate = true;
          }
        })
        .catch(error => {

        })
    }
  }
}
</script>
