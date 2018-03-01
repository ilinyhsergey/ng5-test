import {SystemEntityModules} from './system-entity-modules';

export class SystemEntity {
  id: string;
  company: string;
  street: string;
  zip: string;
  city: string;
  phone: string;
  fax: string;
  email: string;
  modules: SystemEntityModules;
}

