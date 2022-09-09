module.exports = {
  pwa: {
    name: "Kotak IT Podcast",
    themeColor: "#8940fa",
    manifestOptions: {
      background_color: "#8940FA",
      icons: [
        {
          src: "./img/icons/kotakit-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "./img/icons/kotakit-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "./img/icons/kotakit-maskable-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "./img/icons/kotakit-maskable-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
    },
  },
};
