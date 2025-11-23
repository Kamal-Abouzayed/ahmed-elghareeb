"use client"
import { useEffect } from 'react';

// Intense Glow Card for headers and important elements
export const IntenseGlowCard = ({ children, identifier }) => {
  useEffect(() => {
    const CONTAINER = document.querySelector(`.intense-glow-container-${identifier}`);
    const CARDS = document.querySelectorAll(`.intense-glow-card-${identifier}`);

    const CONFIG = {
      proximity: 60,
      spread: 120,
      blur: 20,
      gap: 32,
      vertical: false,
      opacity: 0.3,
    };

    const UPDATE = (event) => {
      for (const CARD of CARDS) {
        const CARD_BOUNDS = CARD.getBoundingClientRect();

        if (
          event?.x > CARD_BOUNDS.left - CONFIG.proximity &&
          event?.x < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
          event?.y > CARD_BOUNDS.top - CONFIG.proximity &&
          event?.y < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
        ) {
          CARD.style.setProperty('--active', CONFIG.opacity);
        } else {
          CARD.style.setProperty('--active', 0);
        }

        const CARD_CENTER = [
          CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
          CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5,
        ];

        let ANGLE =
          (Math.atan2(event?.y - CARD_CENTER[1], event?.x - CARD_CENTER[0]) *
            180) /
          Math.PI;

        ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;

        CARD.style.setProperty('--start', ANGLE + 90);
      }
    };

    document.body.addEventListener('pointermove', UPDATE);

    const RESTYLE = () => {
      if (!CONTAINER) return;
      CONTAINER.style.setProperty('--gap', CONFIG.gap);
      CONTAINER.style.setProperty('--blur', CONFIG.blur);
      CONTAINER.style.setProperty('--spread', CONFIG.spread);
      CONTAINER.style.setProperty(
        '--direction',
        CONFIG.vertical ? 'column' : 'row'
      );
    };

    RESTYLE();
    UPDATE();

    return () => {
      document.body.removeEventListener('pointermove', UPDATE);
    };
  }, [identifier]);

  return (
    <div className={`intense-glow-container-${identifier} glow-container`}>
      <article className={`intense-glow-card intense-glow-card-${identifier} h-fit cursor-pointer border border-laravelGray-200 dark:border-[#2a2e5a] transition-all duration-400 relative bg-white dark:bg-[#101123] text-laravelGray-900 dark:text-gray-200 rounded-xl hover:border-transparent w-full shadow-xl dark:shadow-none`}>
        <div className="glows"></div>
        {children}
      </article>
    </div>
  );
};

// Subtle Glow Card for regular content
export const SubtleGlowCard = ({ children, identifier }) => {
  useEffect(() => {
    const CONTAINER = document.querySelector(`.subtle-glow-container-${identifier}`);
    const CARDS = document.querySelectorAll(`.subtle-glow-card-${identifier}`);

    const CONFIG = {
      proximity: 30,
      spread: 40,
      blur: 8,
      gap: 16,
      vertical: false,
      opacity: 0.1,
    };

    const UPDATE = (event) => {
      for (const CARD of CARDS) {
        const CARD_BOUNDS = CARD.getBoundingClientRect();

        if (
          event?.x > CARD_BOUNDS.left - CONFIG.proximity &&
          event?.x < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
          event?.y > CARD_BOUNDS.top - CONFIG.proximity &&
          event?.y < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
        ) {
          CARD.style.setProperty('--active', CONFIG.opacity);
        } else {
          CARD.style.setProperty('--active', 0);
        }

        const CARD_CENTER = [
          CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
          CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5,
        ];

        let ANGLE =
          (Math.atan2(event?.y - CARD_CENTER[1], event?.x - CARD_CENTER[0]) *
            180) /
          Math.PI;

        ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;

        CARD.style.setProperty('--start', ANGLE + 90);
      }
    };

    document.body.addEventListener('pointermove', UPDATE);

    const RESTYLE = () => {
      if (!CONTAINER) return;
      CONTAINER.style.setProperty('--gap', CONFIG.gap);
      CONTAINER.style.setProperty('--blur', CONFIG.blur);
      CONTAINER.style.setProperty('--spread', CONFIG.spread);
      CONTAINER.style.setProperty(
        '--direction',
        CONFIG.vertical ? 'column' : 'row'
      );
    };

    RESTYLE();
    UPDATE();

    return () => {
      document.body.removeEventListener('pointermove', UPDATE);
    };
  }, [identifier]);

  return (
    <div className={`subtle-glow-container-${identifier} glow-container`}>
      <article className={`subtle-glow-card subtle-glow-card-${identifier} h-fit cursor-pointer border border-laravelGray-100 dark:border-[#2a2e5a] transition-all duration-400 relative bg-white dark:bg-[#101123] text-laravelGray-900 dark:text-gray-200 rounded-lg hover:border-transparent w-full shadow-md dark:shadow-none hover:shadow-lg`}>
        <div className="glows"></div>
        {children}
      </article>
    </div>
  );
};

// ✅ Fix: Named object first, then export default
const GlowCardVariants = {
  IntenseGlowCard,
  SubtleGlowCard,
};

export default GlowCardVariants;
