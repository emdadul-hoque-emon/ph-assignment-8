import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // reactCompiler: true,
  experimental: {
    serverActions: {
      bodySizeLimit: "3mb",
    },
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "lh3.googleusercontent.com",
      "picsum.photos",
      "randomuser.me",
      "images.unsplash.com",
      "unsplash.com",
    ],
  },
};

export default nextConfig;
