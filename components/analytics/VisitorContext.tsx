"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { BASE_VISITOR_COUNT } from "@/lib/constants/stats";

interface VisitorContextType {
  visitorCount: number;
  rawCount: number;
  isLoading: boolean;
  refreshCount: () => Promise<void>;
}

const VisitorContext = createContext<VisitorContextType>({
  visitorCount: BASE_VISITOR_COUNT,
  rawCount: 0,
  isLoading: true,
  refreshCount: async () => {},
});

export function VisitorProvider({ children }: { children: React.ReactNode }) {
  const [visitorCount, setVisitorCount] = useState<number>(BASE_VISITOR_COUNT);
  const [rawCount, setRawCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchLatestCount = useCallback(async () => {
    try {
      const res = await fetch("/api/visits");
      const json = await res.json();
      if (json?.ok && typeof json.data?.count === "number") {
        setVisitorCount(json.data.count);
        if (typeof json.data?.rawCount === "number") {
          setRawCount(json.data.rawCount);
        }
      }
    } catch {
      // Keep default baseline if error
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    let isMounted = true;

    async function initVisitorTracking() {
      if (typeof window === "undefined") return;

      const hasVisited = sessionStorage.getItem("appintouch_visited");

      if (!hasVisited) {
        try {
          // Record new visit and get updated count immediately
          const res = await fetch("/api/visits", { method: "POST" });
          const json = await res.json();
          if (isMounted) {
            sessionStorage.setItem("appintouch_visited", "true");
            if (json?.ok && typeof json.data?.count === "number") {
              setVisitorCount(json.data.count);
              if (typeof json.data?.rawCount === "number") {
                setRawCount(json.data.rawCount);
              }
              setIsLoading(false);
              return;
            }
          }
        } catch {
          // Ignore and fallback to fetching
        }
      }

      // If already recorded in this session or fallback
      if (isMounted) {
        await fetchLatestCount();
      }
    }

    initVisitorTracking();

    return () => {
      isMounted = false;
    };
  }, [fetchLatestCount]);

  return (
    <VisitorContext.Provider
      value={{
        visitorCount,
        rawCount,
        isLoading,
        refreshCount: fetchLatestCount,
      }}
    >
      {children}
    </VisitorContext.Provider>
  );
}

export function useVisitor() {
  return useContext(VisitorContext);
}

export function useVisitorCount() {
  const { visitorCount } = useContext(VisitorContext);
  return visitorCount;
}
