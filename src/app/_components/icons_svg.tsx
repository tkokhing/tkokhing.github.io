import * as React from "react";
import styles from "./icon_svg.module.css"; 

// Define a generalized interface for all icon components
interface IconProps {
    width?: number;
    height?: number;
    fill?: string;
    strokeColour?: string;
}
  

// TesterIcon component
export const TesterIcon = ({ width = 3, strokeColour = "yellow", fill = "currentColour" }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
          offset="70%"
          style={{
            stopColor: `${fill}`, //fill is not working here, no matter what syntax I played with 
            stopOpacity: 1,
          }}
        />
        <stop
          offset="100%"
          style={{
            stopColor: "white",
            stopOpacity: 1,
          }}
        />
      </radialGradient>
    </defs>
    <circle cx="14" cy="14" r="9" fill="url(#fadeGradient)" />
    {/* star 1 */}
    <line
      x1={2}
      y1={2}
      x2={2}
      y2={4}
      stroke={strokeColour}
      strokeWidth={1}
      strokeLinecap="round"
    />
    <line
      x1={1}
      y1={3}
      x2={3}
      y2={3}
      stroke="white"
      strokeWidth={1}
      strokeLinecap="round"
    />
    {/* star 2 */}
    <line
      x1={6}
      y1={6}
      x2={6}
      y2={8}
      stroke={fill}
      strokeWidth={1}
      strokeLinecap="round"
    />
    <line
      x1={5}
      y1={7}
      x2={7}
      y2={7}
      stroke={fill} // fill is working here
      strokeWidth={1}
      strokeLinecap="round"
    />
    {/* star 3 */}
    <line
      x1={20}
      y1={4}
      x2={20}
      y2={6}
      stroke="white"
      strokeWidth={width}
      strokeLinecap="round"
    />
    <line
      x1={19}
      y1={5}
      x2={21}
      y2={5}
      stroke="white"
      strokeWidth={width}
      strokeLinecap="round"
    />
  </svg>
);

export const HoverChangeColourIcon = () => (
  <div className={styles.switch}>
    <svg className = {styles['svg-hover-on']} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
            offset="70%"
            style={{
              stopColor: "black", 
              stopOpacity: 1,
            }}
          />
          <stop
            offset="100%"
            style={{
              stopColor: "white",
              stopOpacity: 1,
            }}
            />
        </radialGradient>
      </defs>
      <circle cx="14" cy="14" r="9" fill="url(#fadeGradient)" strokeWidth="0.1" />

      {/* star 1 */}
      <g strokeWidth={1} strokeLinecap="round">
        <g stroke="white" >
          <line x1={2} y1={2} x2={2} y2={4} />
          <line x1={1} y1={3} x2={3} y2={3} />
        </g>
        <g stroke="currentColour" >
          <line x1={2} y1={2} x2={2} y2={4} />
          <line x1={1} y1={3} x2={3} y2={3} />
        </g>
      </g>

      {/* star 2 */}
      <g strokeWidth={1} strokeLinecap="round">
        <g stroke="white" >
          <line x1={6} y1={6} x2={6} y2={8} />
          <line x1={5} y1={7} x2={7} y2={7} />
        </g>
        <g stroke="currentColour">
          <line x1={6} y1={6} x2={6} y2={8} />
          <line x1={5} y1={7} x2={7} y2={7} />
        </g>
      </g>
      {/* star 3 */}
      <g strokeWidth={1} strokeLinecap="round">
        <g stroke="white" >
          <line x1={20} y1={4} x2={20} y2={6} />
          <line x1={19} y1={5} x2={21} y2={5} />
        </g>
        <g stroke="currentColour">
          <line x1={20} y1={4} x2={20} y2={6} />
          <line x1={19} y1={5} x2={21} y2={5} />
        </g>
      </g>
    </svg>
  </div>
)

export const NightMoonIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
          offset="70%"
          style={{
            stopColor: "black",
            stopOpacity: 1,
          }}
        />
        <stop
          offset="100%"
          style={{
            stopColor: "white",
            stopOpacity: 1,
          }}
        />
      </radialGradient>
    </defs>
  <circle cx="14" cy="14" r="9" fill="url(#fadeGradient)" />
  {/* star 1 */}
  <line
    x1={2}
    y1={2}
    x2={2}
    y2={4}
    stroke="white"
    strokeWidth={1}
    strokeLinecap="round"
  />
  <line
    x1={1}
    y1={3}
    x2={3}
    y2={3}
    stroke="white"
    strokeWidth={1}
    strokeLinecap="round"
  />
  {/* star 2 */}
  <line
    x1={6}
    y1={6}
    x2={6}
    y2={8}
    stroke="white"
    strokeWidth={1}
    strokeLinecap="round"
  />
  <line
    x1={5}
    y1={7}
    x2={7}
    y2={7}
    stroke="white"
    strokeWidth={1}
    strokeLinecap="round"
  />
  {/* star 3 */}
  <line
    x1={20} y1={4} x2={20} y2={6}
    stroke="white"
    strokeWidth={1}
    strokeLinecap="round"
  />
  <line
    x1={19} y1={5} x2={21} y2={5}
    stroke="white"
    strokeWidth={1}
    strokeLinecap="round"
  />
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

export default {
  TesterIcon, 
  HoverChangeColourIcon,
  NightMoonIcon,
  DayTimeIcon,
};