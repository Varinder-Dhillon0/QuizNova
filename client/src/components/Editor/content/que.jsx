import MultipleChoice from "./MutipleChoice";
import { useQues } from "../../../hooks/useQues";

export default function Que() {
  const {ques,selectedQue } = useQues();

  return (
    <div className="border-[#e2e2e2] border-[1px] w-[100%] h-[475px] overflow-auto flex justify-center">
      <div className="flex h-fit pt-20 pb-20">

        {/* question no. */}
        <h1 className="text-2xl font-Boska-BlackItalic">{selectedQue + 1}.</h1>

        {/* finding question type to display for current question */}
        {ques[selectedQue] && (() => {

          switch (ques[selectedQue].type) {
            case 1:
              return <MultipleChoice />;
            case 2:
              return <div>
                  this is not multiple
              </div>;
            default:
              return <div>No question found</div>;
          }

        })()}
      </div>
    </div>
  );
}
