import React from "react";
import SignInButton from "@/components/SignInButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAuthSession } from "@/lib/nextauth";
import Image from "next/image";
import { redirect } from "next/navigation";

type Props = {};

export default async function Home(props: Props) {
  const session = await getAuthSession();
  if (session?.user) {
    // logged in!
    return redirect("/dashboard");
  }
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>Welcome to Quizmify</CardTitle>
          <CardDescription>Quizmify is a quiz app.</CardDescription>
        </CardHeader>
        <CardContent>
          <SignInButton text="Sign In with Google" />
        </CardContent>
      </Card>
    </div>
  );
}
