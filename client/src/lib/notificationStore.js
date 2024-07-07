import { create } from "zustand";
import { userNotification } from "../services/api/user";

export const useNotificationStore = create((set) => ({
  number: 0,
  fetch: async () => {
    const fetchedNumber = await userNotification();

    set({ number: fetchedNumber });
  },
  decrease: () => {
    set((prev) => ({ number: prev.number - 1 }));
  },
  reset: () => {
    set({ number: 0 });
  },
}));
