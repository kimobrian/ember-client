import Route from '@ember/routing/route';

export default Route.extend({
  model({assessment_id}) {
    return this.store.findRecord('assessment', assessment_id);
  }
});
