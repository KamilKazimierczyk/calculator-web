import { useState } from "react";
import Button from "./Button";

export default function Calculator() {
  const [query, setQuery] = useState("");

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:3000/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          operation: query,
        }),
      });

      const data = await res.json();
      if (data.status !== "success") return alert(data.message);
      setQuery(String(data.data.result));
    } catch (err) {
      alert(err.message);
    }
  };
  const buttons = [
    {
      sign: "C",
      cb: () => setQuery((prev) => prev.slice(0, prev.length - 1)),
      color: "orange",
      wide: false,
    },
    {
      sign: "CE",
      cb: () => setQuery(""),
      color: "orange",
      wide: false,
    },
    {
      sign: "v",
      cb: () => setQuery((prev) => prev + "v"),
      color: "#3EC7F7",
      wide: false,
    },
    {
      sign: "^",
      cb: () => setQuery((prev) => prev + "^"),
      color: "#3EC7F7",
      wide: false,
    },
    {
      sign: "(",
      cb: () => setQuery((prev) => prev + "("),
      color: "#3EC7F7",
      wide: true,
    },
    {
      sign: ")",
      cb: () => setQuery((prev) => prev + ")"),
      color: "#3EC7F7",
      wide: true,
    },
    {
      sign: "1",
      cb: () => setQuery((prev) => prev + "1"),
      color: "yellow",
      wide: false,
    },
    {
      sign: "2",
      cb: () => setQuery((prev) => prev + "2"),
      color: "yellow",
      wide: false,
    },
    {
      sign: "3",
      cb: () => setQuery((prev) => prev + "3"),
      color: "yellow",
      wide: false,
    },
    {
      sign: "/",
      cb: () => setQuery((prev) => prev + "/"),
      color: "#3EC7F7",
      wide: false,
    },
    {
      sign: "4",
      cb: () => setQuery((prev) => prev + "4"),
      color: "yellow",
      wide: false,
    },
    {
      sign: "5",
      cb: () => setQuery((prev) => prev + "5"),
      color: "yellow",
      wide: false,
    },
    {
      sign: "6",
      cb: () => setQuery((prev) => prev + "6"),
      color: "yellow",
      wide: false,
    },
    {
      sign: "*",
      cb: () => setQuery((prev) => prev + "*"),
      color: "#3EC7F7",
      wide: false,
    },
    {
      sign: "7",
      cb: () => setQuery((prev) => prev + "7"),
      color: "yellow",
      wide: false,
    },

    {
      sign: "8",
      cb: () => setQuery((prev) => prev + "8"),
      color: "yellow",
      wide: false,
    },
    {
      sign: "9",
      cb: () => setQuery((prev) => prev + "9"),
      color: "yellow",
      wide: false,
    },
    {
      sign: "-",
      cb: () => setQuery((prev) => prev + "-"),
      color: "#3EC7F7",
      wide: false,
    },

    {
      sign: ".",
      cb: () => setQuery((prev) => prev + "."),
      color: "yellow",
      wide: false,
    },
    {
      sign: "0",
      cb: () => setQuery((prev) => prev + "0"),
      color: "yellow",
      wide: false,
    },

    {
      sign: "=",
      cb: () => fetchData(),
      color: "#4FF74F",
      wide: false,
    },
    {
      sign: "+",
      cb: () => setQuery((prev) => prev + "+"),
      color: "#3EC7F7",
      wide: false,
    },
  ];

  return (
    <div className="calculator-wrapper">
      <div className="screen">{query}</div>
      {buttons.map((button, id) => (
        <Button
          key={id}
          cb={button.cb}
          text={button.sign}
          color={button.color}
          wide={button.wide}
        />
      ))}
    </div>
  );
}
