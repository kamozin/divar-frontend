<template>
  <div>
    <!--begin::Toolbar-->
    <toolbar page="Create Document" page-create="/documents"></toolbar>
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
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group mb-5">
                    <label>Number Document</label>
                    <input type="text" class="form-control" v-model="form.number_doc" required
                           placeholder="Number Document"/>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group mb-5">
                    <label>Date Document</label>
                    <input type="date" class="form-control" v-model="form.dt_document" required
                           placeholder="Date Document"/>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group mb-5">
                    <label>Contract</label>
                    <select @change="getContract($event)" v-model="form.contract_id"
                            class="form-control form-control-solid">
                      <option v-for="(item, index) in contracts" :value="item.id">{{ item.number_contract }}</option>
                    </select>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group mb-5">
                    <label>Delivery Terms</label>
                    <select v-model="form.deliveryTerms" class="form-control form-control-solid">
                      <option v-for="(item, index) in deliveryTerms" :value="item.title">{{ item.title }}</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group mb-5">
                    <label>Truck Number</label>
                    <input type="text" class="form-control" v-model="form.truck_number" required
                           placeholder="Truck Number"/>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group mb-5">
                    <label>Trailer Number</label>
                    <input type="text" class="form-control" v-model="form.trailer_number" required
                           placeholder="Trailer Number"/>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-3">
                  <div class="form-group mb-5">
                    <label>Product</label>
                    <select v-model="selectedProduct" class="form-control form-control-solid">
                      <option v-for="(item, index) in products" :value="item.id">{{ item.title }}</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="form-group ">
                    <label></label>
                    <button @click.prevent="addProductDoc()" type="submit" class="form-control btn btn-success">Add
                      Product
                    </button>
                  </div>
                </div>
              </div>


              <div style="border-bottom: 2px #4d4d4d solid; margin-bottom: 15px;" v-for="(item, index) in docsProducts">
                <div class="row">
                  <div class="col-md-3">
                    <div class="form-group mb-5">
                      <label>Product</label>
                      <input type="text" class="form-control" v-model="docsProducts[index].product.title" required
                             placeholder="Package Count"/>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-group mb-5">
                      <label>Package</label>
                      <select v-model="docsProducts[index].package_id" class="form-control form-control-solid">
                        <option v-for="(item, index) in package" :value="item.id">{{ item.title }}</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-group mb-5">
                      <label>Package Count</label>
                      <input type="text" class="form-control" v-model="docsProducts[index].package_count" required
                             placeholder="Package Count"/>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-3">
                    <div class="form-group mb-5">
                      <label>gross weight</label>
                      <input type="text" class="form-control" v-model="docsProducts[index].weight_brutto" required
                             placeholder="gross weight"/>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-group mb-5">
                      <label>net weight</label>
                      <input type="text" class="form-control" v-model="docsProducts[index].weight_netto" required
                             placeholder="net weight"/>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-group mb-5">
                      <label>Price</label>
                      <input type="text" class="form-control" v-model="docsProducts[index].price" required
                             placeholder="price"/>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-group mb-5">
                      <label></label>
                      <button @click.prevent="deleteProductDoc(index)" type="submit"
                              class="form-control btn btn-danger">Remove
                        Product
                      </button>
                    </div>
                  </div>
                </div>
              </div>


              <div class="form-group mb-5">
                <button type="submit" class="btn btn-success">Сохранить</button>
              </div>
            </form>
          </div>
          <div class="py-5">
            <invoice :doc="form" :buyer="contract.buyer"  :seller="contract.seller"></invoice>
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
import invoice from "~/components/docs/invoice"
export default {
  name: 'DocumentCreate',
  components: {AllertSuccess, ValidationProvider, invoice},
  data() {
    return {
      form: {
        number_doc: '',
        contract_id: '',
        dt_document: '',
        truck_number: '',
        deliveryTerms: '',
        trailer_number: '',
      },
      products: [],
      package: [],
      contracts: [],
      contract:{},
      successCreate: false,
      sender: [],
      docsProducts: [],
      selectedProduct: 0,
      deliveryTerms: []
    }
  },

  created() {
    this.getContracts()
    this.getProducts()
    this.getPackage()
    this.getDeliveryTerms()
  },

  methods: {
    addProductDoc() {
      if (this.selectedProduct === 0) {
        alert('Select product')
        return false;
      }


      const product = this.products.filter(item => {
        return item.id === this.selectedProduct
      });

      const object = {
        product: product[0],
        package_id: 0,
        count_package: 0,
        weight_netto: 0,
        weight_brutto: 0,
        price: 0
      }
      this.docsProducts.push(object);
      this.selectedProduct = 0
    },

    deleteProductDoc(index) {
      this.docsProducts.splice(index, 1);
    },


    getProducts() {
      this.$axios.get('/products')
        .then(response => {
          console.log(response)
          if (response.data.result == true) {
            this.products = response.data.data
          }
        })
        .catch(error => {

        })
    },

    getPackage() {
      this.$axios.get('/package')
        .then(response => {
          console.log(response)
          if (response.data.result == true) {
            this.package = response.data.data
          }
        })
        .catch(error => {

        })
    },

    getDeliveryTerms() {
      this.$axios.get('/delivery-terms')
        .then(response => {
          console.log(response)
          if (response.data.result == true) {
            this.deliveryTerms = response.data.data
          }
        })
        .catch(error => {

        })
    },

    getContract(e) {
      const id = e.target.value;
      this.$axios.get('/getContractInfo/' + id)
        .then(response => {
          this.contract = response.data.data;
        })
        .catch(error => {

        })
    },

    getContracts() {
      this.$axios.get('/contracts')
        .then(response => {
          console.log(response)
          if (response.data.result == true) {
            this.contracts = response.data.data
          }
        })
        .catch(error => {

        })
    },

    saveData() {
      this.successCreate = false;
      this.$axios.$post('/contracts', this.form)
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
