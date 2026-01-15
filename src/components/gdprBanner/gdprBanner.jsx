"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./GdprBanner.module.css";
import Link from "next/link";

const tracks = [
  { title: "Music 1 – Gentle Classical", src: "/music/music1.mp3" },
  { title: "Music 2 – Calm Piano", src: "/music/music2.mp3" },
  { title: "Music 3 – Soft Ambient", src: "/music/music3.mp3" },
  { title: "Music 4 – Relaxing Strings", src: "/music/music4.mp3" },
  { title: "Music 5 – Peaceful Melody", src: "/music/music5.mp3" },
];

export default function GdprBanner({ setIsShowContent }) {
  const audioRef = useRef(null);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  const togglePlay = () => {
    if (!audioRef.current) return;
    playing ? audioRef.current.pause() : audioRef.current.play();
    setPlaying(!playing);
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
    setPlaying(true);
    setTimeout(() => audioRef.current.play(), 50);
  };
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const bannerRef = useRef(null);

  // Show banner only first time
  useEffect(() => {
    // const accepted = localStorage.getItem("gdprAccepted");
    // if (!accepted) {
    setVisible(true);
    // }
  }, []);

  const handleAccept = () => {
    setClosing(true);

    // wait for animation to finish
    setTimeout(() => {
      setIsShowContent(false); // NOW load content
      setVisible(false);
    }, 600);
  };

  if (!visible) return null;

  return (
    <div
      ref={bannerRef}
      className={`${styles.wrapper} ${closing ? styles.closing : styles.open}`}
    >
      {/* GREEN AREA */}
      <div className={styles.bannerArea}>
        {/* TOP RIGHT PLAYER */}
        <div className={styles.playerCard}>
          {/* HEADER */}
          <div className={styles.playerHeader}>
            <span className={styles.musicIcon}>🎵</span>
            Gentle Classical Music
          </div>

          {/* CONTROLS ROW */}
          <div className={styles.controlsRow}>
            {/* PLAY */}
            <button onClick={togglePlay} className={styles.playBtn}>
              ▶
            </button>

            {/* PROGRESS */}
            <div className={styles.progressBar}>
              <div className={styles.progress}></div>
            </div>

            {/* VOLUME */}
            <div className={styles.volumeBox}>
              <span className={styles.percentBadge}>100%</span>
              <div className={styles.volumeIcon}>🔊</div>
            </div>
          </div>

          {/* TRACK NAME */}

          <div className={styles.trackName}>{tracks[currentTrack].title}</div>

          <audio
            ref={audioRef}
            src={tracks[currentTrack].src}
            onEnded={nextTrack}
          />
        </div>
      </div>

      {/* COOKIE BAR */}
      <div className={styles.cookieBar}>
        <h6 className={styles.mobileCookieText}>
          We only use essential cookies. We don’t do any tracking.
        </h6>
        <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
          <div className={styles.cookieBtn}>
            <div className={styles.underStandBtn} onClick={handleAccept}>
              I Understand
            </div>
            <span>Click to dismiss</span>
          </div>

          <p className={styles.desktopCookieText}>
            We only use essential cookies. We don’t do any tracking.
          </p>

          <div className={styles.cookieBtn}>
            <Link href="/privacy" className={styles.privacyBtn}>
              Privacy Policy
            </Link>

            <span>Click to see</span>
          </div>
        </div>
      </div>
    </div>
  );
}
