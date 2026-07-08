import { useScrollReveal } from "../hooks/useScrollReveal";

export default function FadeInSection({ as: Tag = "div", className = "", children, ...rest }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <Tag ref={ref} className={`fade-in-section ${isVisible ? "is-visible" : ""} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
