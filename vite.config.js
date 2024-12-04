import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    // src로 들어가는 경로를 @로 변환한다.
    alias: [{ find: "@", replacement: "/src" }],
  },
});
