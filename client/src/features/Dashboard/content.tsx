import { useContext, useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Quiz from "./components/quiz";
import { Plus } from "@phosphor-icons/react";
import { WorkspaceContext } from ".";
import { useGetQuizzes } from "./api/useGetQuizzes";

export default function Content() {
  const [quizzes, setQuizzes] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();
  const context = useContext(WorkspaceContext);
  const selectedWorkspace = context?.selectedWorkspace || {};

  const {
    mutate: getQuizzes,
    isPending: getPending,
    refetch: refetchQuizzes,
  } = useGetQuizzes({
    onSuccess: (data) => {
      if (data.success) {
        setQuizzes([...data.quizzes]);
      }
    },
  });

  useEffect(() => {
    if (selectedWorkspace.id) {
      getQuizzes({
        workspaceId: selectedWorkspace.id,
        creatorEmail: user.email,
      });
    }
  }, [selectedWorkspace]);

  return (
    <>
      <div className="relative z-0 pb-10">
        {selectedWorkspace.id && (
          <div className="text-2xl flex justify-between">
            <div className="font-Silka-Bold">
              <h1>{selectedWorkspace.title}</h1>
            </div>

            <button
              className="bg-[#5a4bea] flex items-center gap-1 h-9 text-white font-Satoshi-Bold px-3 text-sm rounded-md"
              onClick={() =>
                selectedWorkspace.id &&
                navigate(`create/${selectedWorkspace.id}`)
              }
            >
              <Plus size={16} weight="bold" /> New Quiz
            </button>
          </div>
        )}

        <div className="grid grid-cols-3 grid-rows-auto gap-10 pt-5">
          {getPending
            ? "loading"
            : quizzes.map((quiz) => {
                return (
                  <Quiz
                    key={quiz._id}
                    quiz={quiz}
                    selectedWorkspace={selectedWorkspace}
                    refetchQuizzes={refetchQuizzes}
                  />
                );
              })}
        </div>
      </div>
    </>
  );
}
