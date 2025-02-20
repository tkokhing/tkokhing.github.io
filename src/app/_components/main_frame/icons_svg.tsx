"use client"

import * as React from "react";
import { useEffect, useState } from "react";

// Define a generalized interface for all icon components
interface IconProps {
  width?: number;
  height?: number;
  fillColour?: string;
  strokeColour?: string;
  hoverColour?: string;
}

export const SquareBoxIcon = ({ fillColour = "#0071C1" }) => {
  return (
    <svg
      version="1.1"
      viewBox="0 0 359 333"
      xmlns="http://www.w3.org/2000/svg"
      x="0" y="0"
      height="100"
      width="auto"
    >
      {/* display square box */}
      <g>
        <rect x="0" y="0" width="359" height="333" fill="#FFFFFF" />
      </g>
    </svg>
  );
};

export const RectangleBoxIcon = () => {
  return (
    <svg
      version="1.1"
      viewBox="0 0 1473 416"
      xmlns="http://www.w3.org/2000/svg"
      x="0" y="0"
      height="100"
      width="auto"
    >
      {/* display rectangle box */}
      <g fill="#0071C1" opacity="1.000000">
        <	path d="
          M1357.000000,13.000000 
            C1386.793701,13.000000 1416.087280,13.000000 1445.689453,13.000000 
            C1445.689453,142.337448 1445.689453,271.250183 1445.689453,400.581543 
            C973.793030,400.581543 501.795288,400.581543 29.398735,400.581543 
            C29.398735,271.721313 29.398735,142.690765 29.398735,13.000000 
            C471.757538,13.000000 914.128784,13.000000 1357.000000,13.000000 
          M561.500000,393.000000 
            C853.572937,393.000000 1145.645874,393.000000 1437.711914,393.000000 
            C1437.711914,268.646698 1437.711914,145.058167 1437.711914,20.907009 
            C970.693115,20.907009 503.962677,20.907009 37.312908,20.907009 
            C37.312908,145.402863 37.312908,268.991455 37.312908,393.000000 
            C211.916992,393.000000 386.208496,393.000000 561.500000,393.000000 
          z"/>
      </g>
    </svg>
  );
};

export const HomeWithTextIcon: React.FC<IconProps> = ({ height = "50", fillColour = "#0071C1", hoverColour = "#D9F99D" }) => {
  const [hoverOn, setHover] = useState(false);
  return (
    <svg
      version="1.1"
      viewBox={hoverOn ? "0 0 1179 333" : "0 0 359 333"}
      xmlns="http://www.w3.org/2000/svg"
      overflow="hidden"
      x="0" y="0"
      width="100%"
      height={height}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <g stroke={fillColour} fill="none" strokeMiterlimit="8" opacity={hoverOn ? "0.000000" : "1.000000"}>
        <rect x="27" y="15" width="304" height="304" strokeWidth="7.66667" />
        <path d="M0 0 134.898 112.076" strokeWidth="27.3333" fillRule="evenodd" transform="matrix(-1 0 0 1 191.398 70.5001)" />
        <path d="M174.5 70.5001 309.398 182.576" strokeWidth="27.3333" fillRule="evenodd" />
        <path d="M0 0 160.559 0.000104987" strokeWidth="27.3333" fillRule="evenodd" transform="matrix(-1 0 0 1 263.059 182.5)" />
        <path d="M0 0 160.559 0.000104987" strokeWidth="27.3333" fillRule="evenodd" transform="matrix(-1 0 0 1 263.059 220.5)" />
        <path d="M0 0 160.559 0.000104987" strokeWidth="27.3333" fillRule="evenodd" transform="matrix(-1 0 0 1 263.059 258.5)" />
      </g>
      {hoverOn && (
        <g fill="none" stroke={hoverColour} opacity="1.000000">
          <text fill={hoverColour} fontFamily="Georgia,Georgia_MSFontService,sans-serif" fontWeight="400" fontSize="184" transform="matrix(1 0 0 0.999576 505.282 233)">Home</text>
          <path d="M331.5 36.4845 331.5 298.085" strokeWidth="6.6695" strokeMiterlimit="8" fillRule="evenodd" />
          <rect x="27" y="14.9936" width="1127" height="303.871" strokeWidth="7.66992" strokeMiterlimit="8" fill="none" />
          <path d="M0 0 134.898 112.076" strokeWidth="27.3333" strokeMiterlimit="8" fillRule="evenodd" transform="matrix(-1.00042 0 0 1 191.455 70.4701)" />
          <path d="M174.5 70.4701 309.455 182.546" strokeWidth="27.3449" strokeMiterlimit="8" fillRule="evenodd" />
          <path d="M0 0 160.559 0.000104987" strokeWidth="27.3333" strokeMiterlimit="8" fillRule="evenodd" transform="matrix(-1.00042 0 0 1 263.127 182.423)" />
          <path d="M0 0 160.559 0.000104987" strokeWidth="27.3333" strokeMiterlimit="8" fillRule="evenodd" transform="matrix(-1.00042 0 0 1 263.127 220.407)" />
          <path d="M0 0 160.559 0.000104987" strokeWidth="27.3333" strokeMiterlimit="8" fillRule="evenodd" transform="matrix(-1.00042 0 0 1 263.127 258.39)" />

        </g>
      )}
    </svg>
  );
};

