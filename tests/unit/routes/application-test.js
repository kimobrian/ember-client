import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';
import sinon from 'sinon';

describe('Unit | Route | application', function() {
  setupTest('route:application', {
    needs:['router:main']
  });

  it('calls replaceWith in the beforeModel hook', async function() {
    let route = this.subject();
    route.set('replaceWith', sinon.spy())
    await route.beforeModel();
    expect(route.replaceWith.args).to.eql([
      [
        "assessments"
      ]
    ]);
  });
});


