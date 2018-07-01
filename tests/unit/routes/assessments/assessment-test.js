import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';
import sinon from 'sinon';

describe('Unit | Route | assessments/assessment', function() {
  setupTest('route:assessments/assessment');

  it('calls store.findRecord in the model hook', async function() {
    let route = this.subject();
    let mockStore = { findRecord: sinon.spy() }
    route.set('store', mockStore);
    await route.model({ assessment_id: 'Test-ID' });
    expect(route.get('store.findRecord').called).to.equal(true);
    expect(route.get('store.findRecord').args).to.eql([
      [
        "assessment",
        "Test-ID"
      ]
    ]);
  });
});
