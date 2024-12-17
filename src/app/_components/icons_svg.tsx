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

// below for testing only  

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
          id="fadeGradient" cx="80%" cy="30%" r="70%" fx="90%" fy="20%"
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
        x1={2} y1={2} x2={2} y2={4} 
        stroke={hovered ? "yellow" : "white"}
        strokeWidth={1}
        strokeLinecap="round"
      />
      <line
        x1={1} y1={3} x2={3} y2={3}
        stroke={hovered ? "yellow" : "white"}
        strokeWidth={1}
        strokeLinecap="round"
      />
      <line
        x1={6} y1={6} x2={6} y2={8}
        stroke={hovered ? "yellow" : "white"}
        strokeWidth={1}
        strokeLinecap="round"
      />
      <line
        x1={5} y1={7} x2={7} y2={7}
        stroke={hovered ? "yellow" : "white"}
        strokeWidth={1}
        strokeLinecap="round"
      />
      <line
        x1={20} y1={4} x2={20} y2={6}
        stroke={hovered ? "yellow" : "white"}
        strokeWidth={1}
        strokeLinecap="round"
      />
      <line
        x1={19} y1={5} x2={21} y2={5}
        stroke={hovered ? "yellow" : "white"}
        strokeWidth={1}
        strokeLinecap="round"
      />
    </svg>
  );
};

// above for testing only  

export const HomeWithTextIcon: React.FC<IconProps> = ({ height = 24, strokeColour = "white" }) => {
  const [hoverOn, setHover] = useState(false);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={hoverOn ? "0 0 68 24" : "0 0 24 24"}
      width={hoverOn ? "68" : "24"}
      height={height}
      overflow="hidden"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
    <g stroke={hoverOn ? "#D9F99D" : strokeColour} fill="none" >
      <path d={hoverOn ? "M1 1 67 1 67 23 1 23Z" : "M1 1 23 1 23 23 1 23Z"}  
        fillRule="evenodd"/>
      <path fill={hoverOn ? "#D9F99D" : strokeColour} strokeWidth="0.3" d="M5.3024 12.8025 5.3024 19.495 18.6976 19.5 18.6976 12.7938 19.8069 13.7703 21.25 12.4274 12 4.25 2.75 12.4273 4.1987 13.7752ZM18.251 19.0845 5.749 19.0797 5.749 12.4089 12 6.8998 18.251 12.4009ZM4.2069 13.1956 3.3898 12.4359 12 4.8226 20.6102 12.4359 19.7982 13.1906 12 6.3276Z" fillRule="evenodd"/>
      <path strokeWidth="0.3" d="M14.0066 19.0728 14.0066 12.25 9.9934 12.25 9.9934 19.0728 8.5 19.0728 8.5 19.25 9.9211 19.25 9.9211 12.4272 14.0789 12.4272 14.0789 19.25 15.5 19.25 15.5 19.0728Z" fillRule="evenodd"/>
      <path strokeWidth="0.3" d="M10.25 19.25 13 18.8687 13 13.1313 10.25 12.75 10.25 19.25ZM10.4274 12.9539 12.8226 13.2821 12.8226 18.7179 10.4274 19.0461 10.4274 12.9539Z" fillRule="evenodd"/>
    </g>
      {hoverOn && (
        <text x={height*2} y={height-(height/4)} fill={hoverOn ? "#D9F99D" : strokeColour} fontSize="12" textAnchor="middle">
          Home
        </text>
      )}
    </svg>
  );
};

