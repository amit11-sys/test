import Header from "@/components/header/header";
import styles from "./privacy.module.css";
import RobinImg from "./images/robin-profile.png";
import TamImg from "./images/tam-profile.png";
import Bar from "./images/bar.png";
import Image from "next/image";
import tosFooter from "./images/tos-footer.png";

import Footer from "@/components/footer/footer";

export default function Privacy() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeaderPrivacy}>PRIVACY</h1>

      <div className={styles.heroPrivacyImageSec}>
        <Image src={RobinImg} alt="Logo" width={250} height={310} />
        <Image src={Bar} alt="Logo" width={800} height={110} />
        <Image src={TamImg} alt="Logo" width={250} height={310} />
      </div>
      <section className={styles.privacySection}>
        <div className={styles.privacyCard}>
          <div className={styles.privacyInner}>
            <h3 className={styles.privacyHeading}>YOUR PRIVACY</h3>

            <div className={styles.pledgeBadge}>WE PLEDGE</div>

            <p className={styles.line}>
              To <i>NEVER</i> divulge your information
            </p>

            <p className={styles.line}>without your permission</p>

            <p className={styles.line}>for neither love</p>

            <p className={styles.line}>nor money.</p>
          </div>
        </div>
      </section>

      <section className={styles.privacySection}>
        <div className={styles.privacyCOCSection}>
          <div className={styles.privacyHeader}>
            <h1 className={styles.title}>SURGE-ON UP</h1>
            <h2 className={styles.subtitle}>PRIVACY</h2>
            <p className={styles.updated}>Last updated: 3 November 2025</p>
          </div>
          <div
            style={{
              fontSize: "22px",
              fontWeight: 600,
            }}
            className={""}
          >
            <p>
              Welcome to Surge-on Up! We're committed to protecting your
              privacy. This policy explains how we collect, use, and share your
              information when you use our online services.
            </p>

            <h3>1. THE INFORMATION WE COLLECT</h3>
            <p>
              We collect information to provide and improve our services. The
              information we collect depends on how you use Surge-on Up. For
              example:
            </p>

            <p>
              <b>Information you give us:</b>
            </p>
            <p>
              When you contact us, we ask for things like your name, email
              address, and website.
            </p>
            <p>In contacting us, you automatically share your phone number.</p>

            <p>
              <b>Other information we collect automatically:</b>
            </p>
            <p>
              We may use cookies and similar technologies to collect information
              about how you use our website. This includes things like your IP
              address, browser type, and which pages you visit.
            </p>
            <p>
              We might also collect information about your device, like its type
              and operating system.
            </p>

            <h3>2. HOW WE USE YOUR INFORMATION</h3>
            <p>We track this data to analyse and improve:</p>

            <ul>
              <li>Our offerings to you and thus our business</li>
              <li>
                To communicate with you, like responding to your questions or
                sending you updates
              </li>
              <li>To develop new features</li>
              <li>To keep our services safe and secure</li>
              <li>To follow legal obligations</li>
            </ul>

            <h3>3. WHEN WE SHARE YOUR INFORMATION</h3>
            <p>
              <b>Coherent Healthcare Ltd:</b>
            </p>
            <p>
              Only if you order a free Demonstration from them of how their app
              can drastically cut your card costs.
            </p>

            <p>
              <b>Semrush and Yext apps:</b>
            </p>
            <p>
              (Not their personnel) Only if you order either a free Website
              Audit or 10 New Clients without any upfront payment.
            </p>

            <p>
              <b>Legal reasons:</b>
            </p>
            <p>
              If we're required to by law, such as in the unlikely event of
              money-laundering enquiries, we will share your information with
              the relevant authorities.
            </p>

            <p>
              <b>Business transfer:</b>
            </p>
            <p>
              If we sell or merge our business, your information will be
              transferred to the new owners or our new partners. They will also
              be bound by this Privacy Agreement.
            </p>

            <h3>4. YOUR RIGHTS</h3>
            <p>
              Under GDPR, you have a number of rights regarding your personal
              data:
            </p>

            <ul>
              <li>
                <b>Right to Access:</b> You can ask us for a copy of the
                information we hold about you.
              </li>
              <li>
                <b>Right to Rectification:</b> You can ask us to correct any
                incorrect information.
              </li>
              <li>
                <b>Right to Erasure:</b> If you withdraw your previously given
                consent, you can ask us to remove your information.
              </li>
              <li>
                <b>Right to Restrict Processing:</b> You can ask us to limit how
                we use your information.
              </li>
              <li>
                <b>Right to Data Portability:</b> You can ask us to give you
                your information in a machine-readable format like .csv or
                .xlsx.
              </li>
              <li>
                <b>Right to Object:</b> You can object to us using your
                information.
              </li>
              <li>
                <b>Right to Withdraw Consent:</b> You can withdraw consent at
                any time. This will mean you cannot chat with us or order our
                Services.
              </li>
            </ul>

            <p>
              To exercise these rights, please contact us at{" "}
              <b>robin@surgeonup.com</b>, with "GDPR DATA REQUEST" in the
              subject line.
            </p>

            <h3>5. DATA SECURITY</h3>
            <p>
              We take reasonable steps to protect your information from
              unauthorised access, use, or disclosure. However, no one can
              guarantee that any internet transmission is 100% secure.
            </p>

            <h3>6. DATA RETENTION</h3>
            <p>
              We keep your information as long as necessary to provide our
              services and comply with legal requirements.
            </p>

            <h3>7. COOKIES AND SIMILAR TECHNOLOGIES</h3>
            <p>
              We may use them to improve your experience. You can control
              cookies through your browser settings.
            </p>

            <h3>8. CHANGES TO THIS POLICY</h3>
            <p>
              We might update this policy from time to time. We'll post any
              changes here.
            </p>

            <h3>9. HOW TO CONTACT US</h3>
            <p>
              If you have any questions about this policy, please contact us at:
            </p>
            <p>
              <b>robin@surgeonup.com</b>, with "PRIVACY ENQUIRY" in the subject
              line.
            </p>

            <p>
              NO Sales Pitches, thanks, you will be blocked. AESTHETIC SURGEONS
              only.
            </p>

            <p>
              For general enquiries by Aesthetic Surgeons only:{" "}
              <b>robin@surgeonup.com</b>
            </p>
          </div>

          <div>
            <div className={styles.privacyCOCImagefooter}>
              <Image src={tosFooter} alt="Logo" width={600} height={300} />
            </div>
          </div>
        </div>
      </section>

      {/* <div className={styles.TosTextContainer}>
          <div className={styles.TosCOCSection}>
            <h2>YOUR PRIVACY</h2>
            <h1>WE PLEDGE:</h1>
            <br />
            <p>We will never divulge your information</p>
            <p>Without your permission</p>
            <p>For love or money</p>
          </div>
          <div className={styles.COCImageSec}>
            <Image src={RobinImg} alt="Logo" width={250} height={310} />
            <Image src={Bar} alt="Logo" width={500} height={70} />
            <Image src={TamImg} alt="Logo" width={250} height={310} />
          </div>
        </div>

        <div className={styles.TosTextContainer2}>
          <div className="title-section">
            <p>
              <span style={{ color: "#006633" }}>Welcome to Surge-on Up</span>!
              We're{" "}
              <span style={{ color: "#006633" }}>
                committed to protecting your privacy
              </span>
              . This policy explains how we collect, use, and share your
              information when you use our online services.
            </p>
            <h3>1. THE INFORMATION WE COLLECT</h3>
            <p>
              We collect information to provide and improve our services. The
              information we collect depends on how you use Surge-on Up. For
              example:
            </p>

            <ul>
              <li>
                Information you give us:
                <ul>
                  <li>
                    When you contact us we ask for things like your name, email
                    address and website.
                  </li>
                  <li>
                    In contacting us, you automatically share your phone number.
                  </li>
                </ul>
              </li>
              <li>
                Other information we collect automatically:
                <ul>
                  <li>
                    We may use cookies and similar technologies to collect
                    information about how you use our website. This includes
                    things like your IP address, browser type, and which pages
                    you visit.
                  </li>
                  <li>
                    We might also collect information about your device, like
                    its type and operating system.
                  </li>
                </ul>
              </li>
            </ul>

            <h3>2. HOW WE USE YOUR INFORMATION</h3>
            <p>We track this data to analyse and improve:</p>
            <ul>
              <li>Our offerings to you and thus our business.</li>
              <li>
                To communicate with you, like responding to your questions or
                sending you updates.
              </li>
              <li>To develop new features.</li>
              <li>To keep our services safe and secure.</li>
              <li>To follow legal obligations.</li>
            </ul>

            <h4>3. WHEN WE SHARE YOUR INFOMATION </h4>
            <p>We will only share your information with:</p>

            <ul>
              <li>
                <span style={{ color: "#006633" }}>Coherent Healthcare </span>
                Ltd only IF you order a free Demonstration from them of how
                their app can drastically cut your card costs.
              </li>
              <li>
                With the{" "}
                <span style={{ color: "#006633" }}>Semrush and Yext apps</span>{" "}
                (not their personnel) only if you order either a free Website
                Audit or 10 New Clients without any upfront payment.{" "}
              </li>
              <li>
                <span style={{ color: "#006633" }}>Legal reasons:</span> If
                we're required to by law, such as in the unlikely event of
                money-laundering enquiries, we will share your information with
                the relevant authorities.
              </li>
              <li>
                <span style={{ color: "#006633" }}>Business transfer:</span> if
                we sell or merge our business, your information will be
                transferred to the new owners or our new partners. They will
                also be bound by this Privacy Agreement.
              </li>
            </ul>
            <h4>4. YOUR RIGHTS</h4>
            <p>
              Under GDPR, you have a number of rights regarding your personal
              data:
            </p>
            <ul>
              <li>
                <span style={{ color: "#006633" }}>Right to Access:</span> You
                can ask us for a copy of the information we hold about you.
              </li>
              <li>
                <span style={{ color: "#006633" }}>
                  Right to Rectification:
                </span>{" "}
                You can ask us to correct any incorrect information.
              </li>
              <li>
                <span style={{ color: "#006633" }}>Right to erasure:</span> If
                you withdraw your previously given consent for whatever reason,
                you can ask us to remove your information .  
              </li>
              <li>
                <span style={{ color: "#006633" }}>
                  Right to restrict processing:
                </span>{" "}
                Although it will limit your ability to order our Services, you
                can ask us to limit how we use your information.
              </li>
              <li>
                <span style={{ color: "#006633" }}>
                  Right to data portability:
                </span>{" "}
                You can ask us to give you your information in a
                machine-readable format, such as .csv or .xlsx, that you can use
                elsewhere.
              </li>
              <li>
                <span style={{ color: "#006633" }}>Right to object:</span> You
                can object to us using your information.
              </li>
              <li>
                <span style={{ color: "#006633" }}>
                  Right to withdraw your consent:
                </span>{" "}
                We rely on your consent but you can withdraw it at any time. It
                will mean you wont be able to chat with us or order our
                Services.
              </li>
            </ul>
            <p>
              To exercise these rights, please contact us at
              <span style={{ color: "#006633" }}>robin@surgeonup.com</span>,
              with <span style={{ color: "#006633" }}>“GDPR DATA REQUEST”</span>
              in the subject line.
            </p>
            <h4>5. DATA SECURITY</h4>
            <p>
              We take reasonable steps to protect your information from
              unauthorised access, use, or disclosure. However, no one can
              guarantee that any internet transmission is 100% secure.{" "}
            </p>
            <div className="sub-section">
              <h5>6 DATA RETENTION</h5>
              <p>
                We keep your information as long as necessary to provide our
                services and comply with legal requirements.
              </p>
            </div>
            <div className="sub-section">
              <h5>7. COOKIES AND SIMILAR TECHNOLOGIES</h5>
              <p>
                We may use them to improve your experience. You can control
                cookies through your browser settings.
              </p>
            </div>
            <div className="sub-section">
              <h5>8. CHANGES TO THIS POLICY</h5>
              <p>
                We might update this policy from time to time. We'll post any
                changes here.
              </p>
            </div>
            <h4 className="contact-heading">10. CONTACT US</h4>
            <p>
              If you have any questions about these Terms of Service, please
              contact us at{" "}
              <a href="mailto:robin@surgeeonup.com?subject=TOS%20ENQUIRY">
                <span style={{ color: "#006633" }}>robin@surgeeonup.com</span>
              </a>{" "}
              with <span style={{ color: "#006633" }}>“TOS ENQUIRY”</span> in
              the subject line.
            </p>
            <p className="disclaimer-notice">
              <span style={{ color: "#006633" }}>No Sales Pitches</span>,
              thanks, you will be{" "}
              <span style={{ color: "#006633" }}>
                blocked. AESTHETIC SURGEONS
              </span>{" "}
              only.
            </p>
            <p className="last-updated">LAST UPDATED: Saturday 31 May 2025</p>
          </div>
        </div> */}
    </div>
  );
}
