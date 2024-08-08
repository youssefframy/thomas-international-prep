export const getBaseUrl = () => {
  return process.env.URL ?? isDevEnvironment() ? "http://localhost:3000" : undefined;
}

const isDevEnvironment = () => {
  return process.env.NODE_ENV === 'development';
}