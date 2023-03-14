import { useState, useEffect } from "react";
import { IconClient } from "../components/IconClient";
import { IconSubtractClient } from "../components/IconSubtractClient";
import { IconAddClient } from "../components/IconAddClient";
import { useLocalStorage } from "../hooks/useLocalStorage";

function Counter() {
  const [storedValue, setLocalStorage] = useLocalStorage("client-counter", [
    { date: new Date().toLocaleDateString(), clientNumber: 0 },
  ]);

  const [clientNumber, setClientNumber] = useState(() => {
    return (
      storedValue.find((el) => el.date == new Date().toLocaleDateString())
        ?.clientNumber || 0
    );
  });

  useEffect(() => {
    const objectIndex = storedValue.findIndex(
      (obj) => obj.date === new Date().toLocaleDateString()
    );
    if (objectIndex === -1) {
      const storedValueCopy = storedValue.slice(0, 49);
      setLocalStorage([
        { date: new Date().toLocaleDateString(), clientNumber },
        ...storedValueCopy,
      ]);
    } else {
      setLocalStorage(
        storedValue.map((obj) => {
          if (obj.date === new Date().toLocaleDateString()) {
            return { ...obj, clientNumber };
          } else {
            return { ...obj };
          }
        })
      );
    }
  }, [clientNumber]);

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
    <div className="container flex  max-w-2xl flex-1 flex-col justify-center gap-4 p-4">
      <div className="flex h-16 flex-shrink-0 items-center justify-between rounded-3xl border-2 border-slate-700 px-8">
        <IconClient />
        <span className="text-xl font-medium">{clientNumber}</span>
      </div>

      <div className="flex items-center justify-between gap-4">
        <button
          onClick={resetCounter}
          title="Zresetuj licznik"
          className="h-16 w-1/2 rounded-3xl border-2 border-zinc-900 p-2 text-xl transition duration-200 hover:bg-zinc-900 hover:text-white focus-visible:bg-zinc-900 focus-visible:text-white active:bg-zinc-900 active:text-white"
          type="button"
        >
          Reset
        </button>

        <button
          onClick={subtractOneClient}
          title="Odejmij klienta"
          className="flex h-16 w-1/2 items-center justify-center rounded-3xl border-2 border-zinc-900 p-2 transition duration-200 hover:bg-zinc-900 hover:text-white focus-visible:bg-zinc-900 focus-visible:text-white active:bg-zinc-900 active:text-white"
          type="button"
        >
          <IconSubtractClient />
        </button>
      </div>

      <button
        onClick={addOneClient}
        title="Dodaj klienta"
        type="button"
        className="flex h-full min-h-[4rem] w-full flex-shrink flex-grow items-center justify-center self-center rounded-full border-2 border-zinc-900 transition duration-200 hover:bg-zinc-900 hover:text-white focus-visible:bg-zinc-900 focus-visible:text-white active:bg-zinc-900 active:text-white"
      >
        <IconAddClient />
      </button>
    </div>
  );
}

export default Counter;
