import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | new-assessment', function() {
  setupComponentTest('new-assessment', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#new-assessment}}
    //     template content
    //   {{/new-assessment}}
    // `);

    this.render(hbs`{{new-assessment}}`);
    expect(this.$()).to.have.length(1);
  });
});
