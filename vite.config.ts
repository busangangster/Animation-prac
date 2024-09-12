import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "window.jQuery": "jQuery", // jQuery를 전역에서 사용할 수 있도록 설정
  },
});
