import { defineFunction } from '@aws-amplify/backend';

export const contactUsFn = defineFunction({
  name: 'contacts',
  entry: './handler.ts'
});