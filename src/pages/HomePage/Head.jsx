import video1 from "./../../../public/inorg.mp4";
import styles from "./Head.module.css";
import { useRef, useState } from "react";
import img from "./../../../public/newbg3.png";
import { Link } from "react-router-dom";

function Main() {
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const videoRef = useRef(null);

  // Function to handle the end of the video
  const handleVideoEnd = () => {
    setIsVideoEnded(true);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };
  return (
    <div className={styles.parent}>
      {!isVideoEnded ? (
        <video
          ref={videoRef}
          className={styles.video}
          src={video1}
          onEnded={handleVideoEnd}
          autoPlay
          muted
        />
      ) : (
        <img src={img} alt="Video Ended" className={styles.img} />
      )}
      <div className={styles.title}>
        <div className={styles.imgparent}>
          {!isVideoEnded ? (
            <video
              ref={videoRef}
              className={styles.video}
              src={video1}
              onEnded={handleVideoEnd}
              autoPlay
              muted
            />
          ) : (
            <img src={img} alt="Video Ended" className={styles.img} />
          )}
        </div>
        <div className={styles.tit}>
          <div>
            <h1 className={styles.atmos}>INFINITO</h1>
            <h1 className={styles.atmos}>2024</h1>
          </div>
          <div className={styles.bupal}>
            <Link to="/event/ins" className={styles.cool}>
              <span style={{ zIndex: "1" }}>Explore Now</span>
            </Link>
            {/* <a href="#" className={styles.cool}>
              <span style={{ zIndex: "1" }}>Sign Up</span>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
