import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import * as SecureStore from 'expo-secure-store';
import { StateStorage } from 'zustand/middleware';

// ✅ SecureStore를 Zustand Storage로 설정하는 함수
const secureStorage: StateStorage = {
  setItem: async (name, value) => {
    await SecureStore.setItemAsync(name, value);
  },
  getItem: async (name) => {
    return (await SecureStore.getItemAsync(name)) || null;
  },
  removeItem: async (name) => {
    await SecureStore.deleteItemAsync(name);
  },
};

interface AuthState {
  isLoggedIn: boolean;
  accessToken: string | null;
  checkLoginStatus: () => Promise<boolean>;
  setLoggedIn: (token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      accessToken: null,

      setLoggedIn: async (token) =>{
        await SecureStore.setItemAsync('accessToken', token);
        set({
          isLoggedIn: true,
          accessToken: token,
        })
      },
      
      checkLoginStatus: async () => {
        const token = await SecureStore.getItemAsync('accessToken');
        if (token) {
          set({ isLoggedIn: true, accessToken: token });
          return true;
        }
        return false;
      },

      logout:async () =>{
        await SecureStore.deleteItemAsync('accessToken');
        set({
          isLoggedIn: false,
          accessToken: null,
        });
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => secureStorage), // ✅ storage 사용 (getStorage ❌)
    }
  )
);
