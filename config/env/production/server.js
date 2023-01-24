module.exports = ({ env }) => ({
    host: env("HOST", "0.0.0.0"),
    port: env.int("PORT", 1337),
    url: "https://maritime-reflection.azurewebsites.net",
    admin: {
      url: "https://zealous-dune-072c96c10.2.azurestaticapps.net",
      serveAdminPanel: false,
    },
  });