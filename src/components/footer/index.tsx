import { CSSProperties } from "react";
import brasilIcon from "../../assets/brasil.png";

const Footer = () => {
  return (
    <section style={styles.footer}>
      <img src={brasilIcon} alt="Brazil icon" style={styles.brazilIcon} />
      <h5 style={{ fontWeight: "normal" }}>
        Lucas Paulino © {new Date().getFullYear()}
      </h5>
    </section>
  );
};

export default Footer;

const styles = {
  footer: {
    width: "100%",
    height: "64px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  } as CSSProperties,

  brazilIcon: {
    width: "30px",
    height: "30px",
  } as CSSProperties,
};
