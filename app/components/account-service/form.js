import Component from '@ember/component'

export default Component.extend({
  newAccount: {},
  actions: {
    updateAccount: function () {
      if (this.get('editForm') === true) {
        this.sendAction('updateAccount', this.get('account'))
      } else {
        this.sendAction('updateAccount', this.get('newAccount'))
      }
      this.set('newAccount.username', '')
      this.set('newAccount.service', '')
    },
    cancel: function () {
      this.get('account').rollbackAttributes()
      this.set('newAccount.username', '')
      this.set('newAccount.service', '')
      return this.sendAction('toggleEditing')
    }
  }
})
