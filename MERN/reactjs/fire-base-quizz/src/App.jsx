import { useContext, useEffect, useState } from "react";
import { MainContext } from "./Context/Main";

function App() {

  const { finish, answers, result, quizz, current, setCurrent, chooseAns, finishGame } = useContext(MainContext);

  const [choosen, setChoosen] = useState(null);


  useEffect(
    () => {
      if (choosen != null) chooseAns(quizz[current].id, choosen, quizz[current].correct)
    },
    [choosen]
  )

  useEffect(
    () => {
      setChoosen(null);
      if (answers.length != 0) {
        answers.forEach(
          (data) => {
            if (data.id == quizz[current].id) {
              setChoosen(data.ans);
            }
          }
        )
      }
    },
    [current]
  )

  return (
    <>
      {
        finish == true
          ?
          <div className="text-3xl p-3 text-center max-w-[700px] mx-auto shadow mt-3 rounded">
            Game Finished <br />
            {result}/{quizz.length} Marks
          </div>
          :
          quizz.length == 0
            ?
            <div className="max-w-[700px] mx-auto shadow mt-3 rounded">
              <div role="status" class="max-w-sm animate-pulse">
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                <span class="sr-only">Loading...</span>
              </div>
            </div>
            :
            <div className="max-w-[700px] mx-auto shadow mt-3 rounded">
              <h1 className="text-3xl p-3">{current + 1}) {quizz[current]?.question}</h1>
              <hr />
              <div onClick={() => setChoosen("A")} className={`
            ${choosen == "A" ? 'bg-blue-500' : ''} duration-300 p-3 border-b`}>
                {quizz[current]?.optionA}
              </div>
              <div onClick={() => setChoosen("B")} className={`
            ${choosen == "B" ? 'bg-blue-500' : ''} duration-300 p-3 border-b`}>
                {quizz[current]?.optionB}
              </div>
              <div onClick={() => setChoosen("C")} className={`
            ${choosen == "C" ? 'bg-blue-500' : ''} duration-300 p-3 border-b`}>
                {quizz[current]?.optionC}
              </div>
              <div onClick={() => setChoosen("D")} className={`
            ${choosen == "D" ? 'bg-blue-500' : ''} duration-300 p-3 border-b`}>
                {quizz[current]?.optionD}
              </div>
              <div className="w-full flex justify-between">
                {
                  current != 0
                    ?
                    <div className="p-3 bg-blue-500 text-white cursor-pointer" onClick={() => setCurrent(current - 1)}>
                      Prev
                    </div>
                    :
                    <div className="bg-blue-500 text-white cursor-pointer">

                    </div>

                }

                {
                  current != quizz.length - 1
                    ?
                    <div className="p-3 bg-blue-500 text-white cursor-pointer" onClick={() => setCurrent(current + 1)}>
                      Next
                    </div>
                    :
                    <div title="Double click to end the game" className="p-3 bg-blue-500 text-white cursor-pointer" onDoubleClick={finishGame}>
                      Finish
                    </div>
                }
              </div>
            </div>
      }
    </>
  );
}

export default App;
