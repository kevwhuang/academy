import { create } from 'zustand';

const initialize: State = {};

const useStore = create<Actions & State>(() => ({
    ...initialize,
}));

export default useStore;
