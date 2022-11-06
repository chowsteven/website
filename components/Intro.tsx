import { useRef } from 'react';
import Image from 'next/image';

/**
 * Inspired by: https://twitter.com/FonsMans/status/1569708218351247366
 * Ported from Svelte Project: https://twitter.com/laudis_io/status/1569751280905785347
 * Credit to https://twitter.com/agalliosamai/status/1573308361340493825
 */

export const Intro = () => {
  const svgRef = useRef<HTMLElement & SVGSVGElement>(null);

  const screenToSVG = ({
    x: screenX,
    y: screenY,
  }: {
    x: number;
    y: number;
  }) => {
    if (svgRef.current) {
      let p = svgRef.current.createSVGPoint();
      // pointer is offset from cursor for some reason. subtract to re-center
      p.x = screenX - 1100;
      p.y = screenY - 100;
      let mtx = svgRef.current.getScreenCTM() as DOMMatrix;
      return p.matrixTransform(mtx.inverse());
    }
  };

  return (
    <div className='relative w-full h-full'>
      {/* text */}
      <div className='absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 text-white font-bold pointer-events-none'>
        <div className='flex flex-col sm:items-center'>
          <p className='sm:text-2xl lg:text-3xl xl:text-4xl'>
            Hi there, I&apos;m
          </p>
          <p className='text-2xl sm:text-5xl sm:mb-1 lg:text-7xl xl:text-8xl xl:mb-3'>
            Steven Chow
          </p>
          <div className='flex flex-col sm:flex-row sm:gap-2 sm:text-2xl lg:text-3xl xl:text-4xl'>
            <p>Engineer.</p>
            <p>Student.</p>
            <p>???.</p>
          </div>
        </div>
      </div>

      {/* noise image */}
      <div className='opacity-20 pointer-events-none'>
        <Image src='/images/noise.png' alt='noise' layout='fill' />
      </div>

      {/* blurred background svg */}
      <svg
        ref={svgRef}
        onMouseMove={(e) => {
          const element = document.getElementById('mouse-input') as HTMLElement;
          const coords = screenToSVG({ x: e.clientX, y: e.clientY });
          element.style.transform = `translate(${coords?.x}px, ${coords?.y}px)`;
        }}
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 3840 2160'
      >
        <g clipPath='url(#clip0_15_58)'>
          <path fill='#fff' d='M0 0H3840V2160H0z'></path>
          <path fill='#1C1C1C' d='M0 0H3840V2160H0z'></path>
          <g filter='url(#filter0_f_15_58)'>
            <path
              fill='#7371FF'
              d='M2206.06 914.466C1161.98 1595.31 838.085 1780.12 0 2109V0h3132c-298.35 223.398 101.56 508.05-925.94 914.466z'
            ></path>
          </g>
          <g filter='url(#filter1_f_15_58)'>
            <ellipse
              cx='2689'
              cy='164.5'
              fill='#4457FF'
              rx='885'
              ry='621.5'
            ></ellipse>
          </g>
          <g
            style={{ mixBlendMode: 'overlay' }}
            filter='url(#filter2_f_15_58)'
            id='mouse-input'
          >
            <ellipse
              cx='429'
              cy='581.5'
              fill='#AEB4E4'
              rx='863'
              ry='838.5'
            ></ellipse>
            <ellipse
              cx='1708.5'
              cy='164'
              fill='red'
              rx='694.5'
              ry='543'
            ></ellipse>
            <ellipse
              cx='899.5'
              cy='355.5'
              fill='#F90'
              rx='519.5'
              ry='460.5'
            ></ellipse>
          </g>
        </g>
        <defs>
          <filter
            id='filter0_f_15_58'
            width='4132'
            height='3109'
            x='-500'
            y='-500'
            colorInterpolationFilters='sRGB'
            filterUnits='userSpaceOnUse'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
            <feBlend
              in='SourceGraphic'
              in2='BackgroundImageFix'
              result='shape'
            ></feBlend>
            <feGaussianBlur
              result='effect1_foregroundBlur_15_58'
              stdDeviation='250'
            ></feGaussianBlur>
          </filter>
          <filter
            id='filter1_f_15_58'
            width='2770'
            height='2243'
            x='1304'
            y='-957'
            colorInterpolationFilters='sRGB'
            filterUnits='userSpaceOnUse'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
            <feBlend
              in='SourceGraphic'
              in2='BackgroundImageFix'
              result='shape'
            ></feBlend>
            <feGaussianBlur
              result='effect1_foregroundBlur_15_58'
              stdDeviation='250'
            ></feGaussianBlur>
          </filter>
          <filter
            id='filter2_f_15_58'
            width='3837'
            height='2799'
            x='-934'
            y='-879'
            colorInterpolationFilters='sRGB'
            filterUnits='userSpaceOnUse'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
            <feBlend
              in='SourceGraphic'
              in2='BackgroundImageFix'
              result='shape'
            ></feBlend>
            <feGaussianBlur
              result='effect1_foregroundBlur_15_58'
              stdDeviation='250'
            ></feGaussianBlur>
          </filter>
          <clipPath id='clip0_15_58'>
            <path fill='#fff' d='M0 0H3840V2160H0z'></path>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
