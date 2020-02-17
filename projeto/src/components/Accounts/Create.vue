<script>
export default {
  name: 'accounts-create',
  data: function () {
    return {
      sub_title: 'Criando conta',
      account: {
        balance: 0
      }
    }
  },
  template: require('./form.html'),
  methods: {
    save () {
      this.$store.dispatch('newAccount', this.account).then(() => {
        this.$router.push('/contas')
      })
    }
  },
  computed: {
    banks () {
      return this.$store.state.bank.bankList
    }
  },
  created () {
    this.$store.dispatch('getBanks')
  }
}
</script>
