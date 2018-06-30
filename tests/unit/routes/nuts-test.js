import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | nuts', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:nuts');
    assert.ok(route);
  });
});
