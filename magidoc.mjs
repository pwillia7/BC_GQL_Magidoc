// magidoc.mjs

export default {
    introspection: {
      type: 'sdl',
      paths: ['schemas/schema.graphql'],
    },
    website: {
      template: 'carbon-multi-page',
      // Just use a string path relative to your magidoc.mjs file
      staticAssets: './assets',
      options: {
        siteRoot: '/pwillia7/BC_GQL_Magidoc',
        queryGenerationFactories: {
          GenericScalar: { example: 'my-generic-value' },
          Decimal: 123.45,
          Date: '2025-01-01',
          JSONString: '{"some":"json"}',
          ProductQuantity: 10,
          CurrencyDecimalPlaces: 2,
        },
      },
    },
  };
  