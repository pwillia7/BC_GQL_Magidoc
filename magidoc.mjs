// magidoc.mjs
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  introspection: {
    type: 'sdl',
    paths: ['schemas/schema.graphql'],
  },
  website: {
    template: 'carbon-multi-page',
    staticAssets: path.join(__dirname, 'assets'), // must contain favicon.ico, Bigcommerce.png, etc.
    options: {
      // Tells Magidoc the site root is /BC_GQL_Magidoc 
      // so everything is served from /BC_GQL_Magidoc/...
      siteRoot: '/BC_GQL_Magidoc',

      // Provide the *relative* paths (no leading slash):
      // So the final paths become /BC_GQL_Magidoc/favicon.ico & /BC_GQL_Magidoc/Bigcommerce.png
      appFavicon: 'https://support.bigcommerce.com/favicon.ico',
      appLogo: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo3NzQyZWFmYy1iMTY5LTQxNzItYTcxNi1iNWRjNzA1YWRjMDA=/bg-image.webp',
      appTitle: 'BigCommerce B2B Edition GraphQL Docs',
      pages: [
        {
          title: 'BigCommerce B2b Edition GraphQL Docs',
          content: [
            {
              title: 'Welcome',
              content: `
 # Welcome to the BigCommerce B2B Edition GraphQL Docs
 
 These docs were autogenerated with [Magidoc.js](https://magidoc.js.org/).
 
 ## About This Documentation
 
 Here you'll find everything you need to get started with the BigCommerce B2B Edition GraphQL endpoint:
 - Querying order and customer data
 - Managing products
 - Working with B2B accounts, and more
 
 ## Additional Resources
 
 - [B2B Edition Overview](https://support.bigcommerce.com/s/article/B2B-Edition#docs)  
 - [B2B Edition Developer Docs](https://developer.bigcommerce.com/b2b-edition/apis)
 
 Also see the standard [BigCommerce GraphQL Playground](https://api-b2b.bigcommerce.com/graphql/playground)
           `,
                          },
          ],
        },
      ],
      // Provide example data for custom scalars
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
