"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./ServicesSections.module.css";
import BrownStar from "./images/sergonup-star.png";
import PowerImg from "./images/rob1.jpeg";
import ClickMe from "./images/image.png";
import GoldStar from "./images/sergonup-brwonstar.png";
import SilverMinus from "./images/SilverMinus.png";
import Agency2 from "./images/sergonup-agency2.png";
import SilverStar from "./images/sergonup-silverstar.png";
import arrowLeft from "./images/arrowLeft.png";
import PlatinumOffer from "./images/PlatinumOffer.svg";
import WhatsApp from "./images/whatsapp.png";
import SilverStar3 from "./images/silverFor2nd.png";
import backToMoreServices from "./images/backToMoreServices.png";
import bankLogos from "./images/bankLogos.png";
import moboApply from "./images/moboApply.png";
import cupFor4 from "./images/cupFor4.png";
import wolf from "./images/rob44.jpeg";
import OpImg from "./images/sergonup-op.png";
import SvBtn from "./images/serviceButton.png";
import ServiceGraph from "./images/graphService.png";
import mobileGraphService from "./images/mobile-graph-service.png";

export default function ServicesSections() {
  return (
    <>
      <div className={styles.wrapper}>
        <>
          <section className={styles.GraphserviceSection}>
            <div>
              <Image
                className={styles.desktopGraphServiceImage}
                src={ServiceGraph}
                alt="ServiceGraph"
              />
              <Image
                className={styles.mobileGraphServiceImage}
                src={mobileGraphService}
                alt="ServiceGraph"
              />
            </div>
            {/* <div className={styles.description}>
              <p className={styles.desc}>
                A free, no-obligation website audit from a Cambridge graduate
                who has optimised top-tier Surgeons' websites for over 25
                years—from Beverly Hills to Barcelona, the UAE and beyond. Tam
                Moudden left IBM as a Data Analyst in the 90s to focus
                exclusively on SEO for cosmetic and hair restoration Surgeons. A
                full AI-powered SEO analysis will reveal where you stand against
                your competitors. Tam's Semrush AI-SEO expertise will show you
                the path to organic growth, find hidden opportunities your
                competitors are missing and identify exactly what's holding your
                practice back from page-one rankings. Expert tech analysis made
                vividly clear. Claim your complimentary audit.
              </p>

              <div className={styles.contentContainer}>
                <div className={styles.icons}>
                  <div className={styles.dollar}>
                    $ <p className={styles.free}>FREE</p>
                  </div>
                  <div className={styles.euro}>
                    £ <p className={styles.free}>FREE</p>
                  </div>
                </div>

                <div className={styles.imageContainer}>
                  <h3 className={styles.clickMeText}>GET YOUR FREE AUDIT!</h3>
                  <button className={styles.orderBtn}>
                    <Image
                      src={WhatsApp}
                      alt="WhatsApp"
                      className={styles.clickApplyIcon}
                    />
                    <span className={styles.applytext}>
                      CLICK ME! <br />
                      <span>TO ORDER</span>
                    </span>
                    <Image
                      src={WhatsApp}
                      alt="WhatsApp"
                      className={styles.clickApplyIcon}
                    />
                  </button>
                </div>
              </div>
            </div> */}

            {/* <div className={styles.moboDescriptionContainer}>
              <div className={styles.description}>
                <div className={styles.footerFirstInvestmentText}>
                  Y o u r i n v e s t m e n t i s
                </div>
                <div className={styles.footerSecontInvestmentText}>
                  N O T H I N G, <span> it’s FREE! </span>
                </div>
              </div>
            </div> */}

            {/* <div className={styles.moboApplyImageContainer}>
              <Image
                src={moboApply}
                alt="icon"
                className={styles.moboApplyImage}
              />
            </div> */}
          </section>

          {/* ---------------------------------------------------- */}
          {/* ---------------- Bronzezeee ----------------- */}
          {/* ---------------------------------------------------- */}

          <section className={styles.serviceSection}>
            <div className={styles.headingRow}>
              {/* herder  */}
              <div className={styles.headingContent}>
                <div className={styles.starImageContainer}>
                  <div className={styles.servicesRowImgContainer}>
                    <Image
                      src={BrownStar}
                      alt="icon"
                      className={`${styles.imageNormal} ${styles.starGlow}`}
                    />
                    <Image
                      src={PowerImg}
                      width={150}
                      height={100}
                      alt="icon"
                      className={`${styles.imageWide} ${styles.starGlow} `}
                    />
                  </div>

                  <h2 className={styles.Bronzetitle}>BRONZE OFFER</h2>
                </div>

                {/* <div className={styles.BronzetitleContainer}> */}
                <h3 className={`${styles.subtitle} ${styles.BronzeSubtitle}`}>
                  IS YOUR WEBSITE <i>FIT?</i>
                </h3>

                <div className={styles.imageContainer}>
                  <Image
                    src={PowerImg}
                    width={150}
                    height={100}
                    alt="icon"
                    className={`${styles.imageWide} ${styles.headerImg}`}
                  />
                </div>
                {/* </div> */}

                <div className={styles.imageContainer}>
                  <button className={styles.orderBtn}>
                    <Image
                      src={WhatsApp}
                      alt="WhatsApp"
                      className={styles.clickApplyIcon}
                    />
                    <span className={styles.applytext}>
                      CLICK ME! <br />
                      <span>TO ORDER</span>
                    </span>
                    <Image
                      src={WhatsApp}
                      alt="WhatsApp"
                      className={styles.clickApplyIcon}
                    />
                  </button>
                </div>
              </div>
               {/* mobile herder  */}
              <div className={styles.mobileheadingContent}>
                <div className={styles.mobilestarImageContainer}>

                  <h2 className={styles.mobileBronzetitle}>BRONZE OFFER</h2>
                  <div className={styles.mobileservicesRowImgContainer}>
                    <Image
                      src={BrownStar}
                      alt="icon"
                      className={`${styles.imageNormal} ${styles.starGlow}`}
                    />
                    <Image
                      src={PowerImg}
                      width={150}
                      height={100}
                      alt="icon"
                      className={`${styles.imageWide} ${styles.starGlow} `}
                    />
                  </div>
                </div>

                {/* <div className={styles.BronzetitleContainer}> */}
                <h3 className={`${styles.subtitle} ${styles.mobileBronzeSubtitle}`}>
                  IS YOUR WEBSITE <i>FIT?</i>
                </h3>

                {/* <div className={styles.mobileimageContainer}>
                  <Image
                    src={PowerImg}
                    width={150}
                    height={100}
                    alt="icon"
                    className={`${styles.imageWide} ${styles.headerImg}`}
                  />
                </div> */}
                {/* </div> */}

                {/* <div className={styles.mobileimageContainer}>
                  <button className={styles.orderBtn}>
                    <Image
                      src={WhatsApp}
                      alt="WhatsApp"
                      className={styles.clickApplyIcon}
                    />
                    <span className={styles.applytext}>
                      CLICK ME! <br />
                      <span>TO ORDER</span>
                    </span>
                    <Image
                      src={WhatsApp}
                      alt="WhatsApp"
                      className={styles.clickApplyIcon}
                    />
                  </button>
                </div> */}
              </div>

              {/* end */}
            </div>

            <div className={styles.description}>
              <p className={styles.bronzedescDesktop}>
                A free, no-obligation website audit from a Cambridge graduate
                who has optimised top-tier surgeons' websites for over 25
                years—from Beverly Hills to Barcelona, the UAE and beyond! Tam
                Moudden left IBM as a Data Analyst in the 90s to focus
                exclusively on SEO for cosmetic and hair restoration surgeons. A
                full AI-powered SEO analysis will reveal where you stand against
                your competitors. Tam's Semrush AI-SEO expertise will show you
                the path to organic growth, find hidden opportunities your
                competitors are missing and identify exactly what's holding your
                practice back from ranking on page one. We’ll tell you who your
                three closest ranked rivals are. This is expert tech analysis
                made vividly clear.
              </p>
              <p className={styles.bronzedescMobile}>
                A free, no-obligation website audit from a Cambridge graduate
                who has optimised top-tier surgeons' websites for over 25
                years—from Beverly Hills to Barcelona, the UAE and beyond!
                <span style={{ marginTop: 10, display: "block" }}>
                  Tam Moudden was an IBM Data Analyst for 8 years but left to be
                  an SEO Pioneer as it emerged in the 90s. He has devoted
                  himself to SEO and AI exclusively for Cosmetic and Hair
                  Restoration Surgeons ever since.
                </span>
                <span style={{ marginTop: 10, display: "block" }}>
                  A complete AI-SEO analysis will reveal where you stand against
                  your competitors. Tam's expertise in Semrush statistics will
                  show you the path to digital dominance. Why wait? Its free and
                  absolutely no obligation whatsoever. Tap below to claim your
                  complimentary audit now!
                </span>
              </p>

              <div className={styles.contentContainer}>
                <div className={styles.icons}>
                  <div className={styles.dollar}>
                    $ <p className={styles.free}>FREE</p>
                  </div>
                  <div className={styles.euro}>
                    £ <p className={styles.free}>FREE</p>
                  </div>
                </div>

                <div className={styles.bronzeimageContainer}>
                  <h3 className={styles.clickMeText}>GET YOUR FREE AUDIT!</h3>
                  <button className={styles.orderBtn}>
                    <Image
                      src={WhatsApp}
                      alt="WhatsApp"
                      className={styles.clickApplyIcon}
                    />
                    <span className={styles.applytext}>
                      CLICK ME! <br />
                      <span>TO ORDER</span>
                    </span>
                    <Image
                      src={WhatsApp}
                      alt="WhatsApp"
                      className={styles.clickApplyIcon}
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.moboDescriptionContainer}>
              <div className={styles.description}>
                <div className={styles.footerFirstInvestmentText}>
                  Y o u r i n v e s t m e n t i s
                </div>
                <div className={styles.footerSecontInvestmentText}>
                  N O T H I N G, <span> it’s FREE! </span>
                </div>
              </div>
            </div>

            <div className={styles.moboApplyImageContainer}>
              <Image
                src={moboApply}
                alt="icon"
                className={styles.moboApplyImage}
              />
            </div>
          </section>

          {/* ---------------------------------------------------- */}
          {/* ---------------- SILVER SOS RESCUE ----------------- */}
          {/* ---------------------------------------------------- */}

          <section className={styles.serviceSection}>
            <div className={styles.headingRow}>
              <div className={styles.headingContent}>
                <div className={styles.starImageContainer}>
                  <div className={styles.servicesRowImgContainer}>
                    <Image
                      src={SilverStar3}
                      alt="icon"
                      className={`  ${styles.imageNormal} ${styles.starGlow}`}
                    />
                    <Image
                      src={OpImg}
                      width={150}
                      height={100}
                      alt="icon"
                      className={styles.imageWide}
                    />
                  </div>

                  <h2 className={`${styles.title} ${styles.silverTitle}`}>
                    SILVER SOS RESCUE
                  </h2>
                </div>

                <div className={styles.titleContainer}>
                  <h3 className={styles.silverSubtitle}>
                    <i>BURIED</i> DEEP IN A HOLE
                  </h3>

                  <div
                    className={styles.imageContainer}
                    // style={{marginLeft:"30px"}}
                  >
                    <Image
                      src={OpImg}
                      width={150}
                      height={100}
                      alt="icon"
                      className={`${styles.imageWide} ${styles.headerImg}`}
                    />
                  </div>
                </div>

                <div
                  className={styles.imageContainer}
                  // style={{marginLeft:"10px", marginRight:"10px"}}
                >
                  <Image
                    src={ClickMe}
                    width={494}
                    height={100}
                    alt="icon"
                    className={styles.imageUltraWide}
                  />
                </div>
              </div>

               {/* mobile herder  */}
              <div className={styles.mobileheadingContent}>
                <div className={styles.mobilestarImageContainer}>

                  <h2 className={`${styles.mobileBronzetitle} ${styles.mobileSilvertitle}`}>SILVER SOS RESCUE</h2>
                  <div className={styles.mobileservicesRowImgContainer}>
                    <Image
                      src={SilverStar3}
                      alt="icon"
                      className={`${styles.imageNormal} ${styles.starGlow}`}
                    />
                    <Image
                      src={OpImg}
                      width={150}
                      height={100}
                      alt="icon"
                      className={`${styles.imageWide} ${styles.starGlow} `}
                    />
                  </div>
                </div>

                {/* <div className={styles.BronzetitleContainer}> */}
                <h3 className={` ${styles.mobileBronzeSubtitle}`}>
                 <i>BURIED</i> DEEP IN A HOLE?
                </h3>

            
              </div>
            </div>
            

            <div className={styles.description}>
              <p className={styles.silverDescDesktop}>
                Fed up spending £10-20k monthly just to survive on paid ads,
                with nothing certain? You can't be seen where prospects search,
                while competitors capture the exact Clients you're paying
                premium rates to reach. Fragmented multi-website practices
                splinter your visibility. Your fractured presence confuses
                Google—it can't tell who the real surgeon is, so it penalises
                them all. You've been badly advised. This damage demands
                intervention. It's too severe to guarantee Clients yet. We'll
                rebuild over 2 months, paid after results. You'll typically see
                one Client a month during repair but none guaranteed. From Month
                3 we’ll get you 10 Clients a month. By Month 9 your ROI will be
                at least 25x. Unfurl your rope ladder!
              </p>
              <p className={styles.silverDescMobile}>
                Fed up spending £10-20k monthly just to survive on Paid Ads?
                You're trapped while rivals dominate above you, winning clients
                you're paying to reach.
                <span style={{ marginTop: 10, display: "block" }}>
                  Multi-website practices make it worse. Your splintered
                  presence confuses Google - it penalises them ALL. We'll
                  rebuild over 2 months with intensive AI-SEO work. Expect at
                  least 1 client a month during repairs but none can be
                  guaranteed. You’ll get 10 guaranteed clients a month in just 8
                  weeks’ time.
                </span>
                <span style={{ marginTop: 10, display: "block" }}>
                  Break free from the Paid Ads cycle. Build yourself a
                  sustainable organic presence with a ROI of up to 25:1 for less
                  than £2k eventually. Unfurl your rope ladder!
                </span>
              </p>
              <div
                style={{ alignItems: "center" }}
                className={styles.contentContainer}
              >
                <div className={styles.icons}>
                  <div className={styles.dollar}>
                    $<p className={styles.free}>5873</p>
                  </div>
                  <div className={styles.euro}>
                    £<p className={styles.free}>4407</p>
                  </div>
                </div>

                <div className={styles.silverRescueContainer}>
                  <div className={styles.silverRescueText}>
                    <p className={styles.perMonthText}>
                      Per month for 2 months of repair, paid after results.In
                      the 3rd month, we guarantee you 10 Clients.
                    </p>
                  </div>
                  <div className={styles.silverImageContainer}>
                    {/* <Image
                      src={SilverMinus}
                      width={494}
                      height={200}
                      alt="icon"
                      className={styles.SilverimageUltraWide}
                    /> */}
                    <div className={styles.badge}>
                      <div className={styles.left}>
                        <Image
                          src={SilverStar3}
                          alt="icon"
                          className={styles.SilverimageNormal}
                        />
                        <span className={styles.SilverStriptitle}>
                          SILVER MINUS
                        </span>

                        <div className={styles.right}>
                          <span>EXTREMELY SEVERE WEBSITES</span>
                          <span>WILL TAKE MORE MONTHS TO FIX</span>
                        </div>
                      </div>

                      {/* <div className={styles.divider} /> */}

                      {/* <div className={styles.right}>
                        <span>EXTREMELY SEVERE WEBSITES</span>
                        <span>WILL TAKE MORE MONTHS TO FIX</span>
                      </div> */}

                      {/* <div className={styles.imageContainer}>
                  <Image
                    src={ClickMe}
                    width={494}
                    height={100}
                    alt="icon"
                    className={styles.imageUltraWide}
                  />
                </div>
                       */}
                    </div>
                  </div>
                  <button className={styles.orderBtn}>
                    <Image
                      src={WhatsApp}
                      alt="WhatsApp"
                      className={styles.clickApplyIcon}
                    />
                    <span className={styles.applytext}>
                      CLICK ME! <br />
                      <span>TO ORDER</span>
                    </span>
                    <Image
                      src={WhatsApp}
                      alt="WhatsApp"
                      className={styles.clickApplyIcon}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Footer */}
            <div className={styles.moboDescriptionContainer}>
              <div className={styles.moboSilverImageContainer}>
                <Image
                  src={SilverMinus}
                  width={494}
                  height={200}
                  alt="icon"
                  className={styles.SilverimageUltraWide}
                />
              </div>

              <div className={styles.description}>
                {/* <div className={styles.footerFirstInvestmentText}>
                  Y o u r i n v e s t m e n t i s
                </div> */}

                <div className={styles.footerSecontInvestmentText}>
                  <div
                    className={styles.otherFirstFooterInvestmentTextContainer}
                  >
                    <div className={styles.otherfirstFooterInvestmentText}>
                      <div
                        className={styles.otherFirstFooterInvestmentTextChild}
                      >
                        <span>$</span>
                        <span>5873</span>
                      </div>
                      <div
                        className={styles.otherFirstFooterInvestmentTextChild}
                      >
                        <span>£</span>
                        <span>4407</span>
                      </div>
                    </div>

                    <div className={styles.otherSecondFooterInvestmentText}>
                      <p>
                        Monthly for 2 months of repairs, then monthly for 10
                        guaranteed Clients!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.moboApplyImageContainer}>
              <Image
                src={moboApply}
                alt="icon"
                className={styles.moboApplyImage}
              />
            </div>
          </section>

          {/* ---------------------------------------------------- */}
          {/* --------------------- GOLD OFFER ------------------- */}
          {/* ---------------------------------------------------- */}

          <section className={styles.serviceSection}>
            <div className={styles.headingRow}>
              <div className={styles.headingContent}>
                <div className={styles.starImageContainer}>
                  <div className={styles.servicesRowImgContainer}>
                    <Image
                      src={GoldStar}
                      alt="icon"
                      className={`${styles.imageNormal} ${styles.starGlow}`}
                    />
                    <Image
                      src={Agency2}
                      width={150}
                      height={100}
                      alt="icon"
                      className={styles.imageWide}
                    />
                  </div>

                  <h2 className={`${styles.title} ${styles.goldtitle}`}>
                    GOLD OFFER
                  </h2>
                </div>

                {/* <div className={styles.goldtitleContainer}> */}
                <h3 className={styles.subtitle}>
                  <i>STUCK</i> IN A RUT?
                </h3>

                <div className={styles.imageContainer}>
                  <Image
                    src={Agency2}
                    width={150}
                    height={100}
                    alt="icon"
                    className={`${styles.imageWide} ${styles.headerImg}`}
                  />
                </div>
                {/* </div> */}
                <div className={styles.mobogoldtitleContainer}>
                  <h3 className={styles.subtitle}>
                    <i>STUCK</i> IN A RUT?
                  </h3>
                </div>

                <div className={styles.imageContainer}>
                  <Image
                    src={ClickMe}
                    width={494}
                    height={100}
                    alt="icon"
                    className={styles.imageUltraWide}
                  />
                </div>
              </div>
                    {/* mobile herder  */}
              <div className={styles.mobileheadingContent}>
                <div className={styles.mobilestarImageContainer}>

                  <h2 className={styles.mobileGoldtitle}>GOLD OFFER</h2>
                  <div className={styles.mobileservicesRowImgContainer}>
                    <Image
                      src={GoldStar}
                      alt="icon"
                      className={`${styles.imageNormal} ${styles.starGlow}`}
                    />
                    <Image
                      src={OpImg}
                      width={150}
                      height={100}
                      alt="icon"
                      className={`${styles.imageWide} ${styles.starGlow} `}
                    />
                  </div>
                </div>

                {/* <div className={styles.BronzetitleContainer}> */}
                <h3 className={` ${styles.mobileGoldSubtitle}`}>
                 <i>STUCK</i>  IN A RUT?
                </h3>

                {/* <div className={styles.mobileimageContainer}>
                  <Image
                    src={PowerImg}
                    width={150}
                    height={100}
                    alt="icon"
                    className={`${styles.imageWide} ${styles.headerImg}`}
                  />
                </div> */}
                {/* </div> */}

                {/* <div className={styles.mobileimageContainer}>
                  <button className={styles.orderBtn}>
                    <Image
                      src={WhatsApp}
                      alt="WhatsApp"
                      className={styles.clickApplyIcon}
                    />
                    <span className={styles.applytext}>
                      CLICK ME! <br />
                      <span>TO ORDER</span>
                    </span>
                    <Image
                      src={WhatsApp}
                      alt="WhatsApp"
                      className={styles.clickApplyIcon}
                    />
                  </button>
                </div> */}
              </div>  

            </div>

            <div className={styles.description}>
              <p className={styles.descDesktop}>
                You may have toxic backlinks, an inactive Google Business
                Profile (GBP) and sparse directory listings. But you have only
                one website, which is an extremely astute decision. During a
                month of intensive AI-SEO repair, you can expect at least one
                Client (which should cover your investment in us) but none can
                be guaranteed because of our attention will be centred on
                repair. During this remedial month, we will clean toxic
                backlinks, optimise your GBP, build quality directory listings
                and strengthen your site's foundation. If you continue to
                Platinum after repair, we'll focus on getting you 10 guaranteed
                Clients every month. No lock-in, continue monthly; pause or stop
                anytime. Hook up to your tow-truck!
              </p>
              <p className={styles.descMobile}>
                You may have toxic backlinks, idling Google Business Profile
                (GBP) and sparse Directory listings. But you have only one
                website, which is an extremely astute decision.
                <span style={{ marginTop: 10, display: "block" }}>
                  During a month of intensive AI-SEO repair, you can expect at
                  least one Client (should cover your investment) but none can
                  be guaranteed we’ll be our focus is on repair. We will clean
                  toxic backlinks, optimise your GBP, build quality Directory
                  listings, and strengthen your site foundation.
                </span>
                <span style={{ marginTop: 10, display: "block" }}>
                  Once repair is done, if you continue on your Fast track to
                  Platinum, we'll focus on getting you 10 guaranteed Clients a
                  month No lock-in, continue each month; pause or stop anytime.
                  We're your tow-truck, hook up now!
                </span>
              </p>
              <div className={styles.contentContainer}>
                <div className={styles.icons}>
                  <div className={styles.dollar}>
                    $<p className={styles.free}>5873</p>
                  </div>
                  <div className={styles.euro}>
                    £<p className={styles.free}>4407</p>
                  </div>
                </div>

                <div className={styles.silverRescueContainer}>
                  <div className={styles.goldRescueText}>
                    <p className={styles.GoldperMonthText}>
                      For a month, paid after stats results. In the 2nd months,
                      you’ll get 10 Clients
                    </p>
                  </div>
                </div>

                <div
                  className={styles.goldimageContainer}
                  style={{ marginLeft: "20px" }}
                >
                  <Image
                    src={ClickMe}
                    width={494}
                    height={100}
                    alt="icon"
                    className={styles.imageUltraWide}
                  />
                </div>
              </div>
            </div>

            {/* Mobile footer */}
            <div className={styles.moboDescriptionContainer}>
              <div className={styles.description}>
                {/* <div className={styles.footerFirstInvestmentText}>
                  Y o u r i n v e s t m e n t i s
                </div> */}

                <div className={styles.footerSecontInvestmentText}>
                  <div
                    className={styles.otherFirstFooterInvestmentTextContainer}
                  >
                    <div className={styles.otherfirstFooterInvestmentText}>
                      <div
                        className={styles.otherFirstFooterInvestmentTextChild}
                      >
                        <span>$</span>
                        <span>5873</span>
                      </div>
                      <div
                        className={styles.otherFirstFooterInvestmentTextChild}
                      >
                        <span>£</span>
                        <span>4407</span>
                      </div>
                    </div>

                    <div className={styles.otherSecondFooterInvestmentText}>
                      <p>
                        For a month of repairs, then 10 Clients o month with
                        falling investment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.moboApplyImageContainer}>
              <Image
                src={moboApply}
                alt="icon"
                className={styles.moboApplyImage}
              />
            </div>
          </section>

          {/* ---------------------------------------------------- */}
          {/* ------------------- PLATINUM OFFER ------------------ */}
          {/* ---------------------------------------------------- */}

          <section className={styles.serviceSection}>
            <div className={styles.headingRow}>
              <div className={styles.headingContent}>
                <div className={styles.starImageContainer}>
                  <div className={styles.servicesRowImgContainer}>
                    <Image
                      src={SilverStar}
                      alt="icon"
                      className={`${styles.imageNormal} ${styles.starGlow}`}
                    />
                    <Image
                      src={wolf}
                      width={150}
                      height={100}
                      alt="icon"
                      className={styles.imageWide}
                    />
                  </div>

                  <h2 className={`${styles.title} ${styles.platinumtitle}`}>
                    PLATINUM OFFER
                  </h2>
                </div>

                <div className={styles.platinumTitleContainer}>
                  <h3 className={styles.subtitle} style={{ fontSize: "34px" }}>
                    GET 10 EXTRA <i>CLIENTS</i>
                  </h3>

                  <div className={styles.imageContainer}>
                    <Image
                      src={wolf}
                      width={150}
                      height={100}
                      alt="icon"
                      className={`${styles.imageWide} ${styles.headerImg}`}
                    />
                  </div>
                </div>
                <div className={styles.moboplatinumTitleContainer}>
                  <h3 className={styles.moboplatinumsubtitle}>
                    GET 10 EXTRA <i>CLIENTS</i>
                  </h3>
                </div>

                <div className={styles.imageContainer}>
                  <Image
                    src={ClickMe}
                    width={494}
                    height={100}
                    alt="icon"
                    className={styles.imageUltraWide}
                  />
                </div>
              </div>
                {/* mobile herder  */}
              <div className={styles.mobileheadingContent}>
                <div className={styles.mobilestarImageContainer}>

                  <h2 className={styles.mobilePlatiumtitle}>PLATINUM OFFER</h2>
                  <div className={styles.mobileservicesRowImgContainer}>
                    <Image
                      src={SilverStar}
                      alt="icon"
                      className={`${styles.imageNormal} ${styles.starGlow}`}
                    />
                    <Image
                      src={wolf}
                      width={150}
                      height={100}
                      alt="icon"
                      className={`${styles.imageWide} ${styles.starGlow} `}
                    />
                  </div>
                </div>

                {/* <div className={styles.BronzetitleContainer}> */}
                <h3 className={` ${styles.mobilePlatiumSubtitle}`}>
                  10 CLIENTS A MONTH
                </h3>

                {/* <div className={styles.mobileimageContainer}>
                  <Image
                    src={PowerImg}
                    width={150}
                    height={100}
                    alt="icon"
                    className={`${styles.imageWide} ${styles.headerImg}`}
                  />
                </div> */}
                {/* </div> */}

                {/* <div className={styles.mobileimageContainer}>
                  <button className={styles.orderBtn}>
                    <Image
                      src={WhatsApp}
                      alt="WhatsApp"
                      className={styles.clickApplyIcon}
                    />
                    <span className={styles.applytext}>
                      CLICK ME! <br />
                      <span>TO ORDER</span>
                    </span>
                    <Image
                      src={WhatsApp}
                      alt="WhatsApp"
                      className={styles.clickApplyIcon}
                    />
                  </button>
                </div> */}
              </div>
            </div>

            <div className={styles.description}>
              <p className={styles.descPlatinum}>
                You qualify if your website is reasonably functional or you've
                completed our Silver or Gold offers. We GUARANTEE you 10 Clients
                a month with NOTHING upfront. Pay after results. We can scale up
                to six surgeons in your clinic. How? From 25 years of SEO
                mastery, now AI-powered, exclusively for aesthetic surgeons.
                It's our signature offer - it encapsulates how we like to be
                treated. £4.5k a month, dropping by 25% in months 5, 6 and 7 to
                under £2k. Continue month by month, still getting 10 Clients,
                while your ROI rockets from 9x to an incredible and steady 25x.
                Pause or stop anytime. Ready for lift off? 3, 2, 1, go for it!
              </p>
              <p className={styles.bronzedescMobile}>
                You qualify if your website is functional OR you've completed
                our Silver or Gold Offers.
                <span style={{ marginTop: 10, display: "block" }}>
                  We GUARANTEE 10 CLIENTS a month with NOTHING upfront, paid
                  after results. Scale for each Surgeon in your Clinic, up to
                  six. Our SIGNATURE AI-SEO system for Aesthetic Surgeons - it
                  encapsulates how we like to be treated.
                </span>
                <span style={{ marginTop: 10, display: "block" }}>
                  £4,407 monthly, plummets 25% three times (months 5-7) to under
                  £2k. No lock-in; pause or stop anytime. Light the blue touch
                  paper!
                </span>
              </p>
              <div className={styles.platinumImageMobile} style={{ marginBottom: "4px" }}>
                      <Image
                        src={PlatinumOffer}
                        width={494}
                        height={200}
                        alt="icon"
                        className={`${styles.SilverimageUltraWide} ${styles.platinumimageUltraWide}`}
                      />
                    </div>

              <div className={styles.contentContainer}>
                <div className={styles.icons}>
                  <div className={styles.dollar}>
                    $<p className={styles.free}>5873</p>
                  </div>
                  <div className={styles.euro}>
                    £<p className={styles.free}>4407</p>
                  </div>
                </div>

                <div className={styles.platiumRescueContainer}>
                  <div
                    className={`${styles.goldRescueText} ${styles.platinumRescueText}`}
                  >
                    <div className={styles.paltinumperMonth}>
                      <p
                        style={{ marginBottom: 13 }}
                        className={styles.platiumperMonthText}
                      >
                        For each month, for 3 of them, then drops. All paid on
                        Day 31
                      </p>
                    </div>
                    <div style={{ marginBottom: "4px" }}>
                      <Image
                        src={PlatinumOffer}
                        width={494}
                        height={200}
                        alt="icon"
                        className={`${styles.SilverimageUltraWide} ${styles.platinumimageUltraWide}`}
                      />
                    </div>
                  </div>
                </div>

                <div className={styles.platinumimageContainer}>
                  <Image
                    src={ClickMe}
                    width={494}
                    height={100}
                    alt="icon"
                    className={styles.imageUltraWide}
                  />
                </div>

                <div className={styles.mobosilverImageContainer}>
                  <Image
                    src={PlatinumOffer}
                    width={494}
                    height={200}
                    alt="icon"
                    className={styles.SilverimageUltraWide}
                  />
                </div>
              </div>
            </div>

            {/* Mobile footer */}
            <div className={styles.moboDescriptionContainer}>
              <div className={styles.description}>
                {/* <div className={styles.footerFirstInvestmentText}>
                  Y o u r i n v e s t m e n t i s
                </div> */}

                <div className={styles.footerSecontInvestmentText}>
                  <div
                    className={styles.otherFirstFooterInvestmentTextContainer}
                  >
                    <div className={styles.otherfirstFooterInvestmentText}>
                      <div
                        className={styles.otherFirstFooterInvestmentTextChild}
                      >
                        <span>$</span>
                        <span>5873</span>
                      </div>

                      <div
                        className={styles.otherFirstFooterInvestmentTextChild}
                      >
                        <span>£</span>
                        <span>4407</span>
                      </div>
                    </div>

                    <div className={styles.otherSecondFooterInvestmentText}>
                      <p>
                        Per month, no lock in. If you continue, you get 10
                        Clients a month for less money{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.moboApplyImageContainer}>
              <Image
                src={moboApply}
                alt="icon"
                className={styles.moboApplyImage}
              />
            </div>
          </section>
        </>
      </div>
    </>
  );
}
