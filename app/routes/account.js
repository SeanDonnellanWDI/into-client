import Ember from 'ember'
import Route from '@ember/routing/route'
import RSVP from 'rsvp'

export default Route.extend({
  ajax: Ember.inject.service(),
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
    },
    spotifyAuth () {
      return this.get('ajax').request('/albums')
    }
  }
})
