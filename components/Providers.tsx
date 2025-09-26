"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const Providers = ({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) => {
  // explain what's happening with the ...props and the type?
  return (
    <NextThemesProvider
      attribute={"class"}
      defaultTheme="system"
      enableSystem
      {...props}
    >
      {/* again, what's happening with ...props here? */}
      <SessionProvider>{children}</SessionProvider>
    </NextThemesProvider>
  );
};

export default Providers;
