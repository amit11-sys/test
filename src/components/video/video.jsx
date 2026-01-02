// import React from "react";
// import styles from "./video.module.css";

// export default function Video() {
//   return (
//     <div className={styles.videoContainer}>
//        <div className={styles.container}>
//       <h3 className={`${styles.title} ${styles?.step4}`}>Real Clients in 30 days. Guaranteed.</h3>
//         <div className={`${styles.videoWrapper} ${styles.step5}`}>
//         <video 
//           className={styles.video} 
//           controls 
//           muted 
//           autoPlay={false}
//         >
//           <source src="/sampleVideo.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//        </div>
//     </div>
//   );
// }






import React from "react";
import styles from "./video.module.css";

export default function Video() {
  return (
    <div
      className={styles.videoContainer}
      // data-aos="fade-up"
    >
      <div
        className={styles.container}
        // data-aos="zoom-in"
        // data-aos-delay="200"
      >
        <h3
          className={`${styles.title}`}
          data-aos="fade-up"
          data-aos-delay="800"

          data-aos-duration="2000"
        >
          Real Clients in 30 days. Guaranteed.
        </h3>

        <div
          className={`${styles.videoWrapper} ${styles.step5}`}
          data-aos="fade-up"
          data-aos-delay="1000"
          data-aos-duration="2000"
        >
          <video
            className={styles.video}
            controls
            muted
            preload="metadata"
          >
            <source src="/sampleVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
