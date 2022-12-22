import * as prismic from '@prismicio/client';
import * as prismicNext from '@prismicio/next';
import sm from '../../sm.json';

export const amazingTrip = prismic.getRepositoryName(sm.apiEndpoint);

export const client = prismic.createClient(`${process.env.PRISMIC_ENVIRONMENT}`, {
  accessToken: process.env.PRISMIC_TOKEN
});