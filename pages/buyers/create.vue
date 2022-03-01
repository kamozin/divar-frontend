<template>
  <div>
    <!--begin::Toolbar-->
    <toolbar page="Create Buyer" page-create="/sellers"></toolbar>
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
                <input type="text" class="form-control" v-model="form.bic" required placeholder="БИК"/>
              </div>
              <div class="input-group mb-5">
                <input type="text" class="form-control" v-model="form.bank_address" required placeholder="Адрес банка"/>
              </div>
              <div class="input-group mb-5">
                <input type="text" class="form-control" v-model="form.bank_account" required placeholder="Счет"/>
              </div>
              <div class="input-group mb-5">
                <input type="text" class="form-control" v-model="form.account_us" required placeholder="Счет US"/>
              </div>
              <div class="input-group mb-5">
                <input type="text" class="form-control" v-model="form.account_eu" required placeholder="Счет EU"/>
              </div>
              <div class="input-group mb-5">
                <input type="text" class="form-control" v-model="form.corr_account" required placeholder="Корр. счет"/>
              </div>
              <div class="input-group mb-5">
                <input type="text" class="form-control" v-model="form.where_corr_account" required placeholder="Где"/>
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
  name: 'BuyerCreate',
  components: {AllertSuccess, ValidationProvider},
  data() {
    return {
      form: {
        name: '',
        inn: '',
        kpp: '',
        ogrn: '',
        address: '',
        zip_code: '',
        bank_details: '',
        bic: '',
        bank_address: '',
        bank_account: '',
        account_us: '',
        account_eu: '',
        corr_account: '',
        where_corr_account: '',
        swift_code: '',
      },
      successCreate: false
    }
  },

  methods: {
    saveData() {
      this.successCreate = false;
      this.$axios.$post('/buyer', this.form)
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
