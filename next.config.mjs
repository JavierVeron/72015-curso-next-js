/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: 'cache-mcd-middleware.mcdonaldscupones.com',
          },
        ],
      },
};

export default nextConfig;
