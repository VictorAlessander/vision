import {
  BILLING_MANAGER_BASE_PATH,
  BILLING_MANAGER_REGISTRATION_PATH
} from '../../constants/BillingManager';
import {notification} from 'antd';

export const registrationHandler = (props, context) => {

  const openNotification = (title, content) => {
    notification.open({
      message: title,
      description: content
    })
  }

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
          if (data.message !== `User ${props.username} already exists`) {
            context.access_token = data.access_token;
            context.refresh_token = data.refresh_token;
          }
          openNotification('Registration status', data.message);
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