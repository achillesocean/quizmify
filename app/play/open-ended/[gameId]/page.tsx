import OpenEnded from "@/components/OpenEnded";
import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  params: {
    gameId: string;
  };
};

const OpenEndedPage = async ({ params: { gameId } }: Props) => {
  // what is the ': {gameId}'
  const session = await getAuthSession();
  if (!session?.user) {
    return redirect("/");
  }

  const game = await prisma.game.findUnique({
    where: {
      id: gameId,
    },
    include: {
      questions: {
        select: {
          id: true, // explore the addition of this id
          question: true,
          answer: true, // needed to add this, explain!?
          // options: true,
        },
      },
    },
  });
  if (!game || game.gameType !== "open_ended") {
    return redirect("/quiz");
  }

  return <OpenEnded game={game} />;
};

export default OpenEndedPage;
