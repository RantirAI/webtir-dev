// src/hooks/useReka.ts
import { useReka } from '@rekajs/react';

export const useRekaStore = () => {
    const reka = useReka();
    return reka;
};
