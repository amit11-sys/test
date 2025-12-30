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

export default function MoreServicesSection() {
  return (
    <>
      <div className={styles.wrapper}>
    
        <div className={styles.desktopServiceHeaderRow}>
          {/* <button className={styles.backBtn}></button> */}
          {/* <img src={backToMoreServices} alt="" /> */}
          <div
            style={{ paddingRight: "50px" }}
            className={styles.imageContainer}
          >
            {/* <Image
              src={backToMoreServices}
              width={100}
              height={100}
              alt="icon"
              className={styles.MoreServicesImageUltraWide}
            /> */}

            <div className={styles.ServiceMenubackToMoreServices}>
              MORE SERVICE
            </div>
          </div>

          {/* <h2 className={styles.moboAIOOHeaderRowtitle}>AI-OO</h2> */}
        </div>
        <section className={styles.serviceSection}>
          <div className={styles.container}>
            <div className={styles.item}>
              GOOGLE AI OVERVIEW
              <br />
              OPTIMISATION (AIOO)
            </div>
            <div className={styles.item}>
              AI & LLM SEARCH ENGINE
              <br />
              OPTIMISATION (AISEO)
            </div>
            <div className={styles.item}>
              GOOGLE BUSINESS PROFILE
              <br />
              OPTIMISATION (GBPO)
            </div>

            <div className={styles.item}>
              BACKLINKS & REFERRING
              <br />
              DOMAINS LINK BUILDING
            </div>
            <div className={styles.item}>
              BUSINESS DIRECTORY
              <br />
              LISTINGS & CITATIONS
            </div>
            <div className={styles.item}>
              KEYWORDS
              <br />
              OPTIMISATION
            </div>

            <div className={styles.item}>
              IMAGES GEO-TAG
              <br />
              CREATION
            </div>
            <div className={styles.item}>CUT YOUR CARD COSTS</div>
            <div className={styles.item}>OTHER NEW SERVICE tbc</div>
            <div className={styles.item}>OTHER NEW SERVICE tbc</div>
            <div className={styles.item}>OTHER NEW SERVICE tbc</div>
            <div className={styles.item}>OTHER NEW SERVICE tbc</div>
          </div>
        </section>

        <div className={styles.desktopAIOOServiceHeaderRow}>
          {/* <button className={styles.backBtn}></button> */}
          {/* <img src={backToMoreServices} alt="" /> */}
          <div className={styles.desktopAIOOHeaderMore}>
            <div
              // style={{ paddingRight: "50px" }}
              className={styles.imageContainer}
            >
              {/* <div className={styles.wrapper}> */}
              <button className={styles.desktopAIOOHeaderMorebutton}>
                <span className={styles.desktopAIOOHeaderMoreicon}>
                  <Image
                    src={arrowLeft}
                    width={100}
                    height={100}
                    alt="icon"
                    // className={styles.MoreServicesImageUltraWide}
                  />
                </span>
                <span className={styles.desktopAIOOHeaderMoretext}>
                  MORE SERVICES MENU
                </span>
              </button>
              {/* </div> */}
            </div>

            <h2 style={{ color: "#2F66FF" }}>AI OO</h2>
          </div>
        </div>
        <section className={styles.googleAiserviceSection}>
          <div className={styles.card}>
            <div className={styles.headerRow}>
              {/* <button className={styles.backBtn}></button> */}
              {/* <img src={backToMoreServices} alt="" /> */}
              <div className={styles.imageContainer}>
                {/* <Image
                  src={backToMoreServices}
                  width={100}
                  height={100}
                  alt="icon"
                  className={styles.MoreServicesImageUltraWide}
                /> */}
              </div>

              <h2 className={styles.title}>
                GOOGLE'S AI OVERVIEWS OPTIMISATION (AI-OO)
              </h2>
            </div>

            <p className={styles.text}>
             Are you paying premium rates for Google Ads that appear BELOW Google's AI Overviews? When someone searches "Who's the leading Facelift Surgeon near me?" Google's AI Overviews now appear ABOVE YOU PAID FOR ADS. Above organic results, above everything. It directly answers the Client's question with verified qualifications and trusted platforms before they ever see your expensive PPC placement. Your ad spend delivers diminishing returns while AI Overviews capture the prime digital real estate you're paying to compete for.
              <br />
              Most Surgeons remain locked into yesterday's PPC tactics while the landscape shifts beneath them. The first-mover advantage in AI-OO won't last for long. Stop paying for second place. Position yourself where Clients look first with Surge-on Up's AI-OO service.
            </p>

            <div className={styles.footer}>
              <div className={styles.prices}>
                <div className={styles.priceBlock}>
                  <span className={styles.label}>THE FIRST MONTH:</span>
                  <span className={styles.price}>
                    <span className={styles.priceSpanFlex}>
                      <span style={{ color: "#006633" }}>$</span>
                      <span style={{ color: "#006633" }}>1307</span>
                    </span>

                    <span className={styles.priceSpanFlex}>
                      <span>£</span>
                      <span> 974</span>
                    </span>
                  </span>
                </div>
              </div>
              <div className={styles.priceBlock}>
                <span className={styles.label}>SUBSEQUENT MONTHS:</span>
                <span className={styles.price}>
                  <span className={styles.priceSpanFlex}>
                    <span style={{ color: "#006633" }}>$</span>
                    <span style={{ color: "#006633" }}>643</span>
                  </span>
                  <span className={styles.priceSpanFlex}>
                    <span>£</span>
                    <span>487</span>
                  </span>
                </span>
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
          </div>
          <div className={styles.moboMonthCardcontainer}>
            {/* <div className={styles.moboMonthCardTop}>
              <p style={{ textAlign: "center", marginBottom: 0 }}>
                THE FIRST MONTH:
              </p>
              <div className={styles.otherfirstFooterInvestmentText}>
                <span>$</span>
                <br />
                <span>5873</span>

                <span>£</span>
                <br />
                <span>4407</span>
              </div>
            </div> */}
            {/* <div className={styles.moboMonthCardTop}>
              <p style={{ textAlign: "center", marginBottom: 0 }}>
                THE FIRST MONTH:
              </p>
              <div className={styles.otherfirstFooterInvestmentText}>
                <div>
                  <span>$</span>

                  <span>5873</span>
                </div>

                <div>
                  <span>£</span>
                  <br />
                  <span>4407</span>
                </div>
              </div>
            </div> */}
            <div className={styles.box}>
              <div className={styles.row}>
                <span className={styles.label}>THE FIRST MONTH:</span>

                <div className={styles.values}>
                  <span className={styles.valueItem}>
                    <span className={styles.currency}>$</span>1307
                  </span>
                  <span className={styles.valueItem}>
                    <span className={styles.currency}>£</span>974
                  </span>
                </div>
              </div>

              <div className={styles.line}></div>

              <div
                style={{ paddingTop: "10px", paddingBottom: "10px" }}
                className={styles.row}
              >
                <span className={styles.label}>SUBSEQUENT MONTHS:</span>

                <div className={styles.values}>
                  <span className={styles.valueNumber}>643</span>
                  <span className={styles.valueNumber}>487</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.moboApplyImageINsectionsContainer}>
            <Image
              src={moboApply}
              width={""}
              height={""}
              alt="icon"
              className={styles.moboApplyImage}
            />
          </div>
        </section>

        {/* AI & LLM SEARCH ENGINE OPTIMISATION (AI-SEO) */}
        <div className={styles.moboAIOOHeaderRow}>
          {/* <button className={styles.backBtn}></button> */}
          {/* <img src={backToMoreServices} alt="" /> */}
          <div
            style={{ paddingRight: "50px" }}
            className={styles.imageContainer}
          >
            <Image
              src={backToMoreServices}
              width={100}
              height={100}
              alt="icon"
              className={styles.MoreServicesImageUltraWide}
            />
          </div>

          <h2 className={styles.moboAIOOHeaderRowtitle}>AI-SEO</h2>
        </div>
        <div className={styles.desktopAIOOServiceHeaderRow}>
          {/* <button className={styles.backBtn}></button> */}
          {/* <img src={backToMoreServices} alt="" /> */}
          <div className={styles.desktopAIOOHeaderMore}>
            <div
              // style={{ paddingRight: "50px" }}
              className={styles.imageContainer}
            >
              {/* <div className={styles.wrapper}> */}
              <button className={styles.desktopAIOOHeaderMorebutton}>
                <span className={styles.desktopAIOOHeaderMoreicon}>
                  <Image
                    src={arrowLeft}
                    width={100}
                    height={100}
                    alt="icon"
                    // className={styles.MoreServicesImageUltraWide}
                  />
                </span>
                <span className={styles.desktopAIOOHeaderMoretext}>
                  MORE SERVICES MENU
                </span>
              </button>
              {/* </div> */}
            </div>

            <h2 style={{ color: "#2F66FF" }}>AI-SEO</h2>
          </div>
        </div>
        <section className={styles.serviceSection}>
          <div className={styles.card}>
            <div className={styles.headerRow}>
              {/* <button className={styles.backBtn}></button> */}
              {/* <img src={backToMoreServices} alt="" /> */}
              <div className={styles.imageContainer}>
                {/* <Image
                  src={backToMoreServices}
                  width={100}
                  height={100}
                  alt="icon"
                  className={styles.MoreServicesImageUltraWide}
                /> */}
              </div>

              <h2 className={styles.title}>
                AI & LLM SEARCH ENGINE OPTIMISATION
              </h2>
            </div>

            <p className={styles.AiLLmtext}>
              AI-SEO builds authoritative mentions across all the other AIs and the entire web - the foundation that fuels AI-OO and powers your practice flow.  the Large Language Model (LLM)  part uses the same system as your brain - they parse layers. You can chat with them in normal English, which is why they're catching on so fast. Instead of being forced to choose from an old SEO list, potential Clients just say "I'm thinking about a nose job" and AI directly recommends a Surgeon based on verified sources, reviews, and detailed service descriptions. AI doesn't just list links like yesterday's SEO - it provides direct, contextual recommendations. The mentions you've built propel your AI-OO. Being mentioned in AI responses means reaching Clients who trust it for research. They're up to the mark, qualified, informed, and ready to book.AI-SEO is the fuel that primes your AI-OO F1 GP engine. Together, they'll be the boosters that launch your Client acquisition.
            </p>

            <div className={styles.footer}>
              <div className={styles.prices}>
                <div className={styles.priceBlock}>
                  <span className={styles.label}>THE FIRST MONTH:</span>
                  <span className={styles.price}>
                    <span className={styles.priceSpanFlex}>
                      <span style={{ color: "#006633" }}>$</span>
                      <span style={{ color: "#006633" }}>1307</span>
                    </span>

                    <span className={styles.priceSpanFlex}>
                      <span>£</span>
                      <span> 974</span>
                    </span>
                  </span>
                </div>
              </div>
              <div className={styles.priceBlock}>
                <span className={styles.label}>SUBSEQUENT MONTHS:</span>
                <span className={styles.price}>
                  <span className={styles.priceSpanFlex}>
                    <span style={{ color: "#006633" }}>$</span>
                    <span style={{ color: "#006633" }}>643</span>
                  </span>
                  <span className={styles.priceSpanFlex}>
                    <span>£</span>
                    <span>487</span>
                  </span>
                </span>
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
          </div>
          {/* <di className={styles.moboMonthCardcontainer}> */}
          {/* <div className={styles.moboMonthCardTop}>
              <p style={{ textAlign: "center", marginBottom: 0 }}>
                THE FIRST MONTH:
              </p>
              <div className={styles.otherfirstFooterInvestmentText}>
                <span>$</span>
                <br />
                <span>5873</span>

                <span>£</span>
                <br />
                <span>4407</span>
              </div>
            </div> */}
          {/* <div className={styles.moboMonthCardTop}>
              <p style={{ textAlign: "center", marginBottom: 0 }}>
                THE FIRST MONTH:
              </p>
              <div className={styles.otherfirstFooterInvestmentText}>
                <div>
                  <span>$</span>

                  <span>5873</span>
                </div>

                <div>
                  <span>£</span>
                  <br />
                  <span>4407</span>
                </div>
              </div>
            </div> */}
          <div className={styles.box}>
            <div className={styles.row}>
              <span className={styles.label}>THE FIRST MONTH:</span>

              <div className={styles.values}>
                <span className={styles.valueItem}>
                  <span className={styles.currency}>$</span>1307
                </span>
                <span className={styles.valueItem}>
                  <span className={styles.currency}>£</span>974
                </span>
              </div>
            </div>

            <div className={styles.line}></div>

            <div
              style={{ paddingTop: "10px", paddingBottom: "10px" }}
              className={styles.row}
            >
              <span className={styles.label}>SUBSEQUENT MONTHS:</span>

              <div className={styles.values}>
                <span className={styles.valueNumber}>643</span>
                <span className={styles.valueNumber}>487</span>
              </div>
            </div>
          </div>
          {/* </di> */}
          <div className={styles.moboApplyImageINsectionsContainer}>
            <Image
              src={moboApply}
              width={""}
              height={""}
              alt="icon"
              className={styles.moboApplyImage}
            />
          </div>
        </section>

        {/* GOOGLE BUSINESS PROFILE (GBP) OPTIMISATION */}
        <div className={styles.moboAIOOHeaderRow}>
          {/* <button className={styles.backBtn}></button> */}
          {/* <img src={backToMoreServices} alt="" /> */}
          <div
            style={{ paddingRight: "50px" }}
            className={styles.imageContainer}
          >
            <Image
              src={backToMoreServices}
              width={100}
              height={100}
              alt="icon"
              className={styles.MoreServicesImageUltraWide}
            />
          </div>

          <h2 className={styles.moboAIOOHeaderRowtitle}>KO</h2>
        </div>
        <section className={styles.keywordsServiceSection}>
          <div className={styles.card}>
            <div className={styles.headerRow}>
              {/* <button className={styles.backBtn}></button> */}
              {/* <img src={backToMoreServices} alt="" /> */}
              <div className={styles.imageContainer}>
                <Image
                  src={backToMoreServices}
                  width={100}
                  height={100}
                  alt="icon"
                  className={styles.MoreServicesImageUltraWide}
                />
              </div>
              <h2 className={styles.title}>
                {" "}
                GOOGLE BUSINESS PROFILE (GBP) OPTIMISATION
              </h2>
            </div>

            <p className={styles.keywordText}>
              Your Google Business Profile is your digital storefront. When
              Clients search for Surgeons in your area, your GBP appears
              prominently in Google Search and Maps—often before your website.
              It's the first impression that determines whether they contact you
              or move on to a competitor. An optimised GBP displays compelling
              photos, authentic reviews, accurate hours, and detailed
              services—all of which build the trust so essential for Surgeons.
              Profiles with regular posts, timely review responses, and fresh
              content consistently outperform competitors in visibility and
              engagement.<br></br>
              Most practices severely underutilise their GBP, treating it as a
              static listing rather than the dynamic marketing asset it truly
              is. The question is not whether you can afford to invest in
              professional GBP optimisation—it's whether you can afford not to.
            </p>

            <div className={styles.footer}>
              <div className={styles.prices}>
                <div className={styles.priceBlock}>
                  <span className={styles.label}>THE FIRST MONTH:</span>
                  <span className={styles.price}>
                    <span className={styles.priceSpanFlex}>
                      <span style={{ color: "#006633" }}>$</span>
                      <span style={{ color: "#006633" }}>1307</span>
                    </span>

                    <span className={styles.priceSpanFlex}>
                      <span>£</span>
                      <span> 974</span>
                    </span>
                  </span>
                </div>
              </div>
              <div className={styles.priceBlock}>
                <span className={styles.label}>SUBSEQUENT MONTHS:</span>
                <span className={styles.price}>
                  <span className={styles.priceSpanFlex}>
                    <span style={{ color: "#006633" }}>$</span>
                    <span style={{ color: "#006633" }}>643</span>
                  </span>
                  <span className={styles.priceSpanFlex}>
                    <span>£</span>
                    <span>487</span>
                  </span>
                </span>
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
          </div>
          <div className={styles.moboMonthCardcontainer}>
            {/* <div className={styles.moboMonthCardTop}>
              <p style={{ textAlign: "center", marginBottom: 0 }}>
                THE FIRST MONTH:
              </p>
              <div className={styles.otherfirstFooterInvestmentText}>
                <span>$</span>
                <br />
                <span>5873</span>

                <span>£</span>
                <br />
                <span>4407</span>
              </div>
            </div> */}
            {/* <div className={styles.moboMonthCardTop}>
              <p style={{ textAlign: "center", marginBottom: 0 }}>
                THE FIRST MONTH:
              </p>
              <div className={styles.otherfirstFooterInvestmentText}>
                <div>
                  <span>$</span>

                  <span>5873</span>
                </div>

                <div>
                  <span>£</span>
                  <br />
                  <span>4407</span>
                </div>
              </div>
            </div> */}
            <div className={styles.box}>
              <div className={styles.row}>
                <span className={styles.label}>THE FIRST MONTH:</span>

                <div className={styles.values}>
                  <span className={styles.valueItem}>
                    <span className={styles.currency}>$</span>1307
                  </span>
                  <span className={styles.valueItem}>
                    <span className={styles.currency}>£</span>974
                  </span>
                </div>
              </div>

              <div className={styles.line}></div>

              <div
                style={{ paddingTop: "10px", paddingBottom: "10px" }}
                className={styles.row}
              >
                <span className={styles.label}>SUBSEQUENT MONTHS:</span>

                <div className={styles.values}>
                  <span className={styles.valueNumber}>643</span>
                  <span className={styles.valueNumber}>487</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.moboApplyImageINsectionsContainer}>
            <Image
              src={moboApply}
              width={""}
              height={""}
              alt="icon"
              className={styles.moboApplyImage}
            />
          </div>
        </section>

        {/* BACKLINKS & REFERRING DOMAINS LINK BUILDING */}
        <div className={styles.moboAIOOHeaderRow}>
          {/* <button className={styles.backBtn}></button> */}
          {/* <img src={backToMoreServices} alt="" /> */}
          <div
            style={{ paddingRight: "50px" }}
            className={styles.imageContainer}
          >
            <Image
              src={backToMoreServices}
              width={100}
              height={100}
              alt="icon"
              className={styles.MoreServicesImageUltraWide}
            />
          </div>

          <h2 className={styles.moboAIOOHeaderRowtitle}>GBP</h2>
        </div>
        <section className={styles.BlackLinkserviceSection}>
          <div className={styles.card}>
            <div className={styles.headerRow}>
              {/* <button className={styles.backBtn}></button> */}
              {/* <img src={backToMoreServices} alt="" /> */}

              <h2 className={styles.title}>
                BACKLINKS & REFERRING DOMAINS LINK BUILDING
              </h2>
            </div>

            <p className={styles.text}>
              Domain Authority (DA) is the arbiter of ranking. It is the single
              most important AI-SEO metric. If your DA is high, no one can
              outrank you unless their DA is even higher. A high DA means Google
              trusts your website. It will rank you highly and add pizazz to
              your Client Acquisition.
              <br />
              Backlinks build DA. You need quality links from high-authority
              medical sites, trusted publications, and reputable directories.
              Each backlink is a "vote of confidence" that tells Google your
              practice is credible and authoritative. But toxic backlinks, from
              low DA sites, like spam directories, unrelated industries and link
              farms, actively destroy your DA and repel Clients.
              <br />
              We audit your entire backlink profile. Systematically remove toxic
              ones that poison your DA and build strategic connections with
              authoritative medical sources. Giving you clean, high-quality
              backlinks that will elevate your DA and bring you Clients.
              <br />
            </p>

            <div className={styles.footer}>
              <div className={styles.prices}>
                <div className={styles.priceBlock}>
                  <span className={styles.label}>THE FIRST MONTH:</span>
                  <span className={styles.price}>
                    <span className={styles.priceSpanFlex}>
                      <span style={{ color: "#006633" }}>$</span>
                      <span style={{ color: "#006633" }}>1307</span>
                    </span>

                    <span className={styles.priceSpanFlex}>
                      <span>£</span>
                      <span> 974</span>
                    </span>
                  </span>
                </div>
              </div>
              <div className={styles.priceBlock}>
                <span className={styles.label}>SUBSEQUENT MONTHS:</span>
                <span className={styles.price}>
                  <span className={styles.priceSpanFlex}>
                    <span style={{ color: "#006633" }}>$</span>
                    <span style={{ color: "#006633" }}>643</span>
                  </span>
                  <span className={styles.priceSpanFlex}>
                    <span>£</span>
                    <span>487</span>
                  </span>
                </span>
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
          </div>
          <div className={styles.moboMonthCardcontainer}>
            {/* <div className={styles.moboMonthCardTop}>
              <p style={{ textAlign: "center", marginBottom: 0 }}>
                THE FIRST MONTH:
              </p>
              <div className={styles.otherfirstFooterInvestmentText}>
                <span>$</span>
                <br />
                <span>5873</span>

                <span>£</span>
                <br />
                <span>4407</span>
              </div>
            </div> */}
            {/* <div className={styles.moboMonthCardTop}>
              <p style={{ textAlign: "center", marginBottom: 0 }}>
                THE FIRST MONTH:
              </p>
              <div className={styles.otherfirstFooterInvestmentText}>
                <div>
                  <span>$</span>

                  <span>5873</span>
                </div>

                <div>
                  <span>£</span>
                  <br />
                  <span>4407</span>
                </div>
              </div>
            </div> */}
            <div className={styles.box}>
              <div className={styles.row}>
                <span className={styles.label}>THE FIRST MONTH:</span>

                <div className={styles.values}>
                  <span className={styles.valueItem}>
                    <span className={styles.currency}>$</span>1283
                  </span>
                  <span className={styles.valueItem}>
                    <span className={styles.currency}>£</span>977
                  </span>
                </div>
              </div>

              <div className={styles.line}></div>

              <div
                style={{ paddingTop: "10px", paddingBottom: "10px" }}
                className={styles.row}
              >
                <span className={styles.label}>SUBSEQUENT MONTHS:</span>

                <div className={styles.values}>
                  <span className={styles.valueNumber}>497</span>
                  <span className={styles.valueNumber}>393</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.moboApplyImageINsectionsContainer}>
            <Image
              src={moboApply}
              width={""}
              height={""}
              alt="icon"
              className={styles.moboApplyImage}
            />
          </div>
        </section>
        {/* BUSINESS DIRECTORY LISTINGS & CITATIONS */}

        <div className={styles.moboAIOOHeaderRow}>
          {/* <button className={styles.backBtn}></button> */}
          {/* <img src={backToMoreServices} alt="" /> */}
          <div
            style={{ paddingRight: "50px" }}
            className={styles.imageContainer}
          >
            <Image
              src={backToMoreServices}
              width={100}
              height={100}
              alt="icon"
              className={styles.MoreServicesImageUltraWide}
            />
          </div>

          <h2 className={styles.moboAIOOHeaderRowtitle}>BDL & C</h2>
        </div>
        <section className={styles.bussinessServiceSection}>
          <div className={styles.card}>
            <div className={styles.headerRow}>
              {/* <button className={styles.backBtn}></button> */}
              {/* <img src={backToMoreServices} alt="" /> */}

              <h2 className={styles.title}>
                BUSINESS DIRECTORY LISTINGS & CITATIONS
              </h2>
            </div>

            <p className={styles.text}>
              Business Directory Listings and Citations amplify your online
              authority and visibility. Directory listings are complete profiles
              on platforms like Yell, Cyclex, and 118. They showcase your
              practice with photos, services, reviews, and contact details,
              helping Clients choose you over competitors. Citations are your
              practice name, address, and phone number (NAP) appearing
              consistently across the web. Search engines use these to verify
              legitimacy and boost local rankings. Together, they create
              powerful visibility. Consistent citations build search engine
              trust, while optimised listings convert researching Clients into
              booked consultations.
              <br />
              Many Surgeons have incomplete or inconsistent listings scattered
              across the web, diluting their authority and confusing search
              engines. We audit every listing, correct them and ensure both are
              complete, accurate, and strategically optimised to maximise your
              local dominance for Clients.
            </p>

            <div className={styles.footer}>
              <div className={styles.prices}>
                <div className={styles.priceBlock}>
                  <span className={styles.label}>THE FIRST MONTH:</span>
                  <span className={styles.price}>
                    <span className={styles.priceSpanFlex}>
                      <span style={{ color: "#006633" }}>$</span>
                      <span style={{ color: "#006633" }}>1307</span>
                    </span>

                    <span className={styles.priceSpanFlex}>
                      <span>£</span>
                      <span> 974</span>
                    </span>
                  </span>
                </div>
              </div>
              <div className={styles.priceBlock}>
                <span className={styles.label}>SUBSEQUENT MONTHS:</span>
                <span className={styles.price}>
                  <span className={styles.priceSpanFlex}>
                    <span style={{ color: "#006633" }}>$</span>
                    <span style={{ color: "#006633" }}>643</span>
                  </span>
                  <span className={styles.priceSpanFlex}>
                    <span>£</span>
                    <span>487</span>
                  </span>
                </span>
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
          </div>
          <div className={styles.moboMonthCardcontainer}>
            {/* <div className={styles.moboMonthCardTop}>
              <p style={{ textAlign: "center", marginBottom: 0 }}>
                THE FIRST MONTH:
              </p>
              <div className={styles.otherfirstFooterInvestmentText}>
                <span>$</span>
                <br />
                <span>5873</span>

                <span>£</span>
                <br />
                <span>4407</span>
              </div>
            </div> */}
            {/* <div className={styles.moboMonthCardTop}>
              <p style={{ textAlign: "center", marginBottom: 0 }}>
                THE FIRST MONTH:
              </p>
              <div className={styles.otherfirstFooterInvestmentText}>
                <div>
                  <span>$</span>

                  <span>5873</span>
                </div>

                <div>
                  <span>£</span>
                  <br />
                  <span>4407</span>
                </div>
              </div>
            </div> */}
            <div className={styles.box}>
              <div className={styles.row}>
                <span className={styles.label}>THE FIRST MONTH:</span>

                <div className={styles.values}>
                  <span className={styles.valueItem}>
                    <span className={styles.currency}>$</span>1307
                  </span>
                  <span className={styles.valueItem}>
                    <span className={styles.currency}>£</span>974
                  </span>
                </div>
              </div>

              <div className={styles.line}></div>

              <div
                style={{ paddingTop: "10px", paddingBottom: "10px" }}
                className={styles.row}
              >
                <span className={styles.label}>SUBSEQUENT MONTHS:</span>

                <div className={styles.values}>
                  <span className={styles.valueNumber}>643</span>
                  <span className={styles.valueNumber}>487</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.moboApplyImageINsectionsContainer}>
            <Image
              src={moboApply}
              width={""}
              height={""}
              alt="icon"
              className={styles.moboApplyImage}
            />
          </div>
        </section>

        {/* KEYWORDS OPTIMISATION */}
        <div className={styles.moboAIOOHeaderRow}>
          {/* <button className={styles.backBtn}></button> */}
          {/* <img src={backToMoreServices} alt="" /> */}
          <div
            style={{ paddingRight: "50px" }}
            className={styles.imageContainer}
          >
            <Image
              src={backToMoreServices}
              width={100}
              height={100}
              alt="icon"
              className={styles.MoreServicesImageUltraWide}
            />
          </div>

          <h2 className={styles.moboAIOOHeaderRowtitle}>KO</h2>
        </div>
        <section className={styles.keywordsServiceSection}>
          <div className={styles.card}>
            <div className={styles.headerRow}>
              {/* <button className={styles.backBtn}></button> */}
              {/* <img src={backToMoreServices} alt="" /> */}
              <div className={styles.imageContainer}>
                <Image
                  src={backToMoreServices}
                  width={100}
                  height={100}
                  alt="icon"
                  className={styles.MoreServicesImageUltraWide}
                />
              </div>
              <h2 className={styles.title}>KEYWORDS OPTIMISATION</h2>
            </div>

            <p className={styles.keywordText}>
              When Clients search "Hair Transplant specialist Manchester,"
              strategic keywords are what determines whether your practice
              appears prominently or remains invisible. Keywords are the bridge
              between what Clients search for and whether they find you. We
              identify high-value keywords your ideal Clients actually use, then
              integrate them naturally throughout your website content, titles,
              descriptions, and service pages. Effective keyword strategy
              balances search volume against competition. It targets terms where
              you can dominate the rankings and attract qualified Clients who
              are ready to book consultations.
              <br />
              Most Surgeons guess at keywords or ignore them entirely. We use
              data-driven research to position you exactly where your next
              Clients are searching.
            </p>

            <div className={styles.footer}>
              <div className={styles.prices}>
                <div className={styles.priceBlock}>
                  <span className={styles.label}>THE FIRST MONTH:</span>
                  <span className={styles.price}>
                    <span className={styles.priceSpanFlex}>
                      <span style={{ color: "#006633" }}>$</span>
                      <span style={{ color: "#006633" }}>1307</span>
                    </span>

                    <span className={styles.priceSpanFlex}>
                      <span>£</span>
                      <span> 974</span>
                    </span>
                  </span>
                </div>
              </div>
              <div className={styles.priceBlock}>
                <span className={styles.label}>SUBSEQUENT MONTHS:</span>
                <span className={styles.price}>
                  <span className={styles.priceSpanFlex}>
                    <span style={{ color: "#006633" }}>$</span>
                    <span style={{ color: "#006633" }}>643</span>
                  </span>
                  <span className={styles.priceSpanFlex}>
                    <span>£</span>
                    <span>487</span>
                  </span>
                </span>
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
          </div>
          <div className={styles.moboMonthCardcontainer}>
            {/* <div className={styles.moboMonthCardTop}>
              <p style={{ textAlign: "center", marginBottom: 0 }}>
                THE FIRST MONTH:
              </p>
              <div className={styles.otherfirstFooterInvestmentText}>
                <span>$</span>
                <br />
                <span>5873</span>

                <span>£</span>
                <br />
                <span>4407</span>
              </div>
            </div> */}
            {/* <div className={styles.moboMonthCardTop}>
              <p style={{ textAlign: "center", marginBottom: 0 }}>
                THE FIRST MONTH:
              </p>
              <div className={styles.otherfirstFooterInvestmentText}>
                <div>
                  <span>$</span>

                  <span>5873</span>
                </div>

                <div>
                  <span>£</span>
                  <br />
                  <span>4407</span>
                </div>
              </div>
            </div> */}
            <div className={styles.box}>
              <div className={styles.row}>
                <span className={styles.label}>THE FIRST MONTH:</span>

                <div className={styles.values}>
                  <span className={styles.valueItem}>
                    <span className={styles.currency}>$</span>1307
                  </span>
                  <span className={styles.valueItem}>
                    <span className={styles.currency}>£</span>974
                  </span>
                </div>
              </div>

              <div className={styles.line}></div>

              <div
                style={{ paddingTop: "10px", paddingBottom: "10px" }}
                className={styles.row}
              >
                <span className={styles.label}>SUBSEQUENT MONTHS:</span>

                <div className={styles.values}>
                  <span className={styles.valueNumber}>643</span>
                  <span className={styles.valueNumber}>487</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.moboApplyImageINsectionsContainer}>
            <Image
              src={moboApply}
              width={""}
              height={""}
              alt="icon"
              className={styles.moboApplyImage}
            />
          </div>
        </section>

        {/* IMAGE GEO-TAG OPTIMISATION */}

        <div className={styles.moboAIOOHeaderRow}>
          {/* <button className={styles.backBtn}></button> */}
          {/* <img src={backToMoreServices} alt="" /> */}
          <div
            style={{ paddingRight: "50px" }}
            className={styles.imageContainer}
          >
            <Image
              src={backToMoreServices}
              width={100}
              height={100}
              alt="icon"
              className={styles.MoreServicesImageUltraWide}
            />
          </div>

          <h2 className={styles.moboAIOOHeaderRowtitle}>GTI-C</h2>
        </div>
        <section className={styles.imageGeoServiceSection}>
          <div className={styles.card}>
            <div className={styles.headerRow}>
              {/* <button className={styles.backBtn}></button> */}
              {/* <img src={backToMoreServices} alt="" /> */}
              <div className={styles.imageContainer}>
                <Image
                  src={backToMoreServices}
                  width={100}
                  height={100}
                  alt="icon"
                  className={styles.MoreServicesImageUltraWide}
                />
              </div>
              <h2 className={styles.title}>IMAGE GEO TAG OPTIMISATION</h2>
            </div>

            <p className={styles.text}>
              Image Geo-Tagging strengthens your local search presence by
              embedding location data directly into your practice photos. When
              properly Geo tagged, your images help search engines verify your
              physical location, reinforcing your connection to specific
              geographic areas and boosting local rankings significantly.
              <br />
              Geo-tagged images appear in location-based searches like "Facelift
              Surgeon London" or "Breast augmentation specialist Manchester,"
              creating additional visibility channels beyond traditional search
              results and reaching Clients through Google Images. Mobile users
              searching "near me" benefit most from geo-tagged content, as
              devices prioritise location-verified images. We embed precise GPS
              coordinates into every image across your website and directories,
              ensuring maximum local SEO impact and geographic authority for
              your practice.
            </p>

            <div className={styles.footer}>
              <div className={styles.prices}>
                <div className={styles.priceBlock}>
                  <span className={styles.label}>THE FIRST MONTH:</span>
                  <span className={styles.price}>
                    <span className={styles.priceSpanFlex}>
                      <span style={{ color: "#006633" }}>$</span>
                      <span style={{ color: "#006633" }}>1307</span>
                    </span>

                    <span className={styles.priceSpanFlex}>
                      <span>£</span>
                      <span> 974</span>
                    </span>
                  </span>
                </div>
              </div>
              <div className={styles.priceBlock}>
                <span className={styles.label}>SUBSEQUENT MONTHS:</span>
                <span className={styles.price}>
                  <span className={styles.priceSpanFlex}>
                    <span style={{ color: "#006633" }}>$</span>
                    <span style={{ color: "#006633" }}>643</span>
                  </span>
                  <span className={styles.priceSpanFlex}>
                    <span>£</span>
                    <span>487</span>
                  </span>
                </span>
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
          </div>
          <div className={styles.moboMonthCardcontainer}>
            {/* <div className={styles.moboMonthCardTop}>
              <p style={{ textAlign: "center", marginBottom: 0 }}>
                THE FIRST MONTH:
              </p>
              <div className={styles.otherfirstFooterInvestmentText}>
                <span>$</span>
                <br />
                <span>5873</span>

                <span>£</span>
                <br />
                <span>4407</span>
              </div>
            </div> */}
            {/* <div className={styles.moboMonthCardTop}>
              <p style={{ textAlign: "center", marginBottom: 0 }}>
                THE FIRST MONTH:
              </p>
              <div className={styles.otherfirstFooterInvestmentText}>
                <div>
                  <span>$</span>

                  <span>5873</span>
                </div>

                <div>
                  <span>£</span>
                  <br />
                  <span>4407</span>
                </div>
              </div>
            </div> */}
            <div className={styles.box}>
              <div className={styles.row}>
                <span className={styles.label}>THE FIRST MONTH:</span>

                <div className={styles.values}>
                  <span className={styles.valueItem}>
                    <span className={styles.currency}>$</span>1307
                  </span>
                  <span className={styles.valueItem}>
                    <span className={styles.currency}>£</span>974
                  </span>
                </div>
              </div>

              <div className={styles.line}></div>

              <div
                style={{ paddingTop: "10px", paddingBottom: "10px" }}
                className={styles.row}
              >
                <span className={styles.label}>SUBSEQUENT MONTHS:</span>

                <div className={styles.values}>
                  <span className={styles.valueNumber}>643</span>
                  <span className={styles.valueNumber}>487</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.moboApplyImageINsectionsContainer}>
            <Image
              src={moboApply}
              width={""}
              height={""}
              alt="icon"
              className={styles.moboApplyImage}
            />
          </div>
        </section>

        {/* CUT YOUR CARD COSTS */}
        <div className={styles.moboAIOOHeaderRow}>
          {/* <button className={styles.backBtn}></button> */}
          {/* <img src={backToMoreServices} alt="" /> */}
          <div
            style={{ paddingRight: "50px" }}
            className={styles.imageContainer}
          >
            <Image
              src={backToMoreServices}
              width={100}
              height={100}
              alt="icon"
              className={styles.MoreServicesImageUltraWide}
            />
          </div>

          <h2 className={styles.moboAIOOHeaderRowtitle}>CUT CC COSTS</h2>
        </div>
        <section className={styles.cardCostServiceSection}>
          <div className={styles.card}>
            <div className={styles.headerRow}>
              {/* <button className={styles.backBtn}></button> */}
              {/* <img src={backToMoreServices} alt="" /> */}
              <div className={styles.imageContainer}>
                <Image
                  src={backToMoreServices}
                  width={100}
                  height={100}
                  alt="icon"
                  className={styles.MoreServicesImageUltraWide}
                />
              </div>
              <h2 className={styles.title}>CUT YOUR CARD COSTS</h2>
            </div>

            <div className={styles.text}>
              Sick of credit card fees eating your profits? Some UK healthcare
              practices spend £20,000 annually just collecting payments. That's
              money better invested in your practice, facilities, and Client
              experience.
              <br />
              A secure bank-to-bank transfer app transfers funds in 7 seconds
              with no setup costs, no machines, and NO processing fees. Major
              banks approve it.
              <br />
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src={bankLogos}
                  width={800}
                  height={300}
                  alt="icon"
                  className={styles.MoreServicesCutYourCardImageUltraWide}
                />
              </p>
              For a modest monthly subscription of less than £100, you eliminate
              transaction fees forever. Month-to-month commitment with no
              long-term contract.
              <br />
              Stop funding your processor's profits. Keep more of every Client
              payment. Get your free, no-obligation demonstration and see the
              savings for yourself.
            </div>

            <div className={styles.footer}>
              <div className={styles.prices}>
                <div className={styles.priceBlock}>
                  <span className={styles.label}>THE FIRST MONTH:</span>
                  <span className={styles.price}>
                    <span className={styles.priceSpanFlex}>
                      <span style={{ color: "#006633" }}> $</span>
                      <span style={{ color: "#006633" }}> &lt; 135</span>
                    </span>

                    <span className={styles.priceSpanFlex}>
                      <span>£</span>
                      <span> 100</span>
                    </span>
                  </span>
                </div>
              </div>
              <div className={styles.priceBlock}>
                <span className={styles.label}>SUBSEQUENT MONTHS:</span>
                <span className={styles.price}>
                  <span className={styles.priceSpanFlex}>
                    <span style={{ color: "#006633" }}> $</span>
                    <span style={{ color: "#006633" }}>&lt; 135</span>
                  </span>
                  <span className={styles.priceSpanFlex}>
                    <span>£</span>
                    <span>&lt; 100</span>
                  </span>
                </span>
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
          </div>
          <div className={styles.moboMonthCardcontainer}>
            {/* <div className={styles.moboMonthCardTop}>
              <p style={{ textAlign: "center", marginBottom: 0 }}>
                THE FIRST MONTH:
              </p>
              <div className={styles.otherfirstFooterInvestmentText}>
                <span>$</span>
                <br />
                <span>5873</span>

                <span>£</span>
                <br />
                <span>4407</span>
              </div>
            </div> */}
            {/* <div className={styles.moboMonthCardTop}>
              <p style={{ textAlign: "center", marginBottom: 0 }}>
                THE FIRST MONTH:
              </p>
              <div className={styles.otherfirstFooterInvestmentText}>
                <div>
                  <span>$</span>

                  <span>5873</span>
                </div>

                <div>
                  <span>£</span>
                  <br />
                  <span>4407</span>
                </div>
              </div>
            </div> */}
            <div className={styles.box}>
              <div className={styles.row}>
                <span className={styles.label}>THE FIRST MONTH:</span>

                <div className={styles.values}>
                  <span className={styles.valueItem}>
                    <span className={styles.currency}>$</span>1283
                  </span>
                  <span className={styles.valueItem}>
                    <span className={styles.currency}>£</span>977
                  </span>
                </div>
              </div>

              <div className={styles.line}></div>

              <div
                style={{ paddingTop: "10px", paddingBottom: "10px" }}
                className={styles.row}
              >
                <span className={styles.label}>SUBSEQUENT MONTHS:</span>

                <div className={styles.values}>
                  <span className={styles.valueNumber}>497</span>
                  <span className={styles.valueNumber}>393</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.moboApplyImageINsectionsContainer}>
            <Image
              src={moboApply}
              width={""}
              height={""}
              alt="icon"
              className={styles.moboApplyImage}
            />
          </div>
        </section>
      </div>
    </>
  );
}
