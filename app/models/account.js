import DS from 'ember-data'

export default DS.Model.extend({
  service: DS.attr('string'),
  username: DS.attr('string'),
  editable: DS.attr('boolean'),
  user: DS.belongsTo('user')
})
