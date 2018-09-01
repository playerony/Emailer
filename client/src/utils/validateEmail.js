const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default email => {
  const result = re.test(email);

  if (!result) {
    return `This email: ${email} is invalid`;
  }

  return;
};
