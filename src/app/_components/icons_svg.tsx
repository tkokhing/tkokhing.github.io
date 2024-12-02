"use client"

import * as React from "react"; 
import { useState } from "react";
import styles from "./icon_svg.module.css"; 
// import logostyles from "../logo.css";

// Define a generalized interface for all icon components
interface IconProps {
    width?: number;
    height?: number;
    fillColour?: string;
    strokeColour?: string;
}
 





// this works, except changing the moon when hover on
export const HomeWithTextIcon: React.FC<IconProps> = ({ height = 24, strokeColour = "white" }) => {
  const [hoverOn, setHover] = useState(false);

  return (
    <svg
      viewBox={hoverOn ? "0 0 60 24" : "0 0 24 24"}
      width={hoverOn ? "60" : "24"}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
    
    <path 
    fill-rule="evenodd" clip-rule="evenodd" fill={hoverOn ? "#D9F99D" : strokeColour} 
    d="M8.36 1.37l6.36 5.8-.71.71L13 6.964v6.526l-.5.5h-3l-.5-.5v-3.5H7v3.5l-.5.5h-3l-.5-.5V6.972L2 7.88l-.71-.71 6.35-5.8h.72zM4 6.063v6.927h2v-3.5l.5-.5h3l.5.5v3.5h2V6.057L8 2.43 4 6.063z"
    />
      {hoverOn && (
        <text x={40} y={height/2} fill={hoverOn ? "#D9F99D" : strokeColour} fontSize="12" textAnchor="middle">
          Home
        </text>
      )}
    </svg>
  );
};

