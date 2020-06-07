import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ApplicationAdapter extends JSONAPIAdapter {

  host = 'http://localhost:4000';

  @service session;
  
  @tracked 'session.data.authenticated.token';

  get headers() {
    return {
      'Authorization': `Bearer ${this.session.data.authenticated.token}`
    }
  }

  // found header example in ember adapter docs to avoid @computed in favour of @tracked and get
  // 
  // @computed('session.data.authenticated.token')
  // get headers() {
  //   let headers = {};
  //   if (this.session.isAuthenticated) {
  //     headers['Authorization'] = `Bearer ${this.session.data.authenticated.token}`;
  //   }
  //   console.log(headers);
  //   return headers;

  // }

}
