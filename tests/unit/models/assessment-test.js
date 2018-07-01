import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupModelTest } from 'ember-mocha';

describe('Unit | Model | assessment', function() {
  setupModelTest('assessment', {
    needs: []
  });

  it('exists', function() {
    let model = this.subject();
    expect(model).to.be.ok;
  });
});
