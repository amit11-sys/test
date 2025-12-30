import Header from "@/components/header/header";
import styles from "./aboutrobin.module.css";
import Img1 from "./images/img1.png";
import Img2 from "./images/img2.png";
import Img3 from "./images/img3.png";
import Img4 from "./images/img4.png";
import Img5 from "./images/img5.jpg";
import Img6 from "./images/img6.png";
import Img7 from "./images/img7.jpg";
import Image from "next/image";
import Footer from "@/components/footer/footer";

export default function AboutRobin() {
  return (
    <div className={styles.AboutRobinMainContainer}>
      <div className={styles.robinJohnAboutSection}>
        <div className={styles.topImageRow}>
          <Image src={Img1} alt="logo" className={styles.profileImg} />
          <Image src={Img2} alt="Logo" className={styles.smallLogo} />
        </div>

        <h3 className={styles.robinJohncardTitle}>Robin and John in Verona</h3>

        <div className={styles.cardText}>
          <p style={{marginBottom:0 , marginTop:0, fontWeight:800}}  >
            Robin was the Chief Makeup Artist on “Inspector Morse”, working on
            30 of the 33 episodes.
          </p>
          <p style={{marginBottom:0}}>
            When he made John Thaw up for the first time, John asked what he'd
            worked on last. Self-aggrandisement was the norm in the film
            industry but despite having a Bond film under his belt, Robin
            replied candidly, "Mini-cabbing, John." John replied, “Is that a new
            Mini-Series?” “No, John I’ve been cabbing to make ends meet.” His
            honesty forged a lasting working friendship. John offered him all 32
            remaining episodes—except the Australian one, due to travel costs.
          </p>
        </div>
      </div>

      <div className={styles.robinJohnAboutSection}>
        <div className={styles.topImageRow}>
          <Image src={Img3} alt="logo" className={styles.sitelProfileImg} />
          <Image src={Img4} alt="Logo" className={styles.sitelSmallLogo} />
        </div>

        <h3 className={styles.sitelCardTitle}>
          The Microsoft Network Account at SITEL A Nokia 5146 from Mobiles
          Direct
        </h3>

        <div className={styles.sitelCardText}>
          <p className={styles.cardTextHeader}>
            Robin worked on the fledgling Internet and rode the crest of the
            mobile phone wave
          </p>
          <p style={{marginBottom:0}}>
            He passed a C Programming Exam with a perfect score, and worked on
            all aspects of the MSN Account and eventually led the Team, until
            redundancy struck. Early access to MS Office allowed him to learn to
            code Excel. He then worked at Mobiles Direct in Isleworth, slashing
            late deliveries from 15% down to 1.5%. But the remainder bugged him.
            He wrote a macro to collate phone data from the Company’s mainframe
            and Customer details in Excel and email Claims every day. He saved
            them £40k pa.
          </p>
        </div>
      </div>

      <div className={styles.robinJohnAboutSection}>
        <div className={styles.topImageRow}>
          <Image src={Img5} alt="logo" className={styles.leaseplanProfileImg} />
          <Image src={Img6} alt="Logo" className={styles.smallLogo} />
        </div>

        <h3 className={styles.leaseplanCardTitle}>A mug saying “I am a genius”</h3>

        <div className={styles.leaseplanCardText}>
          <p className={styles.cardTextHeader}>
            This was a gift from his favourite Manager on completion of his
            initial task
          </p>
          <p>
            At LeasePlan UK, Robin’s first challenge was to improve the time
            Compaq Computer Drivers had to wait to learn which cars were
            available from the pool. it had been a bete nior that had plagued
            his new Manager, Lucy, for several years. He wrote a macro to cut a
            flagged subset and email it in seconds. She was so pleased, that in
            an unforgettable and endearing gesture, she gave him the mug above.
          </p>
        </div>
      </div>

      <div className={styles.robinJohnAboutSection}>
        <div className={styles.topImageRow}>
          <Image src={Img7} alt="logo" className={styles.davidProfileImg} />
          <Image src={Img6} alt="Logo" className={styles.smallLogo} />
        </div>

        <h3 className={styles.cardTitle}>David Brennan ex-CEO, LeasePLan UK</h3>

        <div className={styles.cardText}>
          <p style={{marginBottom:0, marginTop:0, fontWeight:800, textAlign:"center"}}>
            David was the LP UK Boss when Robin worked in the Data Management
            Team
          </p>
          <p>
            Robin was one of the fantastic people at LeasePlan who excelled at
            his job. Always positive in his attitude and a can-do delivery
            person who got things done. From colour-coded spreadsheets, a first
            at the time, to Customer Service excellence with the Mary Gober
            training and practice - he did it all. A person you can trust and
            who everyone liked. I recommend him 100%.”
          </p>
        </div>
      </div>
    </div>
  );
}
