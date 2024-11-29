import { ReactNode } from "react";
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
    <Link href={link}>
      <Container className="container">
        <Icon className="icon">{icon}</Icon>
        <h3>{content}</h3>
        <p>{title}</p>
      </Container>
    </Link>
  );
};

export default ContactCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10;
  text-decoration: none;
`;

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
  backdrop-filter: blur(5px);

  .container:hover .icon {
    transform: scale(1.2);
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;
