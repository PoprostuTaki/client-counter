import { useState } from "react";

function Counter() {
  const [clientNumber, setClientNumber] = useState(0);

  const addOneClient = () => {
    setClientNumber((currentValue) => {
      return currentValue + 1;
    });
  };

  const subtractOneClient = () => {
    setClientNumber((currentValue) => {
      if (currentValue <= 0) {
        return 0;
      }
      return currentValue - 1;
    });
  };

  const resetCounter = () => {
    setClientNumber(0);
  };

  return (
    <div className="container flex max-w-2xl flex-1 flex-col justify-center gap-4 p-4">
      <div className="flex h-16 flex-shrink-0 items-center justify-between rounded-3xl border-2 border-slate-700 px-8">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </div>
        <span className="text-xl font-medium">{clientNumber}</span>
      </div>

      <div className="flex items-center justify-between gap-4">
        <button
          title="Save"
          className="flex h-16 w-1/3 items-center justify-center rounded-3xl border-2 border-slate-700 p-2 transition duration-300 hover:bg-zinc-900 hover:text-white"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
            />
          </svg>
        </button>

        <button
          onClick={resetCounter}
          title="Reset counter"
          className="h-16 w-1/3 rounded-3xl border-2 border-zinc-900 p-2 text-xl transition duration-300 hover:bg-zinc-900 hover:text-white"
          type="button"
        >
          Reset
        </button>

        <button
          onClick={subtractOneClient}
          title="Subtract client"
          className="flex h-16 w-1/3 items-center justify-center rounded-3xl border-2 border-zinc-900 p-2 transition duration-300 hover:bg-zinc-900 hover:text-white"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
            />
          </svg>
        </button>
      </div>

      <button
        onClick={addOneClient}
        title="Add client"
        type="button"
        className=" mb-8 flex h-full w-full flex-shrink flex-grow items-center justify-center self-center rounded-full border-2 border-zinc-900 transition duration-300 hover:bg-zinc-900 hover:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
          />
        </svg>
      </button>
    </div>
  );
}

export default Counter;
