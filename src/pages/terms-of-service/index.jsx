import Header from "@/components/header/header";
import styles from "./tos.module.css";
import RobinImg from "./images/robin-profile.png";
import TamImg from "./images/tam-profile.png";
import Bar from "./images/term-image.png";
import tosFooter from "./images/tos-footer.png";
import Image from "next/image";
import Footer from "@/components/footer/footer";

export default function TOS() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeaderTerm}>Terms of Service (TOS)</h1>

      <div className={`${styles.COCImageSec} ${styles.hideMoboCOCImageSec2}`}>
        <Image src={RobinImg} alt="Logo" width={250} height={310} />
        <Image src={Bar} alt="Logo" width={800} height={110} />
        <Image src={TamImg} alt="Logo" width={250} height={310} />
      </div>

      {/* <section className={styles.TosSection}>
       
      </section> */}

      <section className={styles.TosSection}>
        
        <div
          // style={{
          //   backgroundColor: "white",
          //   marginTop: 15,
          //   marginRight: 15,
          //   marginLeft: 15,
          //   marginBottom: 0,
          //   borderRadius: 10,
          //   padding: 10,
          // }}
          className={`${styles.COCImageSec} ${styles.hideMoboCOCImageSec}`}
        >
        

          <Image src={RobinImg} alt="Logo" width={250} height={310} />
          <Image src={Bar} alt="Logo" width={800} height={110} />
          <Image src={TamImg} alt="Logo" width={250} height={310} />
     
        </div>

        <div className={styles.TosTextContainer}>
          <div className={styles.TosCOCSection}>
            <h2 className={styles.h2}>OUR CODE OF CONDUCT</h2>

            <div className={styles.badgeRow}>
              <div className={styles.badge}>WE PLEDGE:</div>
            </div>

            <div className={styles.content}>
              <p>To be cheerful.</p>
              <p>To have 100% integrity</p>
              <p>To be honest and ethical</p>
              <p>To treat you with respect</p>
              <p>To offer you Profit or No Fee</p>
              <p>To only say what is correct and truthful</p>
              <p>Not to pressure you to buy our services.</p>
              <p>To always have them here for you. You just have to ask.</p>
              <p>To not hold grudges or take revenge. We leave that to Karma</p>
              <p>
                We won’t share your information with anyone without your
                consent.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.TosCOCSection}>
          <div className={styles.tosCard}>
            <div className={styles.tosHeader}>
              <h1 className={styles.title}>SURGE-ON UP</h1>
              <h2 className={styles.subtitle}>TERMS OF SERVICE</h2>
              <p className={styles.updated}>Last updated: 3 November 2025</p>

              <h3>1. INTRODUCTION</h3>
              <p>
                Surge-on Up ("we," "us," "our," or "the Company") provides
                specialised digital marketing and AI-powered search engine
                optimisation (AISEO) consultancy services exclusively to
                Aesthetic Surgeons, That is Cosmetic, Hair Restoration and Oral
                Maxillofacial (OMFS) Surgeons ("Surgeon," "you," or "your").
                These Terms of Service ("TOS") govern your use of our services
                and constitute a binding legal agreement between you and us.
              </p>

              <p>
                By engaging with any of our services, including requesting a
                free audit or entering into a paid service agreement, you
                acknowledge that you have read, understood, and agree to be
                bound by these TOS.
              </p>

              <h3>2. SERVICE OFFERINGS</h3>
              <p>
                We offer four Services, each designed to address the different
                stages of your journey from your current situation to a
                sustained stream of 10 Clients a month for a minimum investment:
              </p>

              <p>
                <b>2.1 BRONZE OFFER: Free Website Audit</b>
              </p>

              <p>Service Description:</p>
              <p>
                A comprehensive, no-obligation website audit from a Cambridge
                graduate who has optimised elite global Surgeons' websites for
                over 25 years. We provide a full AISEO analysis using Semrush
                expertise.
              </p>

              <p>Including:</p>
              <ul>
                <li>Google Business Profile (GBP) audit</li>
                <li>Keyword analysis</li>
                <li>Traffic analysis</li>
                <li>Backlinks assessment</li>
                <li>Domain Authority (DA) evaluation</li>
                <li>Business Directory Listings review</li>
                <li>Load speed analysis</li>
                <li>Image optimisation checks</li>
                <li>Description checks</li>
              </ul>

              <p>
                <b>Investment:</b> FREE
              </p>

              <p>
                <b>Obligations:</b> This Audit is provided with neither charge
                nor obligation.
              </p>

              <p>
                <b>2.2 SILVER (SOS RESCUE): Multiple Website Recovery</b>
              </p>

              <p>Eligibility:</p>
              <p>
                Surgeons with multiple websites that cause a fragmented online
                presence and possibly severely compromised digital footprints
                including toxic backlinks, low-authority referring domains,
                neglected Google Business Profile (GBP), and poor Business
                Directory listings.
              </p>

              <p>Service Description:</p>
              <p>
                A 2-month intensive programme to consolidate and recover a
                Surgeon's digital footprint.
              </p>

              <p>Focus:</p>
              <ul>
                <li>Removal or remediation of toxic backlinks</li>
                <li>Addressing low Domain Authority (DA) referring domains</li>
                <li>Optimising neglected GBP</li>
                <li>Optimising Business Directory listings</li>
                <li>Website consolidation strategy</li>
                <li>Technical AISEO improvements</li>
              </ul>

              <p>
                <b>Investment:</b> £4,407 per month × 2 months = £8,814 total,
                paid in arrears
              </p>

              <p>
                <b>Guarantee:</b>
              </p>
              <p>
                No Clients are guaranteed during the 2-month recovery period,
                though some will appear naturally. Upon successful completion,
                the Surgeon qualifies for our Platinum Offer (10 guaranteed
                Clients monthly).
              </p>

              <p>
                <b>Commitment Period:</b> One month at a time. You may opt out
                by not signing the agreement for the upcoming month's
                investment.
              </p>

              <p>
                <b>2.3 SILVER MINUS: Exceptionally Severe Cases</b>
              </p>

              <p>Eligibility:</p>
              <p>
                Practices with exceptionally severe digital presence issues that
                require extended recovery time beyond standard Silver service.
              </p>

              <p>Service Description:</p>
              <p>
                Extended intensive AISEO recovery programme with timeline
                determined on a case-by-case basis.
              </p>

              <p>
                <b>Investment:</b> £4,407 per month, paid in arrears. Number of
                months required will be assessed individually based on severity
                of issues.
              </p>

              <p>
                <b>Guarantee:</b> No Clients are guaranteed during the recovery
                period, though some will appear naturally. Upon completion you
                qualify for our Platinum Offer.
              </p>

              <p>
                <b>Commitment Period:</b> One month at a time. You may opt out
                by not signing the agreement for the upcoming month's
                investment.
              </p>

              <p>
                <b>2.4 GOLD OFFER: AI-Powered SEO Recovery</b>
              </p>

              <p>Eligibility:</p>
              <p>
                Surgeons with a single website requiring intensive recovery
                work. This may include compromised digital footprints including
                toxic backlinks, low-authority referring domains, neglected
                Google Business Profile (GBP), and poor Business Directory
                listings.
              </p>

              <p>Service Description:</p>
              <p>A 1-month intensive AISEO recovery programme.</p>

              <p>Duration:</p>
              <p>
                1 month of foundation work, qualifying for Platinum from the
                beginning of Month 2.
              </p>

              <p>Month 1 Focus:</p>
              <ul>
                <li>Removal or remediation of toxic backlinks</li>
                <li>Addressing low Domain Authority (DA) referring domains</li>
                <li>Optimising neglected GBP</li>
                <li>Optimising Business Directory listings</li>
                <li>Comprehensive digital footprint repair</li>
              </ul>

              <p>
                <b>Investment:</b> £4,407 for Month 1, paid in arrears
              </p>

              <p>
                <b>Guarantee:</b>
                No Clients guaranteed during the preparation month though some
                will appear naturally. Upon completion of Month 1, you will
                qualify for our Platinum Offer (10 guaranteed Clients monthly
                starting in Month 2).
              </p>

              <p>
                <b>Commitment Period:</b> One month at a time. Surgeons may opt
                out by not signing the agreement for the upcoming month's
                investment.
              </p>

              <p>
                <b>
                  2.5 PLATINUM, OUR SIGNATURE OFFER: 10 Clients Per Month
                  Guaranteed
                </b>
              </p>

              <p>Eligibility:</p>
              <ul>
                <li>
                  Have a website that is already functional with our assessment
                  indicating readiness, OR
                </li>
                <li>
                  Have successfully completed our Silver (SOS Rescue) Offer, OR
                </li>
                <li>Have successfully completed our Gold Offer</li>
              </ul>

              <p>Service Description:</p>
              <p>Our signature service guaranteeing 10 Clients per month.</p>

              <p>
                <b>Investment - Progressive Discount Structure:</b>
              </p>

              <ul>
                <li>MONTH 1: You pay NOTHING</li>
                <li>Months 2, 3 & 4: £4,407/month</li>
                <li>Month 5: £3,305/month (25% reduction)</li>
                <li>Month 6: £2,479/month (25% reduction)</li>
                <li>Month 7+: £1,859/month (25% reduction)</li>
              </ul>

              <p>
                Payment and Service continue at this rate until either the
                Surgeon or we call a halt.
              </p>

              <p>
                <b>Payment Terms:</b> Paid in arrears. Payment is due at the end
                of each month after service delivery.
              </p>

              <p>
                <b>Guarantee:</b> We guarantee 10 Clients per month. If we do
                not deliver 10 Clients within the calendar month, you owe no
                payment for that month.
              </p>

              <p>
                <b>What is a "Client":</b> A Client is defined as someone who
                undergoes a procedure and pays for it.
              </p>

              <p>
                <b>Commitment Period:</b> Month-to-month. No long-term
                contracts.
              </p>

              <p>
                <b>Holiday Pause:</b> You can pause your Service and Payment for
                a month once per calendar year.
              </p>

              <h3>3. QUALIFICATION CRITERIA</h3>
              <p>
                Eligibility for each Service is determined by us at our sole
                discretion. We evaluate prospects using our data-driven client
                acquisition system developed over 25 years of exclusive work
                with cosmetic and hair restoration Surgeons.
              </p>

              <p>
                <b>Pricing Discretion:</b>
                While we maintain standard pricing for each Service, we reserve
                the right to adjust pricing on a case-by-case basis depending on
                individual circumstances at our sole discretion.
              </p>

              <h3>4. PROFIT OR NO FEE</h3>
              <p>
                Our policy is simple: Profit or No Fee. All Services are paid in
                arrears. Payment is only due if we deliver the services as
                specified. If we fail to deliver, no payment is owed.
              </p>

              <h3>5. YOUR OBLIGATIONS</h3>
              <p>To ensure the success of our services, Surgeons agree to:</p>

              <ul>
                <li>
                  Provide accurate and complete information about their
                  practice, services, and target market
                </li>
                <li>
                  Respond promptly to requests for content, images, or
                  information needed for marketing materials
                </li>
                <li>
                  Maintain professional communication with prospects generated
                  through our services
                </li>
                <li>Follow up with Client consultations in a timely manner</li>
                <li>
                  Inform us immediately if there are any changes to their
                  practice, services, or availability
                </li>
                <li>
                  Not engage in deceptive or misleading practices when dealing
                  with prospects we generate
                </li>
                <li>
                  Maintain all necessary professional licenses and credentials
                </li>
                <li>
                  Ensure their practice complies with applicable medical
                  advertising and conduct regulations
                </li>
              </ul>

              <h3>6. TERMINATION</h3>
              <p>
                We reserve the right to refuse to supply our services at our
                sole discretion. You can end your commitment by not signing and
                returning the agreement for the upcoming month.
              </p>

              <h3>7. INTELLECTUAL PROPERTY</h3>
              <p>
                <b>Surge-on Up Content:</b>
              </p>
              <p>
                All content, methodologies, strategies, assessment criteria,
                qualification metrics, software, tools, graphics, and materials
                provided by Surge-on Up remain our exclusive intellectual
                property.
              </p>

              <ul>
                <li>
                  Our proprietary qualification metrics and assessment criteria
                </li>
                <li>Marketing strategies and campaign designs</li>
                <li>AISEO techniques and methodologies</li>
                <li>Website audit reports and recommendations</li>
                <li>Training materials and documentation</li>
                <li>Any proprietary software or tools</li>
                <li>
                  Our tried, tested, and honed systems developed over 25 years
                </li>
              </ul>

              <p>
                <b>Restrictions:</b> You may not copy, reproduce, republish,
                upload, post, transmit, distribute, use for public or commercial
                purposes, modify, or reverse engineer any Surge-on Up content
                without our express written permission.
              </p>

              <h3>8. LIMITATION OF LIABILITY</h3>
              <p>
                <b>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</b>
              </p>

              <ul>
                <li>
                  Surge-on Up provides services with specific guarantees as
                  stated in this TOS
                </li>
                <li>
                  We are not liable for indirect, incidental, consequential, or
                  punitive damages
                </li>
                <li>
                  We are not responsible for changes in search engine algorithms
                  or platform policies
                </li>
                <li>
                  We are not responsible for how Clients interact with prospects
                  or convert procedures
                </li>
                <li>
                  Our total liability shall not exceed the amount you paid for
                  services in the 12 months preceding the claim
                </li>
                <li>
                  We are not responsible for regulatory issues, complaints, or
                  legal matters
                </li>
              </ul>

              <h3>9. INDEMNIFICATION</h3>
              <p>
                You agree to indemnify, defend, and hold us harmless from any
                claims, damages, losses, liabilities, and expenses arising from:
              </p>

              <ul>
                <li>Your use of our services</li>
                <li>Your violation of this TOS</li>
                <li>Your violation of laws or regulations</li>
                <li>Your professional practice and patient care</li>
                <li>Any content you provide to us</li>
                <li>Your interactions with prospects or Clients we acquire</li>
                <li>Your misrepresentation of credentials or services</li>
              </ul>

              <h3>10. DATA PROTECTION AND PRIVACY</h3>
              <p>
                We collect and process personal data in accordance with
                applicable data protection laws, including GDPR. We do not sell
                or share your personal data except as required to deliver our
                services or by law.
              </p>

              <p>
                <b>Patient Data:</b> Any patient or prospect data shared with us
                will be handled in strict compliance with healthcare privacy
                regulations. You remain the data controller.
              </p>

              <h3>11. PROFESSIONAL ELIGIBILITY</h3>
              <p>
                Our services are exclusively available to qualified Cosmetic,
                Hair Restoration and Oral Maxillofacial (OMFS) Surgeons. By
                engaging our services, you represent and warrant that:
              </p>

              <ul>
                <li>
                  You hold all necessary medical licenses and certifications
                </li>
                <li>You are in good standing with professional associations</li>
                <li>
                  Your practice complies with medical advertising regulations
                </li>
                <li>You have malpractice insurance</li>
                <li>You are not under investigation or sanction</li>
              </ul>

              <p>
                We reserve the right to verify credentials and refuse service to
                any practice that does not meet eligibility criteria.
              </p>

              <h3>12. DISPUTE RESOLUTION</h3>

              <p>
                <b>Governing Law:</b> England and Wales
              </p>
              <p>
                <b>Informal Resolution:</b> Parties agree to attempt good-faith
                negotiation first
              </p>
              <p>
                <b>Jurisdiction:</b> Courts of England and Wales
              </p>

              <h3>13. CHANGES TO TERMS OF SERVICE</h3>
              <p>
                We may update this TOS from time to time. Changes will be
                announced on this website. Continued use of services constitutes
                acceptance of updates.
              </p>

              <h3>14. ACCEPTANCE OF TERMS</h3>
              <p>
                By engaging with any of our services, including requesting a
                free Bronze Audit, entering into a service agreement, or making
                a payment, you acknowledge that:
              </p>

              <ul>
                <li>You have read and understood this TOS</li>
                <li>You agree to be bound by this TOS</li>
                <li>You have authority to enter into agreements</li>
                <li>Your information is accurate</li>
                <li>You understand pricing, guarantees, and limitations</li>
                <li>
                  Payment is only due for months when services are delivered
                </li>
                <li>
                  Qualification criteria and pricing are at our discretion
                </li>
              </ul>

              <p>
                If you do not agree to this TOS, you must not use our services.
              </p>

              <p>For service inquiries: robin@surgeonup.com</p>
              <p>(AESTHETIC SURGEONS ONLY)</p>
            </div>

            <di className={styles.tosContent}></di>

            {/* <div>
              <div className={styles.TosCOCImagefooter}>
                <Image src={tosFooter} alt="Logo" width={600} height={300} />
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
