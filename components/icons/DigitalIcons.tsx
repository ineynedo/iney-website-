// Digital Transformation Icons
export const ProblemsIcon = () => (
    <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Frustrated person */}
        <circle cx="100" cy="80" r="25" fill="none" stroke="url(#purpleGrad)" strokeWidth="3" />
        <path d="M 85 95 Q 100 110 115 95" stroke="url(#purpleGrad)" strokeWidth="3" fill="none" />

        {/* Excel sheets */}
        <rect x="30" y="40" width="30" height="35" fill="none" stroke="url(#blueGrad)" strokeWidth="2" rx="2" />
        <line x1="35" y1="50" x2="55" y2="50" stroke="url(#blueGrad)" strokeWidth="1" />
        <line x1="35" y1="58" x2="55" y2="58" stroke="url(#blueGrad)" strokeWidth="1" />
        <line x1="35" y1="66" x2="55" y2="66" stroke="url(#blueGrad)" strokeWidth="1" />

        {/* Paper stacks */}
        <rect x="140" y="45" width="25" height="30" fill="none" stroke="url(#purpleGrad)" strokeWidth="2" />
        <rect x="143" y="48" width="25" height="30" fill="none" stroke="url(#purpleGrad)" strokeWidth="2" />

        {/* Clock */}
        <circle cx="160" cy="120" r="15" fill="none" stroke="url(#blueGrad)" strokeWidth="2" />
        <line x1="160" y1="120" x2="160" y2="110" stroke="url(#blueGrad)" strokeWidth="2" />
        <line x1="160" y1="120" x2="167" y2="120" stroke="url(#blueGrad)" strokeWidth="2" />

        {/* Down arrow */}
        <path d="M 50 140 L 50 165 M 42 157 L 50 165 L 58 157" stroke="url(#purpleGrad)" strokeWidth="3" fill="none" />

        <defs>
            <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#db2777" />
            </linearGradient>
            <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#db2777" />
            </linearGradient>
        </defs>
    </svg>
);

export const BenefitsIcon = () => (
    <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Person with laptop */}
        <circle cx="100" cy="70" r="20" fill="none" stroke="url(#greenGrad)" strokeWidth="3" />
        <rect x="80" y="100" width="40" height="30" fill="none" stroke="url(#greenGrad)" strokeWidth="2" rx="2" />

        {/* Dashboard screens */}
        <rect x="30" y="30" width="45" height="35" fill="none" stroke="url(#cyanGrad)" strokeWidth="2" rx="3" />
        <path d="M 40 55 L 50 45 L 60 50 L 65 40" stroke="url(#cyanGrad)" strokeWidth="2" fill="none" />

        <rect x="125" y="30" width="45" height="35" fill="none" stroke="url(#greenGrad)" strokeWidth="2" rx="3" />
        <path d="M 135 55 L 145 48 L 155 52 L 160 45" stroke="url(#greenGrad)" strokeWidth="2" fill="none" />

        {/* 24/7 symbol */}
        <circle cx="40" cy="150" r="18" fill="none" stroke="url(#cyanGrad)" strokeWidth="2" />
        <text x="40" y="155" textAnchor="middle" fill="url(#cyanGrad)" fontSize="12" fontWeight="bold">24/7</text>

        {/* Automation gears */}
        <circle cx="160" cy="150" r="12" fill="none" stroke="url(#greenGrad)" strokeWidth="2" />
        <circle cx="160" cy="150" r="8" fill="none" stroke="url(#greenGrad)" strokeWidth="1" />
        <circle cx="175" cy="160" r="8" fill="none" stroke="url(#cyanGrad)" strokeWidth="2" />

        <defs>
            <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#db2777" />
            </linearGradient>
            <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#db2777" />
            </linearGradient>
        </defs>
    </svg>
);

