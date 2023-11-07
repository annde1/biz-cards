const TOKEN = "token";

const isLocalStorage = () => {
  return localStorage.getItem(TOKEN);
};

const storeToken = (token, rememberMe) => {
  if (rememberMe) {
    localStorage.setItem(TOKEN, token);
  } else {
    sessionStorage.setItem(TOKEN, token);
  }
};

const getToken = () => {
  let token = isLocalStorage();
  if (token) {
    return token;
  } else {
    return sessionStorage.getItem(TOKEN);
  }
};

//A function that retrieves from local storage or session storage the token of user and deletes it
const clearToken = () => {
  if (isLocalStorage()) {
    localStorage.removeItem(TOKEN);
  } else {
    sessionStorage.removeItem(TOKEN);
  }
};

export { storeToken, getToken, clearToken };
