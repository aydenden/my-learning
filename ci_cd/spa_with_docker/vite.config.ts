import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split(".");
          const ext = info[info.length - 1];

          // 폰트 파일들을 assets/font 폴더로 이동
          if (/ttf|otf|eot|woff|woff2/i.test(ext)) {
            return "assets/font/[name]-[hash][extname]";
          }

          // 기타 에셋들
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
});
