type InkLandscapeProps = {
  className?: string;
  mirror?: boolean;
  temple?: boolean;
  reflection?: boolean;
  foregroundOpacity?: number;
  templeX?: number;
  templeY?: number;
};

export default function InkLandscape({
  className = "",
  mirror = false,
  temple = true,
  reflection = false,
  foregroundOpacity = 0.72,
  templeX = 910,
  templeY = 340,
}: InkLandscapeProps) {
  const transform = mirror ? "translate(1440 0) scale(-1 1)" : undefined;

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 760"
      preserveAspectRatio="none"
      className={`pointer-events-none ${className}`}
    >
      <defs>
        <filter id="temple-ink-soften" x="-8%" y="-8%" width="116%" height="116%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.018 0.05"
            numOctaves="3"
            seed="21"
            result="noise"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
          <feGaussianBlur stdDeviation="0.35" />
        </filter>
        <linearGradient id="archive-fade" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#E8DED2" stopOpacity="0" />
          <stop offset="0.42" stopColor="#E8DED2" stopOpacity="0.42" />
          <stop offset="1" stopColor="#E8DED2" stopOpacity="0.82" />
        </linearGradient>
        <linearGradient id="floor-fade" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#BEB3A7" stopOpacity="0.22" />
          <stop offset="1" stopColor="#BEB3A7" stopOpacity="0" />
        </linearGradient>
      </defs>

      <g transform={transform} filter="url(#temple-ink-soften)">
        <path
          d="M0 470 H1440 V760 H0 Z"
          fill="url(#floor-fade)"
          opacity={foregroundOpacity * 0.4}
        />

        <g opacity={foregroundOpacity}>
          <path
            d="M-80 438 C60 390 224 390 374 438 C252 418 68 420 -80 438 Z"
            fill="#E8DED2"
            opacity="0.38"
          />
          <path
            d="M1066 420 C1178 374 1308 376 1500 420 C1360 407 1216 407 1066 420 Z"
            fill="#E8DED2"
            opacity="0.3"
          />
          <path
            d="M72 512 C250 485 430 485 610 512 M820 505 C1004 476 1182 480 1364 506"
            fill="none"
            stroke="#E8DED2"
            strokeLinecap="round"
            strokeWidth="3"
            opacity="0.32"
          />
          <path
            d="M48 616 C202 574 386 592 546 552 M772 612 C934 564 1126 589 1336 538"
            fill="none"
            stroke="#BEB3A7"
            strokeLinecap="round"
            strokeWidth="2"
            opacity="0.28"
          />
          <path
            d="M136 668 C286 628 455 652 620 610 M775 676 C950 626 1128 650 1310 600"
            fill="none"
            stroke="#BEB3A7"
            strokeLinecap="round"
            strokeWidth="1.6"
            opacity="0.22"
          />
        </g>

        <g opacity={foregroundOpacity * 0.82}>
          <path
            d="M0 228 H1440"
            stroke="#E8DED2"
            strokeWidth="1.2"
            opacity="0.16"
          />
          {[160, 320, 480, 640, 800, 960, 1120, 1280].map((x) => (
            <path
              key={x}
              d={`M${x} 142 V512`}
              stroke="#E8DED2"
              strokeWidth="1"
              opacity="0.13"
            />
          ))}
          {[236, 312, 388, 464].map((y) => (
            <path
              key={y}
              d={`M80 ${y} H1360`}
              stroke="#BEB3A7"
              strokeWidth="0.8"
              opacity="0.1"
            />
          ))}
        </g>

        <g opacity={foregroundOpacity * 0.72}>
          <path
            d="M118 378 C228 328 364 330 494 378 L466 392 C342 356 232 356 143 392 Z"
            fill="#E8DED2"
          />
          <path
            d="M930 348 C1048 286 1192 292 1344 348 L1318 365 C1180 327 1052 325 956 365 Z"
            fill="#E8DED2"
          />
          <rect x="170" y="392" width="252" height="104" fill="#E8DED2" opacity="0.48" />
          <rect x="1000" y="366" width="274" height="122" fill="#E8DED2" opacity="0.38" />
          <path
            d="M186 410 H406 M186 444 H406 M186 478 H406 M222 396 V494 M282 396 V494 M344 396 V494"
            stroke="#131110"
            strokeWidth="1.2"
            opacity="0.28"
          />
          <path
            d="M1020 386 H1254 M1020 426 H1254 M1020 466 H1254 M1068 370 V488 M1138 370 V488 M1206 370 V488"
            stroke="#131110"
            strokeWidth="1.2"
            opacity="0.24"
          />
        </g>

        {temple && (
          <g transform={`translate(${templeX} ${templeY})`} opacity={foregroundOpacity}>
            <path
              d="M-116 96 C-62 48 46 48 132 96 C72 82 -54 82 -116 96 Z"
              fill="#E8DED2"
              opacity="0.72"
            />
            <path
              d="M-46 66 C-4 26 52 24 100 66 L86 80 C43 58 -4 58 -37 80 Z"
              fill="#E8DED2"
              opacity="0.66"
            />
            <path d="M-16 78 L31 28 L91 78 Z" fill="#E8DED2" opacity="0.62" />
            <rect x="0" y="82" width="76" height="92" fill="#E8DED2" opacity="0.42" />
            <path
              d="M17 104 V174 M38 104 V174 M59 104 V174 M1 122 H76 M1 150 H76"
              stroke="#131110"
              strokeWidth="1.4"
              opacity="0.34"
            />
            <path d="M35 28 L35 -16" stroke="#E8DED2" strokeWidth="5" strokeLinecap="round" />
          </g>
        )}

        {reflection && (
          <g opacity={foregroundOpacity * 0.36}>
            <path d="M0 560 H1440" stroke="#E8DED2" strokeWidth="1.2" opacity="0.22" />
            <path
              d="M70 586 C210 604 332 584 468 606 M620 610 C766 628 918 604 1060 626 M1118 586 C1235 604 1332 594 1430 614"
              fill="none"
              stroke="#BEB3A7"
              strokeLinecap="round"
              strokeWidth="1.5"
              opacity="0.22"
            />
          </g>
        )}
      </g>
    </svg>
  );
}
