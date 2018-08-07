import Route from '@ember/routing/route'
import RSVP from 'rsvp'

export default Route.extend({
  model () {
    return RSVP.hash({
      examples: this.get('store').findAll('example'),
      example: this.get('store').createRecord('example', {})
    })
  },
  actions: {
    createExample (example) {
      example.save().then(() => this.refresh())
    },
    deleteExample (example) {
      example.destroyRecord()
    },
    updateExample (example) {
      example.save()
    }
  }
})