export const ProfileLogoSVG = ({fill="#0071C1"}) => (
  <svg className = {styles['svg-hover-on']} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1473 416" preserveAspectRatio="xMidYMid meet">

    <title>tkokhing's blog</title> <desc>Learning never stops</desc>

    <g transform="translate(0.000000,416) scale(0.100000,-0.100000)" fill={fill} stroke="none">
      <path d="M1000 3850 l0 -130 300 0 300 0 0 130 0 130 -300 0 -300 0 0 -130z"/>
      <path d="M1000 3200 l0 -260 -150 0 -150 0 0 -130 0 -130 -150 0 -150 0 0 -130 0 -130 -150 0 -150 0 0 -130 0 -130 150 0 150 0 0 130 0 130 300 0 300 0 0 -130 0 -130 150 0 150 0 0 130 0 130 150 0 150 0 0 130 0 130 150 0 150 0 0 130 0 130 -150 0 -150 0 0 -130 0 -130 -300 0 -300 0 0 130 0 130 150 0 150 0 0 260 0 260 -150 0 -150 0 0 -260z"/>
      <path d="M2500 3330 l0 -130 -150 0 -150 0 0 -390 0 -390 150 0 150 0 0 -130 0 -130 -300 0 -300 0 0 -130 0 -130 300 0 300 0 0 -130 0 -130 -150 0 -150 0 0 -390 0 -390 150 0 150 0 0 390 0 390 150 0 150 0 0 -130 0 -130 150 0 150 0 0 -130 0 -130 150 0 150 0 0 -130 0 -130 300 0 300 0 0 130 0 130 -300 0 -300 0 0 130 0 130 -150 0 -150 0 0 130 0 130 -150 0 -150 0 0 130 0 130 450 0 450 0 0 130 0 130 -450 0 -450 0 0 130 0 130 150 0 150 0 0 130 0 130 150 0 150 0 0 130 0 130 -150 0 -150 0 0 -130 0 -130 -150 0 -150 0 0 -130 0 -130 -150 0 -150 0 0 385 0 385 150 0 150 0 0 135 0 135 -150 0 -150 0 0 -130z m300 -1300 l0 -130 -150 0 -150 0 0 130 0 130 150 0 150 0 0 -130z"/>
      <path d="M6700 3330 l0 -130 -150 0 -150 0 0 -390 0 -390 150 0 150 0 0 -130 0 -130 -300 0 -300 0 0 -130 0 -130 300 0 300 0 0 -130 0 -130 -150 0 -150 0 0 -390 0 -390 150 0 150 0 0 390 0 390 150 0 150 0 0 -130 0 -130 150 0 150 0 0 -130 0 -130 150 0 150 0 0 -130 0 -130 300 0 300 0 0 130 0 130 150 0 150 0 0 -130 0 -130 150 0 150 0 0 130 0 130 -150 0 -150 0 0 390 0 390 150 0 150 0 0 130 0 130 -150 0 -150 0 0 520 0 520 -150 0 -150 0 0 -1040 0 -1040 -300 0 -300 0 0 130 0 130 -150 0 -150 0 0 130 0 130 -150 0 -150 0 0 130 0 130 450 0 450 0 0 130 0 130 -450 0 -450 0 0 130 0 130 150 0 150 0 0 130 0 130 150 0 150 0 0 130 0 130 -150 0 -150 0 0 -130 0 -130 -150 0 -150 0 0 -130 0 -130 -150 0 -150 0 0 390 0 390 150 0 150 0 0 130 0 130 -150 0 -150 0 0 -130z m300 -1300 l0 -130 -150 0 -150 0 0 130 0 130 150 0 150 0 0 -130z"/>
      <path d="M9700 3330 l0 -130 -150 0 -150 0 0 -260 0 -260 150 0 150 0 0 260 0 260 150 0 150 0 0 130 0 130 -150 0 -150 0 0 -130z"/>
      <path d="M10300 2810 l0 -130 150 0 150 0 0 -130 0 -130 -150 0 -150 0 0 -130 0 -130 150 0 150 0 0 -260 0 -260 -150 0 -150 0 0 -130 0 -130 150 0 150 0 0 -130 0 -130 -150 0 -150 0 0 -130 0 -130 300 0 300 0 0 260 0 260 -150 0 -150 0 0 130 0 130 150 0 150 0 0 260 0 260 -150 0 -150 0 0 130 0 130 150 0 150 0 0 260 0 260 -300 0 -300 0 0 -130z"/>
      <path d="M13600 2810 l0 -130 -150 0 -150 0 0 -260 0 -260 150 0 150 0 0 260 0 260 300 0 300 0 0 -130 0 -130 150 0 150 0 0 130 0 130 -150 0 -150 0 0 130 0 130 -300 0 -300 0 0 -130z"/>
      <path d="M4600 2550 l0 -130 -150 0 -150 0 0 -130 0 -130 -150 0 -150 0 0 -390 0 -390 150 0 150 0 0 -130 0 -130 150 0 150 0 0 -130 0 -130 300 0 300 0 0 130 0 130 150 0 150 0 0 130 0 130 150 0 150 0 0 390 0 390 -150 0 -150 0 0 130 0 130 -150 0 -150 0 0 130 0 130 -300 0 -300 0 0 -130z m600 -260 l0 -130 150 0 150 0 0 -390 0 -390 -150 0 -150 0 0 -130 0 -130 -300 0 -300 0 0 130 0 130 -150 0 -150 0 0 390 0 390 150 0 150 0 0 130 0 130 300 0 300 0 0 -130z"/>
      <path d="M11200 2550 l0 -130 150 0 150 0 0 -130 0 -130 -150 0 -150 0 0 -520 0 -520 150 0 150 0 0 -130 0 -130 150 0 150 0 0 130 0 130 -150 0 -150 0 0 520 0 520 150 0 150 0 0 130 0 130 300 0 300 0 0 -130 0 -130 150 0 150 0 0 -520 0 -520 -150 0 -150 0 0 -130 0 -130 150 0 150 0 0 130 0 130 150 0 150 0 0 520 0 520 -150 0 -150 0 0 130 0 130 -150 0 -150 0 0 130 0 130 -300 0 -300 0 0 -130 0 -130 -150 0 -150 0 0 130 0 130 -150 0 -150 0 0 -130z"/>
      <path d="M9400 2290 l0 -130 -150 0 -150 0 0 -130 0 -130 150 0 150 0 0 -390 0 -390 150 0 150 0 0 -130 0 -130 150 0 150 0 0 130 0 130 -150 0 -150 0 0 390 0 390 -150 0 -150 0 0 130 0 130 150 0 150 0 0 130 0 130 -150 0 -150 0 0 -130z"/>
      <path d="M14200 2030 l0 -130 -300 0 -300 0 0 -130 0 -130 300 0 300 0 0 -260 0 -260 -150 0 -150 0 0 -130 0 -130 -150 0 -150 0 0 -130 0 -130 -150 0 -150 0 0 -130 0 -130 -150 0 -150 0 0 -130 0 -130 150 0 150 0 0 130 0 130 150 0 150 0 0 130 0 130 150 0 150 0 0 130 0 130 150 0 150 0 0 130 0 130 150 0 150 0 0 260 0 260 -150 0 -150 0 0 130 0 130 150 0 150 0 0 130 0 130 -150 0 -150 0 0 -130z"/>
      <path d="M1000 1380 l0 -520 150 0 150 0 0 130 0 130 150 0 150 0 0 130 0 130 -150 0 -150 0 0 260 0 260 -150 0 -150 0 0 -520z"/>
      </g>
    </svg>
);

