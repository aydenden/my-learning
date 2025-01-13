const isLocal = process.env.NODE_ENV === "development";

/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/docs",
        destination: "http://localhost:3001/docs",
      },
      {
        source: "/docs/:path*",
        destination: "http://localhost:3001/docs/:path*",
      },
      {
        source: "/books",
        destination: "http://localhost:3002/books",
      },
      {
        source: "/books/:path*",
        destination: "http://localhost:3002/books/:path*",
      },
    ];
  },
};

export default nextConfig;
