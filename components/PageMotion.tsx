'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PageMotion() {
  useEffect(() => {
    const reduceMotion =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.topbar', {
        y: -18,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
      });

      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      heroTl
        .from('[data-hero-badge]', { y: 24, opacity: 0, duration: 0.7 })
        .from('[data-hero-title]', { y: 44, opacity: 0, duration: 0.9 }, '-=0.4')
        .from('[data-hero-copy]', { y: 26, opacity: 0, duration: 0.7 }, '-=0.5')
        .from(
          '[data-hero-actions] > *',
          { y: 18, opacity: 0, duration: 0.45, stagger: 0.08 },
          '-=0.4'
        )
        .from(
          '[data-hero-services] span',
          { y: 18, opacity: 0, duration: 0.45, stagger: 0.08 },
          '-=0.55'
        )
        .from('[data-hero-bottom]', { y: 16, opacity: 0, duration: 0.55 }, '-=0.4');

      gsap.from('[data-pill-nav] span', {
        y: 14,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '[data-pill-nav]',
          start: 'top 86%',
        },
      });

      gsap.to('[data-hero-image]', {
        yPercent: 8,
        scale: 1.08,
        ease: 'none',
        scrollTrigger: {
          trigger: '[data-hero]',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to('[data-hero-shade]', {
        opacity: 0.7,
        ease: 'none',
        scrollTrigger: {
          trigger: '[data-hero]',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to('[data-hero-services]', {
        yPercent: -12,
        ease: 'none',
        scrollTrigger: {
          trigger: '[data-hero]',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.from(el, {
          y: 42,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 82%',
          },
        });
      });

      const cards = gsap.utils.toArray<HTMLElement>('[data-project-card]');
      gsap.from(cards, {
        y: 70,
        opacity: 0,
        rotateX: 10,
        transformPerspective: 900,
        duration: 0.95,
        ease: 'power3.out',
        stagger: 0.11,
        scrollTrigger: {
          trigger: '[data-project-grid]',
          start: 'top 78%',
        },
      });

      cards.forEach((card) => {
        const image = card.querySelector('img');
        if (!image) return;

        gsap.to(image, {
          yPercent: 5,
          scale: 1.08,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });

      gsap.from('[data-showcase-card]', {
        y: 36,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '[data-showcase]',
          start: 'top 80%',
        },
      });

      gsap.to('[data-showcase-card]', {
        y: -12,
        rotate: 0.8,
        ease: 'none',
        scrollTrigger: {
          trigger: '[data-showcase]',
          start: 'top 85%',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.from('[data-tech-pill]', {
        y: 16,
        opacity: 0,
        scale: 0.96,
        duration: 0.55,
        stagger: 0.05,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '[data-tech-list]',
          start: 'top 85%',
        },
      });

      gsap.from('[data-cta-image]', {
        scale: 1.08,
        yPercent: 4,
        ease: 'none',
        scrollTrigger: {
          trigger: '[data-cta]',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.from('[data-cta-content] > *', {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '[data-cta]',
          start: 'top 80%',
        },
      });

      gsap.from('footer', {
        y: 22,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: 'footer',
          start: 'top 92%',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
