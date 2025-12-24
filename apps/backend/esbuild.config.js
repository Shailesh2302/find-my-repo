import esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  outfile: 'dist/index.js',
  platform: 'node',
  format: 'esm',
  target: 'node22',
  packages: 'external', // Don't bundle node_modules
  // Or be selective:
  // external: ['dotenv', '@repo/db', '@prisma/client'],
  banner: {
    js: "import { createRequire } from 'module';const require = createRequire(import.meta.url);",
  },
}).catch(() => process.exit(1));