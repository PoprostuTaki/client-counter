export function About() {
  return (
    <div className="container my-8 max-w-2xl space-y-8 px-4">
      <section>
        <h2 className="text-xl font-medium">Jakie ma możliwości?</h2>
        <p>
          Podstawową funkcionalnością aplikacji jest zliczanie ilości
          obsłużonych klientów. Po obsłużeniu klienta, pracownik klikając w
          przycisk dodania zwiększa wartość na wyświetlaczu licznika. Można
          również odejmować aktualną wartość licznika i go zerować. Aplikacja
          zapamiętuje aktualny stan licznika zapisując go w pamięci przeglądarki
          (localStorage). Po każdym uruchomieniu aplikacji wczytywana jest
          wartość licznika z danego dnia. W kolejnym dniu licznik jest zerowany
          i zapisywana jest wartość dla danego dnia. Aplikacja umożliwia również
          podgląd ostatnich 50 zapisów licznika wraz z datą zapisu dnia.
          Aplikacja jest darmowa, kod aplikacji jest dostępny publicznie.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-medium">Funkcje:</h2>
        <ul className="list-inside list-disc">
          <li>Dodawanie, odejmowanie i zerowanie licznika.</li>
          <li>Automatyczny zapis licznika.</li>
          <li>Automatyczne ładowanie z pamięci aktualnego stanu licznika.</li>
          <li>Podgląd historii ostatnich 50 zapisów.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-medium">Planowanie zmiany i dodatki:</h2>
        <ul className="list-inside list-disc">
          <li>Jasne i ciemne tło</li>
          <li>Animacja Loga</li>
          <li>
            Wykres pokazujący ilość obsłużonych klientów w danym przedziale
            czasowym.
          </li>
          <li>Praca offline</li>
          <li>Poprawa dostępności</li>
        </ul>
      </section>
    </div>
  );
}
