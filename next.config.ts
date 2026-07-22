import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Gera arquivos estaticos em /out para hospedagem tradicional (Hostinger)
  output: "export",
  // Gera pastas com index.html — compativel com Apache sem rewrites
  trailingSlash: true,
  // Otimizador de imagem exige servidor Node; desativado para export estatico
  images: { unoptimized: true },
};

export default nextConfig;
