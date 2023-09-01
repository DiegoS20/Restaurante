/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "**",
      },
    ],
  },
  rewrites: async () => [
    {
      source: "/admin/categorias/add",
      destination: "/admin/categorias/add-edit",
    },
    {
      source: "/admin/categorias/edit",
      destination: "/admin/categorias/add-edit",
    },
    {
      source: "/admin/comidas/add",
      destination: "/admin/comidas/add-edit",
    },
    {
      source: "/admin/comidas/edit",
      destination: "/admin/comidas/add-edit",
    },
  ],
};

module.exports = nextConfig;
