import brasilIcon from "../../assets/brasil.png";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Image src={brasilIcon} alt="Brazil icon" />
      <h5 style={{ fontWeight: "normal" }}>
        Lucas Paulino © {new Date().getFullYear()}
      </h5>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const Image = styled.img`
  width: 30px;
  height: 30px;
`;