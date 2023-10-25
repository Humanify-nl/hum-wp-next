/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    //enter the domain or subdomain where you have WordPress installed
    domains: ['hum-wp-next.local'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'hum-wp-next.local',
        port: '',
        pathname: '',
      },
    ],
  },
}

module.exports = nextConfig