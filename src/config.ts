import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    API: process.env.API,
  };
});
