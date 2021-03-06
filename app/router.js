import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('user', function() {
    this.route('detail',{path:"/:id"});
    this.route('edit',{path:"/:id/edit"});
    this.route('create');
  });
});

export default Router;
