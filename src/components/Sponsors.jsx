'use client';
import { sponsors } from '@/lib/data';
import SponsorCard from './SponsorCard';
import useMeasure from 'react-use-measure';
import { animate, motion, useMotionValue } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Sponsors() {
  const FAST_DURATION = 60;
  const SLOW_DURATION = 80;
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);
  const [duration, setDuration] = useState(FAST_DURATION);
  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: 'linear',
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: 'linear',
        duration: duration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [xTranslation, width, duration, rerender]);
  return (
    <div className="w-full flex flex-col justify-center items-center py-6 bg-primary xl:bg-complimentary">
      <div className="w-[90%] flex flex-col justify-start items-start overflow-hidden md:w-[100%] md:px-4 lg:w-[78%] lg:px-0">
        <div className="w-full flex flex-col items-end mb-4">
          <h1 className="font-anton text-2xl md:text-3xl xl:text-4xl text-complimentary xl:text-primary">
            WSPIERAJĄ NAS
          </h1>
          <div className="w-10 h-2 bg-additional md:w-16"></div>
        </div>
        <motion.div
          className="flex justify-start gap-2 text-complimentary"
          ref={ref}
          style={{ x: xTranslation }}
          onHoverStart={() => {
            setMustFinish(true);
            setDuration(SLOW_DURATION);
          }}
          onHoverEnd={() => {
            setMustFinish(true);
            setDuration(FAST_DURATION);
          }}
        >
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <SponsorCard
              key={index}
              name={sponsor.name}
              src={sponsor.src}
              url={sponsor.url}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
