import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [typeof window !== 'undefined' ? window.location.pathname : '']);

  return null;
}
