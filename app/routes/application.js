import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {

@service session;
@service currentUser;


beforeModel() {
  return this._loadCurrentUser();
}

constructor() {
  super(...arguments);

  this.session.on('invalidationSucceeded', () => {
    window.location.replace('/');
   });
  
  
  this.session.on('authenticationSucceeded', () => {
    this._loadCurrentUser();
    
  });
}


async _loadCurrentUser() {
  try {
    await this.currentUser.load();
  } catch(err) {
    await this.session.invalidate();
  }
}

}
