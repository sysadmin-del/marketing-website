import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow phones and other devices on the local network to load dev assets,
  // otherwise Next.js blocks them and the page renders without hydrating.
  allowedDevOrigins: ["192.168.1.9", "192.168.1.*", "192.168.0.*"],
};

export default nextConfig;
