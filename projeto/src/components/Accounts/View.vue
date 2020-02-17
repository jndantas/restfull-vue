<template lang="html">
  <div class="row">
    <div class="content-header">
      <h1>Conta título <small>Detalhes</small></h1>
      <div class="grey-text">
        <small>
          <a href="#/">iFinance</a> >
          <a href="#/contas">Suas contas</a> >
          <span>Suas contas</span>
        </small>
      </div>
    </div>

    <div class="card col s12">
      <div class="card-content">
        <div class="row">
          <div class="col s9">
            <div class="card-title">Detalhes da conta</div>
            <p>Agência: {{ account.agency }} / Conta: {{ account.account_number }} </p>
            <p>Banco: {{ bank.title }} - {{ bank.code }}</p>
            <p>Valor inicial da conta: R$ {{ account.balance_initial }}</p>
          </div>
          <div class="col s3 right-align">
            <p>Saldo: <span class="btn disabled">{{ account.balance }}</span></p>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <a :href="'#/contas/' + account.id + '/editar'" class="btn blue">Editar</a>
            <a href="" class="btn red" @click.prevent="remove(account.id)">Excluir</a>
          </div>
        </div>
      </div>
      <div class="card-action">
        <a href="#/contas">Voltar</a>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'accounts-view',
  methods: {
    remove: function (id) {
      this.$store.dispatch('removeAccount', this.$route.params.id)
        .then(() => {
          this.$router.push('/contas')
        })
    }
  },
  computed: {
    account () {
      return this.$store.state.account.accountView
    },
    bank () {
      return this.account.bank || {}
    }
  },
  created () {
    this.$store.dispatch('getAccount', this.$route.params.id)
  }
}
</script>
