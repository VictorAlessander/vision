import {
  BILLING_MANAGER_BASE_PATH,
  BILLING_MANAGER_LOGIN_PATH,
  BILLING_HEADERS
} from '../../constants/BillingManager';


export const loginHandler = (props) => {

  fetch(
    BILLING_MANAGER_BASE_PATH + BILLING_MANAGER_LOGIN_PATH,
    {
      headers: BILLING_HEADERS,
      method: 'POST',
      body: JSON.stringify(props)
    }
  ).then(response => {
    if (response.ok) {
      response.json().then(data => {
        return data;
      })
    }
    else if (response.status === 401) {
      console.log('Unauthorized');
      return false;
    }
  }).catch(err => {
    console.log(err);
    return false;
  })

}