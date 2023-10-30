/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  env: {
    API_URL: "https://653dabacf52310ee6a9a439a.mockapi.io/spider-verse",
    DOMAIN_ORIGIN: "http://localhost:3000",
  },
};

module.exports = nextConfig;
