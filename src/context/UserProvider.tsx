"use client";

import React, { createContext, useContext, useState } from "react";
import { User } from "@/types";

interface IUserContext {
  user: User | null;
  setUser: (user: User) => void;
  getUser: () => User | null;
  clearUser: () => void;
}

const UserContext = createContext<IUserContext | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUserContext] = useState<User | null>(null);

  const setUser = (user: User) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUserContext(user);
  };

  const getUser = () => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUserContext(JSON.parse(storedUser));
      return JSON.parse(storedUser);
    }
    return null;
  };

  const clearUser = () => {
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ user, setUser, getUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  if (context === null) {
    throw new Error("useTheme must be used with in UserProvider");
  }

  return context;
}
