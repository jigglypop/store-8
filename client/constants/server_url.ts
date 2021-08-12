export const SERVER_URL = 'http://localhost:3000'
export const BASE_URL = "/api/auth";
export const GITHUB_URL = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${SERVER_URL}/callback`;
