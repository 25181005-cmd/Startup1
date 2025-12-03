import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'rechargearthorg',
  location: 'us-east4'
};

export const createUserRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateUser');
}
createUserRef.operationName = 'CreateUser';

export function createUser(dc) {
  return executeMutation(createUserRef(dc));
}

export const getArtworkByIdRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetArtworkById', inputVars);
}
getArtworkByIdRef.operationName = 'GetArtworkById';

export function getArtworkById(dcOrVars, vars) {
  return executeQuery(getArtworkByIdRef(dcOrVars, vars));
}

export const updateListingPriceRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateListingPrice', inputVars);
}
updateListingPriceRef.operationName = 'UpdateListingPrice';

export function updateListingPrice(dcOrVars, vars) {
  return executeMutation(updateListingPriceRef(dcOrVars, vars));
}

export const listArtworksByCategoryRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListArtworksByCategory', inputVars);
}
listArtworksByCategoryRef.operationName = 'ListArtworksByCategory';

export function listArtworksByCategory(dcOrVars, vars) {
  return executeQuery(listArtworksByCategoryRef(dcOrVars, vars));
}

