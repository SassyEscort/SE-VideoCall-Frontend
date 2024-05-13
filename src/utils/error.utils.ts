export type CustomError = {
  name: string;
  message: string;
  stack: string;
};

const getCustomErrorMessage = (error: CustomError) => {
  switch (error.name) {
    case 'NotAuthorizedException':
      return 'Incorrect username or password';

    case 'LimitExceededException':
      return 'Attempt limit exceeded, please try again later';
    default:
      return error.message;
  }
};
export default getCustomErrorMessage;
