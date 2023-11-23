/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.redd.it',
            port: '',
          },
        ],
      },
}

module.exports = nextConfig
