// src/stores/uiStore.ts
import create from 'zustand';

type UIState = {
    isEditingPanelVisible: boolean;
    toggleEditingPanel: () => void;
};

export const useUIStore = create<UIState>((set) => ({
    isEditingPanelVisible: false,
    toggleEditingPanel: () =>
        set((state) => ({ isEditingPanelVisible: !state.isEditingPanelVisible })),
}));
