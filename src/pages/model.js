"use client";

import { useEffect, useState } from "react";

const CsvComponent = () => {
  const [label, setLabel] = useState("");

  useEffect(() => {
    const checkUrl = async () => {
      const url = "uboat.net/allies/warships/class.html?ID=11";
      try {
        const response = await fetch("/api/postData", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url }),
        });

        if (!response.ok) {
          console.log(response);
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setLabel(data.label);
      } catch (error) {
        console.error("Failed to check URL:", error);
        setLabel("Benign");
      }
    };

    checkUrl();
  }, []);

  return (
    <div>
      <p>Label: {label}</p>
    </div>
  );
};

export default CsvComponent;
