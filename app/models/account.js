import DS from 'ember-data'

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  service: DS.attr('string'),
  username: DS.attr('string'),
  editable: DS.attr('boolean')
})