export const BlogWithTextIcon: React.FC<IconProps> = ({ height = "50", fillColour = "#0071C1", hoverColour = "#D9F99D" }) => {
  const [hoverOn, setHover] = useState(false);

  return (
    <svg
      version="1.1"
      viewBox={hoverOn ? "0 0 1179 333" : "0 0 359 333"}
      xmlns="http://www.w3.org/2000/svg"
      overflow="hidden"
      x="0" y="0"
      width="100%"
      height={height}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <g fill={fillColour} opacity={hoverOn ? "0.000000" : "1.000000"}>
        <path d="M238.002 60.3704 237.965 60.392C236.235 61.4151 234.056 62.7727 231.556 64.4572L222.926 51.6832C222.926 51.6832 221.935 52.1357 220.186 53.1453 218.427 54.1606 215.857 55.805 212.801 58.0636L198.475 36.6078C194.88 37.8323 191.45 39.421 188.219 41.3578 163.738 55.5632 148.048 82.4683 144.825 115.767L143.763 116.381C113.314 102.523 82.1683 102.659 57.6249 116.756 54.3317 118.586 51.241 120.762 48.3835 123.263L59.8013 146.396C56.3166 147.914 53.6075 149.317 51.8497 150.332 50.1018 151.342 49.2134 151.974 49.2134 151.974L55.9617 165.835C53.2527 167.158 50.9871 168.366 49.2367 169.353L49.1991 169.375C46.698 170.818 46.0643 174.545 47.7369 177.973L100.73 286.64C102.512 290.317 106.276 292.324 109.138 291.123 109.302 291.054 109.461 290.976 109.614 290.887 109.667 290.857 109.72 290.826 109.772 290.792 111.208 289.88 112.92 288.833 114.894 287.694 132.694 277.417 171.542 259.778 217.187 268.524 219.589 269.003 221.892 268.679 223.815 267.591L235.88 260.625C237.707 259.551 239.102 257.82 239.905 255.627 256.721 210.62 290.724 186.18 308.004 176.203 309.817 175.156 311.447 174.268 312.853 173.533L312.992 173.456C315.683 171.914 316.206 167.779 314.16 164.221 314.042 164.016 313.917 163.816 313.786 163.621L246.178 63.4031C244.045 60.2417 240.502 58.9271 238.002 60.3704ZM216.712 261.283C169.927 252.319 130.403 269.767 111.007 280.965 109.278 281.963 107.59 282.983 105.986 283.996L53.31 175.98C54.854 175.115 56.8915 174.031 59.3621 172.824L108.106 272.966C108.106 272.966 108.895 272.437 110.413 271.56 120.348 265.824 161.493 245.234 216.685 260.997 217.066 261.105 217.82 261.238 217.83 261.328 217.474 261.391 217.096 261.376 216.712 261.283ZM221.186 255.223C166.909 238.071 125.379 254.843 109.809 263.024L57.704 155.976C59.1761 155.195 61.0356 154.289 63.2261 153.334L110.49 249.092C110.49 249.092 161.783 229.545 220.671 254.237L221.212 255.173C221.235 255.212 221.222 255.234 221.185 255.223ZM215.261 244.962C168.051 227.32 127.116 236.065 112.699 240.278L56.604 126.628C57.8979 125.709 59.5403 124.627 61.5125 123.489 84.9178 110.039 114.677 110.054 143.677 123.532L145.753 124.475 215.289 244.915C215.312 244.955 215.299 244.976 215.261 244.962ZM150.84 121.542 151.062 119.27C153.889 87.4152 168.755 61.6343 192.106 48.0893 194.078 46.9509 195.837 46.0698 197.279 45.4083L267.656 150.813C256.799 161.192 228.757 192.271 220.43 241.977 220.423 242.018 220.398 242.019 220.374 241.978ZM226.298 252.239 225.758 251.303C233.818 187.957 276.394 153.31 276.394 153.31L217.096 64.4979C219.017 63.0789 220.732 61.921 222.145 61.0365L288.798 159.685C273.929 169.077 238.638 196.656 226.354 252.239 226.345 252.277 226.32 252.276 226.297 252.237ZM304.117 169.474C285.276 180.352 251.102 205.467 233.916 251.471 233.765 251.942 233.54 252.361 233.247 252.709 233.126 252.629 233.462 251.782 233.574 251.33 247.5 195.576 285.952 170.215 295.891 164.478 297.407 163.603 298.262 163.183 298.262 163.183L235.907 70.8962C238.186 69.3602 240.144 68.1356 241.666 67.233L308.866 166.849C307.474 167.582 305.879 168.455 304.116 169.473Z" fillRule="evenodd" />
        <path d="M194.054 80C193.084 79.998 192.176 80.6231 191.624 81.6721L171.522 119.922C170.597 121.684 170.933 124.097 172.274 125.313 173.614 126.53 175.45 126.087 176.375 124.326L196.477 86.0757C197.403 84.3154 197.067 81.9019 195.727 80.6862 195.236 80.2396 194.652 80.0004 194.054 80Z" fillRule="evenodd" />
        <path d="M205.054 100C204.084 99.998 203.176 100.623 202.624 101.672L182.522 139.922C181.597 141.684 181.933 144.097 183.274 145.313 184.614 146.53 186.45 146.087 187.375 144.326L207.477 106.076C208.403 104.315 208.067 101.902 206.727 100.686 206.236 100.24 205.652 100 205.054 100Z" fillRule="evenodd" />
        <rect x="27" y="15" width="304" height="304" stroke={fillColour} strokeWidth="7.66667" strokeMiterlimit="8" fill="none" />
      </g>
      {hoverOn && (
        <g fill="none" stroke={hoverColour} opacity="1.000000">
          <rect x="27" y="14.9936" width="1127" height="303.871" stroke={hoverColour} strokeWidth="7.66992" strokeMiterlimit="8" />
          <path d="M331.5 36.4845 331.5 298.085" stroke={hoverColour} strokeWidth="6.6695" strokeMiterlimit="8" fillRule="evenodd" />
          <text fill={hoverColour} fontFamily="Georgia,Georgia_MSFontService,sans-serif" fontWeight="400" fontSize="184" transform="matrix(1 0 0 0.999576 572.477 233)">Blog</text>
          <path d="M238.103 60.3704 238.066 60.392C236.336 61.4151 234.155 62.7727 231.655 64.4572L223.02 51.6832C223.02 51.6832 222.029 52.1357 220.279 53.1453 218.52 54.1606 215.948 55.805 212.891 58.0636L198.559 36.6078C194.962 37.8323 191.531 39.421 188.299 41.3578 163.807 55.5632 148.111 82.4683 144.887 115.767L143.824 116.381C113.362 102.523 82.2032 102.659 57.6494 116.756 54.3547 118.586 51.2627 120.762 48.404 123.263L59.8266 146.396C56.3405 147.914 53.6303 149.317 51.8717 150.332 50.123 151.342 49.2343 151.974 49.2343 151.974L55.9854 165.835C53.2753 167.158 51.0087 168.366 49.2576 169.353L49.22 169.375C46.7178 170.818 46.0838 174.545 47.7571 177.973L100.773 286.64C102.555 290.317 106.321 292.324 109.184 291.123 109.348 291.054 109.507 290.976 109.661 290.887 109.714 290.857 109.767 290.826 109.818 290.792 111.255 289.88 112.968 288.833 114.942 287.694 132.75 277.417 171.615 259.778 217.279 268.524 219.682 269.003 221.986 268.679 223.91 267.591L235.98 260.625C237.808 259.551 239.203 257.82 240.007 255.627 256.83 210.62 290.847 186.18 308.135 176.203 309.948 175.156 311.579 174.268 312.986 173.533L313.125 173.456C315.817 171.914 316.34 167.779 314.293 164.221 314.176 164.016 314.05 163.816 313.919 163.621L246.283 63.4031C244.149 60.2417 240.604 58.9271 238.103 60.3704ZM216.804 261.283C169.999 252.319 130.458 269.767 111.054 280.965 109.325 281.963 107.635 282.983 106.031 283.996L53.3326 175.98C54.8773 175.115 56.9157 174.031 59.3873 172.824L108.152 272.966C108.152 272.966 108.941 272.437 110.46 271.56 120.399 265.824 161.562 245.234 216.777 260.997 217.158 261.105 217.913 261.238 217.922 261.328 217.566 261.391 217.188 261.376 216.804 261.283ZM221.28 255.223C166.98 238.071 125.432 254.843 109.856 263.024L57.7285 155.976C59.2012 155.195 61.0615 154.289 63.2529 153.334L110.537 249.092C110.537 249.092 161.851 229.545 220.765 254.237L221.306 255.173C221.328 255.212 221.316 255.234 221.279 255.223ZM215.353 244.962C168.122 227.32 127.17 236.065 112.747 240.278L56.628 126.628C57.9224 125.709 59.5656 124.627 61.5386 123.489 84.9538 110.039 114.726 110.054 143.738 123.532L145.815 124.475 215.381 244.915C215.404 244.955 215.391 244.976 215.352 244.962ZM150.904 121.542 151.126 119.27C153.955 87.4152 168.827 61.6343 192.188 48.0893 194.16 46.9509 195.92 46.0698 197.362 45.4083L267.769 150.813C256.908 161.192 228.854 192.271 220.523 241.977 220.516 242.018 220.491 242.019 220.467 241.978ZM226.394 252.239 225.853 251.303C233.917 187.957 276.512 153.31 276.512 153.31L217.188 64.4979C219.11 63.0789 220.826 61.921 222.239 61.0365L288.921 159.685C274.045 169.077 238.739 196.656 226.45 252.239 226.441 252.277 226.416 252.276 226.393 252.237ZM304.246 169.474C285.397 180.352 251.208 205.467 234.015 251.471 233.865 251.942 233.639 252.361 233.346 252.709 233.225 252.629 233.561 251.782 233.674 251.33 247.605 195.576 286.074 170.215 296.016 164.478 297.533 163.603 298.388 163.183 298.388 163.183L236.007 70.8962C238.287 69.3602 240.246 68.1356 241.768 67.233L308.997 166.849C307.604 167.582 306.008 168.455 304.245 169.473Z" fill={hoverColour} fillRule="evenodd" />
          <path d="M194.054 79.9661C193.084 79.964 192.176 80.6025 191.624 81.6738L171.522 120.739C170.597 122.538 170.933 125.003 172.274 126.245 173.614 127.487 175.45 127.035 176.375 125.236L196.477 86.1713C197.403 84.3734 197.066 81.9085 195.727 80.6669 195.235 80.2108 194.652 79.9665 194.054 79.9661Z" fill={hoverColour} fillRule="evenodd" />
          <path d="M205.054 99.9576C204.084 99.9556 203.176 100.58 202.624 101.629L182.522 139.863C181.597 141.624 181.933 144.036 183.274 145.252 184.614 146.467 186.45 146.025 187.375 144.265L207.477 106.031C208.403 104.271 208.067 101.859 206.727 100.643 206.236 100.197 205.652 99.958 205.054 99.9576Z" fill={hoverColour} fillRule="evenodd" />
        </g>
      )}
    </svg>
  );
};

