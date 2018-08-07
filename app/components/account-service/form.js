import Component from '@ember/component'

export default Component.extend({
  actions: {
    updateAccount: function () {
      return this.sendAction('updateAccount', this.get('account'))
    },
    cancel: function () {
      return this.sendAction('toggleEditing')
    }
  }
})
