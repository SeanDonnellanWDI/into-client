import DS from 'ember-data'

export default DS.Model.extend({
  accounts: DS.hasMany('account'),
  email: DS.attr('string'),
  examples: DS.hasMany('example')
})
