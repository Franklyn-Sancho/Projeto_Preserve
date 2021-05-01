import Api from '../Services/Api';

export const getUser = async () => {
  const response = await Api
    .get()
    .then((res) => res.data)
    .catch((err) => err);

  return response;
};

export const postUser = async (name, email, password) => {
  const response = Api
    .post("/seja", { name, email, password })
    .then((res) => res.data)
    .catch((err) => err);

  return response;
};
