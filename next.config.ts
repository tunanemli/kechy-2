import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // The original Turkish services page is replaced by /services.
    return [{ source: "/hizmetler", destination: "/services", permanent: true }];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
