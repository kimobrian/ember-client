import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | assessments/assessment', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:assessments/assessment');
    assert.ok(route);
  });
});
