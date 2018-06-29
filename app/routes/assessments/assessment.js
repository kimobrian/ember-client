import Route from '@ember/routing/route';

export default Route.extend({
  model({assessment_id}) {
    let allAssessments = this.modelFor('assessments');
    let details = allAssessments.filterBy('id', assessment_id)[0];
    return details;
  }
});
