/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/orders",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
