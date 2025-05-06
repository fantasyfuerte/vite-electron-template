import { useEffect, useState } from "react";

function App() {
  const [ramUsage, setRamUsage] = useState(0);

  useEffect(() => {
    //@ts-expect-error add types later
    window.electron.subscribeStatistics((statistics) => {
      console.log(statistics);
      setRamUsage(statistics.ramUsage);
    });
  }, []);

  return (
    <>
      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-semibold">
          Welcome to Vite + Electron + React + TailwindCSS
        </h1>
        <h4 className="text-2xl font-semibold mt-5">
          {(ramUsage * 100).toFixed()}% of your RAM is used
        </h4>
      </main>
    </>
  );
}

export default App;
