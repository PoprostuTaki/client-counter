import { useState } from "react";
interface ClientsInDate {
  [key: string]: number;
}
export function History() {
  const [clientsList, setClientsList] = useState(() => {
    const dataFromLocalStorage = localStorage.getItem("client-counter");
    if (dataFromLocalStorage !== null) {
      return JSON.parse(dataFromLocalStorage);
    }
    return undefined;
  });

  return (
    <ul className="container flex max-w-xl flex-1 flex-col justify-center divide-y p-4 ">
      <li className="flex h-12 items-center justify-between px-4">
        <span>Date</span>
        <span>Clients</span>
      </li>
      {clientsList ? (
        clientsList.map((item: ClientsInDate, index: number) => {
          return (
            <li
              key={`${Object.keys(item)[0]} &{index}`}
              className="flex h-12 items-center justify-between px-4"
            >
              <span>{Object.keys(item)[0]}</span>
              <span>{Object.values(item)[0]}</span>
            </li>
          );
        })
      ) : (
        <li>asd</li>
      )}
    </ul>
  );
}
