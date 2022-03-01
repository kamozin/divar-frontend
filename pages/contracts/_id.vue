<template>
  <div>
    <!--begin::Toolbar-->
    <toolbar page="Update Package" page-create="/contracts"></toolbar>
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
              <div class="form-group mb-5">
                <label>Number Contract</label>
                <input type="text" class="form-control" v-model="form.number_contract" required placeholder="Number Contract"/>
              </div>
              <div class="form-group mb-5">
                <label>Date Contract</label>
                <input type="date" class="form-control" v-model="form.dt_contract" required placeholder="Date Contract"/>
              </div>
              <div class="form-group mb-5">
                <label>Страна происхождения</label>
                <input type="text" class="form-control" v-model="form.country_of_origin" required placeholder="Страна происхождения"/>
              </div>
              <div class="form-group mb-5">
                <label>Страна происхождения En</label>
                <input type="text" class="form-control" v-model="form.country_of_origin_en" required placeholder="Страна происхождения En"/>
              </div>
              <div class="form-group mb-5">
                <label>Seller</label>
                <select v-model="form.seller_id" class="form-control form-control-solid">
                  <option  :selected="item.id==form.seller_id" v-for="(item, index) in sellers" :value="item.id">{{item.name}}</option>
                </select>
              </div>
              <div class="form-group mb-5">
                <label>Buyer</label>
                <select v-model="form.buyer_id" class="form-control form-control-solid">
                  <option :selected="item.id==form.buyer_id" v-for="(item, index) in buyers" :value="item.id">{{item.name}}</option>
                </select>
              </div>
              <div class="form-group mb-5">
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
  name: 'ContractUpdate',
  components: {AllertSuccess, ValidationProvider},
  data() {
    return {
      form: {
        number_contract: '',
        dt_contract: '',
        buyer_id: '',
        seller_id: '',
        country_of_origin: '',
        country_of_origin_en: ''
      },
      successCreate: false
    }
  },

  mounted() {
    this.getSellers()
    this.getBuyers()
    this.getData();
  },


  methods: {
    getData() {

      this.$axios.$get('/contracts/'+this.$route.params.id)
        .then(response => {
          if (response.result == true) {
            this.form=response.data;
          }
        })
        .catch(error => {
        })
    },

    getSellers () {
      this.$axios.get('/seller')
        .then(response => {
          console.log(response)
          if (response.data.result == true) {
            this.sellers=response.data.data;
          }
        })
        .catch(error => {

        })
    },

    getBuyers () {
      this.$axios.get('/buyer')
        .then(response => {
          console.log(response)
          if (response.data.result == true) {
            this.buyers=response.data.data
          }
        })
        .catch(error => {

        })
    },

    updateRecord () {
      this.successCreate = false;
      this.$axios.$patch('/contracts/'+this.form.id, this.form)
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
