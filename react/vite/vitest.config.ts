import { configDefaults, defineConfig } from 'vitest/config';

const vitest: any = {
    test: {
        watch: true,
        reporters: 'verbose',
        exclude: [...configDefaults.exclude],
        include: [...configDefaults.include],
    },
};

export default defineConfig(vitest);
