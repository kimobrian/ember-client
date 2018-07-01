import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  actions: {
    /**
     * Create a new assessment record
    */
    createRecord() {
      this.set('error', false);
      this.set('success', false);
      let { fellow, assessor, status, score } = this.getProperties('fellow', 'assessor', 'status', 'score');
      if(!fellow || !assessor || !status || !score) this.set('error', 'Please provide all fields');
      else {
        let record = this.get('store').createRecord('assessment', { fellow, assessor, status, score });
        return record.save()
        .then(()=> {
          this.set('success', 'Record Saved Successfully');
        }).catch(()=> {
            this.set('error', 'An Error Occurred Saving the Record');
        }).finally(()=> {
          this.set('fellow', null)
          this.set('assessor', null)
          this.set('status', null)
          this.set('score', null)
        });
      }
    }
  }
});
