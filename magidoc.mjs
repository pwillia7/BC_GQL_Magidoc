// magidoc.mjs

export default {
    introspection: {
      type: 'sdl',
      paths: ['schemas/schema.graphql'],
    },
    website: {
      template: 'carbon-multi-page',
      staticAssets: path.join(__dirname, 'assets'),
      options: {
        // You need to specify the base path of your github pages root
        // Example: `/magidoc`
        siteRoot: '/pwillia7/BC_GQL_Magidoc',
      },  
      // The important part is adding `options.queryGenerationFactories`
      options: {
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
  