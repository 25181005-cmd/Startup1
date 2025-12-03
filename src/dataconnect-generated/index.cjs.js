const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'rechargearthorg',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const createUserRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateUser');
}
createUserRef.operationName = 'CreateUser';
exports.createUserRef = createUserRef;

exports.createUser = function createUser(dc) {
  return executeMutation(createUserRef(dc));
};

const getArtworkByIdRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetArtworkById', inputVars);
}
getArtworkByIdRef.operationName = 'GetArtworkById';
exports.getArtworkByIdRef = getArtworkByIdRef;

exports.getArtworkById = function getArtworkById(dcOrVars, vars) {
  return executeQuery(getArtworkByIdRef(dcOrVars, vars));
};

const updateListingPriceRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateListingPrice', inputVars);
}
updateListingPriceRef.operationName = 'UpdateListingPrice';
exports.updateListingPriceRef = updateListingPriceRef;

exports.updateListingPrice = function updateListingPrice(dcOrVars, vars) {
  return executeMutation(updateListingPriceRef(dcOrVars, vars));
};

const listArtworksByCategoryRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListArtworksByCategory', inputVars);
}
listArtworksByCategoryRef.operationName = 'ListArtworksByCategory';
exports.listArtworksByCategoryRef = listArtworksByCategoryRef;

exports.listArtworksByCategory = function listArtworksByCategory(dcOrVars, vars) {
  return executeQuery(listArtworksByCategoryRef(dcOrVars, vars));
};
