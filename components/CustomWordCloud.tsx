"use client";

import React from "react";
import { Word, WordCloud } from "@isoterik/react-word-cloud";
import { useTheme } from "next-themes";

type Props = {};

const fontSizeMapper = (word: { value: number }) => {
  return Math.log2(word.value) * 5 + 16;
};

const CustomWordCloud = (props: Props) => {
  const theme = useTheme();
  const words: Word[] = [
    { text: "React", value: 500 },
    { text: "React", value: 500 },
    { text: "React", value: 500 },
  ];

  return (
    <WordCloud
      words={words}
      height={550}
      width={400}
      font="Times"
      fontSize={fontSizeMapper}
      padding={10}
      fill={theme.theme == "dark" || "system" ? "white" : "black"}
    />
  );
};

export default CustomWordCloud;
