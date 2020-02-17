<template>
  <div class="row">
    <div class="content-header">
      <h1>Contas bancárias <small>Gerenciamento de contas</small></h1>
      <div class="grey-text">
        <small>
          <a href="#/">iFinance</a> >
          <span>Suas contas</span>
        </small>
      </div>
    </div>

    <div class="card col s12">
      <div class="card-content">
        <table class="highlight">
          <thead>
            <tr>
              <th>contas</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="account in accounts.data" @click="goTo(account.id)">
              <td class="valign-wrapper">
                {{ account.title }} &nbsp;
                <small>agência: {{ account.agency }} / conta: {{ account.account_number }}  / código do banco:{{ account.bank.code }} </small>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card-action">
        <a href="#/contas/novo">Nova conta</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'accounts',
  methods: {
    goTo: function (id) {
      this.$router.push('/contas/' + id)
    }
  },
  computed: {
    accounts () {
      return this.$store.state.account.accountList
    }
  },
  created () {
    this.$store.dispatch('getAccounts')
  }
}
</script>

<style>
tbody tr {
  cursor: pointer
}
</style>
