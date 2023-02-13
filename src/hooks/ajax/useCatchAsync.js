/* eslint-disable import/no-anonymous-default-export */
export default async (fn) => {
  try {
    const responseData = await fn;
    return responseData.data;
  } catch (error) {
    // throw new Error(error?.response?.data?.errorMessage);
    console.log(error);
  }
};
