/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "store.storeimages.cdn-apple.com",
      "s3.amazonaws.com",
      "img.youtube.com",
      "lh3.googleusercontent.com",
      "s3.amazonaws.com",
      "images.prismic.io",
      "img.youtube.com",
      "lh3.googleusercontent.com",
      "d1fdloi71mui9q.cloudfront.net",
      "www.wanderon.in",
      "tenor.com",
      "media.tenor.com",
    ],
  },
};

module.exports = nextConfig;

// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });

// module.exports = withBundleAnalyzer({
//   reactStrictMode: true,
//   swcMinify: true,
//   compress: true,
//   basePath: "/",
//   compiler: {
//     styledComponents: true,
//   },
//   images: {
//     imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
//     deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
//     domains: [
//       "s3.amazonaws.com",
//       "images.prismic.io",
//       "img.youtube.com",
//       "images.unsplash.com",
//       "images-na.ssl-images-amazon.com",
//       "m.media-amazon.com",
//       "prismic-io.s3.amazonaws.com",
//     ],

//     minimumCacheTTL: 60,
//   },
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   staticPageGenerationTimeout: 5000,
//   async headers() {
//     return [
//       {
//         source: "/:path*",
//         headers: [
//           {
//             key: "cache-control",
//             value: "max-age=31536000",
//           },
//         ],
//       },
//     ];
//   },
// });
