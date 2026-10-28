import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pages read content/*.json (written by the admin panel) from disk. Static
  // pages do that at build time, but on-demand ones (the 404 page) read it at
  // runtime, so ship the folder with every server function.
  outputFileTracingIncludes: {
    "/**": ["./content/**/*"],
  },
};

export default nextConfig;
