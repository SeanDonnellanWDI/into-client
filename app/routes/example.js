import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'
import RSVP from 'rsvp'

export default Route.extend({
  flashMessages: service(),
  model () {
    return RSVP.hash({
      examples: this.get('store').findAll('example'),
      example: this.get('store').createRecord('example', {})
    })
  },
  actions: {
    createExample (example) {
      example.save()
      .then(() => this.refresh())
      .then(() => this.get('flashMessages').success('You added a new example'))
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem creating your example, please you enter something into each field and try again')
      })
    },
    deleteExample (example) {
      example.destroyRecord()
      .then(() => this.get('flashMessages').success('You removed your example'))
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem removing your example, make sure you are signed in and try again')
      })
    },
    updateExample (example) {
      example.save()
      .then(() => this.get('flashMessages').success('You updated your example'))
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem updating your example, ensure something was entered into each field and try again')
      })
    }
  }
})
