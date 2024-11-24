import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IAuthResponseSuccess, IUser } from "../dtos/auth";

interface AuthLoggedState {
  auth: IAuthResponseSuccess;
  setAuth: (value: IAuthResponseSuccess) => void;
}

export const useAuthLoggedState = create<AuthLoggedState>()(
  persist(
    (set) => ({
      auth: {
        statusCode: 0,
        message: "",
        token: "",
        user: {
          id: 0,
          name: "",
          email: "",
          password: "",
          birthDate: "",
          role_id: 2,
        },
      },
      setAuth: (value) =>
        set(() => ({
          auth: value, 
        })),
    }),
    {
      name: "auth-logged-state", 
      partialize: (state) => ({ auth: state.auth }),
    }
  )
);
