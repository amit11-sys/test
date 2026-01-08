import Header from "@/components/header/header";
import styles from "./contact.module.css";
import Image from "next/image";
import WhatsAppImg from "./images/whatsapp.png";
import ChatWithRobin from "./images/bookIcon.jpg";
import Footer from "@/components/footer/footer";
import Link from "next/link";

export default function Contact() {
  const phone = "447356075678";
  const message1 = encodeURIComponent("CHAT FROM CONTACT");
  const message2 = encodeURIComponent("OPINION FROM CONTACT");
  return (
    <div className={styles.contactMainSection}>
      <h2 style={{ margin: "0px" }}>Contact</h2>
      <div className={styles.maincardContainer}>
        <div className={styles.cardContainer}>
          <div className={styles.topCardContent}>
            <h1 className={styles.mainLabel}>
              SURGEONS: Robin is here for you, 24/7 on WhatsApp if needed or
              email at robin@surgeonup.com
            </h1>
            <div className={styles.bottomTextContainer}>
              <h3 className={styles.bottomLabel}>
                BUSINESS HOURS: 8am - 4pm PST (9am - 12mn GMT)
              </h3>
              <h3 className={styles.bottomLabel}>
                Mon to Fri BUT IF IT’S URGENT, you can contact ANYTIME 24/7/365
              </h3>
            </div>
          </div>
          <div className={styles.boxTextContainer}>
            <div className={styles.businessOuter}>
              <div className={styles.businessCard}>
                <h2 className={styles.title}>BUSINESS HOURS</h2>

                <p className={styles.sub}>Mon to Fri</p>
                <p className={styles.hours}>8am to 4pm PST</p>
                <p className={styles.hours}>9am to 12mn GMT/BST</p>

                <p className={styles.small}>
                  Text, voice or video, its your call
                </p>

                <div className={styles.whatsappWrap}>
                  {/* replace src with your WhatsApp image if you have one */}
                  <Image
                    src={WhatsAppImg}
                    alt="Logo"
                    width={70}
                    height={70}
                    className={styles.activeLinks}
                  />
                </div>

                <p className={styles.paragraph}>
                  We can chat about anything you like, even just to pass the
                  time of day!
                </p>

                <p className={styles.paragraph}>
                  If its a Website AISEO issue we'll resolve it for Clients
                  within 24 hours, no charge
                </p>

                <p className={styles.final}>AESTHETIC SURGEONS ONLY</p>

                <p className={styles.note}>
                  No Suppliers, thanks, we'll block you.
                </p>
              </div>
            </div>
            <div className={styles.secondBox}>
              <span
                style={{
                  margin: "0px",
                  fontWeight: "500",
                  fontSize: "25px",
                  fontWeight: "700",
                }}
              >
                LIKE A FREE CONSULTATION?
              </span>
              <Link href={"https://calendly.com/robin-grantham-surgeonup"}>
                {" "}
                <Image
                  src={ChatWithRobin}
                  alt="Logo"
                  width={130}
                  height={100}
                  className={styles.activeLinks}
                />
              </Link>
              <span
                style={{
                  margin: "0px",
                  fontWeight: "600",
                  fontSize: "20px",
                  fontWeight: "700",
                  textAlign: "start",
                }}
              >
                BOOK A SCHEDULED 15 MIN SLOT
              </span>
            </div>
            <div className={styles.firstBox}>
              <span
                style={{
                  margin: "0px",
                  fontWeight: "500",
                  fontSize: "24px",
                  fontWeight: "700",
                }}
              >
                Text, voice or claim, its your call
              </span>
              <h1
                style={{
                  fontSize: "25px",
                  fontWeight: "700",
                  margin: "0px",
                  fontStyle: "italic",
                }}
              >
                Direct
              </h1>
              <Link
                href={`https://wa.me/${phone}?text=${message1}`}
                target="_blank"
              >
                <Image
                  src={WhatsAppImg}
                  alt="Logo"
                  width={70}
                  height={70}
                  className={styles.activeLinks}
                />
              </Link>
              <span
                style={{
                  margin: "0px",
                  fontWeight: "500",
                  fontSize: "24px",
                  fontWeight: "700",
                }}
              >
                or if you don’t like WhatsApp, dial
              </span>
              <span
                style={{
                  margin: "0px",
                  fontWeight: "500",
                  fontSize: "24px",
                  fontWeight: "700",
                }}
              >
                44 7356 075 678
              </span>
              <span
                style={{
                  margin: "0px",
                  fontWeight: "500",
                  fontSize: "22px",
                  fontWeight: "700",
                  textAlign: "start",
                }}
              >
                {" "}
                we can chat about anything you like
              </span>
            </div>
            <div className={styles.thirdBox}>
              <span
                style={{ margin: "0px", fontWeight: "700", fontSize: "29px" }}
              >
                If you are a client and you have an AISEO issue we’ll resolve it
                with in 24 hours, no charge
              </span>
            </div>
          </div>
          <div className={styles.businessOuter}>
            <div className={styles.businessCard}>
              <h2 style={{fontSize:23}} className={styles.title}>WHAT’S  YOUR OPINION?</h2>

              <div className={styles.whatsappWrap}>
                {/* replace src with your WhatsApp image if you have one */}
                <Image
                  src={WhatsAppImg}
                  alt="Logo"
                  width={70}
                  height={70}
                  className={styles.activeLinks}
                />
              </div>

              <p  className={styles.paragraph}>
                Do you like or dislike anything about
              </p>
              <p  className={styles.paragraph}>
               our Website? How could we improve?
              </p>
              <p  className={styles.paragraph}>
               Any other Services  you’d like to see?
              </p>
            </div>
          </div>
          <div className={styles.contactTextSec1}>
            <div className={styles.Contact3ContentAlignment2}>
              <h5 className={styles.bottomCardContainer}>
                <div style={{ fontSize: "18px", fontWeight: "bold" }}>
                  <h1 className={styles.largeLabel1}> WHAT’S YOUR</h1>
                  <div className={styles.des}>
                    What things do you like about our Website? What do you
                    dislike?
                  </div>
                </div>

                <Link
                  href={`https://wa.me/${phone}?text=${message2}`}
                  target="_blank"
                >
                  <Image
                    src={WhatsAppImg}
                    alt="Logo"
                    width={70}
                    height={70}
                    style={{ margin: "0px" }}
                    className={styles.activeLinks}
                  />
                </Link>
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                  }}
                >
                  <h1 className={styles.largeLabel2}>OPINION?</h1>
                  <div className={styles.des}>
                    How can we improve? What other Services would you like?
                  </div>
                </div>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
