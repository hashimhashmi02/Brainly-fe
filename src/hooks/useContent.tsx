import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export function useContent() {
  const [contents, setContents] = useState([]);

  function refresh() {
    const token = localStorage.getItem("token");
    console.log("📌 Fetching content with token:", token);

    axios
      .get(`${BACKEND_URL}/api/v1/content`, {
        headers: {
          Authorization: token || "",
        },
      })
      .then((response) => {
        console.log("✅ Content fetched:", response.data.content);
        setContents(response.data.content);
      })
      .catch((err) => {
        console.error("❌ Failed to fetch content:", err);
      });
  }

  useEffect(() => {
    refresh();
    const interval = setInterval(() => {
      refresh();
    }, 10 * 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return { contents, refresh };
}
