import Component from '@ember/component'

export default Component.extend({
  tagName: 'li',
  editing: false,
  actions: {
    deleteExample () {
      return this.sendAction('deleteExample', this.get('example'))
    },
    updateExample (example) {
      example.set('example', this.get('example'))
      this.toggleProperty('editing')
      return this.sendAction('updateExample', example)
    },
    toggleEditing () {
      this.toggleProperty('editing')
    }
  }
})
