<template>
  <div class="d-flex flex-column flex-root">
    <!--begin::Page-->
    <div class="page d-flex flex-row flex-column-fluid">
      <!--begin::Wrapper-->
      <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
        <!--begin::Header-->
          <Header></Header>
        <!--end::Header-->

        <!--begin::Container-->
          <Nuxt />
        <!--end::Container-->
        <!--begin::Footer-->
          <Footer />
        <!--end::Footer-->
      </div>
      <!--end::Wrapper-->
    </div>
    <!--end::Page-->
  </div>
</template>
<script>
import Toolbar from "~/components/toolbar";
import Header from "~/components/header";
export default {
  components: {Header, Toolbar}
}
</script>
