import { useEffect } from "react";

export function useTitle(title: string) {
  useEffect(() => {
    document.title = `Portfolio | ${title}`;
  }, [title]);
}


