import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Scroll to top on route change before paint
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
