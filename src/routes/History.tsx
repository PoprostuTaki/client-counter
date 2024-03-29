import { useLocalStorage } from "../hooks/useLocalStorage";
interface ClientsInDate {
  date: string;
  clientNumber: number;
}
export function History() {
  const [storedData] = useLocalStorage("client-counter", []);

  return (
    <ul className="container flex max-w-2xl flex-1 flex-col justify-center divide-y p-4 text-emerald-800">
      <li className="flex h-12 items-center justify-between rounded-t-xl bg-emerald-50 px-4 uppercase">
        <span>Data</span>
        <span>Klienci</span>
      </li>
      {storedData.length > 0 ? (
        storedData.map((item: ClientsInDate, index: number) => {
          return (
            <li
              key={`${item.date} ${index}`}
              className="flex h-12 items-center justify-between px-4 last:rounded-b-xl odd:bg-emerald-50"
            >
              <span>{item.date}</span>
              <span>{item.clientNumber}</span>
            </li>
          );
        })
      ) : (
        <li className="flex h-12 items-center justify-center px-4 uppercase">
          Brak danych
        </li>
      )}
    </ul>
  );
}
