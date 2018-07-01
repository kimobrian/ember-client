import DS from 'ember-data';

export default DS.Model.extend({
  assessor: DS.attr('string'),
  fellow: DS.attr('string'),
  score: DS.attr('number'),
  status: DS.attr('string')
});