export const TopicWithTextIcon: React.FC<IconProps> = ({ height = "50", fillColour = "#0071C1", hoverColour = "#D9F99D" }) => {
  const [hoverOn, setHover] = useState(false);

  return (
    <svg
      version="1.1"
      viewBox={hoverOn ? "0 0 1179 333" : "0 0 359 333"}
      xmlns="http://www.w3.org/2000/svg"
      x="0" y="0"
      width="100%"
      height={height}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <g fill={fillColour} opacity={hoverOn ? "0.000000" : "1.000000"}>
        <text fontFamily="Aptos,Aptos_MSFontService,sans-serif" fontWeight="400" fontSize="128" transform="translate(52.9587 139)">A</text>
        <text fontFamily="Aptos,Aptos_MSFontService,sans-serif" fontWeight="400" fontSize="128" transform="translate(234.959 293)">Z</text>
        <text fontFamily="Aptos,Aptos_MSFontService,sans-serif" font-style="italic" fontWeight="400" fontSize="53" transform="translate(155.371 192)">to</text>
        <rect x="27" y="15" width="304" height="304" stroke={fillColour} stroke-width="7.66667" strokeMiterlimit="8" fill="none" />
      </g>
      {hoverOn && (
        <g fill={hoverColour} opacity="1.000000">
          <rect x="27" y="14.9936" width="1127" height="303.871" stroke={hoverColour} strokeWidth="7.66992" strokeMiterlimit="8" fill="none" />
          <path d="M331.5 36.4845 331.5 298.085" stroke={hoverColour} strokeWidth="6.6695" strokeMiterlimit="8" fill="none" fill-rule="evenodd" />
          <text fontFamily="Georgia,Georgia_MSFontService,sans-serif" fontWeight="400" fontSize="184" transform="matrix(1 0 0 0.999576 487.858 233)">Topics</text>
          <text fontFamily="Aptos,Aptos_MSFontService,sans-serif" fontWeight="400" fontSize="128" transform="matrix(1 0 0 0.999576 52.9812 139)">A</text>
          <text fontFamily="Aptos,Aptos_MSFontService,sans-serif" fontWeight="400" fontSize="128" transform="matrix(1 0 0 0.999576 235.058 293)">Z</text>
          <text fontFamily="Aptos,Aptos_MSFontService,sans-serif" font-style="italic" fontWeight="400" fontSize="53" transform="matrix(1 0 0 0.999576 155.437 192)">to</text>
        </g>
      )}
    </svg>
  );
};

