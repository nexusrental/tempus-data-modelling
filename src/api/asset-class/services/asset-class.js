'use strict';

/**
 * asset-class service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::asset-class.asset-class');
