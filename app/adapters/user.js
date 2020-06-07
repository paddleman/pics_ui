import ApplicationAdapter from './application';


export default class UserAdapter extends ApplicationAdapter {

  // api requires that login creds be routed to /users/me 

  urlForQueryRecord(query) {
      let originalUrl = super.urlForQueryRecord(...arguments);
      if (query.me) {
        delete query.me;
        return `${originalUrl}/me`;
      }
  
      return originalUrl;
    }

}