export const BlogWithTextIcon: React.FC<IconProps> = ({ height = 24, strokeColour = "white" }) => {
  const [hoverOn, setHover] = useState(false);

  return (
    <svg
      viewBox={hoverOn ? "0 0 68 24" : "0 0 24 24"}
      width={hoverOn ? "68" : "24"}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
    <g stroke={hoverOn ? "#D9F99D" : strokeColour} fill="none">
      <path d={hoverOn ? "M1 1 67 1 67 23 1 23Z" : "M1 1 23 1 23 23 1 23Z"}  
        fillRule="evenodd"/>
      <path strokeWidth="0.3" fillRule="evenodd"
        d="M 16.089844 6.136719 L 16.085938 6.140625 C 15.980469 6.203125 15.84375 6.285156 15.6875 6.390625 L 15.210938 5.699219 C 15.210938 5.699219 15.148438 5.726562 15.039062 5.792969 C 14.929688 5.855469 14.769531 5.957031 14.578125 6.09375 L 13.789062 4.933594 C 13.566406 5.015625 13.355469 5.113281 13.152344 5.234375 C 11.632812 6.117188 10.597656 7.6875 10.289062 9.574219 L 10.222656 9.609375 C 8.4375 8.933594 6.558594 9.046875 5.035156 9.921875 C 4.828125 10.039062 4.636719 10.171875 4.457031 10.320312 L 5.066406 11.585938 C 4.851562 11.683594 4.683594 11.769531 4.574219 11.835938 C 4.464844 11.898438 4.410156 11.933594 4.410156 11.933594 L 4.769531 12.695312 C 4.601562 12.777344 4.460938 12.851562 4.351562 12.914062 L 4.347656 12.914062 C 4.195312 13.003906 4.144531 13.21875 4.230469 13.40625 L 7.058594 19.347656 C 7.152344 19.550781 7.371094 19.648438 7.546875 19.574219 C 7.558594 19.566406 7.570312 19.5625 7.578125 19.558594 C 7.582031 19.554688 7.585938 19.554688 7.589844 19.550781 C 7.675781 19.496094 7.785156 19.429688 7.90625 19.359375 C 9.011719 18.71875 11.414062 17.597656 14.132812 17.933594 C 14.277344 17.953125 14.414062 17.925781 14.535156 17.859375 L 15.285156 17.425781 C 15.398438 17.359375 15.488281 17.257812 15.542969 17.132812 C 16.710938 14.539062 18.839844 13.046875 19.914062 12.425781 C 20.027344 12.363281 20.128906 12.308594 20.214844 12.261719 L 20.222656 12.253906 C 20.390625 12.160156 20.4375 11.925781 20.324219 11.730469 C 20.320312 11.71875 20.3125 11.710938 20.304688 11.699219 L 16.570312 6.28125 C 16.453125 6.109375 16.242188 6.046875 16.089844 6.136719 Z M 14.128906 17.527344 C 11.339844 17.179688 8.902344 18.296875 7.695312 18.992188 C 7.589844 19.054688 7.484375 19.117188 7.382812 19.179688 L 4.574219 13.273438 C 4.671875 13.21875 4.796875 13.152344 4.949219 13.074219 L 7.546875 18.554688 C 7.546875 18.554688 7.597656 18.519531 7.691406 18.464844 C 8.308594 18.109375 10.855469 16.808594 14.128906 17.511719 C 14.148438 17.515625 14.195312 17.523438 14.195312 17.527344 C 14.175781 17.53125 14.152344 17.53125 14.128906 17.527344 Z M 14.417969 17.171875 C 11.207031 16.390625 8.648438 17.472656 7.683594 17.988281 L 4.90625 12.132812 C 4.996094 12.082031 5.113281 12.027344 5.25 11.964844 L 7.773438 17.199219 C 7.773438 17.199219 10.925781 15.925781 14.390625 17.117188 L 14.421875 17.167969 C 14.421875 17.171875 14.421875 17.171875 14.417969 17.171875 Z M 14.097656 16.613281 C 11.3125 15.777344 8.816406 16.410156 7.933594 16.695312 L 4.9375 10.484375 C 5.019531 10.425781 5.121094 10.359375 5.246094 10.289062 C 6.699219 9.453125 8.492188 9.351562 10.195312 10.015625 L 10.316406 10.0625 L 14.097656 16.609375 C 14.097656 16.613281 14.097656 16.613281 14.097656 16.613281 Z M 10.632812 9.878906 L 10.652344 9.75 C 10.929688 7.945312 11.914062 6.441406 13.367188 5.601562 C 13.488281 5.53125 13.597656 5.476562 13.6875 5.433594 L 17.570312 11.132812 C 16.878906 11.753906 15.085938 13.601562 14.417969 16.429688 C 14.417969 16.429688 14.414062 16.429688 14.414062 16.429688 Z M 14.738281 16.988281 L 14.707031 16.9375 C 15.40625 13.339844 18.085938 11.246094 18.085938 11.246094 L 14.816406 6.441406 C 14.9375 6.355469 15.042969 6.285156 15.132812 6.230469 L 18.8125 11.5625 C 17.886719 12.140625 15.667969 13.8125 14.738281 16.984375 C 14.738281 16.988281 14.738281 16.988281 14.734375 16.988281 Z M 19.703125 12.0625 C 18.53125 12.738281 16.386719 14.269531 15.199219 16.917969 C 15.1875 16.945312 15.171875 16.96875 15.152344 16.988281 C 15.144531 16.984375 15.167969 16.9375 15.175781 16.910156 C 16.203125 13.722656 18.605469 12.164062 19.222656 11.808594 C 19.316406 11.753906 19.371094 11.726562 19.371094 11.726562 L 15.925781 6.738281 C 16.070312 6.644531 16.191406 6.566406 16.285156 6.511719 L 19.996094 11.898438 C 19.910156 11.945312 19.8125 12 19.703125 12.0625 Z M 19.703125 12.0625 "/>
    </g>    
    <g stroke="none" fillRule="evenodd" fill={hoverOn ? "#D9F99D" : strokeColour}>
        <path d="M 13.300781 7.5 C 13.238281 7.5 13.175781 7.535156 13.136719 7.589844 L 11.785156 9.667969 C 11.722656 9.765625 11.746094 9.898438 11.835938 9.960938 C 11.925781 10.027344 12.050781 10.003906 12.113281 9.910156 L 13.464844 7.832031 C 13.527344 7.734375 13.503906 7.601562 13.414062 7.539062 C 13.382812 7.511719 13.34375 7.5 13.300781 7.5 Z M 13.300781 7.5 "/>
        <path d="M 13.828125 8.5 C 13.773438 8.5 13.722656 8.535156 13.691406 8.589844 L 12.53125 10.667969 C 12.476562 10.765625 12.496094 10.898438 12.574219 10.960938 C 12.652344 11.027344 12.757812 11.003906 12.808594 10.910156 L 13.96875 8.832031 C 14.023438 8.734375 14.003906 8.601562 13.925781 8.539062 C 13.898438 8.511719 13.863281 8.5 13.828125 8.5 Z M 13.828125 8.5 "/>
    </g>
      {hoverOn && (
        <text x={height*2} y={height-(height/4)} fill={hoverOn ? "#D9F99D" : strokeColour} fontSize="12" textAnchor="middle">
          Blog
        </text>
      )}
    </svg>
  );
};

