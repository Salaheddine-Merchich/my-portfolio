import React from "react";
import {useInView} from "../../hooks/useInView";
import "./FadeInView.scss";

const VARIANT_CLASS = {
  up: "fade-in-up",
  left: "fade-in-left",
  right: "fade-in-right",
  none: "fade-in-none"
};

export default function FadeInView({
  children,
  className = "",
  variant = "up",
  delay = 0,
  as: Tag = "div",
  ...props
}) {
  const [ref, isInView] = useInView();
  const variantClass = VARIANT_CLASS[variant] || VARIANT_CLASS.up;

  return (
    <Tag
      ref={ref}
      className={`fade-in-view ${variantClass} ${isInView ? "is-visible" : ""} ${className}`}
      style={delay ? {transitionDelay: `${delay}s`} : undefined}
      {...props}
    >
      {children}
    </Tag>
  );
}
