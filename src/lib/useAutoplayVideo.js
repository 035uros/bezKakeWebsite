import { useEffect, useRef } from "react";

/* iOS Safari sometimes ignores the muted/autoplay attributes on a
   <video> element: React applies `muted` as a DOM property slightly
   after Safari's own autoplay eligibility check runs, so it gets
   treated as an unmuted autoplay attempt and gets blocked — falling
   back to a native tap-to-play button instead of playing silently.
   Explicitly setting .muted and calling .play() right after mount
   sidesteps that race and matches what every other browser already
   does via the HTML attributes alone. */
export function useAutoplayVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay still blocked (e.g. iOS Low Power Mode) — nothing
        // more to do without an actual user gesture.
      });
    }
  }, []);

  return videoRef;
}
