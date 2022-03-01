<template>
  <div class="row">
    <div class="col-md-12">
      <span>No: {{doc.number_doc}}</span>
      <span>Date: {{doc.dt_document}}</span>
      <table v-if="seller">
        <tr>
          <td>
            SELLER:
          </td>
        </tr>
        <tr>
          <td>
            {{seller.name}}
          </td>
        </tr>
        <tr>
          <td>
           Address: {{seller.address}}
          </td>
        </tr>
        <tr>
          <td>
            Zip-cod: {{seller.zip_code}}
          </td>
        </tr>
        <tr>
          <td>
            Bank: {{seller.bank}}
          </td>
        </tr>
        <tr>
          <td>
            Bank Address: {{seller.bank_address}}
          </td>
        </tr>
        <tr>
          <td>
            SWIFT CODE: {{seller.swift_code}}
          </td>
        </tr>
        <tr>
          <td>
            Account No: {{seller.account_number}}
          </td>
        </tr>
        <tr>
          <td>
            E-mail: {{seller.email}}
          </td>
        </tr>
      </table>
      <p>{{doc.deliveryTerms}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'invoiceDoc',
  props: [
    'seller',
    'doc',
    'buyer',
  ],
}
</script>
