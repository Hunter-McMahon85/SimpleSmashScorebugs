import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import oauthConfig from '../Components/Controller/oauthConfig';

const Callback = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const authorizationCode = query.get('code');
    localStorage.setItem('login_time', Date.now());

    if (authorizationCode) {
      exchangeAuthorizationCode(authorizationCode);
    }
  }, [location]);

  const exchangeAuthorizationCode = async (authorizationCode) => {
    try {
      // need a better cors proxy solution. maybe?
      const response = await axios.post('https://shy-disk-9135.gochargershunter.workers.dev/?https://api.start.gg/oauth/access_token', {
        grant_type: 'authorization_code',
        client_id: oauthConfig.client_id,
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

      // Redirect to page we clicked from
      let context = localStorage.getItem('LoginContext');
      localStorage.setItem('login_time', Date.now());
      
      switch (context){
        case "SQ":
          navigate('/controller', { replace: true });
          break;
        case "MB":
          navigate('/', { replace: true });
          break;
      }
    } catch (error) {
      console.error('Error exchanging code for token:', error);
    }
  };

  return (<><p>Logging you in...</p></>);
};

export default Callback;