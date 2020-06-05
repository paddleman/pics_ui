import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class RegisterController extends Controller {

@action
async registerUser(attrs) {
  let user = this.store.createRecord('user', attrs);

  try {
  await user.save();
  this.transitionToRoute('index');
  } catch(err) {
    console.log(err);
  }

  }
}
  
