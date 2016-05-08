'use strict'
/**
 * Provides a simple configuration object for webize web client and other
 * modules.
 * @module config
 */
module.exports = {
  /**
   * Default authentication endpoint
   */
  authEndpoint: 'https://databox.me/',

  /**
   * Default RDF parser library
   */
  parser: 'rdflib',

  /**
   * Default proxy URL for servicing CORS requests
   */
  proxyUrl: 'https://databox.me/,proxy?uri={uri}',

  /**
   * Default signup endpoints (list of identity providers)
   */
  signupEndpoint: 'https://solid.github.io/solid-idps/',

  /**
   * Default height of the Signup popup window, in pixels
   */
  signupWindowHeight: 600,

  /**
   * Default width of the Signup popup window, in pixels
   */
  signupWindowWidth: 1024,

  /**
   * Timeout for web/ajax operations, in milliseconds
   */
  timeout: 50000
}

