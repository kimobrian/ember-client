import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | assessment-details', function() {
  setupComponentTest('assessment-details', {
    integration: true
  });

  it('renders the passed in assessment details', async function() {
    this.set('model', {
      assessor: 'John Doe',
      fellow: 'Jane Doe',
      score: 99,
      status: 'Pass'
    });

    await this.render(hbs`{{assessment-details details=model}}`);
    expect(this.$('.flex-column-right')[0].textContent).to.equal('John Doe');
  });
});
