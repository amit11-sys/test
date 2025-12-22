import Header from "@/components/header/header";
import styles from "./about.module.css";
import { Col, Container, Row } from "react-bootstrap";
import RobinProfile from "./images/robin-profile.png";
import TamProfile from "./images/tam-profile.png";
import Logo from "./images/logo.png";
import Image from "next/image";
import Footer from "@/components/footer/footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
    

      <div className={styles.wrapper}>
        <h2 className={styles.aboutHeading}>ABOUT</h2>

        <Container fluid>
          <div className={styles.AboutCardsWrapper}>
            <Row>
              {/* ROBIN CARD */}
              <Col lg={6}>
                <div className={styles.AboutSection}>
                  <div className={styles.topImageRow}>
                    <Image
                      src={RobinProfile}
                      alt="Robin Grantham"
                      className={styles.profileImg}
                    />
                    <Image src={Logo} alt="Logo" className={styles.smallLogo} />
                  </div>

                  <h3 className={styles.cardTitle}>
                    Robin Grantham, CEO of Surge-on Up
                  </h3>

                  <p className={styles.cardText}>
                    Robin is a BAFTA-nominated film makeup artist with a
                    sculpture degree and 25 years on Hollywood productions. He
                    built AI systems in the 1980s, scored 100% ‘Cannot be
                    improved!’ on City & Guilds C Programming, then delivered
                    measurable results in corporate roles. He handles client
                    relations, business strategy, graphics and copywriting.
                    <Link href="/about/about-robin" className={styles.moreBtn}>
                      MORE
                    </Link>
                  </p>
                </div>
              </Col>

              {/* TAM CARD */}

              <Col lg={6}>
                <div className={styles.AboutSection}>
                  <div className={styles.topImageRow}>
                    <Image
                      src={TamProfile}
                      alt="Tam Moudden"
                      className={styles.profileImg}
                    />
                    <Image src={Logo} alt="Logo" className={styles.smallLogo} />
                  </div>

                  <h3 className={styles.cardTitle}>
                    am Moudden, Technical Director of Surge-on Up
                  </h3>

                  <p className={styles.cardText}>
                    Tam is an accredited Semrush AI-SEO analyst and THE
                    Aesthetic Website Optimisation Master par excellence. He has
                    a degree in Computer Science from Cambridge and 25 years
                    experience optimising renowned Aesthetic Surgeons from
                    Beverly Hills to Barcelona, the UAE and beyond, with his
                    unique AI-SEO Client Acquisition System.
                    <Link href="/about/about-tam" className={styles.moreBtn}>
                      MORE
                    </Link>
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}
