import React, { useState, useEffect } from 'react';
import { GoogleLogout, GoogleLogin } from 'react-google-login';
import '../stylesheets/Search.css';

const clientId =
  '707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com';


function LoginLogout() {
  const [loggedIn, setLoggedIn] = useState(false);
    const onSuccessLogout = () => {
      console.log('Logout made successfully');
      alert('Logout made successfully ✌');
      setLoggedIn(false);
    };

    const onSuccessLogin = (res) => {
      console.log('Login Success: currentUser:', res.profileObj);
      alert(
        `Logged in successfully welcome ${res.profileObj.name}`
      );
      setLoggedIn(true);
      //refreshTokenSetup(res);
    };

    const onFailureLogin = (res) => {
      console.log('Login failed: res:', res);
      alert(
        `Failed to login.`
      );
    };

    return (
      <div className="login-logout">
        <div>
        {console.log(loggedIn)}
      {loggedIn && <GoogleLogout
          clientId={clientId}
          buttonText="Logout"
          onLogoutSuccess={onSuccessLogout}
        ></GoogleLogout>}
      </div>
      <div>
        {!loggedIn && 
        <GoogleLogin
          clientId={clientId}
          buttonText="Login"
          onSuccess={onSuccessLogin}
          onFailure={onFailureLogin}
          cookiePolicy={'single_host_origin'}
          style={{ marginTop: '100px' }}
          isSignedIn={true}
        />}
        </div>
      </div>
    );
}
export default LoginLogout;