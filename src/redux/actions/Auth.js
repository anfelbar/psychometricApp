export const Types = {
  CheckUser: 'auth.checkUser',
  LoginFailure: 'auth.loginFailure',
  LoginUser: 'auth.loginUser',
  LogoutUser: 'auth.logoutUser',
  StartGuestSession: 'auth.startGuestSession',
};

export const Actions = {
  checkUser: (userEmail, password) => ({
    type: Types.CheckUser,
    userEmail,
    password,
  }),
  loginFailure: error => ({
    type: Types.LoginFailure,
    error,
  }),
  loginUser: userEmail => ({
    type: Types.LoginUser,
    userEmail,
  }),
  logoutUser: () => ({
    type: Types.LogoutUser,
  }),
  startGuestSession: () => ({
    type: Types.StartGuestSession,
  }),
};
