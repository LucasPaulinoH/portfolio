import { ReactNode, ReactElement, cloneElement, CSSProperties } from "react";
import "./styles.css";

interface TechnologyProps {
  icon: ReactNode;
  label?: string;
}

const Technology = (props: TechnologyProps) => {
  const { icon, label } = props;
  const ICON_SIZE = 80;

  const IconWithSize = cloneElement(icon as ReactElement, { size: ICON_SIZE });

  return (
    <div style={styles.iconContainer} className="icon-hover">
      {IconWithSize}
      {label && <p className="icon-label">{label}</p>}
    </div>
  );
};

export default Technology;

const styles = {
  iconContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
    position: "relative",
    transition: "transform 0.3s ease",
  } as CSSProperties,
};
