import { useState, useEffect } from "react";
import { IconClient } from "../components/IconClient";
import { IconSubtractClient } from "../components/IconSubtractClient";
import { IconAddClient } from "../components/IconAddClient";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { ButtonExample } from "../components/Button";

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
      <div className="fancy-border w-full items-center justify-between rounded-full px-8 before:-inset-1 after:-inset-1 after:blur-0">
        <IconClient />
        <span className="text-xl font-medium text-emerald-800">
          {clientNumber}
        </span>
      </div>
      <div className="flex items-center justify-between gap-4">
        <ButtonExample title="Zresetuj licznik" small onClick={resetCounter}>
          <span className="text-lg  transition duration-500 group-hover:scale-125 group-focus-visible:scale-150 group-active:scale-105">
            Reset
          </span>
        </ButtonExample>
        <ButtonExample
          title="Odejnij klienta"
          small
          onClick={subtractOneClient}
        >
          <IconSubtractClient />
        </ButtonExample>
      </div>

      <ButtonExample title="Dodaj klienta" onClick={addOneClient}>
        <IconAddClient />
      </ButtonExample>
    </div>
  );
}

export default Counter;
