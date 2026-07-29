const oauthConfig = {
    client_id:  '175',
    redirect_uri: 'https://hunter-mcmahon85.github.io/SimpleSmashScorebugs/#/TokenAuth', 
    // everything below this can be moved to cloudfare worker as an environment variable
    auth_endpoint: 'http://api.start.gg/oauth/authorize',
    token_endpoint: 'http://api.start.gg/oauth/access_token',
    response_type: 'code', 
    scope: 'user.identity', 
};

export default oauthConfig;