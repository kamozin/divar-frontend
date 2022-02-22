<template>
  <div>
    <!--begin::Toolbar-->
    <toolbar></toolbar>
    <!--end::Toolbar-->
    <div id="kt_content_container" class="d-flex flex-column-fluid align-items-start container-xxl">
      <!--begin::Post-->
      <div class="content flex-row-fluid" id="kt_content">

        <!--begin::Toolbar-->
        <div class="d-flex flex-wrap flex-stack my-5">
          <!--begin::Heading-->
          <h2 class="fs-2 fw-bold my-2">Projects
            <span class="fs-6 text-gray-400 ms-1">by Status</span></h2>
          <!--end::Heading-->
          <!--begin::Controls-->
          <div class="d-flex flex-wrap my-1">
            <!--begin::Select wrapper-->
            <div class="m-0">
              <!--begin::Select-->
              <select name="status" data-control="select2" data-hide-search="true"
                      class="form-select form-select-sm form-select-solid fw-bolder w-125px">
                <option value="Active" selected="selected">Active</option>
                <option value="Approved">In Progress</option>
                <option value="Declined">To Do</option>
                <option value="In Progress">Completed</option>
              </select>
              <!--end::Select-->
            </div>
            <!--end::Select wrapper-->
          </div>
          <!--end::Controls-->
        </div>
        <!--end::Toolbar-->
        <!--begin::Row-->
        <div class="row g-6 g-xl-9">
          <div class="py-5">
            <table class="table table-row-dashed table-row-gray-300 gy-7">
              <thead>
              <tr class="fw-bolder fs-6 text-gray-800">
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
              </tr>
              <tr>
                <td>Garrett Winters</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>63</td>
                <td>2011/07/25</td>
                <td>$170,750</td>
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
export default {
  name: 'IndexPage'
}
</script>
