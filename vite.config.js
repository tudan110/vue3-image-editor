import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { version, author, license } from './package.json';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: './src/index.js',
      name: 'ToastUIVueImageEditor',
      fileName: (format) => `toastui-vue3-image-editor.${format}.js`, // 输出文件名
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['vue', 'tui-image-editor'],
      output: {
        globals: {
          vue: 'Vue',
          'tui-image-editor': 'ImageEditor',
        },
      },
    },
  },
  define: {
    PACKAGE_VERSION: JSON.stringify(version),
    PACKAGE_AUTHOR: JSON.stringify(author),
    PACKAGE_LICENSE: JSON.stringify(license),
  },
});
