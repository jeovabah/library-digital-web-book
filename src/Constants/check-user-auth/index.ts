export const getUserAuth = () => {
  return new Promise((resolve, reject) => {
    const user = localStorage.getItem("user");
    if (user) {
      let userParse = JSON.parse(user);
      resolve(!!userParse.email);
    } else {
      resolve(false);
    }
  });
};
