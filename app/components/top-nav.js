import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class TopNavComponent extends Component {

@service session;
@service currentUser;


@action
logout(ev) {
  ev.preventDefault();

  this.session.invalidate();
}


}
