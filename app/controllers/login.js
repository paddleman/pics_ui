import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class LoginController extends Controller {

@service session
@service currentUser

@action
async authenticateUser(attrs) {
  try {
  await this.session.authenticate('authenticator:jwt', {
    email: attrs.email,
    password: attrs.password
    });
    this.transitionToRoute('index');
  } 
  catch(error) {
    this.errorMessage = error.error || error; 
  }
  
  // if (this.session.isAuthenticated) {
  //   this.currentUser.load();
  // }
}

}
