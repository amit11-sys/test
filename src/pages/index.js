
"use client";

import Head from "next/head";
import Landing from "@/components/landing/landing";
import Services from "@/components/services/services";
import Video from "@/components/video/video";
import { useRef, useEffect, useState } from "react";
import GdprBanner from "../components/gdprBanner/gdprBanner";
import AOS from "aos";

export default function Home() {
  const servicesRef = useRef(null);
  const [isShowContent, setIsShowContent] = useState(true);

  const scrollToServices = () => {
    const section = servicesRef.current;
    if (!section) return;

    const y = section.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,       // animate only once
      easing: "ease-out-cubic",
      offset: 120,
    });
  }, []);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      scrollToServices();
    }, 25500);

    return () => clearTimeout(timer1);
  }, [isShowContent]);

  return (
    <>
      <Head>{/* SEO META */}</Head>

      {isShowContent ? (
        <GdprBanner setIsShowContent={setIsShowContent} />
      ) : (
        <>
          <Landing handleScroll={scrollToServices} />

          <div ref={servicesRef} id="services-section">
            <Services />
          </div>

          <div id="video-section">
            <Video />
          </div>
        </>
      )}
    </>
  );
}
