import React from "react";
import { connect } from "react-redux";
import { clickSVG } from "./RiskBoardClick";
import { COUNTRY_COORDINATES, LARGE_NUMBER_OFFSET, X_OFFSET, Y_OFFSET } from "./RiskBoardTypes";
import PropTypes from "prop-types"
function RiskBoard(props) {
  const coord = COUNTRY_COORDINATES;
  const {countries, colors} = props;
  Object.keys(coord).forEach(country => {
    if(countries[country].troopCount >= 10) {
      coord[country].x -= LARGE_NUMBER_OFFSET;
    }
  })
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="749.819"
      height="519.068"
      enableBackground="new"
      version="1"
      onClick={props.clickSVG}
    >
      <defs>
        <linearGradient>
          <stop offset="0" stopColor="#000" stopOpacity="0"></stop>
          <stop offset="0.5" stopColor="#000" stopOpacity="1"></stop>
          <stop offset="1" stopColor="#000" stopOpacity="0"></stop>
        </linearGradient>
        <marker orient="auto" overflow="visible" refX="0" refY="0">
          <g
            fill="none"
            fillRule="evenodd"
            stroke="#000"
            strokeWidth="1pt"
            markerEnd="none"
            markerStart="none"
            transform="scale(.6)"
          >
            <path d="M4.625-5.046c-2.76 0-5 2.24-5 5s2.24 5 5 5"></path>
            <path d="M-5.413-5.046c2.76 0 5 2.24 5 5s-2.24 5-5 5"></path>
          </g>
        </marker>
        <marker orient="auto" overflow="visible" refX="0" refY="0">
          <path
            fillRule="evenodd"
            stroke="#000"
            strokeWidth=".4pt"
            markerStart="none"
            d="M-2.6-2.828L-5.428 0-2.6 2.828.228 0-2.6-2.828z"
          ></path>
        </marker>
        <marker orient="auto" overflow="visible" refX="0" refY="0">
          <path
            fill="#fff"
            fillRule="evenodd"
            stroke="#000"
            strokeWidth=".8pt"
            markerStart="none"
            d="M-.184 0l-6.92 4v-8l6.92 4z"
          ></path>
        </marker>
        <marker orient="auto" overflow="visible" refX="0" refY="0">
          <path
            fillRule="evenodd"
            stroke="#000"
            strokeWidth="0.597"
            markerStart="none"
            d="M-.958-4.259a2.058 2.058 0 00-2.056 2.056c0 .394.143.736.336 1.05-.024.018-.048.034-.07.055-.374-.513-.954-.867-1.637-.867A2.058 2.058 0 00-6.44.09c0 1.133.922 2.056 2.055 2.056.596 0 1.122-.266 1.497-.672a2.002 2.002 0 00-.126.672c0 1.133.922 2.055 2.056 2.055a2.058 2.058 0 002.056-2.055c0-.476-.19-.897-.462-1.245.813.158 1.627.476 2.224 1.398-.443-.443-.728-1.248-.728-2.335l-.377-.028.35-.014c0-1.087.27-1.893.713-2.336-.576.89-1.355 1.216-2.14 1.385.243-.337.42-.728.42-1.175A2.058 2.058 0 00-.958-4.259z"
          ></path>
        </marker>
        <marker orient="auto" overflow="visible" refX="0" refY="0">
          <g fillRule="evenodd" markerEnd="none" transform="scale(.7)">
            <path
              fill="none"
              fillOpacity="0.75"
              stroke="#000"
              strokeWidth="1.25"
              markerMid="none"
              markerStart="none"
              d="M-4.78-3.24C-2.428-2.874.522-1.302.259.388c-.263 1.69-2.47 2.23-4.821 1.864-2.35-.366-3.958-1.5-3.695-3.19.263-1.69 1.128-2.667 3.479-2.302z"
            ></path>
            <path
              fill="none"
              fillOpacity="0.75"
              stroke="#000"
              strokeWidth="1pt"
              d="M4.46.089c-7.016-4.467.765-3.995-5.308-8.809"
            ></path>
            <path
              fill="none"
              fillOpacity="0.75"
              stroke="#000"
              strokeWidth="1pt"
              markerStart="none"
              d="M4.93.058c-6.317 1.691-3.127 5.42-9.875 7.488"
            ></path>
            <path
              strokeWidth="1pt"
              d="M-10.392 -1.741H-7.754999999999999V1.02H-10.392z"
              transform="matrix(.52754 -.84953 .88767 .46048 0 0)"
            ></path>
            <path
              strokeWidth="1pt"
              d="M4.959 -7.963H7.692V-5.102H4.959z"
              transform="matrix(.6712 -.74127 .7908 .61207 0 0)"
            ></path>
            <path
              fill="red"
              fillOpacity="0.75"
              stroke="#000"
              strokeWidth="1.479"
              markerStart="none"
              d="M-5.86 1.099a.674.674 0 110 1.347.674.674 0 110-1.347z"
            ></path>
            <path
              fill="red"
              fillOpacity="0.75"
              stroke="#000"
              strokeWidth="1.479"
              markerStart="none"
              d="M-5.002-1.626a.674.674 0 110 1.347.674.674 0 110-1.347z"
            ></path>
          </g>
        </marker>
        <marker orient="auto" refX="0" refY="0">
          style=&quot;overflow:visible&quot;&gt;
          <path
            fill="gray"
            fillOpacity="1"
            fillRule="evenodd"
            stroke="#000"
            strokeWidth="0.107"
            d="M.018-.592v1.15l-6.225 1.85h14.75L2.793.558v-1.15l5.8-1.725H-6.182l6.2 1.725z"
          ></path>
        </marker>
        <marker orient="auto" overflow="visible" refX="0" refY="0">
          <g transform="translate(-13)">
            <circle cx="3" cy="0" r="0.8"></circle>
            <circle cx="6.5" cy="0" r="0.8"></circle>
            <circle cx="10" cy="0" r="0.8"></circle>
          </g>
        </marker>
        <marker orient="auto" overflow="visible" refX="0" refY="0">
          <path
            markerStart="none"
            d="M9.09-3.606c-.97-1.171-2.72-1.13-4.028-.627L-3.15-1.155c-2.388-1.307-4.748-.932-4.748-1.569 0-.497.456-.388.388-1.683-.066-1.243-1.364-2.163-2.59-2.081-1.228-.008-2.5.933-2.51 2.23-.092 1.306 1.006 2.52 2.306 2.605 1.522.226 4.218-.696 5.483 1.57-.942 1.739-2.614 1.744-4.126 1.657-1.254-.073-2.762.287-3.36 1.52-.579 1.183-.011 2.865 1.317 3.227 1.34.492 3.18-.13 3.499-1.67.246-1.189-.595-1.747-.273-2.178.244-.325 1.791-.137 4.548-1.375l8.892 3.135c1.124.314 2.497.303 3.492-.802L-.052-.054 9.09-3.606zm-18.308-1.9c1.295.722 1.189 2.683-.156 3.063-1.217.423-2.771-.76-2.384-2.078.228-1.082 1.654-1.48 2.54-.986zm.056 8.017c1.351.499 1.122 2.784-.252 3.091-.91.317-2.213-.138-2.306-1.212-.177-1.305 1.357-2.484 2.558-1.88z"
          ></path>
        </marker>
        <marker orient="auto" overflow="visible" refX="0" refY="0">
          <path
            fillRule="evenodd"
            stroke="#000"
            strokeWidth=".4pt"
            markerStart="none"
            d="M-4 0l-2 2 7-2-7-2 2 2z"
          ></path>
        </marker>
        <marker orient="auto" overflow="visible" refX="0" refY="0">
          <path
            fillRule="evenodd"
            stroke="#000"
            strokeWidth=".8pt"
            markerEnd="none"
            markerStart="none"
            d="M3.92 0c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z"
          ></path>
        </marker>
        <marker orient="auto" overflow="visible" refX="0" refY="0">
          <path
            fillRule="evenodd"
            stroke="#000"
            strokeWidth=".8pt"
            markerStart="none"
            d="M10 0l4-4L0 0l14 4-4-4z"
          ></path>
        </marker>
        <linearGradient>
          <stop offset="0" stopColor="#810000" stopOpacity="1"></stop>
          <stop offset="1" stopColor="#810000" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient>
          <stop offset="0" stopColor="#000" stopOpacity="1"></stop>
          <stop offset="1" stopColor="#000" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient>
          <stop offset="0" stopColor="#810000" stopOpacity="1"></stop>
          <stop offset="1" stopColor="#000" stopOpacity="0"></stop>
        </linearGradient>
        <filter
          id="filter7968"
          width="1.439"
          height="1.439"
          x="-0.219"
          y="-0.219"
        >
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter id="filter7972">
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter
          id="filter7976"
          width="1.439"
          height="1.439"
          x="-0.219"
          y="-0.219"
        >
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter id="filter7980">
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter
          id="filter7984"
          width="1.439"
          height="1.439"
          x="-0.219"
          y="-0.219"
        >
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter
          id="filter7988"
          width="2.053"
          height="1.037"
          x="-0.527"
          y="-0.019"
        >
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter
          id="filter7992"
          width="1.439"
          height="1.439"
          x="-0.219"
          y="-0.219"
        >
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter id="filter7996">
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter
          id="filter8000"
          width="1.035"
          height="1.211"
          x="-0.018"
          y="-0.105"
        >
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter
          id="filter8004"
          width="1.439"
          height="1.439"
          x="-0.219"
          y="-0.219"
        >
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter id="filter8008">
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter
          id="filter8012"
          width="1.439"
          height="1.439"
          x="-0.219"
          y="-0.219"
        >
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter
          id="filter8016"
          width="1.439"
          height="1.439"
          x="-0.219"
          y="-0.219"
        >
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter
          id="filter8020"
          width="1.545"
          height="1.069"
          x="-0.273"
          y="-0.034"
        >
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter
          id="filter8024"
          width="1.439"
          height="1.439"
          x="-0.219"
          y="-0.219"
        >
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter
          id="filter8028"
          width="1.439"
          height="1.439"
          x="-0.219"
          y="-0.219"
        >
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter id="filter8032">
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter
          id="filter8036"
          width="1.439"
          height="1.439"
          x="-0.219"
          y="-0.219"
        >
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter
          id="filter8040"
          width="1.439"
          height="1.439"
          x="-0.219"
          y="-0.219"
        >
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter id="filter8044">
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter
          id="filter8048"
          width="1.439"
          height="1.439"
          x="-0.219"
          y="-0.219"
        >
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter
          id="filter8052"
          width="1.067"
          height="1.26"
          x="-0.033"
          y="-0.13"
        >
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter
          id="filter8056"
          width="1.439"
          height="1.439"
          x="-0.219"
          y="-0.219"
        >
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter id="filter8060">
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter
          id="filter8064"
          width="1.439"
          height="1.439"
          x="-0.219"
          y="-0.219"
        >
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter
          id="filter8068"
          width="1.439"
          height="1.439"
          x="-0.219"
          y="-0.219"
        >
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter id="filter8072">
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter
          id="filter8076"
          width="1.439"
          height="1.439"
          x="-0.219"
          y="-0.219"
        >
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter id="filter8080">
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter
          id="filter8084"
          width="1.439"
          height="1.439"
          x="-0.219"
          y="-0.219"
        >
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter id="filter8088">
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter
          id="filter8092"
          width="1.439"
          height="1.439"
          x="-0.219"
          y="-0.219"
        >
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter
          id="filter8096"
          width="1.439"
          height="1.439"
          x="-0.219"
          y="-0.219"
        >
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter id="filter8100">
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter
          id="filter8104"
          width="1.439"
          height="1.439"
          x="-0.219"
          y="-0.219"
        >
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter
          id="filter8108"
          width="1.439"
          height="1.439"
          x="-0.219"
          y="-0.219"
        >
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter id="filter8112">
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter
          id="filter8116"
          width="1.439"
          height="1.439"
          x="-0.219"
          y="-0.219"
        >
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter
          id="filter8120"
          width="1.04"
          height="1.209"
          x="-0.02"
          y="-0.104"
        >
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter
          id="filter8124"
          width="1.439"
          height="1.439"
          x="-0.219"
          y="-0.219"
        >
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter
          id="filter8128"
          width="1.439"
          height="1.439"
          x="-0.219"
          y="-0.219"
        >
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter
          id="filter8132"
          width="1.771"
          height="1.027"
          x="-0.386"
          y="-0.014"
        >
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter
          id="filter8136"
          width="1.439"
          height="1.439"
          x="-0.219"
          y="-0.219"
        >
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter id="filter8140">
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter
          id="filter8144"
          width="1.439"
          height="1.439"
          x="-0.219"
          y="-0.219"
        >
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter
          id="filter8148"
          width="1.439"
          height="1.439"
          x="-0.219"
          y="-0.219"
        >
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter id="filter8152">
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter
          id="filter8156"
          width="1.439"
          height="1.439"
          x="-0.219"
          y="-0.219"
        >
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter id="filter8160">
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter
          id="filter8164"
          width="1.439"
          height="1.439"
          x="-0.219"
          y="-0.219"
        >
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter id="filter8168">
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter
          id="filter8172"
          width="1.439"
          height="1.439"
          x="-0.219"
          y="-0.219"
        >
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter
          id="filter8176"
          width="1.068"
          height="2.316"
          x="-0.034"
          y="-0.658"
        >
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter
          id="filter8180"
          width="1.029"
          height="1.972"
          x="-0.015"
          y="-0.486"
        >
          <feGaussianBlur stdDeviation="0.274"></feGaussianBlur>
        </filter>
        <filter id="filter11175">
          <feGaussianBlur stdDeviation="1.167"></feGaussianBlur>
        </filter>
        <filter id="filter11217">
          <feGaussianBlur stdDeviation="1.783"></feGaussianBlur>
        </filter>
        <filter id="filter11297">
          <feGaussianBlur stdDeviation="0.79"></feGaussianBlur>
        </filter>
        <filter id="filter11377">
          <feGaussianBlur stdDeviation="1.171"></feGaussianBlur>
        </filter>
        <filter id="filter11461">
          <feGaussianBlur stdDeviation="0.524"></feGaussianBlur>
        </filter>
        <filter id="filter11563">
          <feGaussianBlur stdDeviation="0.852"></feGaussianBlur>
        </filter>
        <filter id="filter11579">
          <feGaussianBlur stdDeviation="0.764"></feGaussianBlur>
        </filter>
        <filter id="filter11627">
          <feGaussianBlur stdDeviation="0.173"></feGaussianBlur>
        </filter>
        <filter id="filter11747">
          <feGaussianBlur stdDeviation="0.778"></feGaussianBlur>
        </filter>
        <filter id="filter11855">
          <feGaussianBlur stdDeviation="0.669"></feGaussianBlur>
        </filter>
        <filter
          id="filter12053"
          width="1.069"
          height="1.323"
          x="-0.035"
          y="-0.161"
        >
          <feGaussianBlur stdDeviation="0.326"></feGaussianBlur>
        </filter>
        <filter id="filter12290">
          <feGaussianBlur stdDeviation="0.447"></feGaussianBlur>
        </filter>
        <filter id="filter12358">
          <feGaussianBlur stdDeviation="0.395"></feGaussianBlur>
        </filter>
        <filter id="filter12362">
          <feGaussianBlur stdDeviation="0.395"></feGaussianBlur>
        </filter>
        <filter id="filter12418">
          <feGaussianBlur stdDeviation="1.037"></feGaussianBlur>
        </filter>
        <filter id="filter12450">
          <feGaussianBlur stdDeviation="0.755"></feGaussianBlur>
        </filter>
        <filter id="filter12466">
          <feGaussianBlur stdDeviation="1.327"></feGaussianBlur>
        </filter>
        <filter id="filter12863">
          <feGaussianBlur stdDeviation="0.581"></feGaussianBlur>
        </filter>
        <filter id="filter12867">
          <feGaussianBlur stdDeviation="0.581"></feGaussianBlur>
        </filter>
        <filter id="filter12871">
          <feGaussianBlur stdDeviation="0.581"></feGaussianBlur>
        </filter>
        <filter id="filter12875">
          <feGaussianBlur stdDeviation="0.581"></feGaussianBlur>
        </filter>
        <filter id="filter12879">
          <feGaussianBlur stdDeviation="0.581"></feGaussianBlur>
        </filter>
        <filter id="filter12883">
          <feGaussianBlur stdDeviation="0.581"></feGaussianBlur>
        </filter>
        <filter id="filter12887">
          <feGaussianBlur stdDeviation="0.581"></feGaussianBlur>
        </filter>
        <filter id="filter12891">
          <feGaussianBlur stdDeviation="0.581"></feGaussianBlur>
        </filter>
        <filter id="filter12895">
          <feGaussianBlur stdDeviation="0.581"></feGaussianBlur>
        </filter>
        <filter id="filter12899">
          <feGaussianBlur stdDeviation="0.581"></feGaussianBlur>
        </filter>
        <filter id="filter12903">
          <feGaussianBlur stdDeviation="0.581"></feGaussianBlur>
        </filter>
        <filter id="filter12907">
          <feGaussianBlur stdDeviation="0.581"></feGaussianBlur>
        </filter>
        <filter id="filter12911">
          <feGaussianBlur stdDeviation="0.581"></feGaussianBlur>
        </filter>
        <filter id="filter12915">
          <feGaussianBlur stdDeviation="0.581"></feGaussianBlur>
        </filter>
        <filter id="filter12919">
          <feGaussianBlur stdDeviation="0.581"></feGaussianBlur>
        </filter>
        <filter id="filter12923">
          <feGaussianBlur stdDeviation="0.581"></feGaussianBlur>
        </filter>
        <filter id="filter12927">
          <feGaussianBlur stdDeviation="0.581"></feGaussianBlur>
        </filter>
        <filter id="filter12931">
          <feGaussianBlur stdDeviation="0.581"></feGaussianBlur>
        </filter>
        <filter id="filter12935">
          <feGaussianBlur stdDeviation="0.581"></feGaussianBlur>
        </filter>
        <filter id="filter12939">
          <feGaussianBlur stdDeviation="0.581"></feGaussianBlur>
        </filter>
        <filter id="filter12943">
          <feGaussianBlur stdDeviation="0.581"></feGaussianBlur>
        </filter>
        <filter id="filter12947">
          <feGaussianBlur stdDeviation="0.581"></feGaussianBlur>
        </filter>
        <filter id="filter12951">
          <feGaussianBlur stdDeviation="0.581"></feGaussianBlur>
        </filter>
        <filter id="filter12955">
          <feGaussianBlur stdDeviation="0.581"></feGaussianBlur>
        </filter>
        <filter id="filter12959">
          <feGaussianBlur stdDeviation="0.581"></feGaussianBlur>
        </filter>
        <filter id="filter12963">
          <feGaussianBlur stdDeviation="0.581"></feGaussianBlur>
        </filter>
        <filter id="filter12967">
          <feGaussianBlur stdDeviation="0.581"></feGaussianBlur>
        </filter>
        <filter id="filter12971">
          <feGaussianBlur stdDeviation="0.581"></feGaussianBlur>
        </filter>
        <filter id="filter12975">
          <feGaussianBlur stdDeviation="0.581"></feGaussianBlur>
        </filter>
        <filter id="filter12979">
          <feGaussianBlur stdDeviation="0.581"></feGaussianBlur>
        </filter>
        <filter id="filter12983">
          <feGaussianBlur stdDeviation="0.581"></feGaussianBlur>
        </filter>
        <filter id="filter12987">
          <feGaussianBlur stdDeviation="0.581"></feGaussianBlur>
        </filter>
        <filter id="filter12991">
          <feGaussianBlur stdDeviation="0.581"></feGaussianBlur>
        </filter>
        <filter id="filter12995">
          <feGaussianBlur stdDeviation="0.581"></feGaussianBlur>
        </filter>
        <filter id="filter12999">
          <feGaussianBlur stdDeviation="0.581"></feGaussianBlur>
        </filter>
        <filter id="filter13003">
          <feGaussianBlur stdDeviation="0.581"></feGaussianBlur>
        </filter>
        <filter id="filter13007">
          <feGaussianBlur stdDeviation="0.581"></feGaussianBlur>
        </filter>
        <filter id="filter13011">
          <feGaussianBlur stdDeviation="0.581"></feGaussianBlur>
        </filter>
        <filter id="filter13015">
          <feGaussianBlur stdDeviation="0.581"></feGaussianBlur>
        </filter>
        <filter id="filter13019">
          <feGaussianBlur stdDeviation="0.581"></feGaussianBlur>
        </filter>
        <filter id="filter14319">
          <feGaussianBlur stdDeviation="0.219"></feGaussianBlur>
        </filter>
      </defs>
      <g
        strokeDashoffset="0"
        strokeMiterlimit="4"
        display="inline"
        transform="translate(-167.997 -118.555)"
      >
        <path
          fill="#000"
          stroke="none"
          strokeDasharray="4, 1"
          strokeWidth="1"
          d="M486.75 253a1.5 1.5 0 11-3 0 1.5 1.5 0 113 0z"
          filter="url(#filter7968)"
        ></path>
        <path
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="4, 1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M485.5 253l13-19"
          filter="url(#filter7972)"
        ></path>
        <path
          fill="#000"
          stroke="none"
          strokeDasharray="4, 1"
          strokeWidth="1"
          d="M500 234a1.5 1.5 0 11-3 0 1.5 1.5 0 113 0z"
          filter="url(#filter7976)"
        ></path>
        <path
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="4, 1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M498.5 234l23.25 13.5"
          filter="url(#filter7980)"
        ></path>
        <path
          fill="#000"
          stroke="none"
          strokeDasharray="4, 1"
          strokeWidth="1"
          d="M523.25 247.5a1.5 1.5 0 11-3 0 1.5 1.5 0 113 0z"
          filter="url(#filter7984)"
        ></path>
        <path
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="4.8, 1.2"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1.2"
          d="M521.75 247.5l-.25 34.25"
          filter="url(#filter7988)"
        ></path>
        <path
          fill="#000"
          stroke="none"
          strokeDasharray="4, 1"
          strokeWidth="1"
          d="M523 281.75a1.5 1.5 0 11-3 0 1.5 1.5 0 113 0z"
          filter="url(#filter7992)"
        ></path>
        <path
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="4, 1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M521.5 281.75L485.25 253"
          filter="url(#filter7996)"
        ></path>
        <path
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="4, 1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M485.5 253l36.25-5.25"
          filter="url(#filter8000)"
        ></path>
        <path
          fill="#000"
          stroke="none"
          strokeDasharray="4, 1"
          strokeWidth="1"
          d="M491.75 315.125a1.5 1.5 0 11-3 0 1.5 1.5 0 113 0z"
          filter="url(#filter8004)"
        ></path>
        <path
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="4, 1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M490.25 315.125l-7.5-12.5"
          filter="url(#filter8008)"
        ></path>
        <path
          fill="#000"
          stroke="none"
          strokeDasharray="4, 1"
          strokeWidth="1"
          d="M484.375 302.625a1.5 1.5 0 11-3 0 1.5 1.5 0 113 0z"
          filter="url(#filter8012)"
        ></path>
        <path
          fill="#000"
          stroke="none"
          strokeDasharray="4, 1"
          strokeWidth="1"
          d="M564.357 371.313a1.5 1.5 0 11-3 0 1.5 1.5 0 113 0z"
          filter="url(#filter8016)"
        ></path>
        <path
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="4, 1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M562.857 371.313l1.414 18.208"
          filter="url(#filter8020)"
        ></path>
        <path
          fill="#000"
          stroke="none"
          strokeDasharray="4, 1"
          strokeWidth="1"
          d="M565.948 389.521a1.5 1.5 0 11-3 0 1.5 1.5 0 113 0z"
          filter="url(#filter8024)"
        ></path>
        <path
          fill="#000"
          stroke="none"
          strokeDasharray="4, 1"
          strokeWidth="1"
          d="M629.057 431.948a1.5 1.5 0 11-3 0 1.5 1.5 0 113 0z"
          filter="url(#filter8028)"
        ></path>
        <path
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="4, 1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M627.557 431.594l-8.131 12.551"
          filter="url(#filter8032)"
        ></path>
        <path
          fill="#000"
          stroke="none"
          strokeDasharray="4, 1"
          strokeWidth="1"
          d="M620.926 444.145a1.5 1.5 0 11-3 0 1.5 1.5 0 113 0z"
          filter="url(#filter8036)"
        ></path>
        <path
          fill="#000"
          stroke="none"
          strokeDasharray="4, 1"
          strokeWidth="1"
          d="M793.813 431.77a1.5 1.5 0 11-3 0 1.5 1.5 0 113 0z"
          filter="url(#filter8040)"
        ></path>
        <path
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="4, 1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M792.49 431.77l7.425 24.926"
          filter="url(#filter8044)"
        ></path>
        <path
          fill="#000"
          stroke="none"
          strokeDasharray="4, 1"
          strokeWidth="1"
          d="M801.415 456.696a1.5 1.5 0 11-3 0 1.5 1.5 0 113 0z"
          filter="url(#filter8048)"
        ></path>
        <path
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="4, 1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M799.915 457.05l18.738 4.066h0"
          filter="url(#filter8052)"
        ></path>
        <path
          fill="#000"
          stroke="none"
          strokeDasharray="4, 1"
          strokeWidth="1"
          d="M477.03 430.533a1.5 1.5 0 11-3 0 1.5 1.5 0 113 0z"
          filter="url(#filter8056)"
        ></path>
        <path
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="4, 1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M475.53 430.533l-25.81 7.425"
          filter="url(#filter8060)"
        ></path>
        <path
          fill="#000"
          stroke="none"
          strokeDasharray="4, 1"
          strokeWidth="1"
          d="M451.22 437.958a1.5 1.5 0 11-3 0 1.5 1.5 0 113 0z"
          filter="url(#filter8064)"
        ></path>
        <path
          fill="#000"
          stroke="none"
          strokeDasharray="4, 1"
          strokeWidth="1"
          d="M401.75 179.75a1.5 1.5 0 11-3 0 1.5 1.5 0 113 0z"
          filter="url(#filter8068)"
        ></path>
        <path
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="4, 1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M400.25 179.75l-15.5 37.5"
          filter="url(#filter8072)"
        ></path>
        <path
          fill="#000"
          stroke="none"
          strokeDasharray="4, 1"
          strokeWidth="1"
          d="M386.25 217.25a1.5 1.5 0 11-3 0 1.5 1.5 0 113 0z"
          filter="url(#filter8076)"
        ></path>
        <path
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="4, 1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M400.25 179.5l-68 50.25"
          filter="url(#filter8080)"
        ></path>
        <path
          fill="#000"
          stroke="none"
          strokeDasharray="4, 1"
          strokeWidth="1"
          d="M333.75 229.75a1.5 1.5 0 11-3 0 1.5 1.5 0 113 0z"
          filter="url(#filter8084)"
        ></path>
        <path
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="4, 1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M400.25 179.5l-36.75 8.25h0"
          filter="url(#filter8088)"
        ></path>
        <path
          fill="#000"
          stroke="none"
          strokeDasharray="4, 1"
          strokeWidth="1"
          d="M365 187.75a1.5 1.5 0 11-3 0 1.5 1.5 0 113 0z"
          filter="url(#filter8092)"
        ></path>
        <path
          fill="#000"
          stroke="none"
          strokeDasharray="4, 1"
          strokeWidth="1"
          d="M473.5 214.5a1.5 1.5 0 11-3 0 1.5 1.5 0 113 0z"
          filter="url(#filter8096)"
        ></path>
        <path
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="4, 1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M472 214.5l-20.5-17.75"
          filter="url(#filter8100)"
        ></path>
        <path
          fill="#000"
          stroke="none"
          strokeDasharray="4, 1"
          strokeWidth="1"
          d="M453 197a1.5 1.5 0 11-3 0 1.5 1.5 0 113 0z"
          filter="url(#filter8104)"
        ></path>
        <path
          fill="#000"
          stroke="none"
          strokeDasharray="4, 1"
          strokeWidth="1"
          d="M824.926 275.854a1.5 1.5 0 11-3 0 1.5 1.5 0 113 0z"
          filter="url(#filter8108)"
        ></path>
        <path
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="4, 1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M823.426 275.854l22.627 18.738"
          filter="url(#filter8112)"
        ></path>
        <path
          fill="#000"
          stroke="none"
          strokeDasharray="4, 1"
          strokeWidth="1"
          d="M847.553 294.592a1.5 1.5 0 11-3 0 1.5 1.5 0 113 0z"
          filter="url(#filter8116)"
        ></path>
        <path
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="4, 1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M846.053 294.592l-32.173 5.303"
          filter="url(#filter8120)"
        ></path>
        <path
          fill="#000"
          stroke="none"
          strokeDasharray="4, 1"
          strokeWidth="1"
          d="M815.38 299.895a1.5 1.5 0 11-3 0 1.5 1.5 0 113 0z"
          filter="url(#filter8124)"
        ></path>
        <path
          fill="#000"
          stroke="none"
          strokeDasharray="4, 1"
          strokeWidth="1"
          d="M824.572 462.883a1.5 1.5 0 11-3 0 1.5 1.5 0 113 0z"
          filter="url(#filter8128)"
        ></path>
        <path
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="4, 1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M823.072 462.883l-.707 47.73h0"
          filter="url(#filter8132)"
        ></path>
        <path
          fill="#000"
          stroke="none"
          strokeDasharray="4, 1"
          strokeWidth="1"
          d="M823.865 510.613a1.5 1.5 0 11-3 0 1.5 1.5 0 113 0z"
          filter="url(#filter8136)"
        ></path>
        <path
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="4, 1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M822.365 510.613l-11.314-8.485"
          filter="url(#filter8140)"
        ></path>
        <path
          fill="#000"
          stroke="none"
          strokeDasharray="4, 1"
          strokeWidth="1"
          d="M812.5 502.25a1.5 1.5 0 11-3 0 1.5 1.5 0 113 0z"
          filter="url(#filter8144)"
        ></path>
        <path
          fill="#000"
          stroke="none"
          strokeDasharray="4, 1"
          strokeWidth="1"
          d="M838.25 498.625a1.5 1.5 0 11-3 0 1.5 1.5 0 113 0z"
          filter="url(#filter8148)"
        ></path>
        <path
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="4, 1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M836.75 498.625L823 462.875h0"
          filter="url(#filter8152)"
        ></path>
        <path
          fill="#000"
          stroke="none"
          strokeDasharray="4, 1"
          strokeWidth="1"
          d="M625.522 498.946a1.5 1.5 0 11-3 0 1.5 1.5 0 113 0z"
          filter="url(#filter8156)"
        ></path>
        <path
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="4, 1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M624 499l8.25 45.75"
          filter="url(#filter8160)"
        ></path>
        <path
          fill="#000"
          stroke="none"
          strokeDasharray="4, 1"
          strokeWidth="1"
          d="M633.75 544.75a1.5 1.5 0 11-3 0 1.5 1.5 0 113 0z"
          filter="url(#filter8164)"
        ></path>
        <path
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="4, 1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M632.25 544.75L610 560.25"
          filter="url(#filter8168)"
        ></path>
        <path
          fill="#000"
          stroke="none"
          strokeDasharray="4, 1"
          strokeWidth="1"
          d="M611.5 560.25a1.5 1.5 0 11-3 0 1.5 1.5 0 113 0z"
          filter="url(#filter8172)"
        ></path>
        <path
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="4, 1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M196.222 216.28h-18.385"
          filter="url(#filter8176)"
        ></path>
        <path
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="4, 1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          d="M846.407 218.932l43.84.353"
          filter="url(#filter8180)"
        ></path>
      </g>

      <g
        fill="none"
        fillOpacity="1"
        fillRule="evenodd"
        stroke="#000"
        strokeDasharray="none"
        strokeDashoffset="0"
        strokeMiterlimit="1.322"
        strokeOpacity="1"
        strokeWidth="1.2"
        display="inline"
        opacity="1"
        transform="translate(-167.997 -118.555)"
      >
        <path
          fill={colors[countries.eastern_australia.occupant.name]}
          fillOpacity="1"
          style={{ marker: "none" }}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          markerEnd="none"
          markerMid="none"
          markerStart="none"
          d="M832.088 509.73s.177.53.707-1.592c.53-2.121.177-3.182.884-4.773.707-1.59 1.06-1.414 2.475-2.121 1.414-.707 1.768-1.06 2.121-1.768.354-.707 1.414-.884 2.475-.707 1.06.177 1.591.707 2.475-.53.884-1.238.707-1.591 1.59-1.238.885.354.354.354 1.592.707 1.237.354 2.475.884 4.95.354 2.474-.53 2.651-1.768 2.828-.354.177 1.415.177 1.591 1.06 1.591.885 0 .885.177.354 1.238-.53 1.06-.177.353-1.59 2.298-1.415 1.945-2.122 2.121-2.299 3.535-.177 1.415.177 2.299.177 2.299s-.707 1.944.53 1.944c1.238 0 1.414-.53 3.005-.707 1.591-.177 3.006-.354 3.182 1.237.177 1.591 1.238 4.597 2.299 4.773 1.06.177 1.06.53 2.828.177 1.768-.353 2.475.53 2.652-1.06.176-1.591.176-1.945.176-3.182 0-1.238-1.767.707.53-2.829 2.299-3.535 2.83-1.237 2.299-5.126-.53-3.89-1.591-3.536-.707-6.01.884-2.476.53-2.476 1.06-2.299 0 0 1.591-.177 1.768 2.298.177 2.475.884 4.596.884 5.657 0 1.06.707 4.95.707 4.95s1.238 1.414 1.945.884c.707-.53 1.767-.707 1.767-1.945 0-1.237.354-2.651.708-1.944.353.707 1.414 1.237 1.414 2.298 0 1.06-.177 2.121 0 3.182.177 1.06 1.237 2.121 1.237 2.121s.354 2.121.354 2.828c0 .708.353 1.238 0 3.006-.354 1.767-.354 1.944-.177 3.535.177 1.591.354 2.298 1.06 2.475.708.177.708.177 1.415.177.707 0 .884-.707 1.414.177.53.883.707 1.414 1.945 1.59 1.237.177 2.298 0 2.298 0s.53.884.53 1.945c0 1.06-.177 1.414.177 2.829.353 1.414.353 1.59 1.237 1.767.884.177 1.414.354 1.414.354s.177.884.177 2.298c0 1.414.354 2.298.354 2.298l1.414 1.06s.354.885 1.06 1.769c.708.883 1.415 1.06 1.415 1.06s.53 1.06.707 1.945c.177.884-.354.353.707 1.59 1.06 1.238 1.237 1.592 1.237 2.652 0 1.061.884 1.768.53 3.182-.353 1.415-.176 1.945-.353 3.713-.177 1.767.177-.354-.177 2.651-.353 3.005-.176 3.89-.353 4.95s-.53.177-.707 2.121c-.177 1.945-.354 3.536-.354 3.536s-1.237 1.768-2.121 1.768c-.884 0-2.475-.707-2.475.176 0 .884-.884 1.591.354 1.945 1.237.354 1.59-.707 1.59.53 0 1.238-.353 1.591-1.414 2.475-1.06.884-1.06.707-2.298 1.414-1.237.707-.53-.353-1.414 1.945-.884 2.298-.707 2.298-1.414 3.182-.707.884-.884.884-1.238 1.944-.353 1.061-.353 1.415-.353 2.652 0 1.238-.354 1.768-.354 1.768s-1.414 1.414-1.414 2.652c0 1.237.884 1.767.177 2.651-.707.884 0 .884-1.591 1.06-1.591.178-2.298.178-2.298.178l-2.475.53s-.354-1.06-1.237-.53c-.884.53-.53.353-1.238 1.237-.707.884-.884.884-1.768 1.414-.884.53 0 .707-.53 1.591s-.707 1.768-1.768 1.238c-1.06-.53-1.414-.354-1.768-1.415-.353-1.06.177-1.237-1.59-1.767-1.768-.53-1.945-.53-1.945-.53s-.53.353-.884 1.237c-.354.884.177 1.237-1.06 1.768-1.238.53-1.238 1.06-2.476.176l.236-.27s0-5.656.177-7.07c.176-1.414-.354-1.238-1.061-2.298s.884-42.25.707-43.134c-.177-.884-29.875.354-29.875.354l-.59-37.738z"
          display="inline"
          enableBackground="accumulate"
          filter="url(#filter12951)"
          opacity="1"
          overflow="visible"
          visibility="visible"
          id="eastern_australia"
        >
        </path>
        <circle fill="white" opacity="1" fillOpacity="1" cx = {coord.eastern_australia.x} 
                                                         cy = {coord.eastern_australia.y} r= "12" /> 
        <text fill="black" fontSize="14" x = {coord.eastern_australia.x + X_OFFSET } 
                                         y = {coord.eastern_australia.y + Y_OFFSET}> 
                                        {countries.eastern_australia.troopCount}</text>
        <path
          fill={colors[countries.indonesia.occupant.name]}
          fillOpacity="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          d="M778.125 511.375C779 512.75 778.5 513 780.5 513s3.25-.375 4.375-.125.625.625 1.875.5 2.375-.875 3.375-1 2.25-.25 3 0 1.875 1.125 3.25 1.25 4.5.125 5 .25 2.125 1.375 2.875.5 1-.625 1.25-2 .25-2.125-.625-2.375-.25-.75-2.375-.875-2.75-.375-3.375-.625-1.625-1.25-2.375-1.5-2.875-1.125-4.25-1.125-4.125-.25-5.5-.25-1.625-.625-3.125.5-2.75 1.625-3.625 2.25-.625.125-1 1.375-.75 1.875-1.125 1.625zm23.375-8.125c.5-1.75.125-1.5.25-3s.5-1.125 1.125-2.125.25-2.625 1.375-.75.75 2.625 2.125 3.75 1.625 2.375 2.75 1.25 3.25-2.25 2-3.625-2 0-2.125-3.25-.25-4.375-1.125-4.25-1.625 1.375-1.75-.375-.625-3.875.75-4 2.75.75 3.625-.875 1.875-2.125.25-2.375-2.875-.5-3.75-.375-1.5.125-1.375-.625-.875-1.5.875-1.5 1.375.375 3 .25 3.25-1 3.75-1.5 1.125-2.75 1.875-3.25 1.25-.875 1.125-1.5-.375-1.125-1.125-1.375-2-.5-2.375 0-1.25 1.875-2.125 2.25-5.125.125-6.125.625-1.875 1.125-2.5 1.5-2 1-1.75 2.5.25 2.75.25 3.375-1.25 2.375-1.5 3 .125 2.5-.25 3.375-.625.375-.625 1.625-.25 1.5.125 2.375 1 .875.625 2.125-1 .5-.5 1.875 1.125.875 1.25 2.125-.25 1.75 0 2.75 2 .125 1.875 0zm-10.5-6.375s-.25-1.25 1.875-3.375 2.75-2.25 2.75-4.375-.125-2-1.125-3-2.375-1.625-1.125-3.125 1.125-1.875 2.75-2.25 3.25-2.75 3.375-3.625.25-1.375-.125-2.5-1.375-3.125-1.5-4.5-.25-2.375-.125-3.375 1-1 2.125-2.375 1.375-.75 1.375-2.75-.125-4.5-.75-5-.875-.25-2.25-.75-2-1.75-3.875-2.875-3.125-1.25-3.5-.625.375-1.5-.375 1.625-.625 3.875-1.5 4.5-2.25 1-2.625 2.25 1 2.125-1 4.25-5.625 6.125-8.25 6.625-4.5 1.125-4.5 2 1.125 2 .875 3-2 2-1.75 2.5.875 0 1.375 1.125.5 4.625.5 4.625L776 487.5s-1.75 2.625-.875 3.375 1.25.875 2.25 2 2.25 2.375 3.75 2.5 2.375.875 3.5 1.375 1.5 0 2.875-.125 3.875.375 3.5.25zm-23.612-17.021l.707-1.768s.177 1.945.353 3.005c.177 1.061-.353 2.475.177 3.182.53.708.177 1.061 0 2.122-.177 1.06.707 2.828.707 2.828l1.293 1.527L772 491s.625.875.875 1.5 1.125 1 1.125 1v2.25c0 .875-1 1.375.125 1.625s2.5.25 3.25.25.5.375 1 1.375 1 1.125 1.125 2.5.125 2.375-.375 3-.125 1.125-.75 1.875-1.625.875-2.375 1-1 .125-1.25 1 1.625 1.75-.75 1.625-2.25.5-2.75-.75.875-1.75-.875-2.375-.25 1.875-2.875-1.625-3.5-1.125-3.875-4.25-1.5-3.875-3-6.25-2.125-4-3.375-4.375-1.75 1.125-2.375-.5-.625-.75-.625-2.625-.125-1.75-1-3.5-1-1.625-1.5-3.5-.25-1-2.5-3.875-2.5-3.125-4.5-4.625-2.5-1.75-2.375-3.75-1.25-4 0-4.375 1.5-.75 2.75 0 1.375 1.625 2.375 1.875 1.625.125 2.375.125.5-1 1.75.5 1.5 1.5 2.125 2.875.625 1.875 1.25 2.625 1.125.75 1.75.375 1.25-1.5 1.625-.75.375 1.125.625 1.625 1-1.125 1 1-.75 3.125.375 2.375l2.25-1.5s-.125-.375.375.875.625 2.375 1.75 2.875 1.5.5 1.5.5l1.138.854z"
          display="inline"
          filter="url(#filter12863)"
          opacity="1"
          id="indonesia"
        ></path>
        <circle fill="white" opacity="1" fillOpacity="1" cx = {coord.indonesia.x} 
                                                         cy = {coord.indonesia.y} r= "12" /> 
        <text fill="black" fontSize="14" x= {coord.indonesia.x + X_OFFSET } 
                                         y = {coord.indonesia.y + Y_OFFSET}> 
                                        {countries.indonesia.troopCount}</text>
        <path
          fill={colors[countries.new_guinea.occupant.name]}
          fillOpacity="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          d="M832.75 455.5s.5-2.75 1.5-3.5.25-1 .25-2.25-1-2.5.25-2.75 1.5 0 3.25-.25 3.5-1.25 3.5-1.25l1.5 1.5s.75.75 3 .75 3 1 4 2.75.5 2.5 3.25 4.25 5.5 2.5 7 3 2.75 1.25 2.5 2.75 1.5 2.25-.5 2.75c0 0 5.724 2.462 6.43 4.053.708 1.59 1.945 2.298.531 3.182-1.414.884-3.005.177-2.828 1.237.176 1.06 1.237 1.768 1.59 3.005.354 1.238 1.592 1.945 1.592 3.36 0 1.413-.354 2.297 1.06 3.181 1.414.884 1.591.884 1.591 1.945v2.475s-1.06 1.06-2.828 1.06c-1.768 0-2.652-1.414-3.359-1.414-.707 0-2.475-.353-2.475-.353s-1.237-4.95-4.773-5.834c-3.535-.884-3.535-1.414-3.535-.707s1.237 2.298-.177 2.828c-1.414.53-2.121.53-3.005.53-.884 0 3.005 1.592-1.415 1.415-4.419-.177-4.773-1.768-6.717-.53-1.945 1.237-7.778-3.713-7.778-3.713s-2.652.177-2.652-1.237c0-1.415-.707-1.591.177-2.829.884-1.237.884-1.414.884-2.828s.353-1.768.353-3.182.884-1.945-.353-2.475c-1.238-.53-2.298-.884-2.475-2.121-.177-1.238-.177-1.415-1.06-1.415-.885 0 0 .177-1.415.177-1.414 0-2.475 1.06-3.712-.53-1.238-1.591-1.414-1.591-3.713-1.591-2.298 0-7.247 3.359-3.358 0s4.596-3.536 4.596-3.536-4.066 0-4.243-1.414c-.177-1.414-.53-3.712-1.414-4.066-.884-.353-1.945-.884-1.591-2.121.354-1.237 1.06-5.657 4.596-5.48 3.536.177 4.243 1.59 5.303 2.121 1.061.53 3.006-1.414 3.36.354.353 1.768 0 4.773 0 4.773s1.237.884 1.59 2.651l1.723 1.279z"
          display="inline"
          filter="url(#filter12867)"
          opacity="1"
          id="new_guinea"
        ></path>
        <circle fill="white" opacity="1" fillOpacity="1" cx = {coord.new_guinea.x} 
                                                         cy = {coord.new_guinea.y} r= "12" /> 
        <text fill="black" fontSize="14" x= {coord.new_guinea.x + X_OFFSET } 
                                         y = {coord.new_guinea.y + Y_OFFSET}> 
                                        {countries.new_guinea.troopCount}</text>
        <path
          fill={colors[countries.alaska.occupant.name]}
          fillOpacity="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          d="M254.5 242.25c-.625-1.25-.5.125-.875-2s-1.125-1.875-1.75-2.5-1.5-.75-1.125-1.875.625-1.125.25-2.25-2-1.75-2.5-2.875-.5-.25-.5-2 .5-2-1-2.5-2.5.75-3.25-.875-.625-.75-2.125-1-2.125-.125-2.625-1.125-.75-1.875-1.75-1.875-2.25-.375-2.5-1-1.625-2.375-2.5-2.375-.625.625-2 1.25 2.5 1.25-.5 2-4.375 1-5 .5-2.875 1.125-2.5-.75.5-1.625 1.125-2.125 2.375-.625 1.625-1.125-.375-1.375-3-.75-3.375.875-4.25 1.5-.875 1.875-1.25 2.625 1.125.5-1.75 1.75-1.375-.625-4.375 2-2 2.875-4.25 3.25-.875 0-2.625 1.875-1.5 2.75-3.25 2.75-1.125 3.125-2.75 1-2.75-1.25-1.5-2.25 1.5-.75 2.5-1 .5.375 1.625-1.25.875-2.25 2.625-2.375 1.5 1.5 2.25-.875 0-2.25 1.375-3.5 2.875-2.5 1.125-2.625-1.875-.5-3.5.25-1.75 1.125-3.25.875-1.875-.375-1.875-1-.625-2.625-.625-2.625 1.25-.625-.875-1.125-2.25 1.125-2.125-.5 1.125-1.375.25-2.125-1.125-1.25-2.25-.75-2.375 1.75-1.625-.125 2.25-2.625 2.75-3.375 1.25-2.875 1.5-4-1-.5.5-1.625.875-1.375 2.75-1.25 1.375 0 2.625.625 1.625 1 2.375.625 1.5-1.25 2-1.875 1.125-1 1.25-1.75.75-1.5-.625-1-.875.5-2.75.875-1.625 1.75-2.375.125-.875-2.375-.875-2.375-.75 0-.625-1.75-1.125-4.625 2.25-5.5 5.5-.125 5.625.375-1 1 .5 1.125 1.625.5 2.5-.75 1.875-1.125.875-1.625-1.875-.375-2.375-1.375 0-1.25-.5-2.625-.5-1.625-1.25-2.625-2.75-2.5-.25-3.125 5.125-1.25 4.632-.895c0 0 2.828-3.182 4.596-2.828 1.768.353 3.89 0 5.657-1.415 1.768-1.414 4.596-.707 4.596-.707l2.122 1.768s2.828 2.828 4.596 1.768c1.768-1.06 1.768 1.768 4.95 2.121 3.182.354 4.596 1.06 7.778 2.121 0 0 .884-.353.707.884-.177 1.238-1.945 30.583-1.414 30.936l.152.245 7.5.875s.125.125.625 1.625.875 2.5 2 4.5.125 8 .125 8l2 2.75s1.625.75 2.25.875.375 3.25.25 4.5-1.625.625-2.5.875-1.125 2.375-1.25 3.625-2.372.752-2.372.752z"
          display="inline"
          filter="url(#filter12871)"
          opacity="1"
          id="alaska"
        ></path>
        <circle fill="white" opacity="1" fillOpacity="1" cx = {coord.alaska.x} 
                                                         cy = {coord.alaska.y} r= "12" /> 
        <text fill="black" fontSize="14" x= {coord.alaska.x + X_OFFSET } 
                                         y = {coord.alaska.y + Y_OFFSET}> 
                                        {countries.alaska.troopCount}</text>
        <path
          fill={colors[countries.ontario.occupant.name]}
          fillOpacity="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          d="M333.047 219.639c-.707 2.475-1.06 9.192-1.06 9.192l1.767 1.414s1.415 2.475 3.182 4.243c1.768 1.768 2.829 5.303 5.657 4.596 2.829-.707 3.89 2.475 3.89 2.475l2.12-1.414s2.122-1.238 2.476-.53c.353.707 2.474 1.414 2.474 1.414s2.122-1.238 4.066-1.415c1.945-.176.354 1.591.354 1.591l-4.066 1.945s.884 2.652 1.944 2.298c1.061-.353 1.591 4.066.354 4.95-1.237.884.354 2.651.354 2.651l.707 2.475 1.944 1.415.53 2.298h-.176c-.707 1.944-1.06 18.915-1.06 18.915s1.06-1.414 1.767-1.591c.707-.177 1.768 1.414 2.475 1.59.707.178.353-1.413 1.06-2.12.708-.708.884 0 1.591.53.708.53.53 0 1.591-.177s1.061 2.828 1.061 3.712c0 .884-1.768 1.415-1.768 1.415s-2.475.883-3.535.707c-1.06-.177-2.298 1.414-3.005 2.298-.708.884-2.122.353-3.006.707-.884.353-.353 1.237-.176 2.475.176 1.237-3.89 4.42-4.773 3.535-.884-.884-2.298-2.298-3.89-3.182-1.59-.884.354-2.651 1.061-3.889.707-1.237.177-4.066-.884-6.894-1.06-2.829-1.237-3.89-1.767-4.596-.53-.707-1.768-2.652-2.299-4.95-.53-2.298-2.828 1.59-5.303.884-2.475-.707-5.833 1.06-5.833 1.06s.353-4.95-.354-5.303c-.707-.353-19.799.354-19.799.354v-2.829c0-2.298 3.89-45.431 3.89-45.431l18.384.53-1.945 2.652z"
          display="inline"
          filter="url(#filter12875)"
          opacity="1"
          id="ontario"
        ></path>
        <circle fill="white" opacity="1" fillOpacity="1" cx = {coord.ontario.x} 
                                                         cy = {coord.ontario.y} r= "12" /> 
        <text fill="black" fontSize="14" x= {coord.ontario.x + X_OFFSET } 
                                         y = {coord.ontario.y + Y_OFFSET}> 
                                        {countries.ontario.troopCount}</text>
        <path
          fill={colors[countries.northwest_territory.occupant.name]}
          fillOpacity="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          d="M334.836 217.07c.707-2.476 8.818-10.16 8.818-10.16s3.182-.353 4.596-1.413c1.414-1.061-1.768-4.243-1.768-4.243l.707-2.121 2.122 1.767s.707 1.415 2.828 1.415 1.414-2.122 2.829-2.475c1.414-.354 2.828-3.89 2.828-3.89s2.828 1.061 5.657-1.767c2.828-2.829.707-1.414 0-2.829-.707-1.414.707-2.474.707-2.474l-2.121-.708s1.414-1.06 0-3.182c-1.415-2.12-1.768 1.061-3.182 2.122-1.415 1.06-1.061 2.121-4.95 1.414-3.89-.707 0-2.121-.354-3.536-.353-1.414-4.242.708-4.95-1.414-.706-2.121-1.767 1.06-1.414-1.06.354-2.122-.353-5.304-1.767-6.01-1.415-.708 2.828-7.425 2.828-7.425s2.829 1.414 3.182-1.061c.354-2.475 1.768-2.121 1.768-3.536 0-1.414-3.536-.353-3.536-.353l-.707 2.828s-4.242-3.182-4.242 0-1.415 3.182-3.536 7.425-.354 6.717-.354 6.717 2.122.707 1.415 2.829c-.707 2.121-4.95 1.768-4.95 1.768l-.354-3.89h-2.828s-.354 3.89 0 5.304c.354 1.414-7.778.353-9.9-1.414-2.12-1.768-4.596 1.414-6.717 2.474-2.121 1.061-3.89.354-6.01-.353-2.122-.707-1.061 2.828-5.657 2.475-4.597-.354-2.122-6.364-3.182-4.243-1.061 2.121-5.657-1.768-8.132-3.889-2.475-2.121-7.071-1.414-7.071-1.414l-.354-2.475h-2.475l-3.182.707s-2.474 1.06-4.596.707c-2.121-.353-1.767 1.768-1.767 1.768s-2.475 1.06-5.657.707c-3.182-.354-2.829 1.06-4.243 2.121-1.414 1.061-6.364-1.414-9.546-2.828-3.182-1.414-5.26 1.54-8.442.478 0 0-1.677 31.317-1.427 32.067s82.625 3 86.75 2.875 2.336.194 2.336.194z"
          display="inline"
          filter="url(#filter12879)"
          opacity="1"
          id="northwest_territory"
        ></path>
        <circle fill="white" opacity="1" fillOpacity="1" cx = {coord.northwest_territory.x} 
                                                         cy = {coord.northwest_territory.y} r= "12" /> 
        <text fill="black" fontSize="14" x= {coord.northwest_territory.x + X_OFFSET } 
                                         y = {coord.northwest_territory.y + Y_OFFSET}> 
                                        {countries.northwest_territory.troopCount}</text>
        <path
          fill={colors[countries.venezuela.occupant.name]}
          fillOpacity="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          d="M317.375 414.875c1.875-1.25 1.5-3.75 1.5-4.5v-3.125c0-1-.125-1.75 1-3s1.75-2.375 1.75-2.375l1.25-1.125v-2l.75-2.25s.5-1.125.625-1.625-.25-2.5-.25-2.5l.25-1.625 3.125-.875s.375.375 1.375 0 2-1.25 2-1.25l2.25-1.25s1.5-1 2-1.5 2.25-1.125 2.25-1.125.875-.25 1.5-.25 2.75-.625 2.75-.625.125-.625.875-1.125 1.25-1.125 1.875-1.25 4-.625 4-.625 1.25.875 1.375 2.125-.375 2 .625 1.875 2-.375 2.5-.625.25-1.375 1.5-.5 1.375 1.125 1.875 1.125S358 384.5 358 384.5l5.5 1.875 1.875-.375c.625-.125 3.75-.375 3.75-.375s1.375.375 1.875.875 3.625 2.375 4.625 3.875 2.5 2 2.75 2.625 1.25 1.25 1.75 1.25.5 1 1.125 1.125 2 .125 2 .125.125.5.625 1.125 1.625-.625 1.875.75-.125 2.125.625 2.125 1.5-.5 1.5-.5l1.25-.5s0-1 1 0 1.75.75 2.625 1-.375.875 1.75 1.375 4.125.75 4.625.75.5-2 2.25-.375 3 2.375 3 2.375-4.33 3.574-4.86 4.634c-.53 1.061-.884 3.36-2.121 3.536-1.237.177-8.662.53-8.662.53s.354 2.122-.707 2.122c-1.06 0-11.49-.354-11.49-.354l-1.415-4.243s-1.237.884-1.414-.883c-.177-1.768-.177-4.597-.177-4.597s-2.651 1.415-4.242 1.945c-1.591.53-3.006 3.182-4.42 2.652-1.414-.53-2.121-2.299-2.475-.884-.353 1.414.177 5.656-.884 6.01-1.06.354-1.414-.265-2.298.796-.884 1.06-3.27 1.325-3.977.707-.707-.62-1.238-1.326-2.033-1.591-.796-.265-1.238-.707-2.121-.796-.884-.088-1.061-.53-1.768.265-.707.796-2.21 2.122-2.475 2.829-.265.707-1.68 3.27-1.326 4.242.354.973 1.768.708 1.768 2.475 0 1.768-.53 2.652-1.503 2.917-.972.265-5.833 1.856-5.833 1.856s-.796-2.121-1.326-2.651c-.53-.53-1.503-.796-2.21-.973-.707-.176-1.856-1.414-2.74-1.325-.884.088-3.182.088-3.8-.62a4.611 4.611 0 00-3.271-1.59c-1.591-.089-2.298 1.06-3.359-.619-1.06-1.68-3.005-3.977-3.535-4.066-.53-.088-3.006-.353-2.326-1.074z"
          display="inline"
          filter="url(#filter12883)"
          opacity="1"
          id="venezuela"
        ></path>
        <circle fill="white" opacity="1" fillOpacity="1" cx = {coord.venezuela.x} 
                                                         cy = {coord.venezuela.y} r= "12" /> 
        <text fill="black" fontSize="14" x= {coord.venezuela.x + X_OFFSET } 
                                         y = {coord.venezuela.y + Y_OFFSET}> 
                                        {countries.venezuela.troopCount}</text>
        <path
          fill={colors[countries.madagascar.occupant.name]}
          fillOpacity="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          d="M659.75 534c.25 1 1 .75 1 3s.5 5.5-1 3.5-1.5-2.75-1.5-1.5.25 3.5.25 3.5 1.23 1.7-.36 1.7c-1.591 0-1.768-.176-1.768.531 0 .707.177 2.121.177 2.121l-1.061 1.061-.53 2.298s1.767.177.707 1.945c-1.06 1.767-1.414 2.298-1.414 2.298s.176-1.591-.177 1.944c-.354 3.536-.354 4.066-.354 4.066s1.06-.353-.353 1.414c-1.415 1.768-1.945 2.298-2.298 3.182-.354.884.353 1.768-.708 2.652-1.06.884-1.59 1.591-1.59 1.591l-1.061 1.06s-.354 1.415-.354 2.122c0 .707-.53 1.237-.53 1.237s-.53.53-.53 1.238c0 .707.176 1.06-.708 1.768-.883.707-.53.884-1.59 1.767-1.061.884-1.415-.353-1.415 1.591 0 1.945-.53 2.829-1.414 2.829-.884 0-9.37.177-10.783 0-1.415-.177.884-7.248-1.061-8.485-1.945-1.238-3.182-5.48-1.945-6.364 1.238-.884.53 0 1.415-.884.884-.884.884-.884 1.414-1.945.53-1.06 1.414-1.06 1.414-1.06s-1.06-2.299-.353-2.299c.707 0 .353-2.651.353-2.651s.354-1.238.884-2.122c.53-.883-.53-1.767.884-1.944 1.414-.177 2.121.177 2.121-.707 0-.884-.884-1.06-1.59-1.238-.708-.176-1.061 0-1.061-1.237 0-1.238-.53-.707-.884-1.945-.354-1.237-1.415-.53-.177-2.121 1.237-1.591 1.237-.53 1.59-2.121.354-1.591-1.06-2.652.708-2.652s2.298.53 4.066-.177c1.768-.707-.177-.884 2.652-.707 2.828.177 3.005 1.06 4.065 0 1.061-1.06 1.591-.707 1.768-1.944.177-1.238 0-1.591 1.238-2.122 1.237-.53 1.237 0 2.12-.707.885-.707 1.592-1.59 1.415-2.651-.177-1.061-1.06-1.591.53-1.591 1.591 0 1.415.53 2.122-.354.707-.884.53-.884.884-2.475.353-1.59 0-1.944.884-2.475.883-.53 2.474-2.298 2.474-2.298s.53-1.59 1.238.884c.707 2.475 0 2.121.884 2.828.884.708 1.06.177 1.06 1.061 0 .884-.353 2.652-.353 2.652l-1.395.936z"
          display="inline"
          filter="url(#filter12887)"
          opacity="1"
          id="madagascar"
        ></path>
        <circle fill="white" opacity="1" fillOpacity="1" cx = {coord.madagascar.x} 
                                                         cy = {coord.madagascar.y} r= "12" /> 
        <text fill="black" fontSize="14" x= {coord.madagascar.x + X_OFFSET } 
                                         y = {coord.madagascar.y + Y_OFFSET}> 
                                        {countries.madagascar.troopCount}</text>
        <path
          fill={colors[countries.north_africa.occupant.name]}
          fillOpacity="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          d="M544.625 385.375c-.875-1-1-1.375-1.375-2.125s-.625-2.125-1.875-2.25-1.125 1.125-1.5-.75-.75-3.375-1.25-3.75-1.375-.75-2.5-1.875-1.25-2.25-1.25-2.25L532.75 371s-5.5.25-6.125.25-1.75.125-2.5.625-.375.75-1.75 1.375-3.625 1.75-4.25 2-3.5.375-3.5.375 0 1-1.125 1.75-2.625 1.625-3.875 1.5-1.394-.569-2.375-.375c-1.848.365-3.059 1.582-3.75 1.5-.633-.075-1.75.375-2.875.75s.125.5-2.25.5-3.625 0-4.375-.125-1.375.25-2 .375-1.5.25-1.268.42c-1.414 0-2.121 1.06-2.121 1.06l.353 4.597-3.182 3.535s-.707 2.829-1.414 4.95-1.768 4.242-1.768 4.242l-1.414 3.89s-1.561.806-1.436 1.431.375 1.875-.125 2.25-1.125 0-1.75 1.25-1.125 2.375-1.125 2.875.625 1-.25 2-1.75 1.125-2 3.25-1.25 4-.25 5.25 1.625 2.25 1.625 3.625-.375 1.25-.25 3.25.375 1.875.375 3.25-.125 3.25-.375 4.875-.75 2.125-1.125 4-2.625 2.625-.875 4.25 1.5 3.125 2 4.5 5 1 5 3.875 3.375 3.25 3.625 4.75-.625 3.625 2.375 4.875 2.75 3.125 3.375 3.625 3.375.875 4 1.625 1.5 2 2.125 2.625 1.25 1.625 3.375 1.5 2.375 0 5.75-.375 5.75-.5 6.625-.625 2.75.5 4.125-.125 1.125-1.75 2.875-2.125 2.375 0 3.5-.25 5.5-.25 6.125.25 1.375 0 2.125 1.625-1.5 4.125 3.25 3.875 7.5-1 8.125.125-1.5 2.75-1.125 4.25.875 1.875.375 2.625l.57.307c.53 1.061.53 1.591 1.238 1.945.707.354 2.652-1.237 2.652-1.237s1.59 0 3.182.353c1.59.354 1.767-.353 3.358-.707 1.591-.354 1.945 1.237 1.945 1.237s1.237.884 2.652 0c1.414-.883 1.06-1.237.53-2.651-.53-1.414.353-1.768.707-5.657.354-3.89-1.237-1.945-1.237-1.945s-.53-1.237-.354-3.712c.177-2.475.884-.707 1.414-1.768.53-1.06 1.238-1.06 2.122-1.767.883-.708 2.12-.708 3.005-1.238.884-.53 1.414-1.59 2.828-2.121 1.414-.53 2.829-1.238 5.127-2.298 2.298-1.061 1.767-2.122 1.767-3.006 0-.883 2.299-3.358 2.299-3.358s-.53-2.122-1.415-3.36c-.884-1.236-.353-2.65-.353-3.535 0-.883.353-1.414.884-2.12.53-.708.176-1.062.176-1.062l.884-1.767s.53-1.415.53-2.652-.706-.707-1.414-.884c-.707-.177-.176-.353.884-.884 1.061-.53.707-1.768.884-2.828.177-1.06-.353-5.48-.53-6.364-.177-.884-3.89.177-4.773-.177-.884-.353-1.414-1.06-1.414-1.06s-.707-2.122-.884-3.183c-.177-1.06-2.652.177-3.536 0-.884-.176-.176-1.414-.53-2.651-.354-1.238-1.768-.707-2.652-.707-.884 0-2.298-.707-3.535-1.591-1.238-.884-1.591.353-3.005.53-1.415.177-1.415-.177-1.945-1.06-.53-.885-2.298.53-3.889.353-1.591-.177-1.237-.884-2.121-2.298-.884-1.414-1.768-.354-3.713-.884-1.944-.53-1.237-.707-1.414-2.121-.177-1.415-1.414-1.238-1.414-1.238s-.177-1.59-.354-2.828c-.176-1.238.177-3.182.177-3.89 0-.706-.353-3.358-1.59-3.888-1.238-.53-.354-1.768-.354-1.768s-.53-1.768-.354-2.652c.177-.884 1.414-1.944 2.298-1.944.884 0 1.414-1.061 1.414-1.061s-1.414-2.121-2.121-3.359c-.707-1.237 1.237-1.06 1.237-1.06l.884-1.061s.354-.53 1.945-1.414c1.59-.884.683-2.909.683-2.909z"
          display="inline"
          filter="url(#filter12891)"
          opacity="1"
          id="north_africa"
        ></path>
        <circle fill="white" opacity="1" fillOpacity="1" cx = {coord.north_africa.x} 
                                                         cy = {coord.north_africa.y} r= "12" /> 
        <text fill="black" fontSize="14" x= {coord.north_africa.x + X_OFFSET } 
                                         y = {coord.north_africa.y + Y_OFFSET}> 
                                        {countries.north_africa.troopCount}</text>
        <path
          fill={colors[countries.greenland.occupant.name]}
          fillOpacity="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          markerMid="none"
          markerStart="none"
          d="M429.125 209.875s.625 3.875-.25 5.5-1 .75-1.5 3.125-.125 3.25-1 4.625-.625-.875-1 2.75-.125 4.5-1 4.875.25 1.75-1.25 1.75-2 1-2.375-.375.25-2-1.25-2.125-2.375 1.625-2.625-.125.375-2.375-.875-2.875 1.25 3.625-2.875-1.25-3.375-8.25-3.375-8.25-1.25-1.375-1.25-2.25.875-3.625-.25-5.125-2.25-4.5-.875-5.375 2.75-.625 3.125-2.625.25-1.75.5-2.75.75-1.375-.25-1.5 0 .375-1.875-.125-1.625-1.25-2.125-1.375.375.75-1.25.125-2.875-1.125-1.125-1.75 2.875-.875 3.625-.625 1.125 1.625.875-.25S404.5 191 404.5 189.75v-2.25c0-1.25-.25-1.875-1.25-2.875s-.75-1-1-2.625-.25-1.5-1.125-2.5-1 .375-1.625-1.375-.625-2.125-1.875-2.125-1.125.75-2.125-.625-.75-1.625-2.375-1.5-2.875.875-3.125 1.375.375 1-1.25 1.125-2 .125-2.875.125-1.75.375-1.75-.125c0 0-1-1.5-2.625-1.125s-2 1.5-2.5.25-1.5-1.125-1.625-1.75-1.625.125-.125-1.5.5-2 2.375-1.875 1.5.25 2.5-.25 2.375-.625 1-.75c0 0 .5-.75-.875-1s-2.875.5-2.875-.5-1.25-2.125.5-2.125 2.75.5 3.625-.375.875-.625 2.125-.5 2.5.75 2.875-.25 2.375-1.125.75-1.625-2.5-.375-2.125-1.125 1.375-.875 1-1.75-2.125-1.625.375-1.75 3.75 1 4.125-.375-1-2.5 1.25-2.5 4.625-1.125 4.75-1.875-.5-1.625 1.625-1.125 1.75 1.625 2.875.25-.125-1.75 2.125-1.25 2.5.75 3.375.125-.75-.875 1.375-.625 1.75 1 2.125-.875-1.375-1.625.75-2.125 2.25 0 3.25-1.375.125-1 2-1.375 2.125 0 1.25-1.375-2.5-2.125 0-2.375 3.875-.5 4.125-1.25c0 0-.125 1 1.375.625s1.25-.875 2.125-2 .625-1.375 1.5-.75-.125 1.125 2.125 0 .5-1.125 2.75-.75 2.125.125 4.75.25 1.25.5 2.75.875 1.125.25 3 .25 1.5-.375 2.625.375.625.875 2.875.875 2.875-.625 3.25.75-.625 1.5 2.125 1.875 3.625-.125 2.125 1-4.625 1.25-3.75 2 .75.5-1.625 1-5.875 1-3 1.375 4.875-.875 5.625.375-1 1.375 2.25 1 1.875-1.125 4.5-.625 2.125 1.25 3-.375-1.5-2.5 1.375-1.875 2.25.625 4-.375 2-3 2.75-.625.625 2.875-1 3.625-1.5-.375-2 1.375-.375 2.25-1.625 3.25-1.875.125-1.625 1.875.25 1.5-.125 3.25-1.25 2.25-.125 3.25 1.125 0 1.875 1.5 1.125 1.5.375 3.25-.875.875-1.125 3-.5 3.375.375 2.75 1-2.375 1.125-.625.625 2.875-.875 3.5-1.375-.25-1.625 1 .625 1.625-.5 2.625-.125 2-1.375.875-2-2.875-3-1.75-2.375.125-1.25 1.5 1.875 1 2.125 1.5.125 1 .5 1.75.125 1.125 1.125 1 1.375.375 1.125 1.25-.375 1.375.375 2.25 1 .875.375 1.25-.75.5-1.625 1-.75 1.25-1.25 1.375-1.5.75-1.625-.5-.25-2.875-1-3.5-1.875-2.25-2.125-.75 0 2-.375 2.75-1.875-.25-.375 1 2.125 1.625 2.125 1.625 1.375.75.75 1.375.125.875-1.75 1.125-1-1.625-2.75.375-3 2.5-3 2.5l-.875-1s-.75-2.125-1-.75 0 1.25-1 3.375-.5 2.625-1.625 2.75-2-.75-2.625.125.25.625-.875 1.5-1.5 1-2.25 1 .375-2.125-1.125.125-.625 2.5-1.875 2.75-1.5.25-2.625.25-1.75.125-2.875.125-2 .125-2.75.5-1.5 1.25-1.5 1.25v.75z"
          display="inline"
          filter="url(#filter12895)"
          opacity="1"
          id="greenland"
        ></path>
        <circle fill="white" opacity="1" fillOpacity="1" cx = {coord.greenland.x} 
                                                         cy = {coord.greenland.y} r= "12" /> 
        <text fill="black" fontSize="14" x= {coord.greenland.x + X_OFFSET } 
                                         y = {coord.greenland.y + Y_OFFSET}> 
                                        {countries.greenland.troopCount}</text>
        <path
          fill={colors[countries.iceland.occupant.name]}
          fillOpacity="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          markerMid="none"
          markerStart="none"
          d="M474 212.5s2 1.875 2.5.875-.625-2.25.875-1.125 1.375.75 1.875 1.375 3.5-1.5 2.375.5-1.875 2.75-1.125 2.625-.125-.75.875.5.875 2.25 2.25 1.125l1.25-3.875s3.5.125 3.25 1.375-1.125 1.125.75.125.875-2.75 2.125-1.625 1.875 2.25 2.375 1.125-1.125-2.375.375-2.125 1.625 1.625 2.5 0-.125-2.5 1.25-2.25.75.625 1.75-.25.75-1.75 1.75-.875 1 1.25 1 1.25 2 .25 2.5.5-.25-1 .25 1 .625 2.625 1.25 2.375 1-1.125 1 .5-1.125 2.125.375 1.875 1.875-.375 2 .75.75 2 .75 2 .125.875 0 1.375-.375.75-.125 1.375.5 1.625 0 1.875-1.25.75-2.125.875-1.375.75-1.625 1.375.75.25-.375 1.625-.75 1.625-1.5 1.875-1.625.75-1.625.75l-3.375.5-.75-1.375s-.5-1.125-1-.625.125 1.5-.375 1.625-1.75-2.125-1.75-1.125.625 2.75.625 2.75.125 1.5-.5 1.75-.625 1-2.25 1.125-1.75.875-2.625 1-1.125 1.875-2.75.625-6.125-3.25-7-3-1.25.625-3 .125-2.5.625-2.875-.125-.5.375-.125-1.375 2-2.625 2-2.625.625-.375.5-1 0-.875-.75-1-.5-.5-.875-1.5-.75-.875-1.75-.625-1.25 1.375-2.375.125-1.625-1-1.125-1.75.375-1 1.625-1.25 1.375 1 1.875-.5 1-2.125 1-2.125-.5-.25-1.375-.125-.625 1.125-1.625-.875-2.125-2-2.125-2-.25 0 .375-1 1.25-1 1.875-2-.5-1.875.375-2.75 1.125-.25 1.125-.25l.25.5z"
          display="inline"
          filter="url(#filter12899)"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          letterSpacing="normal"
          opacity="1"
          textAnchor="start"
          wordSpacing="normal"
          id="iceland"
        ></path>
        <circle fill="white" opacity="1" fillOpacity="1" cx = {coord.iceland.x} 
                                                         cy = {coord.iceland.y} r= "12" /> 
        <text fill="black" fontSize="14" x= {coord.iceland.x + X_OFFSET } 
                                         y = {coord.iceland.y + Y_OFFSET}> 
                                        {countries.iceland.troopCount}</text>
        <path
          fill={colors[countries.great_britain.occupant.name]}
          fillOpacity="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          markerMid="none"
          markerStart="none"
          d="M466.514 294.238s-.354.53-1.768.53c-1.414 0-1.591-.176-2.475.354-.884.53-1.944.707-2.828.884-.884.177-1.945 1.238-1.945 1.238s0 .707-1.237 1.06c-1.238.354-1.061.177-2.298.177-1.238 0-.884-1.06-1.061-1.768 0 0-4.152.412-2.902-.338s2.25-.25 1.375-.875-2.25-.75-.75-1 1.875 0 1.875-.5-1 .625 0-1 1.25-1.625 1.875-2.125.25-2 1.125-1.75 1.875.5 1.875.5l.5-1s-3.125-.125-3.375-.625c0 0-1.625-1.125-2.125-1.125s-1.625.125-1.25-.375 1.125-2 1.125-2-1.625-1.25-1-1.75.75-.375.75-1.25-1.125-1 .125-2.25 1.5-1 2.375-1.75.875-.875 1.5-.25.625 1.625 1.75.25 1.25-2.125 1.25-2.125-.5.125 1.375-.875.375-1.875 3.125-1.5 2.25.5 2.875.375 1-1.75 1.375-.375-.5 1.625 1.25 2.125 2.5.25 2 1.125-.625.75-.125 1.5.875 1.125.875 1.75-.375 1.125-1.25 1.5-.75-.125-1.875 1-1.75.875-1.75.875-.25-.625-1-.125-.375 1.25-1.5.5-2.5-.75-2.5-.75-.5 0-.375.75.75 3.25.75 3.25 1.125 2 .75 2.875-2.25 1.375-.625 1.5 1.5-.25 1.5.875 0 1.75 1 1.625 1.75 1 1.639.863zm12.197-10.96c-.53-.618-.265-.53-.442-1.149-.176-.618.089-.707.089-1.326 0-.618.088-.883.353-1.679.265-.795-1.414-1.503-1.414-2.121 0-.619-1.06-1.414-1.237-1.768-.177-.354-.707-.796-1.326-.707-.619.088-.619.442-1.326.795-.707.354-.707-.176-1.237-.618-.53-.442-.442-.973-.442-1.945 0-.972.088-.53.442-.972.353-.442.442-.354.972-.972.53-.62.265-.442.265-1.061s0-1.15-.265-1.856c-.265-.707-.972-.177-1.238-.884-.265-.707-.353-.53-.795-.796-.442-.265-.619-.088-1.591-.176-.972-.089-.265-.62-.354-.973-.088-.353-.088-.53-.265-1.502-.177-.973-.619-.265-1.149-.177-.53.088-.707.088-.884-.796-.177-.883 0-.53-.088-.972-.089-.442-.177-.442-.796-1.414-.618-.972.089-.442.796-.972.707-.53.619-.796 1.237-1.238.619-.442 0-.618-.176-1.326-.177-.707-.53-.883-.53-.883s-.62.176-1.68.176-.972-.176-1.503-.884c-.53-.707.089-.707.884-1.325.796-.62.53-.973 1.326-1.857.795-.883 1.237-.795 2.21-.972.972-.177.53-.707.972-1.768.442-1.06.619-1.237.884-1.856.265-.618.795-1.414.972-2.563.177-1.15 1.625.759 4.625-.241s3 0 3 0 1.5 2.5-1 3.5-1 5-1 5l.739.05s.884-.708 1.591-.796c.707-.088.619.354 1.503.354.883 0 .707-.53 1.767-1.238 1.061-.707.796.796.796 1.414 0 .619 1.414 2.387 1.414 2.387l-.353.619s-.62.353-.62 1.325c0 .973-.264.707-.441 1.15-.177.441-.53.441-.972.707-.442.265.088.441.265 1.325.177.884-.089.442-.53.53-.442.089-.884.089-1.238.708-.354.618-.088.707-.619 1.414-.53.707-.442.442-1.59.795-1.15.354-.62.354-.354 1.68.265 1.326 1.149-.442 2.74-.619 1.59-.177 1.237 0 2.298 0 1.06 0 .619.089 1.326.619.707.53.176.795.53 1.414.354.619.707.265 1.15.884.441.619 0 1.237 0 2.121v.796s1.06 3.182 2.474 3.977c1.414.796.884.796 1.503 1.326.618.53 1.767 3.447 2.12 3.89.354.441.354.795.531 2.386.177 1.59 0 1.237-.177 1.856-.176.619-.265.53-.53 1.502-.265.973 0 1.15 0 1.503 0 .354.53.619 2.298-.265s1.06-.619 2.21-.972c1.149-.354.884-.442 1.944-.177 1.061.265.884.442 1.857 1.414.972.972.353 1.149.618 1.856.265.707-.088.619-.353 1.326-.265.707-.265.619-.707 1.503-.442.883-.177.707-.53 1.237-.354.53-.62.265-1.68.53-1.06.266-.884.884-1.414 1.415-.53.53-.354.707-.442 1.149-.089.442.442 1.237.442 1.237s.795.354 1.237.796c.442.441.265.795-.265 1.679s-.707.442-1.768.884c-1.06.442-1.414 0-2.475-.089-1.06-.088-.972.354-2.475.884-1.502.53-1.414.089-2.563 0-1.149-.088-1.06-.088-2.21 0-1.149.089-1.06.442-2.386 1.238-1.326.795-.795 0-1.237-.354-.442-.353-.707-.442-1.326-1.06-.619-.62-.619-.354-1.15-.177-.53.177-1.679 2.21-2.474 2.563-.796.354-.884.177-2.033.177-1.15 0-.796 0-1.326.088-.53.089-.884.972-1.59 1.768-.708.795-.531.265-1.857.442s-1.237-.089-1.414-.442c-.177-.354.177-.354.618-.972.442-.62 1.238-1.768 1.768-2.652.53-.884.796-.442 2.122-1.237 1.325-.796.265-.354.883-1.68.62-1.326.708-1.326 2.033-1.768 0 0 .572-1.17-.553-1.795s-1.625-.375-2.75-.875-2-.25-1.75-.938c1.125-1.312 1.375-1.937 1.75-2.562.375-.625.125-1.25.625-1.25s.75.25 1.375-.125.75-.625.75-1.375-.125-1 .125-1.75 1-1.375.375-1.875-.125-.375-.875-.625-1.25-.75-1.25-.75l.25-1 .188-1.75s.187.125 1.437.625 2 2.125 2 2.125c.266.472.651.46.336-.222z"
          display="inline"
          filter="url(#filter12903)"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          letterSpacing="normal"
          opacity="1"
          textAnchor="start"
          wordSpacing="normal"
          id="great_britain"
        ></path>
        <circle fill="white" opacity="1" fillOpacity="1" cx = {coord.great_britain.x} 
                                                         cy = {coord.great_britain.y} r= "12" /> 
        <text fill="black" fontSize="14" x= {coord.great_britain.x + X_OFFSET } 
                                         y = {coord.great_britain.y + Y_OFFSET}> 
                                        {countries.great_britain.troopCount}</text>
        <path
          fill={colors[countries.scandinavia.occupant.name]}
          fillOpacity="1"
          style={{ marker: "none" }}
          markerEnd="none"
          markerMid="none"
          markerStart="none"
          d="M579.125 237c-.625-.125-1.5-.5-1.875-1.25s-1.25-1.625-1.875-1.375-.375.375-1.625.375-1.875-1.75-2.875-1.125-.25 1-1.5 1.25-2.625.375-3.875.375-1-.25-2.375 0-2.375 1-2.875-.25-.625-.875-.625-2.125.75-2.125 1-3.25-.5-2.25.375-3.375 1.5-1.375 1.875-2 .75-1.375.875-2.25.125-.625.125-1.5-.375-1.625-.875-2-.375-.375-1.5-.5-.75-.875-1.875.375-2.125 1.375-2.25 2.375.5 1.375-.125 2.625-.75 1.125-1 1.625.25 1.25-.25 1.75-.875.5-1.75 1-1.5.125-1.625 1.625-.375 1.125 0 2.125.625 1.125.875 1.875.75 1.125.75 2.625.375 2 .375 2 .5 1.75.375 2.625-.5 2.375-.875 3.25-.75 1.375-1.375 2-.375.75-1.125 1.5-1.625 1-2.25 1.375-.75 1.625-.75 1.625v2.375s.625 1.625-.5 2.125-1.375.625-2.125 1.75 0 2-.875 2.75-.625.875-2.125.75-1.75-.125-2.25-.75-1.125-1.75-1.875-1.875-.625.125-1.125-.125-.125-.75-.875-.75-1.125.5-1.125 0v-1.375-4.625l-1.875-2.875.625-1.625-.75-1.25-.875-.5s-1.375.5-1.5 1-.125.875-.375 1.375-1.375 2-2.25 2.125-2 .25-2 .25-.375 1-1.125.625-.5-.25-1.375-1.25-1.125-2.125-1.125-2.625.25-.625-.375-1.125-.625-.5-1.25-1.125-1.5-1.125-1.375-2.25.375-2.25.625-3.375-.375-2.25-.375-2.25l-.475-.909c-.53-1.06 0-.883-.884-1.767-.884-.884-1.59-1.238-1.06-2.652.53-1.414-.354-2.298 1.06-2.652 1.415-.353 1.238 1.591 1.591-.883.354-2.475-.707-1.768.707-3.36 1.415-1.59 1.591-1.944 1.591-1.944s.884 0 1.238 1.238c.353 1.237.353 2.298 1.06 1.414.708-.884.884-1.945 1.415-2.652.53-.707 1.414-1.59 1.414-1.59s-1.591-2.652.354-2.476c1.944.177 1.944.53 2.474-.176.53-.708.354-.708 1.591-1.061 1.238-.354 1.415-.177 1.591-1.238.177-1.06.707-1.06 1.415-1.767.707-.707.707-1.06.883-2.475.177-1.414-.176-1.238 1.415-3.359 1.59-2.121 1.59-1.944 2.121-3.359.53-1.414.53-1.237 1.06-2.121.531-.884 1.238-.53 1.768-1.237.53-.708.708-1.591.708-1.591l.883-1.591s-1.767-.708-.176-1.415c1.59-.707 1.767-.883 3.005-1.237 1.237-.354 2.121-.354 2.121-.354s1.15 1.68 1.326.442c.177-1.237-.53-1.414.53-2.21 1.061-.795 1.68-.706 2.033-.441.354.265.177.53.973.353.795-.177 1.679.884 1.944-.353.265-1.238-1.149-2.21.53-2.917 1.68-.707 2.564-.089 3.094-.619.53-.53-.265-.795.796-1.326 1.06-.53 1.414-.265 2.474-.618 1.061-.354 1.15-1.503 1.68-1.591.53-.089 1.237 0 1.768.53.53.53-.973.972 1.149.619 2.12-.354 4.95-1.68 5.745-1.061.795.619.088 1.68 1.149 1.68 1.06 0 2.121-.443 2.652-.089.53.354.441.619 1.237.972 0 0 .925 3.968.3 4.468s.75 3.625 0 4.125-1.125 6.25-1.125 8.875 1.375 6.75 1 8.875.625 5.125.625 5.125.625.625.625 2.25.875 2.5.875 2.5.438.125.5.688c.063.562.063 1.437-.188 1.687-.25.25-.812.688-.812 1.625 0 .938.25 1.313-.063 1.75-.312.438-.562.563-.687 1.625-.125 1.063-.313 2.5-.063 3.063.25.562.688 2.687-.187 2.437z"
          display="inline"
          enableBackground="accumulate"
          filter="url(#filter12907)"
          opacity="1"
          overflow="visible"
          visibility="visible"
          id="scandinavia" 
        ></path>
        <circle fill="white" opacity="1" fillOpacity="1" cx = {coord.scandinavia.x} 
                                                         cy = {coord.scandinavia.y} r= "12" /> 
        <text fill="black" fontSize="14" x= {coord.scandinavia.x + X_OFFSET } 
                                         y = {coord.scandinavia.y + Y_OFFSET}> 
                                        {countries.scandinavia.troopCount}</text>
        <path
          fill={colors[countries.japan.occupant.name]}
          fillOpacity="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          markerMid="none"
          markerStart="none"
          d="M829.436 335.25c0-1.237.53-4.419-.177-4.596-.707-.176-.707-.707-1.944-.53-1.238.177-2.652-.53-2.652-.53s-.353-1.238 1.768-2.475c2.121-1.238 3.359-1.945 3.359-1.945l-1.06-.707s-2.299-.177-1.238-.884c1.06-.707 1.237-1.59 2.121-2.651.884-1.06 3.005-6.541 4.243-8.662 1.237-2.122 4.066-1.415 4.066-1.415l1.944-4.95s-1.59-3.712 1.06-4.949c2.652-1.237 2.83.177 3.536-2.828.707-3.006 2.829-2.475 3.182-3.536.354-1.06.707-1.06.177-2.828-.53-1.768-1.945-3.36-1.945-3.36s-.707-2.65-.707-4.065c0-1.414-.353-3.712.884-4.243 1.238-.53-1.06-3.358-1.06-3.358s.707-1.061-.177-1.768c-.884-.707-1.414-1.591-1.414-2.475 0-.884.176-3.182.176-3.182s.884-1.414 1.591-1.591c.707-.177 1.415.177 1.415-1.591s-.884-4.42-.884-4.42-3.713-5.48-4.42-5.833c-.707-.354-.707-.707-.176-1.768.53-1.06 4.065 4.243 6.54 4.596 2.475.354 4.773 0 4.773 0l2.298-1.06 4.597.176s1.944.177 2.298 2.122c.353 1.944 2.828 1.237 1.59 3.005-1.237 1.768-1.06 2.652-2.297 2.475-1.238-.177-1.061-1.06-1.945-.884-.884.177-1.591 0-1.591 1.945 0 1.944 1.414 2.12.177 3.712-1.238 1.59-.707 2.298-2.475 2.298-1.768 0-3.359-.177-5.127.177-1.767.353-2.651-.884-2.651.707 0 1.59 0 1.944.884 2.121.883.177 1.59 0 1.237 1.06-.354 1.061-1.414 1.769-.707 2.122.707.354 1.59-.53 1.59.354l3.006.176.53 1.768s.354 0 1.415.177c1.06.177 1.767-.707 2.121.53.354 1.238.884 1.768.884 1.768s.53 0 .707 1.238c.177 1.237.354 1.59.354 2.474 0 .884-.884 3.713-.884 3.713s-.707.707-.53 2.121c.176 1.414.883 0 1.06 1.768.177 1.768.177 2.298.177 3.535 0 1.238-.177 1.061.884 1.945 1.06.884 1.414 1.768 1.414 1.768s.884.53.884 1.767v2.298s-.53.177-1.238.177c-.707 0-1.59-.177-1.59-.177s-.177.53-.531 1.768c-.354 1.238-1.945 1.945-1.945 1.945s0 1.768-.707 1.944c-.707.177-1.237.177-1.944.354-.707.177-1.238 0-1.591.884-.354.884 0 1.06-.884 1.237-.884.177-1.768-1.414-1.945.884-.176 2.298 1.238 3.182-.53 3.712-1.768.53-2.828.884-2.828.884s.353 1.415-.884 1.061c-1.238-.354-2.652-1.591-2.652-2.475 0-.884-.177-1.414-.177-1.414l-2.475 1.59s.354.885-1.414.885c-1.768 0-2.475-1.945-2.121 0 .353 1.944 1.06 3.358 1.237 4.066.177.707 1.238.176 1.061 1.237-.177 1.06.177 1.06-.53 1.768-.707.707-2.122.884-2.829.884-.707 0-.884-.177-2.298 0-1.414.176-2.127 6.829-2.127 6.829l-1.25 1.125h-.689z"
          display="inline"
          filter="url(#filter12911)"
          opacity="1"
          id="japan"
        ></path>
        <circle fill="white" opacity="1" fillOpacity="1" cx = {coord.japan.x} 
                                                         cy = {coord.japan.y} r= "12" /> 
        <text fill="black" fontSize="14" x= {coord.japan.x + X_OFFSET } 
                                         y = {coord.japan.y + Y_OFFSET}> 
                                        {countries.japan.troopCount}</text>
        <path
          fill={colors[countries.yakutsk.occupant.name]}
          fillOpacity="1"
          style={{ marker: "none" }}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          markerEnd="none"
          markerMid="none"
          markerStart="none"
          d="M810.125 170.375c-.5-1.125.75-1.25-1.125-2.25s-2.625-.75-3.75-1.125-.875-.625-.375-2 2.125-1.5-.125-2-2.125-1.375-3.75-1.375-1.25 0-2.125.375-1 .375-1.375.875.375 1.125-.5.875-.375.125-1.25-.875-.625-1.375-1.75-1.25-.25-.125-1.875.25-2.125.375-3.25.5-3 1.625-3 1.625.125.25-1.25.375-.5-.625-2.375.75-1 1.5-2.5 1.375-.75-1-2.375-.25-1.75.375-1.75 1.375-1 1.625-1 1.625 0-.375-.375-1.625-.875-.75-.75-2-5.25-2-6-3.75-.625-1.5-.875-3.125-3.25-2.375-3.75-2.25-1.875 1.625-2.5 2.375-.875 1.375-1.875 2.125c-.863.85-1.67 1.374-2.438 1.938l.313 2.562c0 .5-.125 2 1 3.125s1.5.625 2 1.125-.125 3.75-.25 4.5-.625.75-1.125 1.625-.125 1.375-.5 2.875-.875.875-1.25 2.375 0 1.375.5 2.375.5 1.875.5 3.375-.25.625-.875.75-1.25.625-2.5.75-2.625.625-3.25-.125-1.25-.875-3.5-.625-.625 1-.875 2-1 .875-2.5 1.125-1 .375-1.125 2 1.75 2.625 2.75 3 1.25.625 1.625 1.25 1.5.375 3 1.75.25 1.625-.75 2.625.625 4.5 1.375 5 1.125 1.25 1.5 4.25 1.5 3.25 1.5 3.25.875.5 1 3.625.875 5.75.875 5.75 4.875-1.5 6.125-2.25 1.125-.875 1.5-2.625.5-4.625 1.875-4.875 1.125 1.75 1.125 1.75c.125.75 1.5.5 3 .75 1.058.176.624-.767.407-1.689-.09-.385-.143-.766-.032-1.061.375-1 12.295.113 12.295.113.442-1.06 1.237-1.768 2.563-3.005 1.326-1.238.265-3.447.354-3.89.088-.441 1.768-1.855 2.563-4.86.796-3.006 1.768-.796 1.768-.796s2.033-1.768 2.74-3.005c.707-1.238 4.596-1.06 5.038-.884.442.177.177 1.944.795 3.182.62 1.237.266.53 1.326.442 1.06-.089 1.768-.442 2.74-.442.973 0 .53 1.414.973 1.59.442.178 2.033 0 2.474-.088.442-.088 1.415-.795 2.033-1.325.62-.53.177-2.298.266-3.094.088-.795.972-1.06 1.237-1.68.265-.618 0-2.297-.088-3.093-.089-.795-.707-1.768-1.326-1.944-.619-.177-3.094-.354-4.066-.442-.972-.089-.972-4.773-.53-7.779.442-3.005.176-2.298.618-2.828.442-.53 1.945-.796 2.475-.796s1.238-1.149 1.326-2.032c.088-.884.796-.708 1.149-1.591.354-.884 1.503-.442 2.74-.62 1.238-.176.442-1.502.442-2.916l-1.28-1.092z"
          display="inline"
          enableBackground="accumulate"
          filter="url(#filter12915)"
          opacity="1"
          overflow="visible"
          visibility="visible"
          id="yakutsk"
        ></path>
        <circle fill="white" opacity="1" fillOpacity="1" cx = {coord.yakutsk.x} 
                                                         cy = {coord.yakutsk.y} r= "12" /> 
        <text fill="black" fontSize="14" x= {coord.yakutsk.x + X_OFFSET } 
                                         y = {coord.yakutsk.y + Y_OFFSET}> 
                                        {countries.yakutsk.troopCount}</text>
        <path
          fill={colors[countries.kamchatka.occupant.name]}
          fillOpacity="1"
          style={{ marker: "none" }}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          markerEnd="none"
          markerMid="none"
          markerStart="none"
          d="M818.375 289.5c1-.75.75.125 1.625-1.75s.625-2.5 1.25-3.125 2-2.875 1.875-4.5-.625-1.5-.25-3 .5-1.5.75-3.5-.25-1.75.375-4.125.75-2.875.375-3.75-.625-1.875-.625-3.375.125-2.75 0-3.25-.25-1-.625-2.375-1.375-2.375-1.375-2.375-.25 1-.75-.625-.375-1.125-.625-2.125-1 .5-.625-2.875.25-4.5.25-4.5-.125-3.375-2.375-3.375-3 .625-3.25-1.25-1.25-2.25-2.75-2.5-1.75 0-2.5-.375-.375-.625-1.625-.625-.5.5-2.25 0-1.75.75-2-.5-.125-2.125 1.625-4.875 1.625-3.375 1.875-4.75-1.25-.75 1-2.75 1.625-2.625 4.25-2.625 3 0 4.875-.875.375-1.875 2.625-.875 2 2 3.25.875 1.625-1.875 2.25-1.875 3 1.375 3 1.375 1 .5 1.875.25 1.625 1.625 2.5-.125.5-2.25-.375-2.75-1.875 1.75-1.375-1.25 1-4.125.625-5.125-3-4.5.125-2.375 2.375 2.5 3.5 3.125.625.625 1 3 4.125 1.875 3.625 4.875-.5 3.875-.75 5.125-1.625.375-1.25 5.5.75 14.25 5.25 18.25 5.625 4.5 6.25 2.75 1.25-2.5.875-4.5-1.375-2.75-.625-4.125 1.375-2.25 1.5-3.375.375-2 .25-3.25 0-2.75-.25-3.75-.5-2.625-.625-3.625-1.125-2.75-1.5-3.625-1.5-2.625-1.75-3.875-.75-1.75.5-3.5-1.125-2.75 1.75-2.375 2.75.75 4.25.5 3 .625 3.5-1.125.125-1.5 1-2.75 1.25-1 2.25-2.5-.5-2 2-4 4-2.75 4.625-3.5 1.875-1.125.875-2.125-1.125-1.875-2.5-2.75-2.125-1.5-2.75-1.625-1.5-.375-.875-.875 1.625-1.375 2.625-1.375 1 1 2.5.25 2.125-1.25 3.125-.5.375.125 1.125 1.625-.75 1 1.25 2.125 3.875 1.375 4.5 1.375.25.75 1.75-.125 1.25-.5 2.25-1.875 1.625-1.625 1.25-3.375-1-2.875-1-3.375l-1.125-1.875s0-.875-1.75-.875-2.75.125-2.75-.5.5-1.75-.625-1.75-1.75-1-2.5-.125-1.25 1.875-2.125 1.375-1.875-1.75-1.875-1.75.25-1.25-.125-1.75-1.5-1.625-1.5-1.625l-1.625-.75s-3.375-3.375-4.625-3.5-2.375.125-2.75-.875 1.75-1-1.375-1.5-3.25 0-4.25-1.375.375-1.75-2.125-1.875-3.625.25-5.75-.625-2.125-1.75-3.125-.75-.5 1.125-1.875 2.25-.625 2.125-2.75 2.125-1.75.25-3-.25-1-.875-2.5-1-1.125 0-2.625.125-.25 1-2.625-.125-2.375-1.375-4.125-2.25-2.25-1.125-3.125-1.125-4.5-.375-5.5.5c0 0-1.345 1.428-1.345 2.842 0 1.414.796 2.74-.442 2.917-.582.083-1.144.03-1.613.041-.53.013-.94.11-1.127.578-.353.883-1.06.707-1.149 1.59-.088.884-.795 2.034-1.326 2.034-.53 0-2.033.265-2.475.795-.442.53-.176-.177-.618 2.828-.442 3.006-.442 7.69.53 7.779.972.088 3.447.265 4.066.442.619.176 1.237 1.149 1.326 1.944.088.796.353 2.475.088 3.094-.265.618-1.15.884-1.237 1.68-.089.795.353 2.562-.266 3.093-.618.53-1.59 1.237-2.033 1.325-.441.089-2.032.266-2.474.089-.442-.177 0-1.591-.973-1.591-.972 0-1.68.353-2.74.442-1.06.088-.707.795-1.326-.442-.618-1.238-.353-3.005-.795-3.182-.442-.177-4.331-.354-5.038.884-.707 1.237-2.74 3.005-2.74 3.005s-.972-2.21-1.768.795c-.795 3.006-2.475 4.42-2.563 4.862-.089.442.972 2.651-.354 3.889-1.326 1.237-2.121 1.944-2.563 3.005-.442 1.06-.354 2.475-.088 2.917.265.442 1.414 2.917 1.06 4.95-.353 2.033-.884 8.131-.619 9.28.266 1.15.354 3.978 1.15 4.773.795.796 1.149 1.415 1.502 2.122.354.707 3.978 1.856 4.596 3.359.62 1.502.266 1.856 1.326 2.474 1.06.62 2.033 1.945 2.121 3.182.089 1.238.089 3.094.973 2.829.884-.265 1.856-1.503 2.21-1.856.353-.354 1.679-.796 2.828-.354 1.149.442 1.414.442 2.563.265 1.15-.177 2.21.177 2.21.177s.884 1.326.972 2.033c.089.707-.442 1.237 1.15 1.149 1.59-.088 1.944-.177 2.12 1.591.177 1.768 1.15 2.74 1.15 2.74s.265 1.856.176 2.298c-.088.442-.707 1.503-.442 2.652.266 1.149.884 2.298.354 3.093-.53.796-1.414 2.564-1.414 3.27 0 .708-.177 2.564 0 3.183.177.618-.53.176-.265 2.121s.442 2.298.442 3.005c0 .707-3.89.53-2.122 2.652 1.768 2.121 2.121 4.684 4.066 4.596 1.945-.088 2.828 2.74 3.094 3.712.265.973 1.06 1.68 2.298 1.768 1.237.089 1.414 1.945 2.386 2.121.972.177.972.089.783.035z"
          display="inline"
          enableBackground="accumulate"
          filter="url(#filter12919)"
          opacity="1"
          overflow="visible"
          visibility="visible"
          id="kamchatka"
        ></path>
        <circle fill="white" opacity="1" fillOpacity="1" cx = {coord.kamchatka.x} 
                                                         cy = {coord.kamchatka.y} r= "12" /> 
        <text fill="black" fontSize="14" x= {coord.kamchatka.x + X_OFFSET } 
                                         y = {coord.kamchatka.y + Y_OFFSET}> 
                                        {countries.kamchatka.troopCount}</text>
        <path
          fill={colors[countries.siberia.occupant.name]}
          fillOpacity="1"
          style={{ marker: "none" }}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          markerEnd="none"
          markerMid="none"
          markerStart="none"
          d="M683.875 193.625c.625 1.75 1.125.75 2.25 0s.25-.625.375-2.125-.375-1.25-1-2-.375-.125-2-.125-1.125.25-2.25.375-.75 0-2.625-.375S677.5 188 677.5 187.25s-.5-2.125-.5-2.125-1-.375-1.5-1.375 0-1.125.125-1.625.25-1.125.125-2.625-.5-.5-1-1.25 0-1.25 0-1.25l1-1 1.75.625 1.125.375 2.25.75s.125.25 2.125 2.5 1 .25 2.5.375 1.125-.625 1.125-.625-2-1-2-1.5.5-1.25.5-1.875-.125-2-.375-2.5-1-.875-1.5-1.375-1.25-1.875-1.25-1.875-.375-.75.5-3.25 1.125.875 1.125.875l.75.375 1.5 1.25s1.25-.25 2-.5 1.875 1.75 1.875 1.75 2.25.25 2.75.25 1.5-1.375 1.5-2.375-2-.125-2-.125l-3-.625s-3.875-1.125-4.625-2.125.125-1.5.125-1.5l2-2.5s1.375-1.375 2-1.375h3.25s.875-2.125 1-3.75 2.25-.5 2.25-.5 1.625-.5 2-1 2.5-2 5.875-4 3.375-1.125 4.875-1.25 2.875-.125 3.375-.375 2.125-1.375 2.625-1.625 3-1.5 3-.875.25 2 .5 2.5 1.625-.625 3.25-1.875 1.125-1 1.875-2.125 1.5-.375 2.625-.25.75 1.875.875 2.625 2 2.125 3.125 2.875 4.25-3.75 4.75-1.375 3.25 3.25 3.25 4-1.25 2.25-2.125 3-1.625 1.625-2.125 2.75 0 .75 0 1.75-.75.25-1.875 1-1.125 1-2 2-1.375.5-2.25.875-.625 1.5-.875 2.375.5.75.5.75 1.25-.875 1.875-1.25 3-1.625 3.625-2 2.25-1.75 3.625-3.25 3.25-.75 4.25-1 1.625.375 1.625.375 1.25.125 2.375-.5 4-1.25 4.625-1.25 2.25.25 3.125 1 2.375 1.75 3.25 2.375l1.438-.063.312 2.563c0 .5-.125 2 1 3.125s1.5.625 2 1.125-.125 3.75-.25 4.5-.625.75-1.125 1.625-.125 1.375-.5 2.875-.875.875-1.25 2.375 0 1.375.5 2.375.5 1.875.5 3.375-.25.625-.875.75-1.25.625-2.5.75-2.625.625-3.25-.125-1.25-.875-3.5-.625-.625 1-.875 2-1 .875-2.5 1.125-1 .375-1.125 2 1.75 2.625 2.75 3 1.25.625 1.625 1.25 1.5.375 3 1.75.25 1.625-.75 2.625.625 4.5 1.375 5 1.125 1.25 1.5 4.25 1.5 3.25 1.5 3.25.875.5 1 3.625.875 5.75.875 5.75-4.122 7.656-2.892 11.038c1.23 3.382 2.767 9.53.922 11.683-1.845 2.152-2.767 2.152-3.382.922-.615-1.23.308-1.537-1.845-1.845-2.152-.307-1.844.615-3.381.923-1.538.307-2.152 1.844-3.382.615-1.23-1.23 0-1.538-1.845-.923-1.844.615-.922 2.767-3.228 3.228-2.306.462-1.998-.307-2.92 1.23-.923 1.537-1.384 1.998-1.691 2.767-.308.769-.923.615-.308 1.998.615 1.384 2.152-.614 1.998 2.152-.153 2.767-.46 4.458-.46 4.458s-1.077-.768-1.077 1.076c0 1.845.769 1.691.461 3.228-.307 1.538-1.076.615-.614 2.46.46 1.845 1.69 1.845 1.69 1.845s.308-1.845.923-.308-.154 2.46.922 2.92c1.076.462 0 .308 1.691.923 0 0 .692 0 1 .922.307.923 1.152 2.383.307 3.536-.846 1.153-1.538 3.305-.615 5.38.922 2.075 2.536 2.306 2.382 3.536-.153 1.23-.384.922-.538 2.613-.153 1.69.154 2.767-.23 3.459-.385.691-.615 1.844-1.153 2.075-.538.23-1.384-.308-1.922-.615-.538-.308-.153-1.998-1.076-1.307-.922.692-1.076 1.614-1.844 1.153-.769-.461-.692-1.23-1.384-1.383-.692-.154-2.075.307-1.383-1 .692-1.306 1.537-1.537 1.614-2.382.077-.846.461-1.614 0-2.536-.461-.923-.769-1.922-1.537-2.076-.769-.153-.769-.615-1.691-1.46-.923-.845-1-1.921-1.691-1.69-.692.23-1.845 2.074-3.459 1.767-1.614-.308-2.229.384-2.767-.692-.538-1.076-.768-1.46-1.383-1.614-.615-.154-.923-.23-.769-.922.154-.692.23-.385.23-1.614 0-1.23.078-3.92-.845-5.227-.922-1.306-.922-1.383-.922-1.844 0-.462.461-.692-.307-1-.77-.307-1.922-2.382-2.153-3.15-.23-.77-1.383-.77-1.767-.77-.385 0-1.307-2.536-1.307-2.536s-3.92.077-3.843-.845c.077-.922.538-1.845.615-2.23.077-.383.692-2.766.077-3.611-.615-.846-1.691-1.615-2.306-1.691-.615-.077-1.69-.385-2.306.538-.615.922-1.153 1.537-1.46 1.383-.308-.154-.769-.077-.922-.922-.154-.846-.538-2.998.615-4.612 1.152-1.614.768.538 1.46-.23.692-.769 1.076-2.23 1.076-2.998 0-.768-.461-1.537.538-2.536.999-1 1.768-.692 2.229-1.614.461-.923 1.23-1.076.692-1.922-.538-.845-1.384-1.614-1.46-2.69-.078-1.076.307-.999-.385-1.69-.692-.693-1.23-1-1.307-1.769-.077-.768 1.384-.46-.077-1.306-1.46-.846-1.921-.23-1.69-1.614.23-1.384 0-2.537.46-3.305.462-.769-.307-3.228-.614-3.613-.308-.384-1.076-.999-1.46-1.537-.385-.538-.308-1.844-.615-2.075-.308-.23-1.46-1.153-1.768-1.614-.308-.461-.308-.692-.615-1.46-.307-.769-1.537-1.307-1.845-1.691-.307-.385-2.69-1-2.843-1.384-.154-.384-.231-1.306-.077-2.075.153-.769.384-1.921.153-2.844-.23-.922-.307-1.844-.384-3.15-.077-1.308-.615-1.922-1.614-1.922-1 0-1.46.46-1.537 0-.077-.462-.615-2.076-.615-2.46 0-.384-1.383-3.997-1.69-4.227-.308-.23-.308-.308-1.154-1.076-.845-.769-1.46-1.384-2.075-1.46-.615-.077-1-.77-1.076-1.538-.077-.768-.307-2.69-.174-2.848z"
          display="inline"
          enableBackground="accumulate"
          filter="url(#filter12923)"
          opacity="1"
          overflow="visible"
          visibility="visible"
          id="siberia"
        ></path>
        <circle fill="white" opacity="1" fillOpacity="1" cx = {coord.siberia.x} 
                                                         cy = {coord.siberia.y} r= "12" /> 
        <text fill="black" fontSize="14" x= {coord.siberia.x + X_OFFSET } 
                                         y = {coord.siberia.y + Y_OFFSET}> 
                                        {countries.siberia.troopCount}</text>
        <path
          fill={colors[countries.ural.occupant.name]}
          fillOpacity="1"
          style={{ marker: "none" }}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          markerEnd="none"
          markerMid="none"
          markerStart="none"
          d="M665.794 265.915c1.06-.53.163-1.537.163-3.304 0-1.768-.53-1.945-.707-3.182-.177-1.238-.53-1.591-.707-2.475-.177-.884 1.59-1.768 2.298-3.182.707-1.414 0-1.945-.177-3.182-.177-1.238-1.768-1.238-1.768-1.238l-3.182-2.12-1.414-.708s-.177-1.414 0-3.005 1.06-2.122 1.768-3.359c.707-1.237.707-2.652.707-3.536 0-.883-1.768-1.237-1.768-1.237v-4.066-4.773c0-1.237-.707-3.535-1.237-4.42-.53-.883.53-2.474.53-2.474s-.884-1.945-1.06-2.828c-.177-.884 1.06-4.773 1.06-4.773l1.945-4.773 1.237-2.122s0-3.182.53-3.889c.53-.707.354-4.066.354-4.066s-.707-6.717-1.414-7.16l.673-2.293-1-.875-.375-2.5-2.5-.625.25-3.375s1.5-1.5 2.125-1.5-1.5-2.125-1.75-3 0-1.25.5-1.5.25-1 .125-2-.125-1.125-.125-1.125l.875-2.5 2.875 1s.625 1 1.25 1.125 1.25 0 1.75 0 .25.125 1 1.625.75 0 1.875.25 1.125 1.375 1 2.125-.75 1.375-1.375 2.5-.5.75-1.5 1.875 1.5 1.875 1.5 1.875.25 1.5.875 2.375.125.25 1.125.75 0 .875 0 2.25.75.25.75.25.5.625.875 1.875.125.5 1 2.375 1.25-.125 1.25-.125.75.625 1.25 1.625 2.375.625 2.375.625 1-1 1.75-1.625.5-.375 1.5-.75.049.147.674 1.897.423 3.058.5 3.826c.077.769.461 1.46 1.076 1.537.615.077 1.23.692 2.075 1.46.846.77.846.846 1.153 1.077.308.23 1.691 3.843 1.691 4.227 0 .384.538 1.998.615 2.46.077.46.538 0 1.537 0 1 0 1.537.614 1.614 1.921.077 1.307.154 2.229.384 3.151.231.923 0 2.075-.153 2.844-.154.769-.077 1.691.077 2.075.153.385 2.536 1 2.843 1.384.308.384 1.538.922 1.845 1.69.307.77.307 1 .615 1.461.307.461 1.46 1.383 1.768 1.614.307.23.23 1.537.614 2.075.385.538 1.153 1.153 1.46 1.537.308.385 1.077 2.844.616 3.613-.461.768-.23 1.921-.461 3.305-.231 1.383.23.768 1.69 1.614 1.46.845 0 .538.077 1.306.077.769.615 1.076 1.307 1.768s.307.615.384 1.691c.077 1.076.923 1.845 1.46 2.69.539.846-.23 1-.691 1.922-.461.922-1.23.615-2.23 1.614-.998.999-.537 1.768-.537 2.536 0 .769-.384 2.229-1.076 2.998-.692.768-.308-1.384-1.46.23-1.153 1.614-.77 3.766-.615 4.612.153.845.615.768.922.922.307.154.845-.461 1.46-1.383.615-.923 1.691-.615 2.306-.538.615.076 1.691.845 2.306 1.69.615.846 0 3.229-.077 3.613-.077.384-.538 1.307-.615 2.229-.077.922 3.843.845 3.843.845s.922 2.537 1.307 2.537c.384 0 1.537 0 1.767.768.231.769 1.384 2.844 2.153 3.151.768.308.307.538.307 1 0 .46 0 .538.922 1.844.923 1.307.846 3.997.846 5.227 0 1.23-.077.922-.23 1.614l-2.531.205s.652 4.239 0 4.565c-.652.326-3.804.76-3.804.76s-.109 3.262-.218 3.805c-.108.544-1.63 1.522-1.956 2.065-.326.544-.652.544-.326 1.196.326.652.543 1.522.434 1.957-.108.434.544 1.304-.652 1.521-1.195.218-1.739.652-2.391.109-.652-.544-.87-1.74-1.74-2.174-.869-.435-1.195-.435-1.303-1.304-.11-.87-.435-2.174-.435-2.174s-1.087-1.63-1.63-1.63c-.544 0-2.718.543-3.153.217-.435-.326-2.5-.109-3.26-.761-.762-.652-.87-1.196-1.849-.761-.978.435-2.717.543-2.717.543l-1.63-1.086s-.87-.327-1.74-.87c-.87-.544-.978-1.848-1.304-2.391-.326-.544-.978-1.413-1.413-1.74-.435-.326-.87-.978-1.413-1.521-.543-.544-1.196-.87-1.956-1.087-.761-.218-1.414-.326-1.63-.978-.218-.653 0-1.196-.436-1.305-.434-.108-1.521-.543-1.521-.543s-.11-1.522-.653-1.848c-.543-.326-1.63-1.196-2.282-1.522-.652-.326-1.413-.435-1.63-1.304-.218-.87-.544-1.196-.544-1.196s-1.304-.87-1.522-1.413c-.217-.543-.87-1.63-.87-1.63l-1.412-1.522-1.63-.544-2.033-.128z"
          display="inline"
          enableBackground="accumulate"
          filter="url(#filter12927)"
          opacity="1"
          overflow="visible"
          visibility="visible"
          id="ural"
        ></path>
        <circle fill="white" opacity="1" fillOpacity="1" cx = {coord.ural.x} 
                                                         cy = {coord.ural.y} r= "12" /> 
        <text fill="black" fontSize="14" x= {coord.ural.x + X_OFFSET } 
                                         y = {coord.ural.y + Y_OFFSET}> 
                                        {countries.ural.troopCount}</text>
        <path
          fill={colors[countries.afghanistan.occupant.name]}
          fillOpacity="1"
          style={{ marker: "none" }}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          markerEnd="none"
          markerMid="none"
          markerStart="none"
          d="M707.609 296.804l-.109-.217c-.652-.544-.87-1.74-1.74-2.174-.869-.435-1.195-.435-1.303-1.304-.11-.87-.435-2.174-.435-2.174s-1.087-1.63-1.63-1.63c-.544 0-2.718.543-3.153.217-.435-.326-2.5-.109-3.26-.761-.762-.652-.87-1.196-1.849-.761-.978.435-2.717.543-2.717.543l-1.63-1.086s-.87-.327-1.74-.87c-.87-.544-.978-1.848-1.304-2.391-.326-.544-.978-1.413-1.413-1.74-.435-.326-.87-.978-1.413-1.521-.543-.544-1.196-.87-1.956-1.087-.761-.218-1.414-.326-1.63-.978-.218-.653 0-1.196-.436-1.305-.434-.108-1.521-.543-1.521-.543s-.11-1.522-.653-1.848c-.543-.326-1.63-1.196-2.282-1.522-.652-.326-1.413-.435-1.63-1.304-.218-.87-.544-1.196-.544-1.196s-1.304-.87-1.522-1.413c-.217-.543-.87-1.63-.87-1.63l-1.412-1.522-1.63-.544-2.033-.128-.547.477c-1.061.53-.527.461-1.411.815-.884.353-4.066.353-4.243 1.59-.177 1.238-.354 1.592-1.06 3.006-.708 1.414-.885 1.768-1.768 1.945-.884.176-1.238 0-2.122-.177-.884-.177-2.475-.884-2.475-.884l-1.414-.177-1.237-1.237s-.707.53-1.414.884c-.708.353-2.299 1.767-2.299 1.767s-2.474.707-3.182.707c-.707 0-.707-.176-1.414 0-.707.177-1.944 0-2.475.708-.53.707.707 1.414-1.944 1.59-2.652.177-2.652.177-3.359.177-.707 0-1.944 3.713-1.944 3.713s1.414 1.237.353 1.59c-1.06.354-1.768 1.415-2.298 2.122-.53.707-.884 1.237-.707 2.121.177.884 0 1.415.353 2.475.354 1.06 1.238 3.182 1.238 3.182s.707.354.53 1.414c-.177 1.061-.707 1.591-.177 2.475.53.884 1.591 1.238 1.591 1.238l1.061 1.414s1.414-.354 1.414.884c0 1.237.177 1.768.354 3.182 0 0 1.021 1.399 1.728.868.708-.53 1.945-1.414 1.945-2.474 0-1.061-.177-1.415.707-1.591.884-.177 1.414-.177 2.298-.53.884-.354.53-.354 1.591-.354 1.06 0 .884-.53 1.414.53.53 1.06-.176.354.177 1.945.354 1.59.53 1.414.707 2.474.177 1.061 0 .708-.353 2.122-.354 1.414-.354 1.59-1.238 1.944-.884.354-2.651 1.238-2.828 2.652-.177 1.414 0-.354.177 1.944.176 2.299.176 3.006.884 3.36.707.353.883.176.883 1.237 0 1.06-.53 1.414.707 1.59 1.238.177 2.122-.176 2.122-.176s2.298.353 1.768 1.768c-.53 1.414-1.591.53-.884 2.12.707 1.592.884.354 1.06 2.122.177 1.768-.53 2.298.354 2.298s2.475.707 2.475.707l.177 2.299.353 1.414s-2.298-.884-1.944.707c.353 1.59.707 1.59.707 1.59s2.298-.176 2.298 1.415-.354 2.121-.177 3.005c.177.884 1.06.177.884 1.415 0 0-.147 1.944.777 2.487.924.544 1.848.598 2.283.435.435-.163 1.25-1.576 2.12-1.522.87.055 1.413-.38 2.01.163.598.544 1.196.435 1.74.544.543.109.923.272 1.684 1.033.761.76 1.087 1.25 1.25 1.521.163.272.163 1.033.544 1.576.38.544 1.25.707 1.522.761.271.055 1.902-.163 2.39.218.49.38 1.686 2.01 1.794 2.445.109.435 1.305.87 1.305.87s2.717-.326 3.152-1.522c.435-1.196 2.717-2.717 2.717-3.478 0-.761 0-1.957.544-2.065.543-.11 2.826-.87 3.587-.761.76.108 2.282.435 2.717-.544.435-.978.326-3.804 1.848-3.913 1.522-.108 2.391-.978 3.37 0 .978.978 3.695 2.5 3.695 2.5s3.696.544 4.891-.76c1.196-1.305 2.283-2.935 2.283-3.805 0-.87.326-1.196.326-2.174s-.87-3.696-.87-3.696-.76-1.195-1.412-1.413c-.653-.217-1.63-1.304-1.63-1.304s-.762-2.065-.762-2.935c0-.87.435-4.456.978-4.565.544-.109 2.066-1.087 2.935-1.087.87 0 2.283.109 2.718-.217.434-.326 1.195-4.457 1.63-5.544.435-1.087.652-1.956 1.413-1.848.761.11 2.174 0 2.065-1.847-.108-1.848-.326-5.435-1.087-6.63-.76-1.197-1.304-1.414-.87-2.5.436-1.088.98-1.414.98-1.414l-.218-1.522z"
          display="inline"
          enableBackground="accumulate"
          filter="url(#filter12931)"
          opacity="1"
          overflow="visible"
          visibility="visible"
          id="afghanistan"
        ></path>
        <circle fill="white" opacity="1" fillOpacity="1" cx = {coord.afghanistan.x} 
                                                         cy = {coord.afghanistan.y} r= "12" /> 
        <text fill="black" fontSize="14" x= {coord.afghanistan.x + X_OFFSET } 
                                         y = {coord.afghanistan.y + Y_OFFSET}> 
                                        {countries.afghanistan.troopCount}</text>
        <path
          fill={colors[countries.middle_east.occupant.name]}
          fillOpacity="1"
          style={{ marker: "none" }}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          markerEnd="none"
          markerMid="none"
          markerStart="none"
          d="M652.66 343.029c-.177 1.06.53 1.59-.884 1.944-1.415.354-2.475 1.415-2.475 1.415s1.59 1.59-1.768.883c-3.359-.707-2.828-1.237-4.243-1.59-1.414-.354-1.237.353-2.298-.354-1.06-.707-1.414-.354-1.767-1.414-.354-1.06-2.975-2.538-2.975-2.538s-.875 0-1 .875 1.75.875-.375 1.25c0 0-1.25.125-1.875.25s-1.25-.25-1.875.25-.625.875-1.5 1-.75 0-1.75.125-1.75 1-1.75 1 .25.5-1.375.375-2.25.25-2.25.25 0 1.5-1.375.5-2-1-2-1.5.625-1 1.125-1.5c0 0-.47-1.486-2.327-1.133-1.856.354-3.005.265-3.447.884-.442.619-.884 1.856-1.591 1.945-.707.088-2.74.265-3.27-.354-.53-.619-1.49-2.592-3.99-3.342s-4.625-1.375-5.5-.75-.125 1.375-1.875.875-3.5-1.25-4-1-2.125 0-2.125.625.75 1.625-.25 1.75-2.25.625-2.875.875-.25.5-2.5.5-4.5.375-5.375-.375-1.25-1.625-1.625-2.125-1.375-1-1.375-1h-1.25s-1.375.375-1.875 1-.5 1-1 1.375-.5.25-1.125 1-.125 1.125-.625 1.75-.875.125-1.125 1 0 .5.125 1.375.75.875 0 1.875c0 0 1.063 2.188 1.5 3.25.438 1.063 1.875 1.625.75 2s-2.5.438-2.25 1.438 2.625 3.375 3.313 4.562c.687 1.188.187 3.875 1.312 4.875s2.875 1.875 3.5 1.875 2.5-1.375 2.75-.125-.25 3.625.5 3.75 2.5 1 2.875.375-1.253-2.394-.016-2.924c1.238-.53 0-3.006 2.652-1.768 2.652 1.237 2.652 2.121 4.243 2.298 1.59.177 2.651-.354 3.712-.177 1.06.177 2.298 1.238 2.652 0 .353-1.237 1.237-1.944 2.121-1.944.884 0 2.828-.53 3.182.53.354 1.06-.53 2.298-.354 3.359.177 1.06 1.238 1.414.884 7.424-.353 6.01 1.061 9.016.177 9.546-.884.53-2.121 2.122-1.768 3.006.354.883 1.768 3.889 1.945 6.01.177 2.121.884 2.652 1.06 3.712.177 1.06-1.237 1.238.177 3.005 1.414 1.768 4.42 2.829 4.243 4.066-.177 1.238 1.944 1.768 2.828 3.006.884 1.237 2.298 4.772 2.652 6.363.354 1.591 1.591-.707 2.298 1.945.707 2.652 2.829 2.298 3.359 4.243.53 1.944 2.453 3.8 3.453 4.3s4.25 1.25 4 3 2.75 3.5 2.75 4.75-.25 3.75-.25 3.75-.5.5.5 1.5 1.75 1.75 2 3.25 1.25 1.25 1.25 1.25 9.75-1 13-2 7.25-2.75 7.25-3.75 0-.75 1.5-1.25 2.5-2.5 2.5-2.5l1.5-1.25s.25-2 1.5-1.75 2.75 1 2.75 0-.75.25 2.25-4.75 3.5-6.75 3.25-7.75-.25-1 .75-1.75 1.5-3.25 1.5-3.25l-.5-2.25 1-2.25s1.433-3.917.196-4.448c-1.237-.53-1.06-.884-1.06-2.298 0-1.414-1.592-2.298-1.592-2.298s0 .53-1.414 0-3.182-2.121-3.182-2.121-1.59.707-1.768-.354c-.176-1.06.354-2.651-.53-2.121-.884.53-1.944.353-2.475 1.06-.53.708.707 1.768-2.475 1.768s-3.889 1.061-4.596-.176c-.707-1.238-.707-1.238-1.06-2.652-.354-1.414.707-.707-.884-1.768-1.591-1.06-1.945-1.06-1.945-1.944 0-.884-.53-1.415-.53-1.415s-1.238.708-1.768-.707c-.53-1.414.707-2.298-.707-3.535-1.414-1.238-1.414-1.414-1.945-2.475-.53-1.06-1.06-1.768-1.06-1.768s-1.238-.707-.708-1.414.177-.884 1.768-1.06c1.591-.178 1.945-.531 2.652-1.061.707-.53.353-.884 1.59-1.061 1.238-.177 1.415-1.238 1.945.177.53 1.414.354 1.944.354 3.889 0 1.944-.177 3.359.354 4.42.53 1.06.883 1.59 1.06 2.297.177.707.354 1.238.354 1.238s.177.177 1.06.177c.884 0 1.061-.708 1.415.176.353.884 0 .53.53 1.238.53.707.354 1.06 1.237.707.884-.354 1.061-1.238 1.945-.884.884.354 1.591.53 1.591.53s1.237.177 1.237-.884c0-1.06-.176-1.59.354-2.298.53-.707.884-2.475 1.944-.176 1.061 2.298.53 2.651 1.061 3.535.53.884.884 1.591 1.945 1.238 1.06-.354 1.59-.354 2.298-1.061a6.104 6.104 0 011.414-1.06s-.177-1.769.884-2.122c1.06-.354 2.298-1.414 2.298-1.414l1.237-1.415 1.061-1.414h2.652s-1.107-4.112-1.26-5.649c-.154-1.537-2-1.69-1.384-2.92.615-1.23 1.23-2.768.307-3.69-.922-.922-2.46-1.844-2.46-3.074 0-1.23.462-1.23-.307-2.46-.768-1.23-1.23-2.613-1.23-3.382 0-.768.035-1.56-.46-2.766-.646-1.57-2.373-.027-1.999-2.767.894-6.559.864-8.243.845-8.224-.018.018.32-2.266.32-2.266s-1.196-.435-1.305-.87c-.108-.435-1.304-2.065-1.793-2.445-.49-.38-2.12-.163-2.391-.218-.272-.054-1.142-.217-1.522-.76-.38-.544-.38-1.305-.544-1.577-.163-.271-.489-.76-1.25-1.521-.76-.761-1.141-.924-1.684-1.033-.544-.109-1.142 0-1.74-.544-.597-.543-1.14-.108-2.01-.163-.87-.054-1.685 1.36-2.12 1.522-.435.163-1.359.109-2.283-.435-.38-.108-1.032-.163-1.032-.163l-.275 1.388z"
          display="inline"
          enableBackground="accumulate"
          filter="url(#filter12935)"
          opacity="1"
          overflow="visible"
          visibility="visible"
          id="middle_east"
        ></path>
        <circle fill="white" opacity="1" fillOpacity="1" cx = {coord.middle_east.x} 
                                                         cy = {coord.middle_east.y} r= "12" /> 
        <text fill="black" fontSize="14" x= {coord.middle_east.x + X_OFFSET } 
                                         y = {coord.middle_east.y + Y_OFFSET}> 
                                        {countries.middle_east.troopCount}</text>
        <path
          fill={colors[countries.india.occupant.name]}
          fillOpacity="1"
          style={{ marker: "none" }}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          markerEnd="none"
          markerMid="none"
          markerStart="none"
          d="M701.413 335.5c0 .87-1.087 2.5-2.283 3.804-1.195 1.305-4.89.761-4.89.761s-2.718-1.522-3.697-2.5c-.978-.978-1.847-.108-3.37 0-1.52.109-1.412 2.935-1.847 3.913-.435.979-1.956.652-2.717.544-.761-.109-3.044.652-3.587.76-.544.11-.544 1.305-.544 2.066 0 .76-2.282 2.282-2.717 3.478-.435 1.196-3.207 1.685-3.098 1.522.109-.163-.392 2.284-.374 2.266.019-.018.05 1.665-.845 8.224-.374 2.74 1.353 1.197 1.998 2.767.496 1.206.462 1.998.462 2.766 0 .769.46 2.153 1.23 3.382.768 1.23.307 1.23.307 2.46s1.537 2.152 2.46 3.074c.922.922.307 2.46-.308 3.69s1.23 1.383 1.383 2.92c.154 1.537 1.152 5.486 1.234 5.622.788.136 1.44-.857 2.148-1.033.707-.177 3.005-.884 3.359.353.353 1.238.177 3.182.53 3.89.354.706 2.652 1.59 2.652 1.59h1.414c.707 0 1.06-.884 1.237.354.177 1.237-.176 1.768.177 2.475.354.707 2.652.707 2.652.707s2.298 0 1.237 1.06c-1.06 1.061-1.767 1.238-2.121 1.945-.354.707-1.06.884-.177 1.237.884.354.707-.53 1.414.707.708 1.238.53.884 1.061 1.591.53.708-.353.884 1.238 1.061 1.59.177 2.12 0 2.12 0l.708-1.768s.884-1.237 1.59.177c.708 1.414.01 1.384-.167 3.152-.177 1.768-.354 3.514-.354 4.751 0 1.238-.75 1.945-.573 3.182.177 1.238.427 2.018.427 3.432 0 1.414 1.375.863 1.375 2.1 0 1.238-.177 1.591.53 2.298.707.707 1.475 2.247 1.475 2.954 0 .707.686.987.686 2.225 0 1.237-.052 2.37.655 2.724.707.354 1.863.552 1.863 1.966 0 1.415 1.155 2.932 1.155 2.932s.56 1.28.56 1.988c0 .707 1.208 1.121 1.208 1.828 0 .707 1.414 0 2.298 4.773.884 4.773 1.414 1.768 2.828 5.834 1.415 4.066 2.122 5.126 3.005 5.126.884 0 1.945-.353 2.122-1.237.177-.884 0-.884.884-1.237.884-.354.707-.177.884-1.238.176-1.06-.708-1.237-.354-1.944.354-.708-.53-2.122.884-2.122 1.414 0 2.475-1.237 2.475-1.237s-.53-.707-.53-1.591-.708 1.768 0-2.122c.707-3.889 1.06-4.596.883-6.894-.176-2.298-1.06-1.237 0-4.242 1.061-3.006 1.591-1.591 1.591-3.89 0-2.298 1.061-4.773 1.238-6.187.177-1.414.707-.353.707-1.944s-.884-2.475.177-3.536c1.06-1.06 2.475-1.414 2.475-2.651v-2.652c0-.884.353-2.652.353-2.652s2.298-.177 1.768-1.237-.354-2.298 0-3.182c.353-.884 1.398-4.585 2.898-3.585 1.5 1 2 1 2 1s1.375-1.375 1.25-2 .5-1.75.5-1.75.25-1.75.75-1.875 2.875-.25 2.875-.25-.404-3.83.518-3.907c.922-.077 1.383.077 1.614-.922.23-1 1-1.999 1.537-2.23.538-.23.692-2.612.692-2.612l1.768-.615s.46-3.92 1.153-4.612c.691-.692 1.69-2.536 1.69-2.536s-2.536-6.994-2.92-7.379c-.385-.384-9.761-.538-9.838-.23-.077.307-1.153 1.768-1.614 1.768-.461 0-1.691-1.307-1.691-1.307s.384-3.612.077-3.997c-.308-.384-2.921-1.383-3.228-1.23-.308.154-.923 2.153-1.384 2.153-.461 0-3.69-1.768-3.997-2.998-.307-1.23.615-1.23-.768-1.307-1.384-.076-.308 1.384-2.383.923-2.075-.461-2.306-.769-2.613-1.076-.307-.308-1.23-1.46-2.306-1.46s-3.228-1.154-3.382-1.538c-.153-.384-.538-.845-.845-1.23-.308-.384-.308-1.69-.769-2.075-.46-.384-2.075.923-2.46 1-.383.076-1.69-.462-1.46-1.23.231-.769.615-1.768 1.077-1.999.46-.23 1.383-.999 1.46-1.537.077-.538.384-.768.538-1.998.154-1.23-.538-4.074-.692-4.996-.154-.922-.154-3.766-.154-3.766s.077-1.076.077-1.384c0-.307.23-.999.23-.999s-1.383.384-1.69.461c-.308.077-3.382.077-3.69.077-.307 0-1.998-.922-2.075-1.23-.076-.307-.23-2.075-.384-2.382-.154-.308-.23-1.384-.538-1.076l-1.383 1.998.077.154c-1.922.999-2.998.615-3.081.449z"
          display="inline"
          enableBackground="accumulate"
          filter="url(#filter12939)"
          opacity="1"
          overflow="visible"
          visibility="visible"
          id="india"
        ></path>
        <circle fill="white" opacity="1" fillOpacity="1" cx = {coord.india.x} 
                                                         cy = {coord.india.y} r= "12" /> 
        <text fill="black" fontSize="14" x= {coord.india.x + X_OFFSET } 
                                         y = {coord.india.y + Y_OFFSET}> 
                                        {countries.india.troopCount}</text>
        <path
          fill={colors[countries.siam.occupant.name]}
          fillOpacity="1"
          style={{ marker: "none" }}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          markerEnd="none"
          markerMid="none"
          markerStart="none"
          d="M788.375 388c-1.875-.375.375-1.875-3.25-2.375S781.75 394.75 782 395.75s1.25 1.5 3.5 1.25 1.75 0 2.25 2.25-.25 4-.25 4 .75-.25 2-.75 3 .75 3.75 4.25 1 3.5 2.25 5.5 1 3 1.5 5.75-.5 6-.75 7.75-3.5 5.25-3.5 6.25-3.25 3.5-3.5 4.5-1.5-.75-1.5-.75-1.25-3.5-1.75-4.5-1.25-1.5-1.25-1.5l.25-2.25s-1.25-.75-2.25-.75-1-1-1-1L779.5 424s-.25-.25-1.5-.5-1 0-1.25 1-.75 1-2 2.25.5.75 1.75 2 .75.75.75 2.75 0 2.75 1.75 7.5 1.5 1.75 1.5 1.75.5.75.5 2-1 1.25-1 1.25-1.75.25-3.25 0-.5-.5-3-3.75-2.5-3.5-3.5-4.25.25-1.75 0-3 0-3-.75-4-.75-1.5-1.25-3.25 0-3.25.25-4.75-1.25-1.75-1.5-3.75-.5-1.75-.5-1.75-4.5-2.75-5.25-1.75-2-2-2-2-3.25 1-3.5-.5-6.75-8.25-7-10-.25-3.5-1.5-3.75-2.125-3-2.125-3l-.875-2.125c-.273-3.373.214-3.616.518-3.907.922-.077 1.383.077 1.614-.922.23-1 1-1.999 1.537-2.23.538-.23.692-2.612.692-2.612l1.768-.615s.46-3.92 1.153-4.612c.691-.692 1.69-2.536 1.69-2.536.692-.922 1.076-.384 1.076-.384l1.23-.923s.692-1.153 1-1.69c.307-.539.46-.616.999-.462.538.154.845 1.076 1.614 1.46.768.385 1.153.539 1.537.846.384.307.538 1.768.845 2.69.308.922.538.692 1.46 1.23.923.538.385.692.308.999-.077.307 1.383 2.306 2.152 2.229.769-.077 2.229 1.998 2.767 2.613.538.615 2.306.846 3.305.692 1-.154.692-1.46.692-1.922 0-.46.691-1.921 1.076-1.998.384-.077 2.306 0 3.151-.154.845-.153.461-.691.461-.691s1.076-.923 1.153-1.384c.077-.461.769-1 1.076-1.23.308-.23 1.076-.077 1.46 0 .385.077 1 1.23 1 1.23s1.46.154 1.844.154c.384 0 .692.768.692 1.537v1.46c0 .538.845.615.845.615s.538.077.692.538c.154.461.154.615.615.615.461 0 .461.846.461.846s1.537 1.383.922 1.69c-.614.308.72 2.453.72 2.453z"
          display="inline"
          enableBackground="accumulate"
          filter="url(#filter12943)"
          opacity="1"
          overflow="visible"
          visibility="visible"
          id="siam"
        ></path>
        <circle fill="white" opacity="1" fillOpacity="1" cx = {coord.siam.x} 
                                                         cy = {coord.siam.y} r= "12" /> 
        <text fill="black" fontSize="14" x= {coord.siam.x + X_OFFSET } 
                                         y = {coord.siam.y + Y_OFFSET}> 
                                        {countries.siam.troopCount}</text>
        <path
          fill={colors[countries.china.occupant.name]}
          fillOpacity="1"
          style={{ marker: "none" }}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          markerEnd="none"
          markerMid="none"
          markerStart="none"
          d="M802.125 324c-1 .5-.125.5-.125 1.125s.875.25.875 1.125.25.75.75 1 .125.75.125 2.125.125.625 1.125.875.5.375.75 1.875 1 .5 1.5.5.5.25.875 1 0 .5-1.25 1.25 1.25.875 2.625 1.25.875 2 .625 3.375.625 1.125 1.5 2.625.125 2.375-.875 4.75.5 1.625 1.625 1.75.875 3.375.125 5 .125 1.5.125 3.625-.375 2.5-.625 4.125-.375 1.375-1 2.375-.25 2-.25 3.625-1.625 1.625-2.75 1.875-.625.125-.5 1.25-.5 1.375-1.5 2.375-.5.25-1.125 1.875-.125.875-1.5 2.125-1.375 1.875-1.375 1.875 0 1.125-.25 2.375-1.125.25-1.625.125-1.375.625-1.75 1.375-1.875 1.125-3.125 2.375.125.25.5 1.125-.875 1.5-1.5 2S793 389.875 792 390.5s-1.794-2.08-3.404-2.522c.265-.066-1.555-2.123-.94-2.43.614-.308-.923-1.691-.923-1.691s0-.846-.461-.846-.461-.154-.615-.615c-.154-.46-.692-.538-.692-.538s-.845-.077-.845-.615v-1.46c0-.769-.308-1.537-.692-1.537-.384 0-1.844-.154-1.844-.154s-.615-1.153-1-1.23c-.384-.077-1.152-.23-1.46 0-.307.23-1 .769-1.076 1.23-.077.461-1.153 1.384-1.153 1.384s.384.538-.461.691c-.845.154-2.767.077-3.151.154-.385.077-1.076 1.537-1.076 1.998 0 .462.307 1.768-.692 1.922-1 .154-2.767-.077-3.305-.692-.538-.615-1.998-2.69-2.767-2.613-.769.077-2.229-1.922-2.152-2.229.077-.307.615-.461-.307-1-.923-.537-1.153-.307-1.46-1.229-.308-.922-.462-2.383-.846-2.69-.384-.307-.769-.461-1.537-.845-.769-.385-1.076-1.307-1.614-1.46-.538-.155-.692-.078-1 .46-.307.538-.999 1.691-.999 1.691l-1.23.923s-.384-.538-1.076.384c0 0-2.536-6.994-2.92-7.379-.385-.384-9.761-.538-9.838-.23-.077.307-1.153 1.768-1.614 1.768-.461 0-1.691-1.307-1.691-1.307s.384-3.612.077-3.997c-.308-.384-2.921-1.383-3.228-1.23-.308.154-.923 2.153-1.384 2.153-.461 0-3.69-1.768-3.997-2.998-.307-1.23.615-1.23-.768-1.307-1.384-.076-.308 1.384-2.383.923-2.075-.461-2.306-.769-2.613-1.076-.307-.308-1.23-1.46-2.306-1.46s-3.228-1.154-3.382-1.538c-.153-.384-.538-.845-.845-1.23-.308-.384-.308-1.69-.769-2.075-.46-.384-2.075.923-2.46 1-.383.076-1.69-.462-1.46-1.23.231-.769.615-1.768 1.077-1.999.46-.23 1.383-.999 1.46-1.537.077-.538.384-.768.538-1.998.154-1.23-.538-4.074-.692-4.996-.154-.922-.154-3.766-.154-3.766s.077-1.076.077-1.384c0-.307.23-.999.23-.999s-1.383.384-1.69.461c-.308.077-3.382.077-3.69.077-.307 0-1.998-.922-2.075-1.23-.076-.307-.23-2.075-.384-2.382-.154-.308-.23-1.384-.538-1.076l-1.383 1.998.077.154c-1.922.999-2.998.615-3.081.449 0-.87.326-1.196.326-2.174s-.87-3.696-.87-3.696-.76-1.195-1.412-1.413c-.653-.217-1.63-1.304-1.63-1.304s-.762-2.065-.762-2.935c0-.87.435-4.456.978-4.565.544-.109 2.066-1.087 2.935-1.087.87 0 2.283.109 2.718-.217.434-.326 1.195-4.457 1.63-5.544.435-1.087.652-1.956 1.413-1.848.761.11 2.174 0 2.065-1.847-.108-1.848-.326-5.435-1.087-6.63-.76-1.197-1.304-1.414-.87-2.5.436-1.088.98-1.414.98-1.414-.09-.177-.218-1.522-.273-1.63.598.434 1.142 0 2.337-.218 1.196-.217.544-1.087.652-1.521.11-.435-.108-1.305-.434-1.957-.326-.652 0-.652.326-1.196.326-.543 1.848-1.521 1.956-2.065.109-.543.218-3.804.218-3.804s3.152-.435 3.804-.761c.652-.326 0-4.565 0-4.565l2.53-.205c-.154.691.154.768.769.922.615.154.845.538 1.383 1.614s1.153.384 2.767.692c1.614.307 2.767-1.537 3.459-1.768.692-.23.768.846 1.69 1.691.923.845.923 1.307 1.692 1.46.768.154 1.076 1.153 1.537 2.076.461.922.077 1.69 0 2.536-.077.845-.923 1.076-1.614 2.383-.692 1.306.692.845 1.383.999.692.153.615.922 1.384 1.383.768.461.922-.461 1.844-1.153.923-.691.538 1 1.076 1.307.538.307 1.384.845 1.922.615 0 0 1.134 1.906 1.752 2.083.619.176 1.15 6.452 1.15 6.452s.972-.619 1.237.177c.265.795.618 2.121.618 2.121s1.326.796 1.326 1.238c0 .441-.088 1.502.265 1.679.354.177 1.768.795 1.768.795l.354 1.326s.177 1.15.707 1.238c.53.088.795-.089 1.502.265.708.353.884.442 1.503.442.619 0 .884-.089.884.442 0 .53-.088 1.414.265 1.502.354.089 1.238.177 1.238.177s.265.53.618.884c.354.354 1.414.442 1.591.795.177.354.265.973.354 1.326.088.354-.265 1.15 1.06 1.238 1.326.088 9.016-1.06 9.016-1.06l.53.883s.53.53 1.15.707c.618.177 1.767-.265 2.74.177.972.442 1.767.707 2.21.707h1.325s.265 1.237.707 1.326c.442.088 2.21-.619 2.21-.619s.353-.53.884-.442c.53.089.618-1.149 1.59-1.237.973-.089 1.503-.089 1.857-.089.353 0 2.475-1.06 2.563-.176.089.883.177 1.414.619 1.944s1.68.884 2.121.884c.442 0 1.414-.619 2.033-.972.619-.354.884-.707 1.68-.53.795.176 1.59.706 1.944.883.354.177.53.177 1.591.53 1.06.354 2.475.266 2.475.266s2.563.265 3.535.53c1.68 1.237 2.387 1.15 2.918.947z"
          display="inline"
          enableBackground="accumulate"
          filter="url(#filter12947)"
          opacity="1"
          overflow="visible"
          visibility="visible"
          id="china"
        ></path>
        <circle fill="white" opacity="1" fillOpacity="1" cx = {coord.china.x} 
                                                         cy = {coord.china.y} r= "12" /> 
        <text fill="black" fontSize="14" x= {coord.china.x + X_OFFSET } 
                                         y = {coord.china.y + Y_OFFSET}> 
                                        {countries.china.troopCount}</text>
        <path
          fill={colors[countries.mongolia.occupant.name]}
          fillOpacity="1"
          style={{ marker: "none" }}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          markerEnd="none"
          markerMid="none"
          markerStart="none"
          d="M737.082 273.64s.692 0 1 .922c.307.923 1.152 2.383.307 3.536-.846 1.153-1.538 3.305-.615 5.38.922 2.075 2.536 2.306 2.382 3.536-.153 1.23-.384.922-.538 2.613-.153 1.69.154 2.767-.237 3.478-.193.957-1.146 2.056-1.146 2.056s1.134 1.906 1.752 2.083c.619.176 1.15 6.452 1.15 6.452s.972-.619 1.237.177c.265.795.618 2.121.618 2.121s1.326.796 1.326 1.238c0 .441-.088 1.502.265 1.679.354.177 1.768.795 1.768.795l.354 1.326s.177 1.15.707 1.238c.53.088.795-.089 1.502.265.708.353.884.442 1.503.442.619 0 .884-.089.884.442 0 .53-.088 1.414.265 1.502.354.089 1.238.177 1.238.177s.265.53.618.884c.354.354 1.414.442 1.591.795.177.354.265.973.354 1.326.088.354-.265 1.15 1.06 1.238 1.326.088 9.016-1.06 9.016-1.06l.53.883s.53.53 1.15.707c.618.177 1.767-.265 2.74.177.972.442 1.767.707 2.21.707h1.325s.265 1.237.707 1.326c.442.088 2.21-.619 2.21-.619s.353-.53.884-.442c.53.089.618-1.149 1.59-1.237.973-.089 1.503-.089 1.857-.089.353 0 2.475-1.06 2.563-.176.089.883.177 1.414.619 1.944s1.68.884 2.121.884c.442 0 1.414-.619 2.033-.972.619-.354.884-.707 1.68-.53.795.176 1.59.706 1.944.883.354.177.53.177 1.591.53 1.06.354 2.475.266 2.475.266s2.563.265 3.463.597c.428.255 2.303.942 2.99.88 1-.5.875.5 2.25-1s.5-.25 1.875-2.25 3.625-2.25 1.125-2.5-2.125.5-3-.375-.125-1.125-1.625-1-1.5.375-1.875-.125.75-.875-1.125-.875-1.25.75-2.75-.125-1.625-.5-1.5-1.5.125-1.875 1.125-2.125.75 0 1.375-.5 1-.625 1-1.375 1.375-1.125 1.75-2.125.375-2.5 1.125-2.5.75-.125 1.375 1.625-.875 2.5.875 2.625 2.75.25 3.5.125.25.125 1.125 1.125.75 1.5 1.625 2.125 1 1.75 1 1.75 0 .625 1.125.375 2.875-.25 2.875-.25-.5-.625.125 1.5 1 1.625 1 3.5-.875 2.875 0 3.5a6.25 6.25 0 001.875.875s2.625-2.5 2.875-3.625 1-1.5.875-2.375-.375-.25.125-1.375.5-3.125.5-3.125-.5-.125-1-.375-.75-.125-1-1.5.25-1.375-.625-1.75-1.25-1-1.5-1.75-.125-1.25-.75-1.375-.5-.25-1.875-1.25-1.125-.5-2.125-1.125-1.25-1-1.25-1.875-.25-1.125.375-1.75 1 .75 1.125-1.5-.625-2.375.5-4.625.875-3.125 1.75-3.875c.563-.438.438 0 2.094-1.75.095.054.095.142-.877-.035-.972-.176-1.149-2.032-2.386-2.12-1.238-.09-2.033-.796-2.298-1.769-.266-.972-1.15-3.8-3.094-3.712-1.944.088-2.298-2.475-4.066-4.596-1.768-2.121 2.121-1.945 2.121-2.652 0-.707-.265-.088-.53-2.033 0 0-.902.917-2.027.604-1.125-.312-1.875-.687-2-1.562s-1.25-1.313-1.25-1.313-1.562-.062-1.625-.562c-.062-.5-.312-.875-.5-2.438-.187-1.562-.062-1.937-.687-1.937s-1.375.125-1.625-.125-.563-.438-.625-1.25c-.063-.813-.125-1.625-.5-1.75s-1-.438-1.375-.438-1.625.25-1.75-.25-.25-1.187-.125-1.687.313-.813.313-1.25c0-.438-.25-1.438-.25-1.438s-.438 0-.875-.375c-.438-.375-.438-.937-1.063-1.062s-1-.313-1.563.313c-.562.625-.937 1.187-1.25 1.312-.312.125-2.187.313-2.812.313s-1.563-.375-1.563-.375l-.437-.5s-.875-.313-.875.062.313.75 0 1.25-.125.5-.813 1.063c-.687.562-1.125.687-1.187 1.125-.063.437-.063.625.313 1.062.375.438.562.313.75.875.187.563.25.688.25 1.313s.062 1.5-.375 1.875c-.438.375-.563.312-.875 1.125-.313.812-.563.937-.75 1.312-.188.375-.438.563-.063 1.313s.75 1.25 1 1.562c.25.313.563.813.313 1.625-.25.813-.313 1.25-.813 1.75-.5.5-.938 1.563-1.313 2-.375.438-.25.938-.875.625-.625-.313-1.062-.875-1.125-1.125l-.312-1.25c-.188-.75-.438-1.688-.563-1.938-.125-.25-1.713-1.091-2.11-.296-.399.796-.266 1.547-.885 1.812-.618.265-.751.265-1.016.663s-1.017 1.503-1.591 1.37c-.575-.132-.707-.265-1.635-.397-.928-.133-1.68-.442-2.078.132-.397.575-1.414 1.414-2.12 1.15-.708-.266-1.636-.796-1.857-1.017-.221-.221-1.591-.84-2.298-.752-.707.089-.707.266-2.077.177-1.37-.088-2.696-.619-3.58-.619-.884 0-3.182-1.149-3.889-1.016-.707.133-.575.133-1.326.442-.751.31-1.282-.177-1.59.353-.31.53-.31 1.282-1.238 1.15-.928-.133-1.415-.133-1.768-.487-.354-.353-.619-.884-.619-.884s-.574-.22-.928-.132c-.353.088-1.281 0-1.281 0s-.796-.796-.973-.84c-.177-.044-.928-.486-1.237-.442-.31.044-1.635.265-1.635.265s-1.945.133-1.624.571z"
          display="inline"
          enableBackground="accumulate"
          filter="url(#filter12951)"
          opacity="1"
          overflow="visible"
          visibility="visible"
          id="mongolia"
        ></path>
        <circle fill="white" opacity="1" fillOpacity="1" cx = {coord.mongolia.x} 
                                                         cy = {coord.mongolia.y} r= "12" /> 
        <text fill="black" fontSize="14" x= {coord.mongolia.x + X_OFFSET } 
                                         y = {coord.mongolia.y + Y_OFFSET}> 
                                        {countries.mongolia.troopCount}</text>
        <path
          fill={colors[countries.irkutsk.occupant.name]}
          fillOpacity="1"
          style={{ marker: "none" }}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          markerEnd="none"
          markerMid="none"
          markerStart="none"
          d="M807.428 271.611c.265 1.945-.089.972-.089.972s-.902.917-2.027.604c-1.125-.312-1.875-.687-2-1.562s-1.25-1.313-1.25-1.313-1.562-.062-1.625-.562c-.062-.5-.312-.875-.5-2.438-.187-1.562-.062-1.937-.687-1.937s-1.375.125-1.625-.125-.563-.438-.625-1.25c-.063-.813-.125-1.625-.5-1.75s-1-.438-1.375-.438-1.625.25-1.75-.25-.25-1.187-.125-1.687.313-.813.313-1.25c0-.438-.25-1.438-.25-1.438s-.438 0-.875-.375c-.438-.375-.438-.937-1.063-1.062s-1-.313-1.563.313c-.562.625-.937 1.187-1.25 1.312-.312.125-2.187.313-2.812.313s-1.563-.375-1.563-.375l-.437-.5s-.875-.313-.875.062.313.75 0 1.25-.125.5-.813 1.063c-.687.562-1.125.687-1.187 1.125-.063.437-.063.625.313 1.062.375.438.562.313.75.875.187.563.25.688.25 1.313s.062 1.5-.375 1.875c-.438.375-.563.312-.875 1.125-.313.812-.563.937-.75 1.312-.188.375-.438.563-.063 1.313s.75 1.25 1 1.562c.25.313.563.813.313 1.625-.25.813-.313 1.25-.813 1.75-.5.5-.938 1.563-1.313 2-.375.438-.25.938-.875.625-.625-.313-1.062-.875-1.125-1.125l-.312-1.25c-.188-.75-.438-1.688-.563-1.938-.125-.25-1.713-1.091-2.11-.296-.399.796-.266 1.547-.885 1.812-.618.265-.751.265-1.016.663s-1.017 1.503-1.591 1.37c-.575-.132-.707-.265-1.635-.397-.928-.133-1.68-.442-2.078.132-.397.575-1.414 1.414-2.12 1.15-.708-.266-1.636-.796-1.857-1.017-.221-.221-1.591-.84-2.298-.752-.707.089-.707.266-2.077.177-1.37-.088-2.696-.619-3.58-.619-.884 0-3.182-1.149-3.889-1.016-.707.133-.575.133-1.326.442-.751.31-1.282-.177-1.59.353-.31.53-.31 1.282-1.238 1.15-.928-.133-1.415-.133-1.768-.487-.354-.353-.619-.884-.619-.884s-.574-.22-.928-.132c-.353.088-1.281 0-1.281 0s-.796-.796-.973-.84c-.177-.044-.928-.486-1.237-.442-.31.044-1.635.265-1.635.265s-1.945.133-1.624.571c-1.691-.615-.615-.461-1.691-.922s-.307-1.384-.922-2.92c-.615-1.538-.923.307-.923.307s-1.23 0-1.69-1.845c-.462-1.845.307-.922.614-2.46.308-1.537-.46-1.383-.46-3.228 0-1.844 1.075-1.076 1.075-1.076s.308-1.69.461-4.458c.154-2.766-1.383-.768-1.998-2.152-.615-1.383 0-1.23.308-1.998.307-.769.768-1.23 1.69-2.767.923-1.537.615-.768 2.921-1.23 2.306-.46 1.384-2.613 3.228-3.228 1.845-.615.615-.307 1.845.923s1.844-.308 3.382-.615c1.537-.308 1.23-1.23 3.381-.923 2.153.308 1.23.615 1.845 1.845s1.537 1.23 3.382-.922c1.845-2.152.307-8.301-.922-11.683-1.23-3.382 2.892-11.038 2.892-11.038s4.875-1.5 6.125-2.25 1.125-.875 1.5-2.625.5-4.625 1.875-4.875 1.125 1.75 1.125 1.75c.125.75 1.5.5 3 .75 1.058.176.624-.767.407-1.689-.09-.385-.143-.766-.032-1.061.375-1 12.295.113 12.295.113-.442 1.06-.354 2.475-.088 2.917.265.442 1.414 2.917 1.06 4.95-.353 2.033-.884 8.131-.619 9.28.266 1.15.354 3.978 1.15 4.773.795.796 1.149 1.415 1.502 2.122.354.707 3.978 1.856 4.596 3.359.62 1.502.266 1.856 1.326 2.474 1.06.62 2.033 1.945 2.121 3.182.089 1.238.089 3.094.973 2.829.884-.265 1.856-1.503 2.21-1.856.353-.354 1.679-.796 2.828-.354 1.149.442 1.414.442 2.563.265 1.15-.177 2.21.177 2.21.177s.884 1.326.972 2.033c.089.707-.442 1.237 1.15 1.149 1.59-.088 1.944-.177 2.12 1.591.177 1.768 1.15 2.74 1.15 2.74s.265 1.856.176 2.298c-.088.442-.707 1.503-.442 2.652.266 1.149.884 2.298.354 3.093-.53.796-1.414 2.564-1.414 3.27 0 .708-.177 2.564 0 3.183.177.618-.53.176-.265 2.121z"
          display="inline"
          enableBackground="accumulate"
          filter="url(#filter12955)"
          opacity="1"
          overflow="visible"
          visibility="visible"
          id="irkutsk"
        ></path>
        <circle fill="white" opacity="1" fillOpacity="1" cx = {coord.irkutsk.x} 
                                                         cy = {coord.irkutsk.y} r= "12" /> 
        <text fill="black" fontSize="14" x= {coord.irkutsk.x + X_OFFSET } 
                                         y = {coord.irkutsk.y + Y_OFFSET}> 
                                        {countries.irkutsk.troopCount}</text>
        <path
          fill={colors[countries.ukraine.occupant.name]}
          fillOpacity="1"
          style={{ marker: "none" }}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          markerEnd="none"
          markerMid="none"
          markerStart="none"
          d="M580.446 188.26c-1.237-.088-2.121-.353-2.121-.353s.925 3.968.3 4.468.75 3.625 0 4.125-1.125 6.25-1.125 8.875 1.375 6.75 1 8.875.625 5.125.625 5.125.625.625.625 2.25.875 2.5.875 2.5.438.125.5.688c.063.562.063 1.437-.188 1.687-.25.25-.812.688-.812 1.625 0 .938.25 1.313-.063 1.75-.312.438-.562.563-.687 1.625-.125 1.063-.313 2.5-.063 3.063.25.562.688 2.687-.187 2.437s1 .375 1.5.75-1.125 1.125-2 1.375-1.625.25-2.875.125-.875-.375-1.875-.25-3.125.75-4.25.5-1.75-.125-2.5.375-.25 1.5-.25 2.625.75.375.875 1.625.375 1 .75 1.75 1 .125 1 .125 2.125 1.75 1.875 2.875.5 1.875.5 2.875-1.125.25-2.75.125-.625-.875-1.25-2.625-.5-.625-1.5-1-1 .25-1.25 1.375-.375 1.25-1.25 2-.125 1.375-.375 2.5-.625 1-1.375 1.875.25 1.375.625 2.625.875 1.75.875 1.75c.5.5.375 1 .375 1.75s-.5 1.125-1 1.5l1.25.125s1.063.938 1.125 1.25c.063.313 1.188 1.25 1.188 1.25s2.5 1.375 3.375 1.375 1.875-.563 2.375-.625c.5-.063-.063.875-.063 1.188 0 .312.688 3.25 1 3.875.313.625.375 8.062.438 9.437.062 1.375 1.375 2.75 1.75 3.063.375.312.625 1.062.625 1.375 0 .312-.813 1.375-.875 1.812-.063.438.125 1.188.062 1.75-.063.563-.5.813-1 1.25-.5.438-.375 1.438-.688 2.063-.312.625-.812.625-1.437.875s-2.313 3.625-2.5 4c-.188.375-1.938 1-2.5 1-.563 0-2.063.437-2.25.937-.188.5-.188 1.5-.188 1.5l2.313 2.188c.25-.063.5-.813.75-1.188s1.188-.438 1.188-.438 1.625-.062 2.312.375c.688.438.25.75.313 2.063.062 1.313.062 1.063.25 1.688.187.625.5.375 1.625.687 1.125.313.75.188 1.625.313s.687.75 1.125 1.687c.437.938.5 1.625.937 2.438.438.812.438 1.312.438 1.562s-.313 1.5-.375 2.188c-.063.687-.375.812-.5 1.125-.125.312-.063 1.187-.063 1.5 0 .312.438.75.813 1.187.375.438.375.813.375 1.5 0 .688-.563 1.75-.563 2.375s.938 1.063.813 1.625c-.125.563 2.187 2.25 2.187 2.25l1-.75s1-.125 1.75-.875.5-1.125.5-1.125.25-2.375.625-2.875.875-.25 2.5-.625 1 0 1.75 0 1.25.5 2 .75.625.75.875 1.75.5 1.625.625 2.5.125 1 .5 1.875.75.75 1.75 1.375.375.5 1.875 1.25.75-1.125 1.25-2 .75-.875 1.25-1.125.875-.5 1.5-1 .375-.5.75-1.375-.125-1.25-.375-1.75-.75.125-1.375.125-1.375-.75-2-1.5-.125-1-.125-1 .875-1 1.75-1.625.75-.5 1.5-.75 1.25-.25 1.875-.5 1.125-.375 2.375-.625.75 0 2.125 0 1.625-.25 1.625-.25.375-.5 1-.875.875-.125 1.25.375-.25 1.25-.25 1.25l-1.5 1.5c-.875.875-1 .375-2.625.625s-.5.25-.625 1.125-.75 1.625-.75 1.625l-.5 1.25.875.5s.375.75.625 1.75.75.375 1.375.625-.125 1-.125 1.75 1.125 1.375 1.75 2 .375.875 1 2 .5-.375 1-.625.75-.25 1.875-.375 1.25.125 1.25.125l-.625 1.5s.75.5 1.625 1.375.25 1.625 1.375 1.625.75.5 1.25.875 1 1 1.875 1.75.75.5 1.5.625.375.125.75 3 .75.25.75.25-.25.75-.625 1.25-.875.75-1.375 1.25-1.125 1-1.125 1.5.625.5 2 1.5 1.375-.5 1.375-.5.625-.375 2.25-.25 1.375-.375 1.375-.375.75-.875 1.75-1 .875 0 1.75-.125.875-.5 1.5-1 1.25-.125 1.875-.25 1.875-.25 1.875-.25c2.125-.375.25-.375.375-1.25s1-.875 1-.875.75.125 1.25-.375.75-.75.75-1.375-.625-1.625-.625-1.625-.875-.625-.875-1.375.125-1 .375-1.5 0-1.375 0-2.875 0-1.625.125-2.625.75-.5 1.5-1-.25-1.75-.25-1.75-.5 0-1.625-.375-1.625-.375-2.375-1.875-.375-1.125-.5-1.75-.75-.875-.5-2.375-.993-2.927-.993-2.927l-1.06-.354s-.708-.353-.885-1.06c-.176-.707.177-.884.354-1.945.177-1.06-.53-2.121-.53-2.121l-1.238 1.06s1.768-2.828 1.945-3.712c.177-.884 0-1.06.353-1.768.354-.707.707-.53 1.768-.883 1.06-.354 1.414-1.061 1.414-1.061s.53-1.414.354-2.828c-.177-1.415-.354-1.945-.354-3.182 0-1.238-1.414-.884-1.414-.884l-1.06-1.415s-1.061-.353-1.592-1.237c-.53-.884 0-1.414.177-2.475.177-1.06-.53-1.414-.53-1.414s-.884-2.121-1.238-3.182c-.353-1.06-.176-1.591-.353-2.475-.177-.884.177-1.414.707-2.121.53-.707 1.237-1.768 2.298-2.122 1.06-.353-.353-1.59-.353-1.59s1.237-3.713 1.944-3.713c.707 0 .707 0 3.359-.177 2.652-.176 1.414-.884 1.944-1.59.53-.708 1.768-.531 2.475-.708.707-.177.707 0 1.415 0 .707 0 3.181-.707 3.181-.707s1.591-1.414 2.299-1.768a10.837 10.837 0 001.414-.884l1.237 1.238 1.414.177s1.591.707 2.475.884c.884.176 1.238.353 2.122.176.884-.176 1.06-.53 1.767-1.944.708-1.414.884-1.768 1.061-3.005.177-1.238 3.359-1.238 4.243-1.591.884-.354 1.06-.707 2.121-1.238 1.06-.53 0-1.59 0-3.359 0-1.767-.53-1.944-.707-3.182-.177-1.237-.53-1.59-.707-2.474-.177-.884 1.59-1.768 2.298-3.182.707-1.415 0-1.945-.177-3.182-.177-1.238-1.768-1.238-1.768-1.238l-3.182-2.121-1.414-.707s-.177-1.414 0-3.005 1.06-2.122 1.768-3.36c.707-1.237.707-2.65.707-3.535 0-.884-1.768-1.237-1.768-1.237v-4.066-4.773c0-1.237-.707-3.536-1.237-4.42-.53-.883.53-2.474.53-2.474s-.884-1.945-1.06-2.829c-.177-.884 1.06-4.773 1.06-4.773l1.945-4.773 1.237-2.121s0-3.182.53-3.89c.53-.706.354-4.065.354-4.065s-.707-6.717-1.414-7.16c-.707-.441-.972-.972-1.68-1.856-.707-.883-2.032-.088-3.005-.088-.972 0-1.944-.088-3.005-.265-1.06-.177-1.326-.442-2.652-.707-1.325-.265-2.21.884-2.563 1.59-.353.708-.707.973-1.768 2.564-1.06 1.591-1.149.354-2.475.972-1.325.619-1.237-.884-2.21-1.237-.971-.354-2.209.353-3.27.353-1.06 0-.972-.265-2.298-1.149s-1.326-.53-3.182 1.238c-1.856 1.768-1.679 1.149-3.005.884-1.326-.265-1.944 1.237-1.944 1.237s-2.387 2.298-3.006 2.652c-.618.353-3.093 1.06-3.977 2.298-.884 1.237-.177.795-1.856 1.68-1.68.883-1.326.088-1.326-.973 0-1.06 0-.442.619-1.856.618-1.414 0-.619-.62-.884-.618-.265-1.06-.796-1.678-1.68-.62-.883-.62-1.237-1.326-1.944-.707-.707-2.122.796-3.359.619-1.237-.177-1.15 0-2.033.088-.884.089-.088.796.177 1.591.265.796.442.707 1.06 1.414.62.707-.088 1.945-.088 2.652 0 .707-.177.795.088 1.591.266.795.708.53 1.591 1.149.884.619.53.972.354 1.768-.177.795-.972-.089-1.945-.177-.972-.088-1.59 1.326-2.563 1.856-.972.53-1.414.354-2.386.442-.973.089-.796.619-2.387 2.121-1.59 1.503-1.68.62-2.828.62-1.15 0-.707-.62-2.033-1.503-1.326-.884-.619.088-1.591.441-.972.354.088 1.061.707 2.033.619.973.795 1.68.972 2.033.177.354 0 .442-1.414 1.945-1.414 1.502-1.06.088-2.121.088-1.06 0-.796.089-1.856.177-1.061.088-.708-.442-.708-1.149v-2.121c0-1.503-.53-1.15-.795-1.503s0-.795-.177-1.237c-.177-.442-.884-1.061-1.326-1.061-.442 0-1.679.088-1.944-.265a4.122 4.122 0 00-1.591-1.238c-.796-.353-1.68-1.237-2.033-1.59-.354-.354 0-.796.088-1.238.089-.442 1.68-1.06 3.005-.884 1.326.177 4.155.53 6.364.53h4.155c.884 0 3.005-.442 4.154-.707 1.149-.265 2.652-1.06 3.182-1.68.53-.618.177-.795.088-1.944-.088-1.149-.442-1.59-1.237-2.298-.796-.707-.707-1.149-4.066-3.358-3.359-2.21-3.182-.708-4.508-.62-1.326.09-1.149-.53-2.121-.795s-3.005-.176-4.685-.176c-1.679 0-1.767.265-3.093-.089-1.326-.353-.707-.795-1.856-.884-1.15-.088-1.415.177-2.387-.177-.972-.353-1.237-.883-1.944-1.149-.708-.265.265.177-.973.089z"
          display="inline"
          enableBackground="accumulate"
          filter="url(#filter12959)"
          opacity="1"
          overflow="visible"
          visibility="visible"
          id="ukraine"
        ></path>
        <circle fill="white" opacity="1" fillOpacity="1" cx = {coord.ukraine.x} 
                                                         cy = {coord.ukraine.y} r= "12" /> 
        <text fill="black" fontSize="14" x= {coord.ukraine.x + X_OFFSET } 
                                         y = {coord.ukraine.y + Y_OFFSET}> 
                                        {countries.ukraine.troopCount}</text>
        <path
          fill={colors[countries.southern_europe.occupant.name]}
          fillOpacity="1"
          style={{ marker: "none" }}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          markerEnd="none"
          markerMid="none"
          markerStart="none"
          d="M567 303.313c.25-.063.5-.813.75-1.188s1.188-.438 1.188-.438 1.625-.062 2.312.375c.688.438.25.75.313 2.063.062 1.313.062 1.063.25 1.688.187.625.5.375 1.625.687 1.125.313.75.188 1.625.313s.687.75 1.125 1.687c.437.938.5 1.625.937 2.438.438.812.438 1.312.438 1.562s-.313 1.5-.375 2.188c-.063.687-.375.812-.5 1.125-.125.312-.063 1.187-.063 1.5 0 .312.438.75.813 1.187.375.438.375.813.375 1.5 0 .688-.563 1.75-.563 2.375s.938 1.063.813 1.625c-.125.563 2.187 2.25 2.187 2.25s-1.125.75-.625 1.5 1.125 1.375.875 1.875-.125.5-.75 1-1 .375-1 1.5.875 1.375.25 2.375-.375.875-.875 1.625-.75 1.375-1 2.125.5.875-.375 1.625-1.125.375-1.375 1.25.125.875-.375 1.5-.5 1-1 1.375-.5.25-1.125 1-.125 1.125-.625 1.75-.875.125-1.125 1 0 .5.125 1.375.75.875 0 1.875-1.125 1.625-1.625 2-.5-.125-.875 1 .25 1.5-.5 1.75-1.125.25-1.875.375-1.125-.125-1.625 0-.75 0-1.125.625-.75.5-.25 1.25.375.75.875 1.25l1.375 1.375c.5.5.875.75 1 1.375a6.38 6.38 0 01.125 1.125s.625 1.875.125 2.125-1 .25-1.125 1-.25.5 0 1.375 0 .875.5 1.375.625.5 1.375 1.25 1.625.875 1.125 1.5-1.125.75-1.875.5-1.125.375-1.625-.75-.75-1.375-.75-1.375-.75.125-.75.75 1.875.75-.5.75-2.125.75-2.75 0-.125-1-1-1.25-1 .5-1.375-.25-.5-.75-.5-1.875.625-1.125.25-2.625-.625-1.125-.875-2 0-.875 0-2-.375-1.625-.375-1.625-.375-.25-.625-1.5-.125-1.375-.375-2.5-.125-1.5-.75-1.5-.25.5-1.25-.25-.5-1-1.375-1.375-1 .375-1.25-.875-.25-.625-.25-2.125v-2.625c0-.625.5-.625-.25-1.625s-.625-1.25-1.5-1.375-.625.875-1.375-.375-.875-2-1.875-2.25-.875.375-1.375-.25-.25-.75-.875-1.375.125-.875-1.5-.875-1.625-.875-2.5-.5-1.125 1-1.125 1.625 0 .625.125 1.5-.125 1.375.5 1.5.625-.5.75.625-.125 2.25 1.375 1.625 2.375-1.5 2.5-.75-.125.875.125 1.875 0 1.875.875 2.5 1.25.625 1.625 1.125.25.375.75.625.5 1.375 1.125 2.25 1.375.125 1 1.25-.375 1.625-.875 2-1.625.75-2.375.125-1.375-1.125-1.375-1.125.625-1.25-.875-.875-1.5.5-2.125.5-1-1-.75.375 1.25 1.875 1.25 1.875 1.125 0 1 1.25.375.875-.25 2.125-.5 1-1 2.125 0 1.125-.625 2-.875 1.375-1.75 1.75-.875-.375-1.25 1-.25 1.375-.875 1.625-2 .25-2.5.625.375.875-1 .5-1-.375-1.625-.5-.875-.125-1.375-.75-.125-1.75-.625-1.375-.875 1.75-1.375.375-.375-1.5-.875-1.75-.75 1.25-.875-.375-.375-1.625.375-2.375 1-1 1.625-1 .75.125 1.5.25.625.75 1.25.875 2.5-1 2.75-.25-.25 3 .375 1 .25-2.375 1.125-3.125 1.75-1.5 2.125-2 .75-1.25-.125-2.125-1.125 0-1.125-1.625.25-2-.25-2.875 0-.625-1-1.125-1-.75-1.5-1.375-1.375-1.125-2.25-1.375-.25.375-1.125-1-1.125-1.75-1.875-1.625-.375 1.125-1.125.25-.5-1-1-1.375-.75 0-1.375-.5-.625-.5-.75-1.5.125-1.375-.5-1.875-1.875-.875-1.875-.875.25-.25-1.375 0-1.75.25-2.25.625c0 0 2.424-.851.833-2.266-1.59-1.414-2.298-3.182-1.59-3.358.706-.177 1.59-.884 1.767-1.591.177-.707.442-2.122.088-2.564-.353-.442-2.21-1.679-2.21-1.679s-1.06-.884-.883-1.237c.177-.354 1.06-1.326 1.06-1.326s1.061.177 1.061-1.326c0-1.503 0-2.298-.353-3.182-.354-.884-.442-1.591.176-2.21.62-.618 1.326-1.59 1.503-1.944.177-.354.177-.973 1.326-.796 1.149.177 1.414-.088 2.21-.442.795-.353 1.59-1.326 1.59-1.326s1.326-.176 1.326.266.884 3.005 1.768 2.651c.884-.353 2.563-.795 3.359-1.237.795-.442.707-.884 1.768-.796 1.06.089 1.237.265 2.386-.088 1.15-.354 1.768-.442 2.298-1.15.53-.706 2.387-2.297 2.387-3.181v-2.033s3.8-.53 4.684-.619c.884-.088 1.768-.088 2.298-.442.53-.353.53-1.06.973-1.149.442-.088 1.856.177 1.856.177s0 .265.442.354c.442.088 1.326 1.06 1.149 1.856-.177.795-.707 1.68-.884 2.033-.177.353-.619 1.502-.53 1.856.088.353 1.06 1.768 1.06 1.768v3.889h9.193s.707-1.503.618-2.21c-.088-.707-.883-1.768-.883-2.121 0-.354.176-3.182.176-3.182s.53-2.917 1.856-3.801c1.326-.884 2.122-1.237 2.21-1.68.089-.441.265-1.325.707-1.502.442-.177 1.15-.884 1.15-.884s-.266 0 .43-1.09z"
          display="inline"
          enableBackground="accumulate"
          filter="url(#filter12963)"
          opacity="1"
          overflow="visible"
          visibility="visible"
          id="southern_europe"
        ></path>
        <circle fill="white" opacity="1" fillOpacity="1" cx = {coord.southern_europe.x} 
                                                         cy = {coord.southern_europe.y} r= "12" /> 
        <text fill="black" fontSize="14" x= {coord.southern_europe.x + X_OFFSET } 
                                         y = {coord.southern_europe.y + Y_OFFSET}> 
                                        {countries.southern_europe.troopCount}</text>
        <path
          fill={colors[countries.western_europe.occupant.name]}
          fillOpacity="1"
          style={{ marker: "none" }}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          markerEnd="none"
          markerMid="none"
          markerStart="none"
          d="M521.403 317.396c-1.15-.177-1.15.442-1.326.796-.177.353-.884 1.326-1.503 1.944-.618.619-.53 1.326-.176 2.21.353.884.353 1.68.353 3.182 0 1.503-1.06 1.326-1.06 1.326s-.884.972-1.061 1.326c-.177.353.884 1.237.884 1.237s1.856 1.237 2.21 1.68c.353.441.088 1.856-.089 2.563-.177.707-1.06 1.414-1.768 1.59-.707.177 0 1.945 1.591 3.36 1.591 1.414.581 1.735.581 1.735s-.914.155-1.414.53c-.5.375-.125.375-.625 1s-.375.75-1.25 1-.125.75-1 .625-.75.25-1.25-.25-.125-1.125-1-1.125-1.25.125-.875-.625.875-.75-.125-.75-.875.25-2.125 0-1.75-.125-2.25-.125l-1.375 2.5s.125.5 0 1.125-.625 1.125-.625 1.125-.375.375-.375 1.125.25.875-.5 1.625-.75 1-1.25 1.25-.5.125-.875.625-.625.5-.875 1.125-.25.625.125 1.25a8.02 8.02 0 01.625 1.375s.375.125.125 1.25-.375 1.875-.375 1.875 0 .5.125 1.5 1 2.125 1 2.125l.625.875s.375 1.5.5 2.25 1.25.5.125 1.5-2.75 1.625-3.875 3.5-.75 3.375-1.625 4.375-.125 1.125-1.25 1.125-2.125-1.25-2.75 0-1 2.375-1.875 2.5-1-1.375-1 .375-.375 2.875-.375 2.875-.25.875-1.125.75-1-.25-1.75-.375-.75.375-1.375-.375-.75-1.125-1-1.75-.25-.875-1.25-1-1 .25-1.5-.625-.75-1.125-1.5-1-.75.625-1.75-.375-1-1.75-1.5-1.625-1.125 1-1.125 1 .125.5-1.375.375-1.75-.375-2.875-.375-1.25.75-2.25.25-1.125-.625-1.125-1.25.125-1.5-.375-2 .125-1.125-.625-1.5-.375-.25-1.25-.25-.875.125-1.75-.375-1.25.25-.875-1.125.125-1.25.75-2.25.625-1 1-2.125.5-1.375 1.125-3 .875-1.125.875-2.375-.5-1.25.25-2.125.875-.875.75-1.875.25-.75-.25-1.5-1.75-1.875-2.25-2.375-.375.125-.625-1.375-.75-1.25-1-2.125-.25-.875-.25-2-.875-.75-.875-1.375-.375-1.125.5-1.625 1-.125 2.125-1.125 1.125-.75 1.375-1.625 1.125-1.375 1.125-1.375-.125.125.625.875.875.75 1 1.25-.375.625 1.125 1 1.125.5 2.625.5 1.875.125 2.5-.125 1.25-.625 1.25-.625.5-.375 1.375-.375 1-.125 1.75.125.125.375.875.25.875.125 1.5-.25 1 .25 1.375-.875 0-1.5 1-2.25 1.375-1 2.375-1-.625-1.625-1.25-1.75-1 .5-1-.125-.125-.75.25-1.75 1.125-1.625 1.125-1.625-.125-.5-.25-1.375 1.625-1.375.5-2.125-1.625-1.125-2.375-1.125-.625 1.25-1.25-.25-.125-1.75-.75-2.5-.875-.5-1.5-1.375.25-.75-1.125-1.75-2.25-1.25-2.875-1.25-.875.875-.75-.375.125-1.625 1-2.375 3.125-1.375 4-1.5-.5-.5 1.375-.125 1.25.375 2.125.5 2.5.625 2.5.625.25-1.875.75-2.5.625-.625 1-1.625.5-1.125 1.75-1.5 2.125.625 2.125.625-1.625 1.625-.375 1-.375-2.625 2.375-2.25 3.75 2 4.125.125 0-1.875.625-2.875.625-1 1.75-1.625.875-2.5 2.25-2.75.875 0 2.125-.25 1.125 0 1.875-.875c0 0 1.188.313 1.125.75-.063.438 1 3.188 1 3.188s1.313.812 2.188 2.062c.875 1.25 1.312 2.375 1.75 2.5.437.125.687.125.812.938.125.812.188.937.563 1.437.375.5.937.438 1.062 1.188s.313 1.562.625 1.937c.313.375 1.25 1.063 1.25 1.063s.813.75.903.583z"
          display="inline"
          enableBackground="accumulate"
          filter="url(#filter12967)"
          opacity="1"
          overflow="visible"
          visibility="visible"
          id="western_europe"
        ></path>
        <circle fill="white" opacity="1" fillOpacity="1" cx = {coord.western_europe.x} 
                                                         cy = {coord.western_europe.y} r= "12" /> 
        <text fill="black" fontSize="14" x= {coord.western_europe.x + X_OFFSET } 
                                         y = {coord.western_europe.y + Y_OFFSET}> 
                                        {countries.western_europe.troopCount}</text>
        <path
          fill={colors[countries.northern_europe.occupant.name]}
          fillOpacity="1"
          style={{ marker: "none" }}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          markerEnd="none"
          markerMid="none"
          markerStart="none"
          d="M563 263.625l1.25.125c.847.794 1.452 1.717 2.313 2.5 0 0 2.5 1.375 3.375 1.375s1.875-.563 2.375-.625c.5-.063-.063.875-.063 1.188 0 .312.688 3.25 1 3.875.313.625.375 8.062.438 9.437.062 1.375 1.375 2.75 1.75 3.063.375.312.625 1.062.625 1.375 0 .312-.813 1.375-.875 1.812-.063.438.125 1.188.062 1.75-.063.563-.5.813-1 1.25-.5.438-.375 1.438-.688 2.063-.312.625-.812.625-1.437.875-1.685 2.299-2.098 4.337-5 5-.563 0-2.063.437-2.25.937-.188.5-.188 1.5-.188 1.5l2.313 2.188c-.696 1.09-.43 1.09-.43 1.09s-.708.707-1.15.884c-.442.177-.618 1.06-.707 1.503-.088.442-.884.795-2.21 1.679-1.325.884-1.856 3.8-1.856 3.8s-.176 2.83-.176 3.183c0 .353.795 1.414.883 2.121.089.707-.618 2.21-.618 2.21h-9.193v-3.89s-.972-1.414-1.06-1.767c-.089-.354.353-1.503.53-1.856.177-.354.707-1.238.884-2.033.177-.796-.707-1.768-1.15-1.856-.441-.089-.441-.354-.441-.354s-1.414-.265-1.856-.177c-.442.089-.442.796-.973 1.15-.53.353-1.414.353-2.298.441-.884.089-4.684.619-4.684.619v2.033c0 .884-1.856 2.475-2.387 3.182-.53.707-1.149.795-2.298 1.149-1.149.353-1.326.177-2.386.088-1.061-.088-.973.354-1.768.796-.796.442-2.475.884-3.359 1.237-.884.354-1.768-2.21-1.768-2.651 0-.442-1.325-.266-1.325-.266s-.796.973-1.591 1.326c-.796.354-1.061.619-2.21.442-1.15-.177-.903-.584-.903-.584s-.938-.687-1.25-1.062c-.313-.375-.5-1.188-.625-1.938s-.688-.687-1.063-1.187-.437-.625-.562-1.438c-.125-.812-.375-.812-.813-.937-.437-.125-.875-1.25-1.75-2.5s-2.187-2.063-2.187-2.063-1.063-2.75-1-3.187c.063-.438-1.125-.75-1.125-.75.75-.875 1.375-3.125 2-3.375s1 .375 1.375-1.625-.25-1.625.375-2.125 1.375.125 1.75-1.25.25-1.625.25-2.25-1.75-.625.625-1.125 2.5.25 3-.75.5-.75.75-1.75.75-.75 1.375-1.75.25-1 .625-1.875.375-4.125 1-4.375.625.5 1-.5 0-1.25.75-2.25.875-.875 1.625-1.375.875-.375 1.125-1-.875-.5.875-1.75 1.625-.75 1.875-1.375.5-1 .625-1.625 0-.625.125-1.5 0-.25.125-1.75.375-2.5.5-3.125.25-1-.375-.875-.75 1.125-.875 0-.375-1.5-.625-2.125-.625-1.75-.625-1.75-.5-.5 0-1.25 1.125-1.875 1.125-1.875.375-.375 1-.5.75.125 1.25-.5-.5-.75.75-.875 1.5-.125 1.5-.125l-.75 1.125-.125 1s1.375.75 1.625 2.25.5 1.625.375 2.375-.25 3.75-.25 3.75 0 1 .75 1.625 1.25.875 2 1 2.125.25 2.75 0 1.25-.375 1.875 0 1.375 0 1.875-.25 1.125-.5 1.75-.625 1.125-.125 2.375-.125 1.625.25 2.125-.25.375-.125 1-.625 1.875-1.125 2.5-1.125.625-.125 1.375-.25 1.75-.625 2.75-.25 1.375.5 2.25.625 1.25.375 1.75 0z"
          display="inline"
          enableBackground="accumulate"
          filter="url(#filter12971)"
          opacity="1"
          overflow="visible"
          visibility="visible"
          id="northern_europe"
        ></path>
        <circle fill="white" opacity="1" fillOpacity="1" cx = {coord.northern_europe.x} 
                                                         cy = {coord.northern_europe.y} r= "12" /> 
        <text fill="black" fontSize="14" x= {coord.northern_europe.x + X_OFFSET } 
                                         y = {coord.northern_europe.y + Y_OFFSET}> 
                                        {countries.northern_europe.troopCount}</text>
        <path
          fill={colors[countries.egypt.occupant.name]}
          fillOpacity="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          d="M575.585 429.296c-.177-.884-3.89.177-4.773-.177-.884-.353-1.414-1.06-1.414-1.06s-.707-2.122-.884-3.183c-.177-1.06-2.652.177-3.536 0-.884-.176-.176-1.414-.53-2.651-.354-1.238-1.768-.707-2.652-.707-.884 0-2.298-.707-3.535-1.591-1.238-.884-1.591.353-3.005.53-1.415.177-1.415-.177-1.945-1.06-.53-.885-2.298.53-3.889.353-1.591-.177-1.237-.884-2.121-2.298-.884-1.414-1.768-.354-3.713-.884-1.944-.53-1.237-.707-1.414-2.121-.177-1.415-1.414-1.238-1.414-1.238s-.177-1.59-.354-2.828c-.176-1.238.177-3.182.177-3.89 0-.706-.353-3.358-1.59-3.888-1.238-.53-.354-1.768-.354-1.768s-.53-1.768-.354-2.652c.177-.884 1.414-1.944 2.298-1.944.884 0 1.414-1.061 1.414-1.061s-1.414-2.121-2.121-3.359c-.707-1.237 1.237-1.06 1.237-1.06l.884-1.061s.354-.53 1.945-1.414c1.59-.884.683-2.909.683-2.909s1.625.125 3.25.375 1.375 1 2.375 2 1.375 1.25 3.5 2 2.25 1.125 3.625 1.125 3.625-1.25 4.5-1.625 2.375-.5 8.375-.875 6 3.5 7.375 3 2.875 0 3.625.25 2.875 1 4.125 1 2.625.75 3.125 1 6.25 1.5 6.875 1.5l1.625-1.5 1.25.375s1 .5 1.5.5.75-.875.75-.875l2-1.25 2.25 4.375s-1 2.625-1 3.375-.125 2.625-.625 2.75-1.125-.125-1.875-.625-1.5-1.875-2.625-2.625 0 2.5 0 2.5c-.125.5 2.375 3.875 6.75 9.875s.5 3 1.375 4.5 1.75 2 2 4.25.125 1.125.5 2.25l-.25-.25c.125 1.625-27.25 0-28.875.5s-1.25 5.25-1.875 5-2.665 1.046-2.665 1.046z"
          display="inline"
          filter="url(#filter12975)"
          opacity="1"
          id="egypt"
        ></path>
        <circle fill="white" opacity="1" fillOpacity="1" cx = {coord.egypt.x} 
                                                         cy = {coord.egypt.y} r= "12" /> 
        <text fill="black" fontSize="14" x= {coord.egypt.x + X_OFFSET } 
                                         y = {coord.egypt.y + Y_OFFSET}> 
                                        {countries.egypt.troopCount}</text>
        <path
          fill={colors[countries.east_africa.occupant.name]}
          fillOpacity="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          d="M575.055 454.752s-.53-2.122-1.415-3.36c-.884-1.236-.353-2.65-.353-3.535 0-.883.353-1.414.884-2.12.53-.708.176-1.062.176-1.062l.884-1.767s.53-1.415.53-2.652-.706-.707-1.414-.884c-.707-.177-.176-.353.884-.884 1.061-.53.707-1.768.884-2.828.177-1.06-.353-5.48-.53-6.364 0 0 2.04-1.296 2.665-1.046s.25-4.5 1.875-5 29 1.125 28.875-.5l.25.25c.375 1.125 1.25 1 1.25 1s2 1.5 2.25 2.25.5.25.5.875.375 2.875.875 4.375.625.75 1.625 1.625.25.75.25 2.75 1 1.5 2 3.125.125.875.625 2.25.625 2 1.125 3 .75.75 1.375.75.75.375.75 1.875 2.375 2 3.375 3.5 1.125 1 1.75 2 0 .75-.625 2.875.125 2.25.75 3.25 4 .875 4 .875 3-.25 4.125-.875 1-.875 1.5-1.25 4 0 6.5-.625 5.75-3 7.25-.375-3.75 13-6 18-8.5 10-12.375 13.75-6.25 8.375-6.5 8.875-1.25 1.5-1.75 1.75-1 .625-2 1.875-1.625.75-3 1.75-1.125 2-1.125 2.75-.375 2.375-.75 2.875.5 3 .5 3.875-.25 2.875-.25 2.875 0 .375 1.375 1.125.5 5.25.5 5.25l.25.5s-1.625 1.625-2.75 1.625S614 524.5 614 524.5s-.625.125-1.875.5-2.25.25-3.375 1.75-.5 1.375.375 4.25-.375 1.125-.75 2.125 0 3.125 0 4.375-.875 1.75-1.5 2.25-2.625-1.5-3.375-2.75 0-3.25.5-4.75-1.125-3.625-1.5-4.875-.25-1.375.375-2.5.125-.875-.25-2.625-1.375-1.625-1.75-2.375-1.5-2.25-2.5-2.25-.5-1.625-.75-2.5-2-.5-2.625-.25-.75-.625-1.125-3.375-1.125-9.75-1-10.875 2.875 1 3.375.25.625-6.375.375-7.875 2.125-.875 3.625-1 1.75-2 2.375-3.25 1.25-1.125 1.875-1.375.5-1.5 1.25-2.5 1.75-2.75 1.75-4.125-1.875-2.75-4.125-2.875-1.75 1-4.875.25-3.75-.625-4.75-.875-.875-1.875-2-2.25-2.5 2.125-2.5 2.125-1.25-.375-2.5-3.375-3-3.875-3.5-4-.625-3.625-.625-4.25-2.25-1.375-2.75-2.125-.875-1.875-1.75-2.125-1.5-.25-1.875-2.375-1.195-4.123-1.195-4.123z"
          display="inline"
          filter="url(#filter12979)"
          opacity="1"
          id="east_africa"
        ></path>
        <circle fill="white" opacity="1" fillOpacity="1" cx = {coord.east_africa.x} 
                                                         cy = {coord.east_africa.y} r= "12" /> 
        <text fill="black" fontSize="14" x= {coord.east_africa.x + X_OFFSET } 
                                         y = {coord.east_africa.y + Y_OFFSET}> 
                                        {countries.east_africa.troopCount}</text>
        <path
          fill={colors[countries.congo.occupant.name]}
          fillOpacity="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          d="M595 514.875c-.625.25-.75-.625-1.125-3.375s-1.125-9.75-1-10.875 2.875 1 3.375.25.625-6.375.375-7.875 2.125-.875 3.625-1 1.75-2 2.375-3.25 1.25-1.125 1.875-1.375.5-1.5 1.25-2.5 1.75-2.75 1.75-4.125-1.875-2.75-4.125-2.875-1.75 1-4.875.25-3.75-.625-4.75-.875-.875-1.875-2-2.25-2.5 2.125-2.5 2.125-1.25-.375-2.5-3.375-3-3.875-3.5-4-.625-3.625-.625-4.25-2.25-1.375-2.75-2.125-.875-1.875-1.75-2.125-1.5-.25-1.875-2.375c0 0-.5-3.625-1.16-4-.035-.123-2.334 2.352-2.334 3.235 0 .884.53 1.945-1.767 3.006-2.298 1.06-3.713 1.767-5.127 2.298-1.414.53-1.944 1.59-2.828 2.121-.884.53-2.122.53-3.005 1.238-.884.707-1.591.707-2.122 1.767-.53 1.06-1.237-.707-1.414 1.768-.177 2.475.354 3.712.354 3.712s1.59-1.944 1.237 1.945c-.354 3.889-1.237 4.243-.707 5.657.53 1.414.884 1.768-.53 2.651-1.415.884-2.652 0-2.652 0s-.354-1.59-1.945-1.237c-1.59.354-1.767 1.06-3.358.707-1.591-.353-3.182-.353-3.182-.353s-1.945 1.59-2.652 1.237c-.707-.354-.707-.884-1.237-1.945l-.634-.182c-1.062-.375-1.187 2.125-1.187 2.125.375 1.125 1.375 1.625.875 2.125s-1.125 2-1.75 2.875-3.25 2.125-2.25 3.25 7.625 6.375 9 9.5l1.25 1.75c.625.875 2.875-1 3.625-.375s2.75 2 3.5 2.375 4.875-.25 5.875.5 1.75.375 1.75.375-.625 4.25 0 4.875 2.125 1.375 3 .125 7.375-2 7.75-1-.625 3 .625 4 2.125 1.75 2 2.75-1.375 2-.875 3.375 1.875 1.875 3.375 1.75 1.375 1 2.625 1.25 6.125.25 6.625.625 1.75 1.25 2.125 1.875 1.75 2.875 2.625 2 1.875-5.5.5-6-2.25-.5-2.25-2 .75-4.125 1.25-4.125 1.125-.625 1.125-.625 3.875 0 2.625-1z"
          display="inline"
          filter="url(#filter12983)"
          opacity="1"
          id="congo"
        ></path>
        <circle fill="white" opacity="1" fillOpacity="1" cx = {coord.congo.x} 
                                                         cy = {coord.congo.y} r= "12" /> 
        <text fill="black" fontSize="14" x= {coord.congo.x + X_OFFSET } 
                                         y = {coord.congo.y + Y_OFFSET}> 
                                        {countries.congo.troopCount}</text>
        <path
          fill={colors[countries.south_africa.occupant.name]}
          fillOpacity="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          d="M547.125 504.125c.625.875 2.875-1 3.625-.375s2.75 2 3.5 2.375 4.875-.25 5.875.5 1.75.375 1.75.375-.625 4.25 0 4.875 2.125 1.375 3 .125 7.375-2 7.75-1-.625 3 .625 4 2.125 1.75 2 2.75-1.375 2-.875 3.375 1.875 1.875 3.375 1.75 1.375 1 2.625 1.25 6.125.25 6.625.625 1.75 1.25 2.125 1.875 1.75 2.875 2.625 2 1.875-5.5.5-6-2.25-.5-2.25-2 .75-4.125 1.25-4.125 1.125-.625 1.125-.625 3.875 0 2.625-1c.625-.25 2.375-.625 2.625.25s-.25 2.5.75 2.5 2.125 1.5 2.5 2.25 1.375.625 1.75 2.375.875 1.5.25 2.625-.75 1.25-.375 2.5 2 3.375 1.5 4.875-1.25 3.5-.5 4.75 2.75 3.25 3.375 2.75 1.5-1 1.5-2.25-.375-3.375 0-4.375 1.625.75.75-2.125-1.5-2.75-.375-4.25 2.125-1.375 3.375-1.75 1.875-.5 1.875-.5 1.5-1.375 2.625-1.375 2.75-1.625 2.75-1.625l-.25-.5s2.875-.875 2.375.125.875 4.625.875 4.625.125.75.375 1.75.125 1.125.25 2.125-.375 1.5-.5 2.25.125 1.375.25 2.375-.625 3.25-.875 3.875-1 .625-1.5 1.125-.625 1.25-1.75 2.375-.875 1.125-1.625 2.25-.125.5-1.25 2.25-.625.5-1.75.875-1.75 1.625-2.25 1.75-1.875 1.375-2.625 6 .75 5.5.375 6.375-2.75 4.25-3.125 5.25-.75.875-1.875 1.375-.75 2.5-.75 3.25-.75 3.25-2.125 4.5-.125 1.125.25 1.625.375 1.125.125 2.75-1.625.75-2.375 1.25-3.125 3.25-2.875 4.25 1.25.875 1.25.875-1.625 1.75-3.125 3.625.125 1.125.5 2.375-.875.25-1.625.25-.875.375-1.625 1-1.25.5-4.75 1.25-1.375 1.25-3.125 2.5-1.625 1.625-6.5 1.625-3.25.5-4.125.875-1.5.375-2.5.375-1.75.5-2.375.875-1.125 1.375-1.125 1.375-.5-.25-1-1.125-1.625-.5-2.5-.625-1-.25-1.875-1.375.25-1.5.25-2.125-.75-2.625-.75-3.625v-2.75c0-1.25-.125-1.25-.125-2.625s0-1.5-.375-2.25-1.375-1.625-1.625-3 0-1.875 0-3-1.25-.5-1.5-1-.875-1-1.375-2.5.125-1.375.125-2.625v-2.375c0-1-.75-1.375-1-2s-1.75-3.25-1.875-4.125-.25-1.375-.25-2.5.125-1 .25-1.875-.625-1.375-.625-2-3.25-3.75-3.25-3.75-.375-.25-.5-1-.75-1.25-1.875-2.625-.625-1.375-.5-2.375-.125-2-.25-2.625-1.375-3.375-1.375-3.375-.125-1.25.125-2.25.625-1.25.75-2.75 0-1.125.125-2 .25-.875.625-1.625 1-1.375 1-2.5.75-2.125 1-2.625.75-1 1.5-2.125-.375-.75-.25-1.75-.125-1.75-.25-2.5-2-3.125-2.5-4.5 1.75-2.75 3.5-5.5h.063c2-2.938-4.188-7.688-4.188-8.875z"
          display="inline"
          filter="url(#filter12987)"
          opacity="1"
          id="south_africa"
        >
        </path>
        <circle fill="white" opacity="1" fillOpacity="1" cx = {coord.south_africa.x} 
                                                         cy = {coord.south_africa.y} r= "12" /> 
        <text fill="black" fontSize="14" x= {coord.south_africa.x + X_OFFSET } 
                                         y = {coord.south_africa.y + Y_OFFSET}> 
                                        {countries.south_africa.troopCount}</text>

        <path
          fill={colors[countries.brazil.occupant.name]}
          fillOpacity="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          d="M404.375 403.625s-4.33 3.574-4.86 4.634c-.53 1.061-.884 3.36-2.121 3.536-1.237.177-8.662.53-8.662.53s.354 2.122-.707 2.122c-1.06 0-11.49-.354-11.49-.354l-1.415-4.243s-1.237.884-1.414-.883c-.177-1.768-.177-4.597-.177-4.597s-2.651 1.415-4.242 1.945c-1.591.53-3.006 3.182-4.42 2.652-1.414-.53-2.121-2.299-2.475-.884-.353 1.414.177 5.656-.884 6.01-1.06.354-1.414-.265-2.298.796-.884 1.06-3.27 1.325-3.977.707-.707-.62-1.238-1.326-2.033-1.591-.796-.265-1.238-.707-2.121-.796-.884-.088-1.061-.53-1.768.265-.707.796-2.21 2.122-2.475 2.829-.265.707-1.68 3.27-1.326 4.242.354.973 1.768.708 1.768 2.475 0 1.768-.53 2.652-1.503 2.917-.972.265-5.833 1.856-5.833 1.856s-4.067-.043-4.192.582.125 4.5-.875 5.25S331.125 434 331 435s-2.125 1.625-1.375 3 2.125 2.625 3.125 2.625 2.25.125 2.375 1.125 3.625 1.125 5 1.875 4.875-1.125 4.625 1-3.875 2.5-4.125 3.875-.375 4.375 2.375 4.25 5.25-2 7.125-2.375 3.75-.375 4.25-.875.875-1.75 1.875-1.875 3.375 1 4.125 2.25.875 2.375 2.375 2.5 1 1 2.125 1.5 2.125 0 3.125.625 1 2.75 2.625 2.75 3.875-1.125 4.5.125 1.25 3 2 3.75.25 1.75.5 2.5 1.75.875 2.875 1.75 1.25 1.375 1.625 3.125 1.25 1.75 2 3.25 2 4.75 1.75 5.875-1 2.5.5 3.375 2.125 1.375 3 2.75 1.5.875 2.125 1.375 1 2.375 1.375 5 3.25 3.625 3.375 5.375.25 3-.375 3.125-1.875 1.25-2 3-3.375 2.625-3.375 2.625-2.125 1.5-1.875 2.5 5 .25 5 .875-.75 5.125-.25 5.25 3.75-1 4.25-.375-.625 4.5-.375 4.875 3.125 2.5 3.813 1.938c1.312-.438.562-.563.812-1.313s.25-.625.875-1.5.25-.875.5-1.625.625-1.375 1.125-1.875.75-.625 1-1.375.125-1.125.25-2.375 1.625-1.375 3-1.875 1.25-2 1.375-3.25-.375-.375-.375-1.75-.125-1.875-.25-3.25.125-.5.75-1.125.625-3.375 2.125-6.5 12.5-4 13-4.125 3.375-1.125 3.75-1.625 1.625-1.625 2.625-2.125.375-1.375.625-2.5.5-.75 1.125-1 .5-1 1.125-1.875 0-1.75.375-2.5 1.5-1 2.375-1.375.375-1.625 1.125-2.375 0-3.375 0-5 0-1.75.75-2.75-.25-3-.25-3l.25-1.75s-.375-2-.125-3 1.25-1.5 2.75-2.5.5-3.25.5-3.25V449s2.25-1 4-1 1.75-2.5 3.25-4 .75-3 1-4.25c.25.5-.25-.75-.625-1.875s-.125-1.625-.375-3.375-1.25-2.5-2.25-3.5-2.375-.75-3.25-1-1.375-1.875-2.25-2.125-4.25-2.625-6.125-2.875-2-.125-2.875-1.125-1.375-.375-2-.375-1.625.5-2.375 0-1.125-.25-2.25-.25-2.125-.375-2.625-1.25-.5-1-1.25-1.375-1.625-.125-2.375-.5-1.625-.75-2.375-.875-1.625.125-2.375 0-2.5-.5-3.125-.5-2.5.375-3.375.375-2.375-1.5-3.625-2 1.125-.125 3-2.375-.75-3.625-1.25-4.5-.625-1.625-1.375-4.25-1-2.375-1-2.375z"
          display="inline"
          filter="url(#filter12991)"
          opacity="1"
          id="brazil"
        ></path>
        <circle fill="white" opacity="1" fillOpacity="1" cx = {coord.brazil.x} 
                                                         cy = {coord.brazil.y} r= "12" /> 
        <text fill="black" fontSize="14" x= {coord.brazil.x + X_OFFSET } 
                                         y = {coord.brazil.y + Y_OFFSET}> 
                                        {countries.brazil.troopCount}</text>
        <path
          fill={colors[countries.argentina.occupant.name]}
          fillOpacity="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          d="M396.25 495.5c.125 1.75.25 3-.375 3.125s-1.875 1.25-2 3-3.375 2.625-3.375 2.625-2.125 1.5-1.875 2.5 5 .25 5 .875-.75 5.125-.25 5.25 3.75-1 4.25-.375-.625 4.5-.375 4.875 3.125 2.5 3.781 1.906c-1.406.344-4.656 1.844-4.031 2.719.625.875 1.5 1.125 0 1.5s-1.25.25-2.75.5-1.25.125-2.875.5-1.875.875-2.875 1-1.5-.125-2.125-.125-1.125 0-1.125.625-.125.75.5 1.25 2.375 1 2.5 1.5.125.875.125 1.75.125 1 .625 1.125.625.25.75.75-1.25 2.25-2 2.75-1.375 1.125-3.125 1.25-1.375-.125-2.5.5-1.125.75-2.375.75-1.625 0-2.875.25-2.125.5-2.125.5.5.75.625 1.5.75.875.25 2-1.375 1.625-1.75 2.125-.375.25-.375 1.25l-2.625.375s-.875-.75-1.125.375 1 2.125 1 2.125-1.75 2.625-1.5 3.25.875 1.625.625 2.125-.125.75-.75 1.25-.125 1-.5 1.5-.75 1.25-1.625 1.625-1.125 1-1.125 1L365.25 560s-.5.625.125 1.375 1.25.25.875 1.625-.25 1.75-.25 1.75 1.25-1.375 1.125 2.375-.75 4.625-.75 4.625-.625-.125-.375 1 .75 2.125.125 2.75-.5-.375-1.5 1.625 0 4.75.625 5.375 1.125.75 1 2-.75 1.375-.25 2.25 2.125 1.5 2.375 2.375-.25 1.5.25 2.125a8.226 8.226 0 001.125 1.125s-.25 1-.25 2.125-.5 1-.5 2 0 2.25.5 1 .375-1.25.875-1.75 2.125-.5 2.625-.5 1-.75 1.875-.375 1 0 1.5 1.25.25 1.5 1.25 1.75 1.875.125 2.875.125 1.25-.75 1.5.375 1.75 1.5.25 2-1.75 0-3.25.5-1.5.5-2 .625-.5.5-1.375.875-.375.75-2 .375-1 .125-2.125-.625-1.625-1.125-1.625-1.625-.75-1-.75-1l-2.875-2.5h-3.375c-.75 0-1.25-.625-1.25-.625l-1.75.063s-.438-.438-.188-1c.25-.563.25-.563-.062-.625-.313-.063-1.188-.125-1.75-.313-.563-.188 0-1-.125-1.25s-1.313-.25-1.938-.313c-.625-.062-1.5-.375-2-1s-.375-.812-1.437-1.687c-1.063-.875-.75-1-1.688-1.313-.937-.312-1.25-.25-1.437-1-.188-.75-.938-.875-1.25-1.625-.313-.75 0-1.25-.875-1.812-.875-.563-1.063-.125-1.188-1.313-.125-1.187.188-1.75-.125-2.375-.312-.625-.125-.125-.625-.875s-.75-.875-.937-1.75c-.188-.875-.188-1.312-.5-1.875-.313-.562-.875-.812-.938-1.437-.062-.625-.062-.875-.062-1.438 0-.562.188-1-.125-2.25s-.125-1.562-.75-2.312c-.625-.75-.688-.25-1.188-1.875s-1.062-1.875-.75-2.688c.313-.812.5-.937.563-1.562.063-.625.438-.5.5-1.375.063-.875.063-.625.063-1.813 0-1.187-.75.313.125-2.937s.875-3.125.937-3.875c.063-.75 1.25-.875.813-2.188-.438-1.312-.688-1.312-.563-2.187.125-.875.625-1.25.5-1.688-.125-.437.063-.25-.125-.75s.5-.25-.313-.875c-.812-.625-1.062-.5-1.187-1.437-.125-.938-.125-1.688-.063-5.375.063-3.688-.187-3.938.438-5 .625-1.063.938-1.188.938-2.063 0-.875.5-2 .125-3.062-.375-1.063-.688-1.188-.313-1.813.375-.625.688-.625.688-1.375s0 .313.062-1.312c.063-1.625-.438-.438.188-2.563.625-2.125.875-4.25.937-5.312.063-1.063.125-1.375-.188-2-.312-.625-.75-3.625-.75-4.625s.188-.75.438-1.75.313-1.188.25-1.5c-.063-.313 0-.625.188-1.438.187-.812-.188-2.5.5-4.25.687-1.75.875-1.062.687-2.312-.188-1.25-1.625-3.25-1.188-4.625.438-1.375.875-1.125.813-2.938-.063-1.812-.25-4.25.188-5.25.437-1 .687-4.437.5-5.25l.187-.062c.375-2.875-1.125-5.375-1.125-5.375s1.5-1.625 2.375-1.875 1 1.625.75 2.625.125 2 1.25 3.125 2.375 2.375 2.875 3.25 1.75 1.625 2 2.625.625 2 1.875 3 2-.125 2.25-.875-.125-2.5.125-4.25 2.5.25 2.5.25.875 1.875 1.25 2.5 2 .375 2.75-.375 1.25-.625 1.75-.625 1.5 1 3.25.75 1.875-.375 3.375 1 .25 2.125 1.625 3 1.375 0 2.25.375.375 1.5 1.75 2.375 5 .125 6.25.625 0 1.625 0 2.5 0 3.25-.625 3.5-1.5 2-1.375 3.375 3.375 0 4.75-.625 2-.5 3.375-1.75 5.125-3.375 5.125-3.375z"
          display="inline"
          filter="url(#filter12995)"
          opacity="1"
          id="argentina"
        ></path>
        <circle fill="white" opacity="1" fillOpacity="1" cx = {coord.argentina.x} 
                                                         cy = {coord.argentina.y} r= "12" /> 
        <text fill="black" fontSize="14" x= {coord.argentina.x + X_OFFSET } 
                                         y = {coord.argentina.y + Y_OFFSET}> 
                                        {countries.argentina.troopCount}</text>
        <path
          fill={colors[countries.eastern_united_states.occupant.name]}
          fillOpacity="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          d="M326.241 264.275l6.276.088c.707.354.354 5.303.354 5.303s3.358-1.767 5.833-1.06c2.475.707 4.773-3.182 5.303-.884.53 2.298 1.768 4.243 2.299 4.95.53.707.707 1.767 1.767 4.596 1.061 2.828 1.591 5.657.884 6.894-.707 1.238-2.651 3.005-1.06 3.89 1.59.883 3.005 2.297 3.889 3.181.884.884 4.95-2.298 4.773-3.535-.177-1.238-.708-2.122.176-2.475.884-.354 2.298.177 3.006-.707.707-.884 1.944-2.475 3.005-2.298 1.06.176 3.535-.707 3.535-.707s1.768-.53 1.768-1.415c0 0 10.253-.265 11.844-1.237 1.591-.972 1.768-.796 1.768-.796s-.707-3.889-.354-4.154c.354-.265 1.15-.53 1.856-1.237.708-.707 1.783-.753 2.756-.576.972.177 4.492 2.255 4.05 4.2-.442 1.944-1.944 5.568-.353 5.656 1.59.089 2.828-.088 3.093.973.266 1.06.53 1.856 1.061 2.033.53.176 2.387-.53 2.355-.833-.032-.302-.75 1.063-1.438 2.313-.687 1.25-1.687 2.187-1.687 2.187-2.125.875-2.5 3.625-3.25 2.5s-1.75-1.125-.875-2.75 1.5-1.375 1.25-2.875.75-1.625-.5-1.75-.625-.125-2.125.375-1.375-1.125-2.625.875-1.625 1.875-2.5 2.375-.5 1.125-1.125 1.875-.875 1.125-1.375 1.75-.625.625-.625 2 1.125 3.625 1.125 3.625-.625 1.75-1.375 2.125-.875-.875-4.125 2.875-2.875 4.125-4.875 5-1.75 1-1.875 1.5-1.5 1.125-.75 2.25 0 1.375 1.125 1.875 2.25-.5 2.125 1.125-1.375 3.25-3.375 4.5-4.625 5.125-7.25 5.75-3.75 1.5-3.625 2.75 0 2.75-1.375 2.75-.5.625-.5 3.625.25 3.875.875 5 .875 1.125.875 2.875 0 3-.125 3.5 1 .375-.875 1.5-3.5 1.75-4.25-.125-2.25-1.375-2.375-2.875.5-5.125.5-5.125-1.875-.5-2.125-1.5-1-3.375-1.5-3.75-1.5-1.25-2.5-.75-2.75 1.5-3.375 1.375S340.5 333 337 332s-5.125-1.5-6.625-1.625-5-.125-5.625 0-6.625 1.5-7.375 1.5-6 1.25-7.375 2.375-1.25 3-2.75 3.625-2 .875-2 .875-1.5 1.75-1.625 2.75-1.375 2.75-2 3.125-.75.25-.375 1.375c0 0-2-1.25-2-2.125s1.5-2 1.875-3.625 1.125-3.125 1.125-4-.125-3.5-.125-3.5-1.25-4.625-.875-5.375-1.375-1-1.375-1-.625-1.875-.125-2.5 2.375-.625 2.875-.875 2.25-.75 2.25-.75 1-5.5 1-6.125.75-4 .75-4.625 3.375-1.875 3.875-2.125 2.25 1.125 2.375-.25 0-4.5.125-5.375.5-1.5 1-1.75 11.375-.125 11.875-.625-.5-36.625.366-37.1z"
          display="inline"
          filter="url(#filter12999)"
          opacity="1"
          id="eastern_united_states"
        ></path>
        <circle fill="white" opacity="1" fillOpacity="1" cx = {coord.eastern_united_states.x} 
                                                         cy = {coord.eastern_united_states.y} r= "12" /> 
        <text fill="black" fontSize="14" x= {coord.eastern_united_states.x + X_OFFSET } 
                                         y = {coord.eastern_united_states.y + Y_OFFSET}> 
                                        {countries.eastern_united_states.troopCount}</text>
        <path
          fill={colors[countries.western_united_states.occupant.name]}
          fillOpacity="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          d="M326.241 264.275c-.866.475.134 36.6-.366 37.1S314.5 301.75 314 302s-.875.875-1 1.75 0 4-.125 5.375-1.875 0-2.375.25-3.875 1.5-3.875 2.125-.75 4-.75 4.625-1 6.125-1 6.125-1.75.5-2.25.75-2.375.25-2.875.875.125 2.5.125 2.5 1.75.25 1.375 1 .875 5.375.75 5.125-3.375 0-4.375.125-2.25-.875-2.625-1.375-.75-1.125-1.875-1.125-3.375-2.75-4-3.25-8.375 0-9.375 0-2.375-2.375-2.375-2.375l-3.875-2.125s-6.625 0-7.75.125-1.75-3.375-1.75-3.375c-.5-2.125-.75-1.625-.75-3.5s-2.875-5.5-4.25-7.5-1.375-7.375-1.125-8.75-.25-6.375.625-8.5.875-5.125 1.5-8-.125-2.25 1.375-5.875 1.375-1.25 1.625-4.375 1.25-1.25 1.375-3.875.625-3.875-.25-5.125c0 0-.25.75.75 1s57.5.625 61.366-.35z"
          display="inline"
          filter="url(#filter13003)"
          opacity="1"
          id="western_united_states"
        ></path>
        <circle fill="white" opacity="1" fillOpacity="1" cx = {coord.western_united_states.x} 
                                                         cy = {coord.western_united_states.y} r= "12" /> 
        <text fill="black" fontSize="14" x= {coord.western_united_states.x + X_OFFSET } 
                                         y = {coord.western_united_states.y + Y_OFFSET}> 
                                        {countries.western_united_states.troopCount}</text>
        <path
          fill={colors[countries.quebec.occupant.name]}
          fillOpacity="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          d="M359.74 259.237s.708-3.713 1.945-4.597c1.238-.883 1.945-5.656 1.414-6.717-.53-1.06-1.414-1.414-.707-3.005s.354-4.243 2.122-3.713c1.767.53 3.535.354 3.889-.883.353-1.238-.177-1.238 0-2.299.176-1.06 1.06-1.414 1.767-1.59.708-.177 1.238.353.708-2.122-.53-2.475 0-1.414-.708-3.182-.707-1.768-.176-.707-.883-2.298-.708-1.59-1.238-4.066.53-4.243 1.768-.176-.177-2.298 1.06-2.828 1.238-.53 3.536.177 3.006-1.945-.53-2.12-3.182-6.363-1.414-6.54 1.767-.177 4.281.725 4.281.725l6.25.375s-.625 2.375 1.25 2.625 2.125 1.375 2.75 1.75 1.625 1.25 1.375 1.75-.25 1-.125 1.875.75 2.125.25 2.375-1 1-.875 2 .5 2.5.5 2.5 1 1.375 2.25.75.875-1.125 2.5-1.875 1.625.875 2.625-.75.875-1.875 1.125-2.5 1.5-2.25 2.5-1.75-.317 4.999.744 6.59c1.06 1.59 2.506-.59 2.631.16s.25 1.625.375 2.25-.75 1.125 0 2.125.875 1.25.75 2 .375 1.375.375 1.375 1.375-1.25 2 .25.125 2.375 1.25 2.375 2.375 1.75 2.375 1.75l.5 2.625 2.875-2 2.75.875s-3.813 1.75-3.063 3.563c.75 1.812 4.625-2.125 4.563.312-.063 2.438-.5 4.938-1.438 5.063-.937.125-2.437.937-2.562 1.5-.125.562-1.875 1.687-3 1.937s.625 1.25-1.75 1.625-3.125.25-3.625.25-.5.5-1.125 1.625-.125 1.5-.75 2 2.25 0-1.625.875-4.5 1.125-4.5 1.125-.25.375-1.5.375-1.75-.625-1.75-.625-.25-.625-2-.625-3.375 1.625-3.375 1.625-.5.625-1.5.75-2.375 1.375-2.375 1.375-1.375.375-1 1.875S385.125 271 386 270s2.25-5 4.125-4.625S394.5 266.5 394 269.25s-.625 2.25-.25 3.625 1.25 2.125 1.125 3.375-1.25.875.125 2 2.875 2.875 3.375 1.25 1.125-2.75 1.75-2.5 2.375-.5 1.125 2-1 2.625-2.125 3.375-1-1.25-3 1.75c.032.302-1.825 1.01-2.355.833-.53-.177-.795-.973-1.06-2.033-.266-1.06-1.503-.884-3.094-.973-1.591-.088-.089-3.712.353-5.656.442-1.945-3.078-4.023-4.05-4.2-.973-.177-2.048-.131-2.756.576-.707.707-1.502.972-1.856 1.237-.353.265.354 4.154.354 4.154s-.177-.176-1.768.796c-1.59.972-11.844 1.237-11.844 1.237 0-.884 0-3.889-1.06-3.712-1.061.177-.884.707-1.592.177-.707-.53-.883-1.238-1.59-.53-.708.707-.354 2.298-1.061 2.12-.707-.176-1.768-1.767-2.475-1.59-.707.177-1.768 1.59-1.768 1.59s.354-16.97 1.06-18.914h.178z"
          display="inline"
          filter="url(#filter13007)"
          opacity="1"
          id="quebec"
        ></path>
        <circle fill="white" opacity="1" fillOpacity="1" cx = {coord.quebec.x} 
                                                         cy = {coord.quebec.y} r= "12" /> 
        <text fill="black" fontSize="14" x= {coord.quebec.x + X_OFFSET } 
                                         y = {coord.quebec.y + Y_OFFSET}> 
                                        {countries.quebec.troopCount}</text>
        <path
          fill={colors[countries.central_america.occupant.name]}
          fillOpacity="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          d="M264 319.125s.625 3.5 1.75 3.375 7.75-.125 7.75-.125l3.875 2.125s1.375 2.375 2.375 2.375 8.75-.5 9.375 0 2.875 3.25 4 3.25 1.5.625 1.875 1.125 1.625 1.5 2.625 1.375 4.25-.375 4.438 0c.062.125.187 2.75.187 3.625s-.75 2.375-1.125 4-1.875 2.75-1.875 3.625 2 2.125 2 2.125c-.501 2.793-.886 5.47.25 6.625l.125 2.25 1.5 2.625s2.25 3.25 5.125 2.375 1.5-.25 3.875-1.375 1.625 1.25 2.875-1.25.375-2.75 1.75-3.25.625-1 2.375-.5.125.625 2.375.75 2.5-2.375 2.25.5-.5 3-.75 3.75.375-.125-.5 1.5-1.375 1.75-2 2.125-1 .625-1 1.75.25 2-.875 2.5-2.25-.125-2 1.25-.125 1.75.875 2.375 1.75.75 2.375 1.875.875 2.5.625 3-.125 2.125-.875 2.5-1.75.125-1.75 1.75.75 2.875 0 3.25-2-.5-2.25.375-.375 1.625-.5 2.375-.75.875-.75 1.375v1.625c0 1.375-.875 2.25.375 2.5s1.875.625 2.5.25 1.375-.5 1.875-.875 1.25-1.375 2-1.375 2.25.375 2.25.375.75 1.875.625 2.5.375.5.25 2-.125 2.625-.375 3.125-.625 1-.875 1.5 0 .5-.25 1.25.125 1.875-.5 1.375-.25-.5-.625-1-.625-1.125-1.375-2.375-.625-.5-2.125-1.25-1.375-1.625-2.375-1.125-.625 1.375-1.75.625-1.5-.75-2.125-1.75-.5-.875-.875-1.625-1.375-.25-1.375-1.625.375-1.625 0-2.375-.75-1.125-1-1.75-.375-.125-.375-1.375V382.5c0-.5-.5-2.5-.5-2.5l-.625-1.25s-.125-.125-.625-.875-.5-.375-.875-1.625-1.25-2.75-1.5-3.75-1.625-2.25-5.75-3.75-3.875-1.875-7.375-2.625-4.75-1.375-4.75-2.875 0-2-.875-2.5-1.75-.625-1.375-1.5 1-1 1.625-2.125.75-1.375.75-2.25.375-1-1-1.625-4.125-3-4.125-3 1.625-.375-1.875.125-3.75 2.5-4.75 1.25.75-5.625-.5-6.25-1.125.25-1.875-1.375-.125-3-.5-4.375 0 .75-1-3.875.875-3.375-1.375-6-5-2.375-5.25-4.5c0 0 .063-5.625-.125-6.125z"
          display="inline"
          filter="url(#filter13011)"
          opacity="1"
          id="central_america"
        ></path>
        <circle fill="white" opacity="1" fillOpacity="1" cx = {coord.central_america.x} 
                                                         cy = {coord.central_america.y} r= "12" /> 
        <text fill="black" fontSize="14" x= {coord.central_america.x + X_OFFSET } 
                                         y = {coord.central_america.y + Y_OFFSET}> 
                                        {countries.central_america.troopCount}</text>
        <path
          fill={colors[countries.peru.occupant.name]}
          fillOpacity="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          d="M347.125 472.5c.875-.25 1 1.625.75 2.625s.125 2 1.25 3.125 2.375 2.375 2.875 3.25 1.75 1.625 2 2.625.625 2 1.875 3 2-.125 2.25-.875-.125-2.5.125-4.25 2.5.25 2.5.25.875 1.875 1.25 2.5 2 .375 2.75-.375 1.25-.625 1.75-.625 1.5 1 3.25.75 1.875-.375 3.375 1 .25 2.125 1.625 3 1.375 0 2.25.375.375 1.5 1.75 2.375 5 .125 6.25.625 0 1.625 0 2.5 0 3.25-.625 3.5-1.5 2-1.375 3.375 3.375 0 4.75-.625 2-.5 3.375-1.75 5.125-3.375 5.125-3.375c-.125-1.75-3-2.75-3.375-5.375s-.75-4.5-1.375-5-1.25 0-2.125-1.375-1.5-1.875-3-2.75-.75-2.25-.5-3.375-1-4.375-1.75-5.875-1.625-1.5-2-3.25-.5-2.25-1.625-3.125-2.625-1-2.875-1.75.25-1.75-.5-2.5-1.375-2.5-2-3.75-2.875-.125-4.5-.125S369 455.125 368 454.5s-2-.125-3.125-.625-.625-1.375-2.125-1.5-1.625-1.25-2.375-2.5-3.125-2.375-4.125-2.25-1.375 1.375-1.875 1.875-2.375.5-4.25.875-4.375 2.25-7.125 2.375-2.625-2.875-2.375-4.25 3.875-1.75 4.125-3.875-3.25-.25-4.625-1-4.875-.875-5-1.875-1.375-1.125-2.375-1.125-2.375-1.25-3.125-2.625 1.25-2 1.375-3 2.875-.625 3.875-1.375.75-4.625.875-5.25 4.192-.582 4.192-.582-.796-2.121-1.326-2.651c-.53-.53-1.503-.796-2.21-.973-.707-.176-1.856-1.414-2.74-1.325-.884.088-3.182.088-3.8-.62a4.611 4.611 0 00-3.271-1.59c-1.591-.089-2.298 1.06-3.359-.619-1.06-1.68-3.005-3.977-3.535-4.066-.53-.088-3.006-.353-2.326-1.074-1.875 1.25-1.75 3.75-2.5 5.625s-1.375 2.625-2 4.625.375 1.5 1.125 3.625-.25 1-.625 2.25-.125 5.25-.125 5.25.875 2.625 1.375 3.125 2.5 2.75 2.5 2.75-.25 1.625.25 3.625 1.375 1.25 1.875 2.25 2.5 3.125 3.125 3.625 2 2.625 3.375 3.125.375 2.375.25 3.375 1.375 3.25 1.875 4.25.75.25 1.25 1 1.875 1.75 2.75 2.25 1.75.625 1.75.625 1.25 1.125 2.125 1.75 2 .875 2.75 1.125 2 3 2.625 3.625c0 0 2.75 1.125 3.375 1.25s1.75-1.375 2.625-1.5z"
          display="inline"
          filter="url(#filter13015)"
          opacity="1"
          id="peru"
        ></path>
        <circle fill="white" opacity="1" fillOpacity="1" cx = {coord.peru.x} 
                                                         cy = {coord.peru.y} r= "12" /> 
        <text fill="black" fontSize="14" x= {coord.peru.x + X_OFFSET } 
                                         y = {coord.peru.y + Y_OFFSET}> 
                                        {countries.peru.troopCount}</text>
        <path
          fill={colors[countries.western_australia.occupant.name]}
          fillOpacity="1"
          style={{ marker: "none" }}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          markerEnd="none"
          markerMid="none"
          markerStart="none"
          d="M862.494 599.885l.235-.27s0-5.656.177-7.07c.176-1.414-.354-1.238-1.061-2.298s.884-42.25.707-43.134c-.177-.884-29.875.354-29.875.354l-.59-37.738-2.12-1.237s-1.591-1.06-2.475-1.591c-.884-.53-1.591 1.944-2.298 2.298-.707.353-2.829 1.59-2.829 1.59s-.53 1.769-.884 3.006c-.353 1.238-1.944.177-3.889.884-1.944.707-.177.707-.707 2.475-.53 1.768-.53.177-2.121.177s-.707.707-1.768 2.121c-1.06 1.414-1.237.354-2.652 1.591-1.414 1.237-.353 1.237-1.237 3.005-.884 1.768-1.06.884-2.121 1.591s-2.829 2.475-3.89 3.536c-1.06 1.06-1.59.53-3.712.353-2.121-.177-.884 0-2.475.177-1.59.177-1.237 1.237-2.298 2.121-1.06.884-1.59 1.238-2.828 2.475-1.238 1.238-.53.53-2.475.707-1.945.177-1.06.177-3.005 1.415-1.945 1.237-.177 1.59-.354 3.005-.177 1.414-.53 1.414-1.06 2.651-.53 1.238 0 1.591.53 3.006.53 1.414 1.59.53 1.59.53s-.353 2.121 0 2.828c.354.707-.176 0-1.767 0-1.59 0-.707.53-.707 1.768v1.238s-.53.176-1.06 1.237c-.531 1.06 0 .884.176 2.121.177 1.238.354 1.768.884 3.006.53 1.237 1.06.883 1.945 2.828.883 1.944.353 2.121.353 3.889 0 1.768 0 1.237.177 3.536.177 2.298 1.237 1.59 1.237 1.59s1.238.884 1.945 1.415c.707.53.707 1.06 1.06 2.828.354 1.768-.53 1.414-.883 2.475-.354 1.06 0 .707-.177 2.828-.177 2.122-.884 1.238-1.591 2.122-.707.884-.53.884-1.06 2.298-.531 1.414 0 1.06.883 1.768.884.707 1.945 1.237 3.005 2.121 2.441 2.673 5.064 1.99 8.132.354 1.591-.884.884-1.061 2.121-1.591 1.238-.53.884-.354 1.591-.708.707-.353 1.238-.883 2.298-1.944 1.061-1.06.354-.177 1.591-.884 1.238-.707 1.415-1.237 3.36-1.945 1.944-.707 2.474-.176 2.474-.176h1.591c1.591 0 .707.176 1.06.884.354.707 1.415.707 2.122.707.707 0 1.768-.177 2.652-.53.884-.354-.177-1.592-.177-2.299 0-.707 0-.884.53-2.121s2.122-1.591 2.829-1.591c.707 0 2.475-.354 3.182-1.06.707-.708 1.06-.354 2.474-.531 1.415-.177 1.238-.53 2.299-1.591 1.06-1.06 1.06-.53 3.005-.53h3.005c1.945 0 1.768.176 3.005.353 1.238.177 1.945 1.414 2.829 1.945.883.53.353.707.353 2.121 0 1.414.177 1.591 1.591 4.066 1.414 2.475 2.121 2.475 2.121 2.475s1.238-1.768 2.299-3.359c1.06-1.591.883-.53 2.474-1.06 1.591-.53.53-1.061.884-3.36.354-2.297 1.061-.706 2.298-.53 1.238.177 0 2.298-.353 3.536-.354 1.237-1.06 1.59-1.945 2.475-.884.884-.884 1.06-1.944 2.298-1.06 1.237-.53 1.06-.354 2.475.177 1.414 1.945-1.238 2.652-2.298.707-1.061.707-.354 1.59-.177.885.177.178 2.298.178 3.359 0 1.06.176.883 1.06 1.414.884.53.884 1.59.354 3.005-.53 1.414 0 1.414.177 2.475.176 1.06 2.121 3.712 2.828 4.42.707.706.53.353 1.238.706.707.354.353.707 1.59 1.591z"
          display="inline"
          enableBackground="accumulate"
          filter="url(#filter14319)"
          opacity="1"
          overflow="visible"
          visibility="visible"
          id="western_australia"
        ></path>
        <circle fill="white" opacity="1" fillOpacity="1" cx = {coord.western_australia.x} 
                                                         cy = {coord.western_australia.y} r= "12" /> 
        <text fill="black" fontSize="14" x= {coord.western_australia.x + X_OFFSET } 
                                         y = {coord.western_australia.y + Y_OFFSET}> 
                                        {countries.western_australia.troopCount}</text>
        <path
          fill={colors[countries.alberta.occupant.name]}
          fillOpacity="1"
          style={{ marker: "none" }}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          markerEnd="none"
          markerMid="none"
          markerStart="none"
          d="M253.372 214.748s.125.125.625 1.625.875 2.5 2 4.5.125 8 .125 8l2 2.75s1.625.75 2.25.875.375 3.25.25 4.5-1.625.625-2.5.875-1.125 2.375-1.25 3.625-2.372.752-2.372.752c.625 1.25 1.875 1.375 2.375 3.625s.25 1.5.875 2.375 1.75 1 2 3 .25.875 1.625 3.5.125 3.75.375 6.125 1.5 1.5 2.375 2.75l.372 1.373 48-.125 4-48.375s-62.875-1.75-63.125-1.75z"
          display="inline"
          enableBackground="accumulate"
          filter="url(#filter12879)"
          opacity="1"
          overflow="visible"
          visibility="visible"
          id="alberta"
        ></path>
        <circle fill="white" opacity="1" fillOpacity="1" cx = {coord.alberta.x} 
                                                         cy = {coord.alberta.y} r= "12" /> 
        <text fill="black" fontSize="14" x= {coord.alberta.x + X_OFFSET} 
                                         y = {coord.alberta.y + Y_OFFSET}> 
                                        {countries.alberta.troopCount}</text>
      </g>
      <g transform="translate(-167.997 -118.555)">
        <g stroke="none" strokeLinecap="butt" strokeLinejoin="miter">
          <path
            id="path10509"
            fill="none"
            fillRule="evenodd"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeMiterlimit="4.322"
            strokeOpacity="0.585"
            strokeWidth="1.2"
            d="M645.026 514.838c16.367-1.026 32.256-5.507 47.42-13.853"
            filter="url(#filter13019)"
            opacity="1"
          ></path>
          <text
            transform="matrix(1.63285 -.33084 .35187 1.46733 -582.388 -29.861)"
            style={{ lineHeight: "125%", InkscapeFontSpecification: "Sans" }}
            fill="#000"
            fillOpacity="1"
            strokeOpacity="1"
            strokeWidth="1"
            fontFamily="Sans"
            fontSize="13"
            fontStretch="normal"
            fontStyle="normal"
            fontVariant="normal"
            fontWeight="normal"
            xmlSpace="preserve"
          >
            <textPath xlinkHref="#path10509">
              <tspan
                style={{
                  WebkitTextAlign: "start",
                  textAlign: "start",
                  lineHeight: "125%",
                  InkscapeFontSpecification: "Liberation Serif",
                }}
                fontFamily="Liberation Serif"
                fontSize="6"
                fontStretch="normal"
                fontStyle="normal"
                fontVariant="normal"
                fontWeight="normal"
                textAnchor="start"
                writingMode="lr-tb"
              >
                I n d i a n O c e a n
              </tspan>
            </textPath>
          </text>
        </g>
      </g>
    </svg>
  );
}

RiskBoard.propTypes = {
  clickSVG: PropTypes.func.isRequired
}
export default connect(null, {clickSVG})(RiskBoard)