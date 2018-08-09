import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'
import RSVP from 'rsvp'

export default Route.extend({
  flashMessages: service(),
  model () {
    return RSVP.hash({
      accounts: this.get('store').findAll('account'),
      account: this.get('store').createRecord('account', {})
    })
  },
  actions: {
    createAccount (account) {
      account.save()
      .then(() => this.refresh())
      .then(() => this.get('flashMessages').success('You added a new account'))
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem creating your account, please you enter something into each field and try again')
      })
    },
    removeAccount (account) {
      account.destroyRecord()
      .then(() => this.get('flashMessages').success('You removed your account'))
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem removing your account, make sure you are signed in and try again')
      })
    },
    updateAccount (account) {
      account.save()
      .then(() => this.get('flashMessages').success('You updated your account'))
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem updating your account, ensure something was entered into each field and try again')
      })
    }
  }
})