export const SystemModeIcon: React.FC<IconProps> = ({ width = 2, fillColour = "#1e1b4b", strokeColour = "#6b7280" }) => {
  const [mounted, setMounted] = useState(false);
  const [hoverOn, setHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Or a placeholder
  }
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      fill="none"
      stroke="currentColor"
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
      suppressHydrationWarning
    >
      <rect x="4" y="4" width="16" height="12" rx="2" stroke={strokeColour} fill={hoverOn ? fillColour : "none"}>
      </rect>
      <rect x="6" y="18" width="12" height="2" rx="1" stroke={strokeColour}>
      </rect>
    </svg>
  )
}

export const DarkModeIcon: React.FC<IconProps> = ({ width = 1, strokeColour = "white" }) => {
  const [hoverOn, setHovered] = React.useState(false);

  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <defs>
        <radialGradient
          id="fadeGradient" cx="140%" cy="10%" r="160%" fx="0" fy="0%"
        >
          <stop
            offset="20%"
            style={{ stopColor: "black", stopOpacity: 1, }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "white", stopOpacity: 1, }}
          />
        </radialGradient>
      </defs>
      <circle cx="14" cy="14" r="9" fill={hoverOn ? "#D9F99D" : strokeColour} />
      <circle cx="16" cy="12" r="8" fill="url(#fadeGradient)" />

      <g strokeWidth={width} strokeLinecap="round" stroke={hoverOn ? "#D9F99D" : strokeColour}>
        {/* star 1 */}
        <line x1="3" y1="1" x2="3" y2="5" />
        <line x1="1" y1="3" x2="5" y2="3" />
        {/* star 2 */}
        <line x1="14" y1="14" x2="14" y2="10" />
        <line x1="12" y1="12" x2="16" y2="12" />
        {/* star 3 */}
        <line x1="20" y1="4" x2="20" y2="8" />
        <line x1="18" y1="6" x2="22" y2="6" />
      </g>
    </svg>
  )
}


