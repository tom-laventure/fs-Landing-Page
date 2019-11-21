const initialState = {
  ipConfig: {token: null},
  stores: null,
  deviceLocation: null
};

const types = {
  SET_TOKEN:                          "SET_TOKEN",
  SET_STORES:                         "SET_STORES",
  SET_DEVICE_LOCATION:                "SET_DEVICE_LOCATION",
  SET_HOME_STORE:                     "SET_HOME_STORE",
  SET_HOME_STORE_ITEM:                "SET_HOME_STORE_ITEM",
  SET_CATEGORIES:                     "SET_CATEGORIES",
  SET_DEFAULT_HOME_STORE_ITEM:        "SET_DEFAULT_HOME_STORE_ITEM",
  SET_HOME_STORE_ITEM_STATUS:         "SET_HOME_STORE_ITEM_STATUS",
  SET_HOME_STORE_ITEM_BY_CATEGORY_ID: "SET_HOME_STORE_ITEM_BY_CATEGORY_ID",
  SET_REFRESH_STATE:                  "SET_REFRESH_STATE",
  SET_CONTENTS:                       "SET_CONTENTS",
  SET_SELECTED_CONTENT :              "SET_SELECTED_CONTENT",
  SET_LOADED_STATE:                   "SET_LOADED_STATE",
  SET_LOCATION_TIMEOUT:               "SET_LOCATION_TIMEOUT",
  SET_BITLY_TOKEN:                    "SET_BITLY_TOKEN",
  COPY_HOME_STORE_TO_HOME_STORE_ITEM: "COPY_HOME_STORE_TO_HOME_STORE_ITEM",
  SORT_THUMBNAIL_BY_RATING:           "SORT_THUMBNAIL_BY_RATING",
  SORT_THUMBNAIL_BY_CLICK:            "SORT_THUMBNAIL_BY_CLICK",
  SORT_ITEM_AS_LOWEST_PRICE:          "SORT_ITEM_AS_LOWEST_PRICE",
  SORT_ITEM_AS_DEFAULT :              "SORT_ITEM_AS_DEFAULT",
  SORT_ITEM_AS_HIGHEST_SAVING:        "SORT_ITEM_AS_HIGHEST_SAVING",
  RESET_LOADED_STATE:                 "RESET_LOADED_STATE",
};

const reducer = (state = initialState, action) => {
  const {defaultHSI,homeStore,selectedContent,contents} = state;
  switch (action.type) {
    case types.SET_TOKEN:
      return {
        ...state, ipConfig: {token: action.payload}
      }
    case types.SET_BITLY_TOKEN:
      return {
        ...state, ipConfig: { bitlyToken: action.payload}
      }
    case types.SET_STORES:
      return {
        ...state, stores: action.payload
      }
    case types.SET_DEVICE_LOCATION:
      return {
        ...state, deviceLocation: action.payload
      }
    case types.SET_HOME_STORE:
      return {
        ...state, homeStore: action.payload
      }
    case types.SET_HOME_STORE_ITEM:
      return {
        ...state, homeStoreItems: action.payload, canUpdatehomeStoreItems: true
      }
    case types.SET_DEFAULT_HOME_STORE_ITEM:
      return {
        ...state, defaultHSI: Object.assign(action.payload)
      }
    case types.SET_HOME_STORE_ITEM_STATUS:
      return {
        ...state, canUpdatehomeStoreItems: action.payload
      }
    case types.SET_CATEGORIES:
      return {
        ...state, categories: action.payload
      }
    case types.SET_LOCATION_TIMEOUT:
      return {
        ...state, locationTimeout: action.payload
      }
    case types.SET_HOME_STORE_ITEM_BY_CATEGORY_ID:
      return {
        ...state, homeStoreItems: getItemByCategoryId(action.payload,defaultHSI), canUpdatehomeStoreItems: false
      }
    case types.SET_CONTENTS:
      return {
        ...state, contents: action.payload
      }
    case types.SET_SELECTED_CONTENT:
      return {
        ...state, selectedContent: action.payload
      }
    case types.SET_REFRESH_STATE:
      return {
        ...state, shouldUpdate: action.payload
      }
    case types.COPY_HOME_STORE_TO_HOME_STORE_ITEM:
      return {
        ...state, homeStoreItems: getItemFromHomeStore(homeStore)
      }

    case types.SET_LOADED_STATE:
      return {
        ...state, isLoaded: action.payload
      }
    case types.RESET_LOADED_STATE:
      return {
        ...state, isLoaded: {}
      }


    case types.SORT_ITEM_AS_LOWEST_PRICE:
      return sortLowestPrice(state);
    case types.SORT_ITEM_AS_DEFAULT:
      return sortDefault(state);
    case types.SORT_ITEM_AS_HIGHEST_SAVING:
      return sortHighSaving(state);

    default:
      throw new Error("Unexpected action");
  }
};

const sortLowestPrice = (state) => {
  let newOrder = state.homeStoreItems.sort((a,b) => a.new_price - b.new_price );
  return {...state, homeStoreItems: newOrder};
}

const sortDefault = (state) => {
  let newOrder = state.homeStoreItems.sort((a,b) => b.clicks - a.clicks);
  return {...state, homeStoreItems: newOrder};
}

const sortHighSaving = (state) => {
  if (!Array.isArray(state.homeStoreItems)) return [];
  let newOrder = state.homeStoreItems.sort((a,b)=> b.discount_in_per - a.discount_in_per)
  return {...state, homeStoreItems: newOrder};
}

const getItemByCategoryId = (id, defaultHSI) => {
  if (!Array.isArray(defaultHSI)) return  [];
  let result = defaultHSI.filter((e)=>{
    if (!e.hasOwnProperty('categories')) return false;
    return e.categories.includes(id);
  });
  return result;
}

const getItemFromHomeStore = (homeStore) => {
  return homeStore.hasOwnProperty('location')
      && homeStore.location.hasOwnProperty('items')?
        homeStore.location.items: [];
}

export { initialState, types, reducer };
