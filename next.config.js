/**
 *  @type {import('next').NextConfig}
 */
const isProdEnv = process.env.NODE_ENV = 'production'

const nextConfig = {
    basePath: isProdEnv ? '/we_are' : '',
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true
    },
  };
  
  module.exports = nextConfig;
