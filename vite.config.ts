import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: {
    preset: "cloudflare-module",
    output: {
      dir: "dist",
      publicDir: "dist/client",
      serverDir: "dist/server",
    },
  },
  tanstackStart: {
    server: { entry: "server" },
    pages: [{ path: "/" }],
    prerender: {
      enabled: true,
      autoStaticPathsDiscovery: false,
    },
  },
});
