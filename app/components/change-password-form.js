import Component from '@ember/component'

export default Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],

  passwords: {},

  actions: {
    submit () {
      this.sendAction('submit', this.get('passwords'))
      this.set('passwords', {})
    },

    reset () {
      this.set('passwords', {})
    }
  }
})
