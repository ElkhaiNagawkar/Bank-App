import React from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export default function Pagination(props) {
  const numberOfPages = [];
  const [currentIndex, setCurrentIndex] = React.useState(1);

  for (
    let i = 1;
    i <= Math.ceil(props.totalTransactions / props.transactionsPerPage);
    i++
  ) {
    numberOfPages.push(i);
  }
  function handleBothClick(number) {
    props.paginate(number);
    setCurrentIndex(number);
  }

  function handleLeftArrow() {
    if (numberOfPages.length === 0) {
      return;
    } else if (currentIndex === 1) {
      props.paginate(numberOfPages[numberOfPages.length - 1]);
      setCurrentIndex(numberOfPages[numberOfPages.length - 1]);
    } else {
      props.paginate(currentIndex - 1);
      setCurrentIndex(currentIndex - 1);
    }
  }

  function handleRightArrow() {
    if (numberOfPages.length === 0) {
      return;
    } else if (currentIndex === numberOfPages.length) {
      props.paginate(numberOfPages[0]);
      setCurrentIndex(numberOfPages[0]);
    } else {
      props.paginate(currentIndex + 1);
      setCurrentIndex(currentIndex + 1);
    }
  }

  return (
    <div className="h-10 w-full flex justify-center items-center space-x-5 relative">
      <div onClick={handleLeftArrow}>
        <SlArrowLeft />
      </div>
      {numberOfPages.map((number) => {
        return (
          <ul>
            <li>
              <a onClick={() => handleBothClick(number)} href="#">
                <div
                  className={`rounded-full w-3 h-3 border-2 border-zinc-400 ${
                    currentIndex === number ? "bg-zinc-300" : "bg-zinc-600"
                  }`}
                ></div>
              </a>
            </li>
          </ul>
        );
      })}
      <div onClick={handleRightArrow}>
        <SlArrowRight />
      </div>
    </div>
  );
}
