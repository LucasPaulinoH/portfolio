import { CSSProperties, ReactNode } from "react";
import { WHITE } from "../../theme/palette";
import styled from "styled-components";

interface ContactCardProps {
  title: string;
  content: string;
  icon: ReactNode;
  link: string;
}

const ContactCard = (props: ContactCardProps) => {
  const { icon, title, content, link } = props;

  return (
    <a href={link} style={styles.link}>
      <div style={styles.container}>
        <Icon>{icon}</Icon>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </a>
  );
};

export default ContactCard;

const styles = {
  link: {
    textDecoration: "none",
    color: "inherit",
  } as CSSProperties,

  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    textDecoration: "none",
  } as CSSProperties,
};

const Icon = styled.div`
  width: 70px;
  height: 70px;
  border: 1px solid ${WHITE};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
  transition: transform 0.3s ease;
  box-shadow: inset 0 100px 200px rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(1.5px);

  &:hover {
    transform: scale(1.2);
  }
`;
