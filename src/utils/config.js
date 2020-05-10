const config = {
  development: {
    baseURL: "http://localhost:8081/",
  },
  production: {
    baseURL: "https://bookit-ng.herokuapp.com/",
  },
};

export default config[process.env.NODE_ENV || "development"];
