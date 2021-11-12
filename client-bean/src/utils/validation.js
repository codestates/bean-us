export const idValidation = (userId) => {
  const reg = /^[a-zA-Z0-9]{4,12}$/;
  return reg.test(userId);
};

export const passwordValidation = (password) => {
  const reg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  return reg.test(password);
};

export const emailValidation = (email) => {
  const reg = /^\S+@\S+\.\S+$/;
  return reg.test(email);
};
