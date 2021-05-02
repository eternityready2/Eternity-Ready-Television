module.exports = {
  apps : [
      {
        name: "client",
        script: "./build/server-bundle.js",
        watch: true,
        env: {
          "PORT": "3000",
        }
      },
      {
        name: "admin",
        script: "./build/server-bundle.js",
        watch: true,
        env: {
          "ADMIN": true,
          "MONGODB_URI": "mongodb://localhost/eternity-ready",          
          "PORT": "3030",
        }
      }      
  ]
}