export const AgencyIcon = () => (
    <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Three people */}
        <circle cx="70" cy="60" r="15" fill="none" stroke="url(#orangeGrad)" strokeWidth="2" />
        <circle cx="100" cy="60" r="15" fill="none" stroke="url(#pinkGrad)" strokeWidth="2" />
        <circle cx="130" cy="60" r="15" fill="none" stroke="url(#orangeGrad)" strokeWidth="2" />

        {/* Puzzle pieces */}
        <path d="M 60 100 L 90 100 L 90 95 L 95 95 L 95 105 L 90 105 L 90 130 L 60 130 Z"
            fill="none" stroke="url(#orangeGrad)" strokeWidth="2" />
        <path d="M 95 100 L 125 100 L 125 130 L 110 130 L 110 135 L 100 135 L 100 130 L 95 130 Z"
            fill="none" stroke="url(#pinkGrad)" strokeWidth="2" />
        <path d="M 125 100 L 140 100 L 140 130 L 125 130 Z"
            fill="none" stroke="url(#orangeGrad)" strokeWidth="2" />

        {/* Tech symbols */}
        <circle cx="40" cy="150" r="12" fill="none" stroke="url(#pinkGrad)" strokeWidth="2" />
        <path d="M 35 150 Q 40 145 45 150 Q 40 155 35 150" fill="url(#pinkGrad)" />

        <path d="M 160 145 L 170 155 M 160 155 L 170 145" stroke="url(#orangeGrad)" strokeWidth="2" />

        <defs>
            <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#db2777" />
            </linearGradient>
            <linearGradient id="pinkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#db2777" />
            </linearGradient>
        </defs>
    </svg>
);

export const ApproachIcon = () => (
    <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Winding path */}
        <path d="M 40 170 Q 60 150 80 150 Q 100 150 100 130 Q 100 110 120 110 Q 140 110 140 90 Q 140 70 160 70"
            fill="none" stroke="url(#blueGradPath)" strokeWidth="3" />

        {/* Milestone 01 - Explore */}
        <circle cx="40" cy="170" r="20" fill="none" stroke="url(#blueGradPath)" strokeWidth="2" />
        <circle cx="40" cy="170" r="12" fill="none" stroke="url(#blueGradPath)" strokeWidth="1.5" />
        <circle cx="40" cy="170" r="5" fill="url(#blueGradPath)" />
        <text x="40" y="155" textAnchor="middle" fill="url(#blueGradPath)" fontSize="14" fontWeight="bold">01</text>

        {/* Milestone 02 - Imagine */}
        <circle cx="100" cy="130" r="20" fill="none" stroke="url(#blueGradPath)" strokeWidth="2" />
        <circle cx="100" cy="130" r="8" fill="none" stroke="url(#blueGradPath)" strokeWidth="1.5" />
        <path d="M 100 122 L 100 128 M 97 125 L 100 122 L 103 125" stroke="url(#blueGradPath)" strokeWidth="1.5" fill="none" />
        <text x="100" y="115" textAnchor="middle" fill="url(#blueGradPath)" fontSize="14" fontWeight="bold">02</text>

        {/* Milestone 03 - Build */}
        <circle cx="140" cy="90" r="20" fill="none" stroke="url(#blueGradPath)" strokeWidth="2" />
        <path d="M 135 90 L 145 90 M 140 85 L 140 95" stroke="url(#blueGradPath)" strokeWidth="2" />
        <text x="140" y="75" textAnchor="middle" fill="url(#blueGradPath)" fontSize="14" fontWeight="bold">03</text>

        {/* Milestone 04 - Improve */}
        <circle cx="160" cy="70" r="20" fill="none" stroke="url(#blueGradPath)" strokeWidth="2" />
        <path d="M 160 75 L 160 65 M 155 70 L 160 65 L 165 70" stroke="url(#blueGradPath)" strokeWidth="2" fill="none" />
        <text x="160" y="55" textAnchor="middle" fill="url(#blueGradPath)" fontSize="14" fontWeight="bold">04</text>

        <defs>
            <linearGradient id="blueGradPath" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#db2777" />
            </linearGradient>
        </defs>
    </svg>
);
