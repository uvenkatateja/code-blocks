import type { SVGProps } from "react";

const LogoWithBg = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 512"
      {...props}
    >
      <rect
        width="512"
        height="512"
        x="0"
        y="0"
        fill="url(#logo-gradient)"
        stroke="#FFF"
        strokeOpacity="100%"
        strokeWidth="0"
        paintOrder="stroke"
        rx="128"
      />
      <defs>
        <radialGradient
          id="logo-gradient"
          cx="50%"
          cy="50%"
          r="100%"
          fx="50%"
          fy="0%"
          gradientUnits="objectBoundingBox"
        >
          <stop stopColor="#171717" />
          <stop offset="1" />
        </radialGradient>
      </defs>
      <g transform="translate(80, 80)">
        <path
          fill="#E6E6E6"
          transform="scale(1.375)"
          d="m96 73-61.94 55L96 183a12 12 0 1 1-16 18L8 137a12 12 0 0 1 0-18l72-64a12 12 0 0 1 16 18m152 46-72-64a12 12 0 1 0-16 18l61.91 55L160 183a12 12 0 1 0 16 18l72-64a12 12 0 0 0 0-18"
        />
      </g>
    </svg>
  );
};

const LogoWithoutBg = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <path
        fill="currentColor"
        d="m96 73-61.94 55L96 183a12 12 0 1 1-16 18L8 137a12 12 0 0 1 0-18l72-64a12 12 0 0 1 16 18m152 46-72-64a12 12 0 1 0-16 18l61.91 55L160 183a12 12 0 1 0 16 18l72-64a12 12 0 0 0 0-18"
      ></path>
    </svg>
  );
};

export { LogoWithBg, LogoWithoutBg };
