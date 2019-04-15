import {
  BILLING_MANAGER_BASE_PATH,
  BILLING_MANAGER_REGISTRATION_PATH
} from '../../constants/BillingManager';


export const registrationHandler = (props) => {
  fetch(
    BILLING_MANAGER_BASE_PATH + BILLING_MANAGER_REGISTRATION_PATH,
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'credentials': 'same-origin'
      },
      method: 'POST',
      body: JSON.stringify(props)
    }
  ).then(response => {
    if (response.ok) {
      response.json().then(
        data => {
          console.log(data);
          return data;
        }
      )
    }
    else {
      console.log('Something went wrong');
    }
  }).catch(err => {
    console.log(err);
  });
};