import { useState } from "react";
import { IconClient } from "../components/IconClient";
import { IconSave } from "../components/IconSave";
import { IconSubtractClient } from "../components/IconSubtractClient";
import { IconAddClient } from "../components/IconAddClient";

interface ClientsInDate {
  [key: string]: number;
}

function Counter() {
  const [clientNumber, setClientNumber] = useState(() => {
    const localStorageData = localStorage.getItem("client-counter");
    if (localStorageData !== null) {
      const actualDate = new Date().toLocaleDateString();
      const parsedData: ClientsInDate[] = JSON.parse(localStorageData);
      const getFirstElementFromParsedData: ClientsInDate = parsedData[0];
      const keyValuePair = Object.entries(getFirstElementFromParsedData);
      const dateFromLocalStorage = keyValuePair[0][0];
      const valueFromLocalStorage = keyValuePair[0][1];
      if (dateFromLocalStorage === actualDate) return valueFromLocalStorage;
    }
    return 0;
  });

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
  const date = new Date().toLocaleDateString();

  const saveCounter = () => {
    const localStorageData = localStorage.getItem("client-counter");
    if (localStorageData === null) {
      localStorage.setItem(
        "client-counter",
        JSON.stringify([{ [date]: clientNumber }])
      );
    } else {
      let parsedlocalStorageData = JSON.parse(localStorageData);
      if (parsedlocalStorageData.length > 50) {
        parsedlocalStorageData.pop();
      }

      localStorage.setItem(
        "client-counter",
        JSON.stringify([{ [date]: clientNumber }, ...parsedlocalStorageData])
      );
    }
  };

  return (
    <div className="container flex max-w-2xl flex-1 flex-col justify-center gap-4 p-4">
      <div className="flex h-16 flex-shrink-0 items-center justify-between rounded-3xl border-2 border-slate-700 px-8">
        <IconClient />
        <span className="text-xl font-medium">{clientNumber}</span>
      </div>

      <div className="flex items-center justify-between gap-4">
        <button
          onClick={saveCounter}
          title="Save"
          className="flex h-16 w-1/3 items-center justify-center rounded-3xl border-2 border-slate-700 p-2 transition duration-200 hover:bg-zinc-900 hover:text-white"
          type="button"
        >
          <IconSave />
        </button>

        <button
          onClick={resetCounter}
          title="Reset counter"
          className="h-16 w-1/3 rounded-3xl border-2 border-zinc-900 p-2 text-xl transition duration-200 hover:bg-zinc-900 hover:text-white"
          type="button"
        >
          Reset
        </button>

        <button
          onClick={subtractOneClient}
          title="Subtract client"
          className="flex h-16 w-1/3 items-center justify-center rounded-3xl border-2 border-zinc-900 p-2 transition duration-200 hover:bg-zinc-900 hover:text-white"
          type="button"
        >
          <IconSubtractClient />
        </button>
      </div>

      <button
        onClick={addOneClient}
        title="Add client"
        type="button"
        className="mb-8 flex h-full w-full flex-shrink flex-grow items-center justify-center self-center rounded-full border-2 border-zinc-900 transition duration-200 hover:bg-zinc-900 hover:text-white"
      >
        <IconAddClient />
      </button>
    </div>
  );
}

export default Counter;
