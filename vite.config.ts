import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
<<<<<<< HEAD
  vite: {
    base: "/Julfilm/",
  },
=======
>>>>>>> 131b47788e8ddfe971cf9f5b84bf2f1f40427bbe
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
