"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Providers = ({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) => {
  // explain what's happening with the ...props and the type?
  return (
    <QueryClientProvider client={queryClient}>
      <NextThemesProvider
        attribute={"class"}
        defaultTheme="system"
        enableSystem
        {...props}
      >
        {/* again, what's happening with ...props here? */}
        <SessionProvider>{children}</SessionProvider>
      </NextThemesProvider>
    </QueryClientProvider>
  );
};

export default Providers;
