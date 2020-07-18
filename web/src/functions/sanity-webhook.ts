import 'cross-fetch/polyfill';
import { Handler } from 'aws-lambda';
import * as yup from 'yup';

const requestBodySchema = yup
  .object({
    transactionId: yup.string().required(),
    projectId: yup
      .string()
      .matches(new RegExp(process.env.GATSBY_SANITY_PROJECT_ID!), 'Project ID not valid')
      .required(),
    dataset: yup.string().matches(/production/, 'Dataset not valid'),
    ids: yup.object(),
  })
  .required();

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        Allow: 'POST',
      },
    };
  }

  try {
    await requestBodySchema.validate(JSON.parse(event.body));
  } catch (error) {
    return {
      statusCode: 400,
      body: error.message,
    };
  }

  const response = await fetch(
    'https://api.github.com/repos/waspeer/greet-mertens/actions/workflows/build.yml/dispatches',
    {
      method: 'POST',
      headers: {
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({ ref: 'main' }),
    },
  );

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};
