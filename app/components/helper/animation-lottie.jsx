"use client";

import { useEffect, useState } from "react";

const AnimationLottie = ({ animationPath, width }) => {
  const [LottieComponent, setLottieComponent] = useState(null);

  useEffect(() => {
    let mounted = true;
    // Dynamically import lottie-react on the client to avoid server-side
    // evaluation that may reference `document`/`window` during build.
    import("lottie-react")
      .then((mod) => {
        if (mounted) setLottieComponent(() => mod.default || mod);
      })
      .catch(() => {
        // swallow — if import fails, component will render nothing
      });

    return () => {
      mounted = false;
    };
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: width || "95%",
    },
  };

  if (!LottieComponent) return null;

  return <LottieComponent {...defaultOptions} />;
};

export default AnimationLottie;