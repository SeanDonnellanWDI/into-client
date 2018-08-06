import DS from 'ember-data'

export default DS.Model.extend({
  email: DS.attr('string'),
  examples: DS.hasMany('example')
})
