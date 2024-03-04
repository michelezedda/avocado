// vite.config.js
import { defineConfig } from "file:///C:/Users/mikze/Desktop/myProjects/plantpleaser/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/mikze/Desktop/myProjects/plantpleaser/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  define: {
    "process.env.VITE_SOME_KEY": JSON.stringify(process.env.VITE_SOME_KEY)
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxtaWt6ZVxcXFxEZXNrdG9wXFxcXG15UHJvamVjdHNcXFxccGxhbnRwbGVhc2VyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxtaWt6ZVxcXFxEZXNrdG9wXFxcXG15UHJvamVjdHNcXFxccGxhbnRwbGVhc2VyXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9taWt6ZS9EZXNrdG9wL215UHJvamVjdHMvcGxhbnRwbGVhc2VyL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbcmVhY3QoKV0sXHJcbiAgZGVmaW5lOiB7XHJcbiAgICBcInByb2Nlc3MuZW52LlZJVEVfU09NRV9LRVlcIjogSlNPTi5zdHJpbmdpZnkocHJvY2Vzcy5lbnYuVklURV9TT01FX0tFWSksXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBd1UsU0FBUyxvQkFBb0I7QUFDclcsT0FBTyxXQUFXO0FBR2xCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixRQUFRO0FBQUEsSUFDTiw2QkFBNkIsS0FBSyxVQUFVLFFBQVEsSUFBSSxhQUFhO0FBQUEsRUFDdkU7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=