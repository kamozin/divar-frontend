<template>
  <!--begin::Alert-->
  <div class="alert alert-primary">
    <!--begin::Wrapper-->
    <div class="d-flex flex-column">
      <!--begin::Title-->
      <h4 class="mb-1 text-dark">{{title}}</h4>
      <!--end::Title-->
      <!--begin::Content-->
      <span>{{message}}</span>
      <!--end::Content-->
    </div>
    <!--end::Wrapper-->
  </div>
  <!--end::Alert-->
</template>

<script>
export default {

  props:[
    'title',
    'message'
  ]

}
</script>
