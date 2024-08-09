import instance from "../../axios";

const registerEmail = async (email, city) => {
  try {
    const response = await instance.post(`/email/send-email-confirmation`, {
      email: email,
      city: city,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const unsubscribeEmail = async (email) => {
  try {
    const response = await instance.post(`/email/send-email-unsubscribe`, {
      email: email,
    });
    instance.post(`/email/unsubscribe`, {
      email: email,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export { registerEmail, unsubscribeEmail };
