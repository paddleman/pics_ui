import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class RegisterFormComponent extends Component {

@tracked email;
@tracked username;
@tracked password;
@tracked passwordConfirmation;



@action
submitUser(ev) {
  ev.preventDefault();

  this.args.registerUser({
    email: this.email,
    username: this.username,
    password: this.password,
    passwordConfirmation: this.passwordConfirmation
  
  }) 
}


}
