// React Imports
import { useMemo } from "react";

// Hook Imports
import useWindowSize from "./useWindowSize";

function useResponsive() {
  const { width } = useWindowSize();

  // Mobil ve masaüstü boyutlarını piksel cinsinden belirleyin
  const isMobile = useMemo(() => width <= 767, [width]);
  const isDesktop = useMemo(() => width >= 768, [width]);

  return {
    isMobile,
    isDesktop,
  };
}

export default useResponsive;
