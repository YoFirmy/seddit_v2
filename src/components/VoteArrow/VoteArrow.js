export default function VoteArrow({ scale, background }) {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 259 243"
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      transform={`scale(1,${scale})`}
      style={{ "backgroundColor": background }}
    >
      <path
        d="M125.5 10L10.5 127.249H73.9282V233H176.99V127.249H248.5L125.5 10Z"
        stroke="#979797"
        strokeWidth="20"
        strokeLinejoin="round"
      />
    </svg>
  )
}
