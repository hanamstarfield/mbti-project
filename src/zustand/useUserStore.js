import create from "zustand";

const useUserStore = create((set) => ({
  user: null,
  loginUser: (userData) => set({ user: userData }),
  updateUserProfile: (updatedData) =>
    set((state) => ({ user: { ...state.user, ...updatedData } })),
  logoutUser: () => set({ user: null }),
}));

export default useUserStore;
