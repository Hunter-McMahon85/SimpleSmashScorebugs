import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import oauthConfig from '../Components/oauthConfig';

const Callback = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      // Exchange the code for an access token
      fetch(oauthConfig.token_endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: new URLSearchParams({
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: oauthConfig.redirect_uri,
          client_id: oauthConfig.client_id,
          client_secret: '0bfa19a60caef6e193585ef93f8774136531e6e2fbcdba962c134a9470a89194',
        }),
      })
        .then(response => response.json())
        .then(data => {
          // Save the token in localStorage or state
          console.log(data.access_token);
          localStorage.setItem('access_token', data.access_token);
          navigate('/'); // Redirect to home or dashboard
        })
        .catch(error => {
          console.error('Error fetching the token', error);
        });
    }
  }, [navigate]);

  return <div>Loading...</div>;
};

export default Callback;