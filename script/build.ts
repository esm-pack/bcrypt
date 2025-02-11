import path from 'node:path';
import { build } from 'vite';
import dts from 'vite-plugin-dts'

const root = process.cwd();

await build({
  resolve: {
    alias: {
      random: path.resolve(root, "src/random/node.ts"),
    },
  },
  build: {
    target: 'modules',
    lib: {
      formats: ['es'],
      entry: 'src/index.ts',
      fileName: () => 'index.mjs',
    },
    outDir: path.resolve(root, 'dist/node'),
    rollupOptions: {
      external: (source: string) => {
        if (source.startsWith('node')) {
          return true
        }

        return false
      },
    }
  },
  plugins: [dts({
    include: ['src'],
    outDir: 'dist/types'
  })]
});

await build({
  resolve: {
    alias: {
      random: path.resolve(root, "src/random/browser.ts"),
    },
  },
  build: {
    target: 'modules',
    lib: {
      formats: ['es'],
      entry: 'src/index.ts',
      fileName: () => 'index.mjs',
    },
    outDir: path.resolve(root, 'dist/browser'),
  },
});