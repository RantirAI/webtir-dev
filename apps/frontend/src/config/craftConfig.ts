// src/config/craftConfig.ts
export const craftConfig = {
    resolver: {
        ActiveComponents: require('../components/builder/ActiveComponents').ActiveComponents,
        Canvas: require('../components/builder/Canvas/Canvas').Canvas,
        Toolbox: require('../components/builder/Toolbox').Toolbox,
    },
};
