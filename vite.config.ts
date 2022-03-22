import type { UserConfig, ConfigEnv } from 'vite';
import { loadEnv } from 'vite';

import { pathResolve , wrapperEnv} from './build/utils';
import { createVitePlugins } from './build/vite/plugin';

export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);
  const isBuild = command === 'build';
  
  return {
    root, // 项目根目录（index.html 文件所在的位置）。可以是一个绝对路径，或者一个相对于该配置文件本身的相对路径。
    base: './', // 开发或生产环境服务的公共基础路径
    plugins: createVitePlugins(viteEnv, isBuild),
    resolve: {
      alias: [
        {
          find: 'vue-i18n',
          replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
        },
        // /@/xxxx => src/xxxx
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/',
        },
        // /#/xxxx => types/xxxx
        {
          find: /\/#\//,
          replacement: pathResolve('types') + '/',
        },
      ],
    },
    css: {
      preprocessorOptions: {
        less: {
          // modifyVars: generateModifyVars(),
          javascriptEnabled: true,
        },
      },
    },

    build: {
      minify: 'terser',
      // target: 'es2015',
      // cssTarget: 'chrome86',
      outDir: 'dist',
      terserOptions: {
        compress: {
          keep_infinity: true,
          // Used to delete console in production environment
          drop_console: true,
        },
      },
      // Turning off brotliSize display can slightly reduce packaging time
      brotliSize: false,
      chunkSizeWarningLimit: 2000,
    },
  }
}