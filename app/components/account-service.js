import Component from '@ember/component'

export default Component.extend({
  tagName: 'li',
  actions: {
    removeAccount () {
      return this.sendAction('removeAccount', this.get('account'))
    }
  }
})