export const LightModeIcon: React.FC<IconProps> = ({ width = 2, strokeColour = "#FFBE03" }) => {

  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"

      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round">

      <path d="M12 2v3M18.66 5.344l-1.656 1.656M22.005 12.004h-3M18.66 18.664l-1.656-1.656M12 22.01V19M5.34 18.664l1.67-1.67M2.995 12.004h3M5 5l1.67 1.67" stroke={strokeColour}>
      </path>
      <circle cx="12" cy="12" r="3" stroke={strokeColour} />
      <circle cx="12" cy="12" r="2.5" stroke="#FFCB03" />
      <circle cx="12" cy="12" r="2" stroke="#FFD303" />
      <circle cx="12" cy="12" r="1.5" stroke="#FFDB03" />
      <circle cx="12" cy="12" r="1" stroke="#FFE403" />
      <circle cx="12" cy="12" r="0.5" fill="#FFF003" />
    </svg>
  )
}

export const ProfileLogoSVG = () => (
  <svg
    viewBox="0 0 1473 416"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    preserveAspectRatio="xMidYMid meet"
  >
    <title>Learning never stops</title>
    <desc>tkokhing svg icon</desc>

    <g transform="translate(0.000000,416) scale(0.100000,-0.100000)" stroke="none" className="fill-tkokhing-blue dark:fill-lime-100">
      <path d="M1000 3850 l0 -130 300 0 300 0 0 130 0 130 -300 0 -300 0 0 -130z" />
      <path d="M1000 3200 l0 -260 -150 0 -150 0 0 -130 0 -130 -150 0 -150 0 0 -130 0 -130 -150 0 -150 0 0 -130 0 -130 150 0 150 0 0 130 0 130 300 0 300 0 0 -130 0 -130 150 0 150 0 0 130 0 130 150 0 150 0 0 130 0 130 150 0 150 0 0 130 0 130 -150 0 -150 0 0 -130 0 -130 -300 0 -300 0 0 130 0 130 150 0 150 0 0 260 0 260 -150 0 -150 0 0 -260z" />
      <path d="M2500 3330 l0 -130 -150 0 -150 0 0 -390 0 -390 150 0 150 0 0 -130 0 -130 -300 0 -300 0 0 -130 0 -130 300 0 300 0 0 -130 0 -130 -150 0 -150 0 0 -390 0 -390 150 0 150 0 0 390 0 390 150 0 150 0 0 -130 0 -130 150 0 150 0 0 -130 0 -130 150 0 150 0 0 -130 0 -130 300 0 300 0 0 130 0 130 -300 0 -300 0 0 130 0 130 -150 0 -150 0 0 130 0 130 -150 0 -150 0 0 130 0 130 450 0 450 0 0 130 0 130 -450 0 -450 0 0 130 0 130 150 0 150 0 0 130 0 130 150 0 150 0 0 130 0 130 -150 0 -150 0 0 -130 0 -130 -150 0 -150 0 0 -130 0 -130 -150 0 -150 0 0 385 0 385 150 0 150 0 0 135 0 135 -150 0 -150 0 0 -130z m300 -1300 l0 -130 -150 0 -150 0 0 130 0 130 150 0 150 0 0 -130z" />
      <path d="M6700 3330 l0 -130 -150 0 -150 0 0 -390 0 -390 150 0 150 0 0 -130 0 -130 -300 0 -300 0 0 -130 0 -130 300 0 300 0 0 -130 0 -130 -150 0 -150 0 0 -390 0 -390 150 0 150 0 0 390 0 390 150 0 150 0 0 -130 0 -130 150 0 150 0 0 -130 0 -130 150 0 150 0 0 -130 0 -130 300 0 300 0 0 130 0 130 150 0 150 0 0 -130 0 -130 150 0 150 0 0 130 0 130 -150 0 -150 0 0 390 0 390 150 0 150 0 0 130 0 130 -150 0 -150 0 0 520 0 520 -150 0 -150 0 0 -1040 0 -1040 -300 0 -300 0 0 130 0 130 -150 0 -150 0 0 130 0 130 -150 0 -150 0 0 130 0 130 450 0 450 0 0 130 0 130 -450 0 -450 0 0 130 0 130 150 0 150 0 0 130 0 130 150 0 150 0 0 130 0 130 -150 0 -150 0 0 -130 0 -130 -150 0 -150 0 0 -130 0 -130 -150 0 -150 0 0 390 0 390 150 0 150 0 0 130 0 130 -150 0 -150 0 0 -130z m300 -1300 l0 -130 -150 0 -150 0 0 130 0 130 150 0 150 0 0 -130z" />
      <path d="M9700 3330 l0 -130 -150 0 -150 0 0 -260 0 -260 150 0 150 0 0 260 0 260 150 0 150 0 0 130 0 130 -150 0 -150 0 0 -130z" />
      <path d="M10300 2810 l0 -130 150 0 150 0 0 -130 0 -130 -150 0 -150 0 0 -130 0 -130 150 0 150 0 0 -260 0 -260 -150 0 -150 0 0 -130 0 -130 150 0 150 0 0 -130 0 -130 -150 0 -150 0 0 -130 0 -130 300 0 300 0 0 260 0 260 -150 0 -150 0 0 130 0 130 150 0 150 0 0 260 0 260 -150 0 -150 0 0 130 0 130 150 0 150 0 0 260 0 260 -300 0 -300 0 0 -130z" />
      <path d="M13600 2810 l0 -130 -150 0 -150 0 0 -260 0 -260 150 0 150 0 0 260 0 260 300 0 300 0 0 -130 0 -130 150 0 150 0 0 130 0 130 -150 0 -150 0 0 130 0 130 -300 0 -300 0 0 -130z" />
      <path d="M4600 2550 l0 -130 -150 0 -150 0 0 -130 0 -130 -150 0 -150 0 0 -390 0 -390 150 0 150 0 0 -130 0 -130 150 0 150 0 0 -130 0 -130 300 0 300 0 0 130 0 130 150 0 150 0 0 130 0 130 150 0 150 0 0 390 0 390 -150 0 -150 0 0 130 0 130 -150 0 -150 0 0 130 0 130 -300 0 -300 0 0 -130z m600 -260 l0 -130 150 0 150 0 0 -390 0 -390 -150 0 -150 0 0 -130 0 -130 -300 0 -300 0 0 130 0 130 -150 0 -150 0 0 390 0 390 150 0 150 0 0 130 0 130 300 0 300 0 0 -130z" />
      <path d="M11200 2550 l0 -130 150 0 150 0 0 -130 0 -130 -150 0 -150 0 0 -520 0 -520 150 0 150 0 0 -130 0 -130 150 0 150 0 0 130 0 130 -150 0 -150 0 0 520 0 520 150 0 150 0 0 130 0 130 300 0 300 0 0 -130 0 -130 150 0 150 0 0 -520 0 -520 -150 0 -150 0 0 -130 0 -130 150 0 150 0 0 130 0 130 150 0 150 0 0 520 0 520 -150 0 -150 0 0 130 0 130 -150 0 -150 0 0 130 0 130 -300 0 -300 0 0 -130 0 -130 -150 0 -150 0 0 130 0 130 -150 0 -150 0 0 -130z" />
      <path d="M9400 2290 l0 -130 -150 0 -150 0 0 -130 0 -130 150 0 150 0 0 -390 0 -390 150 0 150 0 0 -130 0 -130 150 0 150 0 0 130 0 130 -150 0 -150 0 0 390 0 390 -150 0 -150 0 0 130 0 130 150 0 150 0 0 130 0 130 -150 0 -150 0 0 -130z" />
      <path d="M14200 2030 l0 -130 -300 0 -300 0 0 -130 0 -130 300 0 300 0 0 -260 0 -260 -150 0 -150 0 0 -130 0 -130 -150 0 -150 0 0 -130 0 -130 -150 0 -150 0 0 -130 0 -130 -150 0 -150 0 0 -130 0 -130 150 0 150 0 0 130 0 130 150 0 150 0 0 130 0 130 150 0 150 0 0 130 0 130 150 0 150 0 0 130 0 130 150 0 150 0 0 260 0 260 -150 0 -150 0 0 130 0 130 150 0 150 0 0 130 0 130 -150 0 -150 0 0 -130z" />
      <path d="M1000 1380 l0 -520 150 0 150 0 0 130 0 130 150 0 150 0 0 130 0 130 -150 0 -150 0 0 260 0 260 -150 0 -150 0 0 -520z" />
    </g>
  </svg>
)

export default {
  SquareBoxIcon,
  RectangleBoxIcon,
  HomeWithTextIcon,
  BlogWithTextIcon,
  TopicWithTextIcon,
  SystemModeIcon,
  DarkModeIcon,
  LightModeIcon,
  ProfileLogoSVG,
};