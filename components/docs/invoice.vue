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

      <h2>SENDER:</h2>
      <table v-if="sender">

        <tr>
          <td>
            {{sender.name}}
          </td>
        </tr>
        <tr>
          <td v-if="seller">
            BY ORDER: {{seller.name}}
          </td>
        </tr>
        <tr>
          <td>
            Address: {{sender.address}}
          </td>
        </tr>

      </table>

      <h2>BUYER:</h2>
      <table v-if="buyer">

        <tr>
          <td>
            {{buyer.name}}
          </td>
        </tr>
        <tr>
          <td v-if="seller">
            INN: {{buyer.inn}} KPP: {{buyer.kpp}}
          </td>
        </tr>
        <tr>
          <td>
            Address: {{buyer.address}}
          </td>
        </tr>
        <tr>
          <td>
            OGRN: {{buyer.address}}
          </td>
        </tr>
        <tr>
          <td>
            Bank Details: {{buyer.address}}
          </td>
        </tr>
        <tr>
          <td>
            Address: {{buyer.bank_address}}
          </td>
        </tr>
        <tr>
          <td>
            Bank Account: {{buyer.bank_account}}
          </td>
        </tr>
        <tr>
          <td>
            Corr.Account: {{buyer.corr_account}}
          </td>
        </tr>

      </table>




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
    'sender'
  ],
}
</script>
