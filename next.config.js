/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'firebasestorage.googleapis.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'files.edgestore.dev',
            port: '',
            pathname: '/**',
          }
        ],
      },
      compiler: {
        styledComponents: true,
      },
}


module.exports = nextConfig
