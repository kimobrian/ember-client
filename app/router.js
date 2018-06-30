import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

/* istanbul ignore next */
Router.map(function() {
  this.route('assessments', function(){
    this.route('assessment', {'path': '/:assessment_id'});
  });
  this.route('nuts');
});

export default Router;
