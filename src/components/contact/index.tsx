import { ReactNode } from "react";
import styled from "styled-components";
import { PRIMARY_COLOR } from "../../theme/palette";

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
        <span className="text">{content}</span>
      </Container>
    </Link>
  );
};

export default ContactCard;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 10px;
  margin: 5px;
  transition: 0.3s;
  justify-content: center;

  .text {
    width: 0px;
    overflow: hidden;
    transition: 0.3s;
    text-align: center;
    margin-left: 5px;
  }

  &:hover {
    width: 150px;
    border-radius: 5px;
  }

  &:hover span {
    padding: 2px;
    width: 80px;
  }
`;

const Icon = styled.div`
  transition-duration: 0.3s;
`;

const Link = styled.a`
  text-decoration: none;
`;
