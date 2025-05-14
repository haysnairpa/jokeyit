/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        source: '/:path*.(ico|png)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          }
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/aitopia/:path*',
        destination: 'https://extensions.aitopia.ai/:path*',
      },
    ];
  },
};

module.exports = nextConfig;