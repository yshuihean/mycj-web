import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import styles from './Home.module.css';

const heropath = '/images/hero/';
const heros = [
  `${heropath}hero.jpg`,
  `${heropath}hall.jpg`,
  `${heropath}pool.jpg`,
];

export default function Home() {
  const [emblaRef, emblaApi]=useEmblaCarousel(
    {loop: true, speed: 10},
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  )

  useEffect(() => {
    if (!emblaApi) return;
    const desktop = window.matchMedia('(min-width: 768px)').matches;
    emblaApi.reInit({ loop: !desktop });
    if (desktop) emblaApi.plugins().autoplay?.stop();
    else emblaApi.plugins().autoplay?.play();
  }, [emblaApi]);

  return (
    <>
      <section className={styles.hero}>
        {/* 轮播容器 */}
        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.embla__container}>
            {heros.map((src, i) => (
              <div className={styles.embla__slide} key={i}>
                <img className={styles.heroImage} src={src} alt={`民宿全景 ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
        {/* 轮播文字覆盖层 */}
        <div className={styles.overlay}>
          <h1 className={styles.title}>欢迎来到沐雲川景民宿</h1>
            <p className={styles.subtitle}>远离喧嚣，拥抱自然</p>
            <div className={styles.actions}>
              <Link className={`${styles.btn} ${styles.primary}`} to="/rooms">
                查看房间
              </Link>
              <Link className={`${styles.btn} ${styles.secondary}`} to="/booking">
                立即预订
              </Link>
            </div>
        </div>
      </section>
    </>
  )
}