import Header from "@/components/header/header";
import styles from "./abouttam.module.css";
import Img1 from "./images/Img1.png";
import Img2 from "./images/Img2.png";
import Img3 from "./images/Img3.jpg";
import Img4 from "./images/img4.png"
import Img5 from "./images/img5.png";
import Img6 from "./images/img6.png";
import Img7 from "./images/Img7.jpg";
import Img8 from "./images/img8.png";
import Image from "next/image";
import Footer from "@/components/footer/footer";

export default function AboutTam() {
  return (
    <div className={styles.AboutRobinMainContainer}>
      <div className={styles.robinJohnAboutSection}>
        <div className={styles.richardtopImageRow}>
          <Image src={Img1} alt="logo" className={styles.richardProfileImg} />
          <Image src={Img2} alt="Logo" className={styles.smallLogo} />
        </div>

        <h3 className={styles.rechardCardTitle}>
          Dr Richard Chaffoo, California Hair
        </h3>

        <div className={styles.cardText}>
          <h3
            
          >
            Is one of the few Aesthetic Surgeons ever to be Triple-Board
            Certified
          </h3>
          <h4>
            He is the top Beverly Hills and La Jolla, San Diego Aesthetic
            Surgeon. Tam optimised his website and helped select his logo.
            <br />
            “We’ve worked with Tam for several years. He is extremely
            professional in his approach to our website and online presence. His
            unparalleled SEO strategies have expanded our businesses.”
          </h4>
        </div>

         {/* Dr Zachary Farris, ZF Plastic Surgery */}
          <div className={styles.mobileZachary}>


           <div className={styles.topImageRow}>
          <Image src={Img3} alt="logo" className={styles.profileImg} />
          <Image src={Img4} alt="Logo" className={styles.smallLogo} />
        </div>

        <h3 className={styles.cardTitle}>
          Dr Zachary Farris, ZF Plastic Surgery
        </h3>

        <div className={styles.cardText}>
          <h3
            
          >
            Zachary is an influential Double-Certified Aesthetic Surgeon
          </h3>
          <h4>
            He is based in Dallas Texas and is approved to perform both Cosmetic
            and Hair Restoration procedures. RealSelf says he is one of the top
            1% influencers in plastic surgery. He has only worked with Tam since
            last October. In December, he emailed to say, “Thank you, Tam. 2024
            is the first Christmas I haven’t been worried about business leads
            for the New Year. My Diary is completely full!”
          </h4>
        </div>
          </div>



      </div>
         {/* Dr Zachary Farris, ZF Plastic Surgery */}
      <div className={`${styles.robinJohnAboutSection} ${styles.desktopZachary}`}>
        <div className={styles.topImageRow}>
          <Image src={Img3} alt="logo" className={styles.profileImg} />
          <Image src={Img4} alt="Logo" className={styles.smallLogo} />
        </div>

        <h3 className={styles.cardTitle}>
          Dr Zachary Farris, ZF Plastic Surgery
        </h3>

        <div className={styles.cardText}>
          <h3
            
          >
            Zachary is an influential Double-Certified Aesthetic Surgeon
          </h3>
          <h4>
            He is based in Dallas Texas and is approved to perform both Cosmetic
            and Hair Restoration procedures. RealSelf says he is one of the top
            1% influencers in plastic surgery. He has only worked with Tam since
            last October. In December, he emailed to say, “Thank you, Tam. 2024
            is the first Christmas I haven’t been worried about business leads
            for the New Year. My Diary is completely full!”
          </h4>
        </div>
      </div>



      <div className={styles.robinJohnAboutSection}>
        <div className={styles.topImageRowSemRush}>
          <Image src={Img5} alt="logo" className={styles.profileImg} />
          <Image src={Img6} alt="Logo" className={styles.smallLogo} />
        </div>

        <h3 className={styles.cardTitle}>Membership of Semrush and Yext</h3>

        <div className={styles.cardText}>
          <h3
         
          >
            Google Analytics is useful and free but its data is a month in
            arrears.{" "}
          </h3>
          <h4 >
            Semrush provides live traffic data and informative tools for
            keywords, backlinks and competitor analysis. Tam is a certified
            Semrush Technical AI-SEO Analyst, having aced four of their exams in
            early 2025, including AI. At £900 annually, it's invaluable. He is
            also a member of Yext (£500 annually), which allows us to offer our
            Clients additional business listings at no extra cost
          </h4>
        </div>
        {/* VoyageLA */}
        <div className={styles.mobileVoyageLA}>


          <div className={styles.topImageRow}>
          <Image src={Img7} alt="logo" className={styles.VoyageLAprofileImg} />
          <Image src={Img8} alt="Logo" className={styles.VoyageLAsmallLogo} />
        </div>

        <h3 className={styles.cardTitle}>VoyageLA</h3>

        <div className={styles.cardText}>
          <h3
           
          >
            A niche Californian magazine, VoyageLA, plans to interview Tam.
          </h3>
          <h4
           
          >
            They are based in Culver City—once home to the legendary MGM Studios
            and close to Beverly Hills and Hollywood. It was founded a decade
            ago to celebrate individuals. The interview is part of their
            Inspiring Stories series, spotlighting creative and innovative LA
            denizens. It introduces trailblazing entrepreneurs and artists to a
            young, edgy audience.
          </h4>
        </div>
        </div>

      </div>

      <div className={`${styles.robinJohnAboutSection} ${styles.DesktopVoyageLA}`}>
        <div className={styles.topImageRow}>
          <Image src={Img7} alt="logo" className={styles.VoyageLAprofileImg} />
          <Image src={Img8} alt="Logo" className={styles.VoyageLAsmallLogo} />
        </div>

        <h3 className={styles.cardTitle}>VoyageLA</h3>

        <div className={styles.cardText}>
          <h3
           
          >
            A niche Californian magazine, VoyageLA, plans to interview Tam.
          </h3>
          <h4
           
          >
            They are based in Culver City—once home to the legendary MGM Studios
            and close to Beverly Hills and Hollywood. It was founded a decade
            ago to celebrate individuals. The interview is part of their
            Inspiring Stories series, spotlighting creative and innovative LA
            denizens. It introduces trailblazing entrepreneurs and artists to a
            young, edgy audience.
          </h4>
        </div>
      </div>


    </div>
  );
}
