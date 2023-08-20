export const selectIsLogged = state => state.auth.isLogged;

export const selectRefreshed = state => state.auth.isRefreshing;

export const selectUserName = state =>
  state.auth.user ? state.auth.user.name : '';
