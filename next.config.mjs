/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['127.0.0.1'],
    unoptimized: true,
  },
}

export default nextConfig
