import Route from '@ember/routing/route'
import RSVP from 'rsvp'

export default Route.extend({
  model () {
    return RSVP.hash({
      accounts: this.get('store').findAll('account'),
      account: this.get('store').createRecord('account', {})
    })
  },
  actions: {
    createAccount (account) {
      account.save().then(() => this.refresh())
    },
    removeAccount (account) {
      account.destroyRecord()
    },
    updateAccount (account) {
      account.save()
    }
  }
})
