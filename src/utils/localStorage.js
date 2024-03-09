export const setLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getLocalStorage = () => {
  const result = localStorage.getItem("user");
  const user = result ? JSON.parse(result) : null;
  return user;
};

export const clearLocalStorage = () => {
  localStorage.removeItem("user");
};
