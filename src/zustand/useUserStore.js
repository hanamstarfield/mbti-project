import create from "zustand";

const useUserStore = create((set) => ({
  user: JSON.parse(sessionStorage.getItem("user")) || null,
  loginUser: (userData) => {
    sessionStorage.setItem("user", JSON.stringify(userData));
    set({ user: userData });
  },
  updateUserProfile: (updatedData) =>
    set((state) => {
      const updatedUser = { ...state.user, ...updatedData };
      sessionStorage.setItem("user", JSON.stringify(updatedUser));
      return { user: updatedUser };
    }),
  logoutUser: () => {
    sessionStorage.removeItem("user");
    set({ user: null });
  },
}));
export default useUserStore;
