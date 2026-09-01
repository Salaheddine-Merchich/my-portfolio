import React, {useEffect} from "react";
import {ArrowUp} from "lucide-react";
import "./Top.scss";

export default function Top() {
  useEffect(() => {
    const scrollFunction = () => {
      const topButton = document.getElementById("topButton");
      if (!topButton) return;
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        topButton.style.visibility = "visible";
      } else {
        topButton.style.visibility = "hidden";
      }
    };

    scrollFunction();
    window.addEventListener("scroll", scrollFunction, {passive: true});
    return () => window.removeEventListener("scroll", scrollFunction);
  }, []);

  const TopEvent = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <button
      onClick={TopEvent}
      id="topButton"
      type="button"
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} aria-hidden="true" />
    </button>
  );
}
