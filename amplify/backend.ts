import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { contactUsFn } from './functions/contacts/resource';

defineBackend({
  auth,
  data,
  contactUsFn
});
