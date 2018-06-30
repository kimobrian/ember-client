import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';
import sinon from 'sinon';

describe('Unit | Route | assessments/index', function() {
  setupTest('route:assessments/index');

  it('calls store.findAll in the model hook', async function() {
    let route = this.subject();
    let mockStore = { findAll: sinon.spy() }
    route.set('store', mockStore);
    await route.model();
    expect(route.get('store.findAll').called).to.equal(true);
  });
});
