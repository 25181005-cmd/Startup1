# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.





## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createUser, getArtworkById, updateListingPrice, listArtworksByCategory } from '@dataconnect/generated';


// Operation CreateUser: 
const { data } = await CreateUser(dataConnect);

// Operation GetArtworkById:  For variables, look at type GetArtworkByIdVars in ../index.d.ts
const { data } = await GetArtworkById(dataConnect, getArtworkByIdVars);

// Operation UpdateListingPrice:  For variables, look at type UpdateListingPriceVars in ../index.d.ts
const { data } = await UpdateListingPrice(dataConnect, updateListingPriceVars);

// Operation ListArtworksByCategory:  For variables, look at type ListArtworksByCategoryVars in ../index.d.ts
const { data } = await ListArtworksByCategory(dataConnect, listArtworksByCategoryVars);


```