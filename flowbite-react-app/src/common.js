const domain = "https://credit-sea-five.vercel.app/";

const Api = {
  signUp: {
    url: `${domain}/user/signup`,
    method: "post",
  },
  login: {
    url: `${domain}/user/login`,
    method: "post",
  },
  userDetail: {
    url: `${domain}/user/userDetail`,
    method: "get",
  },
  loanForm: {
    url: `${domain}/user/loanApplication`,
    method: "post",
  },
  loanApplication: {
    url: `${domain}/user/applications`,
    method: "get",
  },
};

export default Api;