export const TopicWithTextIcon: React.FC<IconProps> = ({ width = 1, height = 24, strokeColour = "white" }) => {
  const [hoverOn, setHover] = useState(false);

  return (
    <svg
      viewBox={hoverOn ? "0 0 68 24" : "0 0 24 24"}
      width={hoverOn ? "68" : "24"}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
    <g stroke={hoverOn ? "#D9F99D" : strokeColour} fill="none" >
      <path d={hoverOn ? "M1 1 67 1 67 23 1 23Z" : "M1 1 23 1 23 23 1 23Z"}  
        fillRule="evenodd"/>
      <text strokeWidth="0.6" x="7" y="12" textAnchor="middle">A</text>
      <text strokeWidth="0.6" x="18" y="20" textAnchor="middle">Z</text> 
      <line strokeWidth="0.5" x1="6" y1="18" x2="8" y2="18" />

    </g>
      {hoverOn && (
        <text x={height*2} y={height-(height/4)} fill={hoverOn ? "#D9F99D" : strokeColour} fontSize="12" textAnchor="middle">
          Topics
        </text>
      )}
    </svg>
  );
};

export const SystemModeIcon: React.FC<IconProps> = ({ width = 2, strokeColour = "#6b7280" }) => {
  const [hoverOn, setHovered] = React.useState(false);
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
    >
    <rect x="4" y="4" width="16" height="12" rx="2" stroke={strokeColour} fill={hoverOn ? "#1e1b4b" : "none"}></rect>
    <rect x="6" y="18" width="12" height="2" rx="1" stroke={strokeColour}></rect>
  </svg>
)
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


export const LightModeIcon: React.FC<IconProps> = ({ width = 2, strokeColour = "#FDFF04" }) => {

  return (
  <svg 
  viewBox="0 0 24 24" 
  fill="none" 
   
  strokeWidth={width} 
  strokeLinecap="round" 
  strokeLinejoin="round">

  <path d="M12 2v3M18.66 5.344l-1.656 1.656M22.005 12.004h-3M18.66 18.664l-1.656-1.656M12 22.01V19M5.34 18.664l1.67-1.67M2.995 12.004h3M5 5l1.67 1.67"  stroke={strokeColour}></path>
  <circle cx="12" cy="12" r="3" stroke={strokeColour} />
  <circle cx="12" cy="12" r="2.5" stroke="#FFFB03" />
  <circle cx="12" cy="12" r="2" stroke="#FFF006" />
  <circle cx="12" cy="12" r="1.5" stroke="#FFDE04" />
  <circle cx="12" cy="12" r="1" stroke="#FFCC05" />
  <circle cx="12" cy="12" r="0.5" fill="#FFCC03" />
</svg>
)
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

export default {
  TestMoonIcon,
  DarkModeWithHoverIcon,
  
  HomeWithTextIcon,
  BlogWithTextIcon,
  TopicWithTextIcon,
  SystemModeIcon,
  DarkModeIcon,
  LightModeIcon,
  ProfileLogoSVG,
};