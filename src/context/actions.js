import { types } from "./reducers";

export const useActions = (state, dispatch) => {

  const setBitlyToken = (item) => {
    dispatch({type: types.SET_BITLY_TOKEN, payload: item});
  }

  const setToken = (item) => {
    dispatch({type: types.SET_TOKEN, payload: item});
  }

  const setStores = (item) => {
    dispatch({type: types.SET_STORES, payload: item});
  }

  const setDeviceLocation = (item) => {
    dispatch({type: types.SET_DEVICE_LOCATION,payload: item})
  }

  const setHomeStore = (item) => {
    dispatch({type: types.SET_HOME_STORE, payload:item});
  }

  const setCategories = (item) => {
    dispatch({type: types.SET_CATEGORIES, payload: item});
  }

  const setDefaultHSI = (item) => {
    dispatch({type: types.SET_DEFAULT_HOME_STORE_ITEM, payload: item});
  }

  const setHomeStoreItems = (item) => {
    dispatch({type: types.SET_HOME_STORE_ITEM, payload: item})
  }

  const setHomeStoreItemsByCategoryId = (id) => {
    dispatch({type: types.SET_HOME_STORE_ITEM_BY_CATEGORY_ID, payload:id})
  }

  const setHomeStoreItemsStatus = (bool) => {
    dispatch({type: types.SET_HOME_STORE_ITEM_STATUS, payload: bool});
  }

  const setRefreshState = (bool) => {
    dispatch({type: types.SET_REFRESH_STATE, payload: bool});
  }

  const setSelectedContent = (item) => {
    dispatch({type: types.SET_SELECTED_CONTENT,payload:item});
  }

  const setContent = (items) => {
    dispatch({type: types.SET_CONTENTS, payload: items});
  }

  const setLoactionTimeout = (item) => {
    dispatch({type: types.SET_LOCATION_TIMEOUT, payload:item});
  }

  const sortLowestPrice = () => {
    dispatch({type: types.SORT_ITEM_AS_LOWEST_PRICE});
  }

  const sortHighSaving = () =>{
    dispatch({type: types.SORT_ITEM_AS_HIGHEST_SAVING});
  }

  const sortDefault = () => {
    dispatch({type: types.SORT_ITEM_AS_DEFAULT});
  }

  const copyHomeStoreToHomeStoreItem = () => {
    dispatch({type: types.COPY_HOME_STORE_TO_HOME_STORE_ITEM});
  }

  return {
    setToken,
    setBitlyToken,
    setStores,
    setDeviceLocation,
    setDefaultHSI,
    setHomeStore,
    setCategories,
    setHomeStoreItems,
    setHomeStoreItemsStatus,
    setHomeStoreItemsByCategoryId,
    setRefreshState,
    setContent,
    setSelectedContent,
    copyHomeStoreToHomeStoreItem,
    sortLowestPrice,
    sortHighSaving,
    sortDefault,
    setLoactionTimeout
  };
};
