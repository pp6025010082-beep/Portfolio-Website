import { useScrollReveal } from "../hooks/useScrollReveal";

/**
 * Wraps any content and fades/slides it in once it enters the viewport.
 * Used across the page so every section animates in consistently.
 */
export default function FadeInSection({ as: Tag = "div", className = "", children, ...rest }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <Tag ref={ref} className={`fade-in-section ${isVisible ? "is-visible" : ""} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
