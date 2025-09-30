import React from "react";
import { Card } from "./ui/card";
import { CheckCircle, XCircle } from "lucide-react";
import { Separator } from "./ui/separator";

type Props = {
  correctAnswers: number;
  wrongAnswers: number;
};

function MCQCounter({ correctAnswers, wrongAnswers }: Props) {
  return (
    <Card className="p-2 flex flex-row items-center justify-center">
      <CheckCircle color="green" size={30} />
      <span className="mx-2 text-2xl text-[green]">{correctAnswers}</span>
      <Separator orientation="vertical" />
      <span className="mx-3 text-2xl text-[red]">{wrongAnswers}</span>
      <XCircle color="red" size={30} />
    </Card>
  );
}

export default MCQCounter;
