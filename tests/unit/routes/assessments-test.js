import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | assessments', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:assessments');
    assert.ok(route);
  });
});
