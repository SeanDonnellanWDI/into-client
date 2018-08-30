import Route from '@ember/routing/route'
import RSVP from 'rsvp'
import { inject as service } from '@ember/service'

export default Route.extend({
  auth: service(),

  model () {
    return RSVP.hash({
      accounts: this.get('store').findAll('account'),
      account: this.get('store').createRecord('account', {}),
      userId: this.get('auth.credentials.id')
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
