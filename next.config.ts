import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/generate-itinerary", // Rutas del frontend que comienzan con /api
        destination: `${process.env.NEXT_PUBLIC_API_NODE_URL}/api/generate-itinerary`, // Cambia esto a la URL de tu backend
      },
      {
        source: "/api/feedback-itinerary", // Rutas del frontend que comienzan con /api
        destination: `${process.env.NEXT_PUBLIC_API_NODE_URL}/api/feedback-itinerary`, // Cambia esto a la URL de tu backend
      },
    ];
  }
};

export default nextConfig;
