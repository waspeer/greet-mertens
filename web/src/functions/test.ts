import type { Handler } from 'aws-lambda';

export const handler: Handler = async (event, context) => {
  console.log('hoi');

  return {
    statusCode: 200,
  };
};
