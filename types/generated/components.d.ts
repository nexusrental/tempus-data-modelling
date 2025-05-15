import type { Schema, Struct } from '@strapi/strapi';

export interface SharedLocalisedString extends Struct.ComponentSchema {
  collectionName: 'components_shared_localised_strings';
  info: {
    description: '';
    displayName: 'Localised String';
  };
  attributes: {
    de_DE: Schema.Attribute.String;
    default: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.localised-string': SharedLocalisedString;
    }
  }
}
