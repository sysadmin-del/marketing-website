import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  allowedDevOrigins: ["192.168.1.9", "192.168.1.*", "192.168.0.*"],
};

export default nextConfig;
