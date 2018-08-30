import Route from '@ember/routing/route'
import RSVP from 'rsvp'
import { inject as service } from '@ember/service'

export default Route.extend({
  flashMessages: service(),
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
      this.get('store').createRecord('account', account).save()
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
      .then(() => this.transitionTo('account'))
      .then(() => this.get('flashMessages').success('You updated your account'))
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem updating your account, ensure something was entered into each field and try again')
      })
    }
  }
})
