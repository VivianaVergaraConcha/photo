const base_url = "https://dummyapi.io/data/v1";
const user = "/user/";
const post = "/post/";
const comments = "/comment/"

export const perfilGet = (q_user) => `${base_url}${user}${q_user}`;
export const postsListUserGet = (q_user, q_limit, q_page) => `${base_url}${user}${q_user}${post}?limit=${q_limit}&page=${q_page}`;

export const postGet = (q_post) => `${base_url}${post}${q_post}`;
export const postComentstGet = (q_post, q_limit) => `${base_url}${post}${q_post}${comments}?limit=${q_limit}`;

export const postsListGet = (q_limit, q_page) => `${base_url}${post}?limit=${q_limit}&page=${q_page}`;

export const app_id = "629f5badbfb6e25acf3738da";