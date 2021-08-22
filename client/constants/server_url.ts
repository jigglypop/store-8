export const SERVER_URL = process.env.SERVER_URL;
export const API_URL = process.env.SERVER_URL + '/api';
export const BASE_URL = '/api/auth';
export const GITHUB_URL = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${process.env.SERVER_URL}/callback`;
