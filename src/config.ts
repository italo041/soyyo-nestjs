import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    API_URL: process.env.API_URL,
  };
});
