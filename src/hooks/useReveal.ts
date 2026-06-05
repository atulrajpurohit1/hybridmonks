"use client";

import { useEffect, useRef } from "react";

/**
 * Custom hook that adds scroll-triggered reveal animations.
 * Attaches "reveal" (or custom) class to the ref element and
 * toggles "visible" when it enters the viewport.
 *
 * @param className - CSS class to add (default: "reveal")
 * @param threshold - Intersection ratio to trigger (default: 0.15)
 */
export function useReveal(className = "reveal", threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Add the base class
    el.classList.add(className);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [className, threshold]);

  return ref;
}
