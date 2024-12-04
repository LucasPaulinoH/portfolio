import { ReactNode } from "react";
import styled from "styled-components";

interface ContactCardProps {
  content: string;
  icon: ReactNode;
  link: string;
}

const ContactCard = (props: ContactCardProps) => {
  const { icon, content, link } = props;

  return (
    <Link href={link}>
      <Container className="container">
        <Icon className="icon">{icon}</Icon>
        <p>{content}</p>
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
  transition: transform 0.3s ease;
  
  .container:hover {
    transform: scale(1.2);
  }
`;

const Icon = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
  backdrop-filter: blur(5px);
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;
