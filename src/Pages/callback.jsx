import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import oauthConfig from '../Components/oauthConfig';

const Callback = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const authorizationCode = query.get('code');

    if (authorizationCode) {
      exchangeAuthorizationCode(authorizationCode);
    }
  }, [location]);

  const exchangeAuthorizationCode = async (authorizationCode) => {
    try {
      const response = await axios.post("https://corsproxy.io/?https%3A%2F%2Fapi.start.gg%2Foauth%2Faccess_token", {
        grant_type: 'authorization_code',
        client_id: oauthConfig.client_id,
        client_secret: oauthConfig.Cs,
        code: authorizationCode,
        redirect_uri: oauthConfig.redirect_uri,
        scope: 'user.identity user.email',
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const { access_token, refresh_token } = response.data;
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh_token', refresh_token);

      // Redirect to a protected page after successful login
      navigate('/');
    } catch (error) {
      console.error('Error exchanging code for token:', error);
    }
  };

  return <p>Logging you in...</p>;
};

export default Callback;