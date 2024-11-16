"use client";

import { signOut } from "next-auth/react";
import { useLayoutEffect } from "react";

export default function Logout() {
  useLayoutEffect(() => {
    // TODO: Once NextAuth adds a way to signout on the server we need to switch.
    signOut({ redirect: true, callbackUrl: "/" });
  }, []);

  return null;
}
