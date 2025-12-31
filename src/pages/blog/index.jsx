import Header from "@/components/header/header";
import styles from "./blog.module.css";
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
        {/* <h2 className={styles.aboutHeading}>ABOUT</h2> */}

        <Container fluid>
          <div className={styles.blogAboutSection}>
            <Row>
              {/* ROBIN CARD */}
              <Col lg={12}>
                <div className={styles.AboutSection}>
                  <div className={styles.topImageRow}>
                    <div className={styles.topImagecontainer}>
                      <h1 style={{ fontWeight: 700, textAlign: "center" }}>
                        BLOG
                      </h1>

                      <Image
                        src={Logo}
                        alt="Logo"
                        className={styles.smallLogo}
                      />
                    </div>
                  </div>

                  <h3
                    style={{ marginBottom: 32 }}
                    className={styles.cardTitle}
                  ></h3>

                  <div className={styles.blogCardText}>
                    <div className={styles.blogCardTextHeader}>
                      <h1 style={{fontSize:"53px",textAlign:"center",fontWeight:"800",marginTop:"11px",lineHeight:"26px"}}>COMING SOON</h1>
                      <p style={{fontSize:"26px",width:"44%",margin:"auto",marginTop:"30px",textAlign:"center",fontWeight:"600",lineHeight:"36px"}}>
                        We're preparing valuable insights and resources for
                        elite Aesthetic Surgeons. Check back soon!
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}
