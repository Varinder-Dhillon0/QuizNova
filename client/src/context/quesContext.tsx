import { createContext, useCallback, useState, type ReactNode } from "react";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@utils/axios";
import { API_URLS } from "@shared/constants/ApiUrls.constants";
import { useDebounce } from "../hooks/useDebounce";

export const QuesContext = createContext<any>({});

export default function QuesProvider({ children }: { children: ReactNode }) {
  const [quiz, setQuiz] = useState<any>();
  const [ques, setQues] = useState<any[]>([]);
  const [selectedQue, setSelectedQue] = useState(1);
  const [isUserSelect, setisUserSelect] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const [saveDebounce, cancelSaveDebounce] = useDebounce(
    async (questions: any[], quizId?: string) => {
      updateQuiz({
        quizId: quizId || quiz?._id,
        updates: { questions },
      });
    },
    1000,
  );

  const { mutate: updateQuiz, isPending: updatingQuiz } = useMutation({
    mutationFn: async ({
      quizId,
      updates,
    }: {
      quizId: string;
      updates: any;
    }) => {
      await axiosInstance.post(API_URLS.QUIZ.QUES.UPDATE, {
        id: quizId,
        updated: { ...updates },
      });
    },
  });

  const updateQuesContext = useCallback(
    (edited: any, index: number) => {
      cancelSaveDebounce();

      setQues((prev) => {
        const updated = [...prev];

        console.log(quiz?._id);
        updated[index] = edited;
        saveDebounce(updated);
        return updated;
      });
    },
    [quiz, saveDebounce, cancelSaveDebounce, setQues],
  );

  const deleteQue = useCallback(
    (index: number) => {
      cancelSaveDebounce();

      setQues((prev) => {
        const updated = [...prev];
        updated.splice(index, 1);
        saveDebounce(updated, "");
        return updated;
      });
    },
    [setQues],
  );

  return (
    <QuesContext.Provider
      value={{
        quiz,
        setQuiz,
        ques,
        deleteQue,
        setQues,
        selectedQue,
        setSelectedQue,
        updateQuesContext,
        isUserSelect,
        setisUserSelect,
        updateQuiz,
        updatingQuiz,
      }}
    >
      {children}
    </QuesContext.Provider>
  );
}
