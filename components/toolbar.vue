<template>
  <!--begin::Toolbar-->
  <div class="toolbar py-5 py-lg-5" id="kt_toolbar">
    <!--begin::Container-->
    <div id="kt_toolbar_container" class="container-xxl d-flex flex-stack flex-wrap">
      <!--begin::Page title-->
      <div class="page-title d-flex flex-column me-3">
        <!--begin::Title-->
        <h1 class="d-flex text-dark fw-bolder my-1 fs-3">{{ page }}</h1>
        <!--end::Title-->
        <!--begin::Breadcrumb-->

        <!--end::Breadcrumb-->
      </div>
      <!--end::Page title-->
      <!--begin::Actions-->
      <div class="d-flex align-items-center py-2 py-md-1">

        <!--begin::Button-->
        <nuxt-link :to="pageCreate+'/create'" class="btn btn-primary fw-bolder" >Create Record</nuxt-link>
        <!--end::Button-->
      </div>
      <!--end::Actions-->
    </div>
    <!--end::Container-->
  </div>
  <!--end::Toolbar-->
</template>
<script>
export default {
  name:"toolBarPage",
  props:[
    'page',
    'pageCreate'
  ]
}
</script>
