import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      loginUser: (userData) => set({ user: userData }),
      updateUserProfile: (updatedData) =>
        set((state) => ({ user: { ...state.user, ...updatedData } })),
      logoutUser: () => set({ user: null }),
    }),
    {
      name: "user-storage",
      getStorage: () => sessionStorage,
    }
  )
);

//   (set) => ({
//   user: JSON.parse(sessionStorage.getItem("user")) || null,
//   loginUser: (userData) => {
//     sessionStorage.setItem("user", JSON.stringify(userData));
//     set({ user: userData });
//   },
//   updateUserProfile: (updatedData) =>
//     set((state) => {
//       const updatedUser = { ...state.user, ...updatedData };
//       sessionStorage.setItem("user", JSON.stringify(updatedUser));
//       return { user: updatedUser };
//     }),
//   logoutUser: () => {
//     sessionStorage.removeItem("user");
//     set({ user: null });
//   },
// }));

export { useUserStore };
