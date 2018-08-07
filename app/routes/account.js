import Route from '@ember/routing/route'

export default Route.extend({
  model () {
    return this.get('store').findAll('account')
  },
  actions: {
    removeAccount (account) {
      account.destroyRecord()
    }
  }
})
