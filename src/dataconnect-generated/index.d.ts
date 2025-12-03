import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface Artwork_Key {
  id: UUIDString;
  __typename?: 'Artwork_Key';
}

export interface Bid_Key {
  id: UUIDString;
  __typename?: 'Bid_Key';
}

export interface CreateUserData {
  user_insert: User_Key;
}

export interface GetArtworkByIdData {
  artwork?: {
    id: UUIDString;
    title: string;
    description: string;
    imageUrl: string;
    assetUrl: string;
    mintDate: TimestampString;
    status: string;
    tags?: string[] | null;
    creator?: {
      id: UUIDString;
      username: string;
    } & User_Key;
  } & Artwork_Key;
}

export interface GetArtworkByIdVariables {
  id: UUIDString;
}

export interface ListArtworksByCategoryData {
  artworks: ({
    id: UUIDString;
    title: string;
    imageUrl: string;
    creator?: {
      id: UUIDString;
      username: string;
    } & User_Key;
  } & Artwork_Key)[];
}

export interface ListArtworksByCategoryVariables {
  category: string;
}

export interface Listing_Key {
  id: UUIDString;
  __typename?: 'Listing_Key';
}

export interface Transaction_Key {
  id: UUIDString;
  __typename?: 'Transaction_Key';
}

export interface UpdateListingPriceData {
  listing_update?: Listing_Key | null;
}

export interface UpdateListingPriceVariables {
  id: UUIDString;
  currentPrice: number;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateUserData, undefined>;
  operationName: string;
}
export const createUserRef: CreateUserRef;

export function createUser(): MutationPromise<CreateUserData, undefined>;
export function createUser(dc: DataConnect): MutationPromise<CreateUserData, undefined>;

interface GetArtworkByIdRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetArtworkByIdVariables): QueryRef<GetArtworkByIdData, GetArtworkByIdVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetArtworkByIdVariables): QueryRef<GetArtworkByIdData, GetArtworkByIdVariables>;
  operationName: string;
}
export const getArtworkByIdRef: GetArtworkByIdRef;

export function getArtworkById(vars: GetArtworkByIdVariables): QueryPromise<GetArtworkByIdData, GetArtworkByIdVariables>;
export function getArtworkById(dc: DataConnect, vars: GetArtworkByIdVariables): QueryPromise<GetArtworkByIdData, GetArtworkByIdVariables>;

interface UpdateListingPriceRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateListingPriceVariables): MutationRef<UpdateListingPriceData, UpdateListingPriceVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateListingPriceVariables): MutationRef<UpdateListingPriceData, UpdateListingPriceVariables>;
  operationName: string;
}
export const updateListingPriceRef: UpdateListingPriceRef;

export function updateListingPrice(vars: UpdateListingPriceVariables): MutationPromise<UpdateListingPriceData, UpdateListingPriceVariables>;
export function updateListingPrice(dc: DataConnect, vars: UpdateListingPriceVariables): MutationPromise<UpdateListingPriceData, UpdateListingPriceVariables>;

interface ListArtworksByCategoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListArtworksByCategoryVariables): QueryRef<ListArtworksByCategoryData, ListArtworksByCategoryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListArtworksByCategoryVariables): QueryRef<ListArtworksByCategoryData, ListArtworksByCategoryVariables>;
  operationName: string;
}
export const listArtworksByCategoryRef: ListArtworksByCategoryRef;

export function listArtworksByCategory(vars: ListArtworksByCategoryVariables): QueryPromise<ListArtworksByCategoryData, ListArtworksByCategoryVariables>;
export function listArtworksByCategory(dc: DataConnect, vars: ListArtworksByCategoryVariables): QueryPromise<ListArtworksByCategoryData, ListArtworksByCategoryVariables>;

