import { useQues } from "../../hooks/useQues";

// Main Component
export default function Sidebar() {

  const {ques,selectedQue, setSelectedQue} = useQues();

  return (
      <div className="w-[100%] p-4 font-Satoshi-Bold">
        {ques.map((q , i) =>{
          console.log(q);
          return <div key={i} className={`flex cursor-pointer p-2 rounded-xl ${(selectedQue == i) ? "bg-[#e9e9e9]" : ""}`} onClick={() => {setSelectedQue(i)}}>
                <p className="font-Boska-BlackItalic">{i + 1}.</p>
                <h4 className="ml-2">{q.que.length > 18 ? q.que.substring(0,18) + "..." : q.que.length == 0 ? "..." : q.que}</h4>
             </div>
        })}
      </div>
  );
}