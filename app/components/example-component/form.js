import Component from '@ember/component'

export default Component.extend({
  actions: {
    updateExample: function () {
      return this.sendAction('updateExample', this.get('example'))
    }
  }
})
