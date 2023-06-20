//const PROXY_CONFIG = [
//  {
//    context: [
//      "/api" // Assuming your API endpoints start with "/api"
//    ],
//    target: "http://localhost:5116", // Replace with your API's URL
//    secure: false
//  }
//];

//module.exports = PROXY_CONFIG;
const PROXY_CONFIG = [
  {
    context: [
      "/api",
    ],
    target: "http://localhost:5116",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
