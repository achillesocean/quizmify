import React from "react";
import keyword_extractor from "keyword-extractor";

type Props = {
  answer: string;
  setBlankAnswer: React.Dispatch<React.SetStateAction<string>>; // what is this type?
};

export const BLANKS = "______";
function BlankAnswerInput({ answer, setBlankAnswer }: Props) {
  const keywords = React.useMemo(() => {
    const words = keyword_extractor.extract(answer, {
      language: "en",
      remove_digits: true,
      remove_duplicates: false,
      return_changed_case: false,
    });
    const shuffled = words.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 2);
  }, [answer]);

  const answerWithBlanks = React.useMemo(() => {
    const answerWithBlanks = keywords.reduce((acc, keyword) => {
      return acc.replace(keyword, BLANKS);
    }, answer);
    setBlankAnswer(answerWithBlanks);
    return answerWithBlanks;
  }, [keywords, answer]); // explain this entire chain of logic!?

  return (
    <div className="flex justify-start w-full mt-4">
      <h1 className="text-xl font-semibold">
        {answerWithBlanks.split(BLANKS).map((part, index) => {
          return (
            <>
              {part}
              {index === answerWithBlanks.split(BLANKS).length - 1 ? null : (
                <input
                  id="user-blank-input"
                  className="text-center border-b-2 border-black dark:border-white w-28 focus:border-2 focus:border-b-4 focus:outline-none"
                />
              )}
            </>
          );
        })}
      </h1>
    </div>
  );
}

export default BlankAnswerInput;
