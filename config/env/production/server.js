module.exports = ({ env }) => ({
    host: env("HOST", "0.0.0.0"),
    port: env.int("PORT", 1337),
    url: "https://maritime-reflection.azurewebsites.net",
    admin: {
      url: "https://zealous-dune-072c96c10.2.azurestaticapps.net",
      serveAdminPanel: false,
    },
    app: {
      keys: ['Z4zr+4ITTqoouMqINk2bxQ==','F+pCkTv+mrl+MmS3ytRosA==','0ffh1T453UyVxQhyZrAetQ==','o+lMew0XGUQxBVpYatKV1A=='],
    },
  });