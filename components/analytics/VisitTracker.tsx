"use client";

import { useEffect } from "react";

export function VisitTracker() {
  useEffect(() => {
    // Only track once per browser session to prevent spamming
    if (typeof window !== "undefined") {
      const visited = sessionStorage.getItem("appintouch_visited");
      if (!visited) {
        fetch("/api/visits", { method: "POST" })
          .then(() => {
            sessionStorage.setItem("appintouch_visited", "true");
          })
          .catch(() => {
            // Ignore error in tracking
          });
      }
    }
  }, []);

  return null;
}
