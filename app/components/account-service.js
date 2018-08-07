import Component from '@ember/component'

export default Component.extend({
  tagName: 'li',
  editing: false,
  actions: {
    removeAccount () {
      return this.sendAction('removeAccount', this.get('account'))
    },
    updateAccount (account) {
      account.set('account', this.get('account'))
      this.toggleProperty('editing')
      return this.sendAction('updateAccount', account)
    },
    toggleEditing () {
      this.toggleProperty('editing')
    }
  }
})