export const TestMoonIcon: React.FC<IconProps> = ({fillColour="white", strokeColour="white"}) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient
          id="fadeGradient" cx="80%" cy="30%" r="70%" fx="90%" fy="20%"
        >
        <stop
          offset="70%"
          style={{
            stopColor: "black",
            stopOpacity: 1,
          }}
        />
        <stop
          offset="100%"
          style={{
            stopColor: fillColour,
            stopOpacity: 1,
          }}
        />
      </radialGradient>
    </defs>

    <circle cx="14" cy="14" r="9" fill="url(#fadeGradient)" />

    <g strokeWidth={1} strokeLinecap="round" stroke={strokeColour}>
      {/* star 1 */}
      <line x1={2} y1={2} x2={2} y2={4} />
      <line x1={1} y1={3} x2={3} y2={3} />
      {/* star 2 */}
      <line x1={6} y1={6} x2={6} y2={8} />
      <line x1={5} y1={7} x2={7} y2={7} />
      {/* star 3 */}
      <line x1={20} y1={4} x2={20} y2={6} />
      <line x1={19} y1={5} x2={21} y2={5} />
      </g>
  </svg>
);

export const DayTimeIcon = () => (
  <svg viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round">
    <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" className="stroke-yellow-300"></path>
    <path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" className="stroke-yellow-200"></path>
  </svg>
)


export const DarkModeWithHoverIcon: React.FC = (props) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      <defs>
        <radialGradient
          id="fadeGradient"
          cx="80%"
          cy="30%"
          r="70%"
          fx="90%"
          fy="20%"
        >
          <stop
            offset="30%"
            style={{
              stopColor: hovered ? "yellow" : "black", // change color on hover
              stopOpacity: 1,
            }}
          />
          <stop
            offset="100%"
            style={{
              stopColor: hovered ? "orange" : "white", // change color on hover
              stopOpacity: 1,
            }}
          />
        </radialGradient>
        </defs>
        
      <circle cx={16} cy={12} r={9} fill="url(#fadeGradient)" />
      <line
        x1={2}
        y1={2}
        x2={2}
        y2={4}
        stroke={hovered ? "yellow" : "white"}
        strokeWidth={1}
        strokeLinecap="round"
      />
      <line
        x1={1}
        y1={3}
        x2={3}
        y2={3}
        stroke={hovered ? "yellow" : "white"}
        strokeWidth={1}
        strokeLinecap="round"
      />
      <line
        x1={6}
        y1={6}
        x2={6}
        y2={8}
        stroke={hovered ? "yellow" : "white"}
        strokeWidth={1}
        strokeLinecap="round"
      />
      <line
        x1={5}
        y1={7}
        x2={7}
        y2={7}
        stroke={hovered ? "yellow" : "white"}
        strokeWidth={1}
        strokeLinecap="round"
      />
      <line
        x1={20}
        y1={4}
        x2={20}
        y2={6}
        stroke={hovered ? "yellow" : "white"}
        strokeWidth={1}
        strokeLinecap="round"
      />
      <line
        x1={19}
        y1={5}
        x2={21}
        y2={5}
        stroke={hovered ? "yellow" : "white"}
        strokeWidth={1}
        strokeLinecap="round"
      />
    </svg>
  );
};



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
      <circle cx="14" cy="14" r="9"  fill={hoverOn ? "#D9F99D" : strokeColour} />
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


export default {
  HomeWithTextIcon,
  ProfileLogoSVG,
  TestMoonIcon,
  DayTimeIcon,
  DarkModeWithHoverIcon,
  DarkModeIcon,
};