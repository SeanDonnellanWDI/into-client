import Component from '@ember/component'

export default Component.extend({
  tagName: 'li',
  actions: {
    deleteExample () {
      return this.sendAction('deleteExample', this.get('example'))
    },
    updateExample (example) {
      return this.sendAction('updateExample', example)
    }
  }
})
