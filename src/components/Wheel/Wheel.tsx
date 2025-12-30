import { useEffect, useRef, useState } from "react"
import * as motion from "motion/react-client"
import { useAnimation } from "motion/react"
import ball from '../../assets/ball.svg'
import glove from '../../assets/glove.svg'
import present from '../../assets/present.svg'
import snowman from '../../assets/snowman.svg'
import star from '../../assets/star.svg'
import presents from '../../assets/presents.svg'
import sock from '../../assets/sock.svg'
import snowglobe from '../../assets/snowglobe.svg'
import './Wheel.css'

type Props = {
    size: number;
    winner: number;
    minSpins: number;
    duration: number;
    isAnimationStarted: boolean;
    onAnimationEnd: () => void;
}

type SegmentConfig = {
    background: string;
    icon: string;
};

const segments: SegmentConfig[] = [
    { background: "var(--wheel-segment-color-1)", icon: star },
    { background: "var(--wheel-segment-color-2)", icon: present },
    { background: "var(--wheel-segment-color-3)", icon: glove },
    { background: "var(--wheel-segment-color-4)", icon: presents },
    { background: "var(--wheel-segment-color-5)", icon: ball },
    { background: "var(--wheel-segment-color-6)", icon: snowglobe },
    { background: "var(--wheel-segment-color-7)", icon: sock },
    { background: "var(--wheel-segment-color-8)", icon: snowman },
];

function Wheel({ winner, minSpins, duration, onAnimationEnd, isAnimationStarted }: Props) {
    const [size, setSize] = useState(0);

    const wheelRef = useRef<HTMLDivElement | null>(null);

    const wheel = useAnimation();
    const pointer = useAnimation();

    const numSegments = segments.length;
    const segmentAngle = 360 / segments.length;
    const radians = segmentAngle * (Math.PI / 180);
    const segmentWidth = 2 * (size / 2) * Math.sin(radians / 2);
    const rotation = (minSpins * 360) + (winner * segmentAngle);

    const gradient = segments
        .map((segment, index) => {
            const segmentSize = 100 / numSegments;
            const start = (index * segmentSize);
            const end = start + segmentSize;
            return `${segment.background} ${start}% ${end}%`;
        })
        .join(", ");

    useEffect(() => {
        if (!wheelRef.current) {
            return;
        };

        const { width } = wheelRef.current.getBoundingClientRect();

        setSize(width);
    }, []);

    useEffect(() => {
        if (isAnimationStarted) {
            wheel.start({
                rotate: rotation,
                transition: { duration }
            })
                .then(() => setTimeout(() => onAnimationEnd(), 1000))


            pointer.start({
                rotate: ['-90deg', '-95deg', '-90deg'],
                transition: { duration: 0.2, repeat: Math.ceil(duration / 2 / 0.2) }
            })
                .then(() => pointer.start({
                    rotate: ['-90deg', '-95deg', '-90deg'],
                    transition: { duration: 0.4, repeat: Math.ceil(duration / 4 / 0.4) }
                }))
                .then(() => pointer.start({
                    rotate: ['-90deg', '-95deg', '-90deg'],
                    transition: { duration: 0.5, repeat: 1 }
                }))
        }
    }, [isAnimationStarted]);

    return (
        <div className="wheel">
            <div className="wheel_wrapper">
                <motion.svg
                    initial={{ rotate: '-90deg', translate: '-50% -75%' }}
                    animate={pointer}
                    viewBox="0 0 273 147"
                    className="wheel_pointer"
                >
                    <g>
                        <path
                            fill="currentColor"
                            d="M196.3 0h10.5l1 .25c10.06 1.9 19.63 5.06 28.1 10.93 11.28 7.55 19.66 18.43 25.12 30.78 1.9 6.4 4.06 12.23 4 19.04-.1 5.3.3 10.7-.34 15.97-2.18 14.1-9.08 27.46-19.38 37.33-10.03 10-23.32 16.4-37.33 18.4-4.95.54-10 .3-14.97.3-6.4-.02-13.06-2.82-19.2-4.68-54.98-17.5-109.95-35.08-164.96-52.5C4.7 74.7 2.14 73.33 0 69.5v-6.26c1.47-1.93 2.94-3.95 5.34-4.77C64.47 39.78 123.84 20.77 183 2c4.3-1.15 8.9-1.2 13.3-2z"
                        />
                        <path
                            opacity=".2"
                            d="M261.02 41.96c6.74 9.2 10.54 20.04 11.98 31.3V88c-1.9 14.78-8.25 28.63-18.78 39.24-11 11.34-25.83 18.16-41.52 19.78h-12.65c-3.8-.6-7.57-1.4-11.22-2.63C132.4 126.43 76 108.37 19.55 90.5c-3.4-1.22-8.1-1.62-10.12-4.94-2.2-3.14-1.5-6.3-.6-9.73 55.02 17.4 110 35 164.97 52.5 6.14 1.85 12.8 4.65 19.2 4.66 4.97 0 10.02.24 14.97-.3 14-2 27.3-8.4 37.33-18.4 10.3-9.87 17.2-23.24 19.38-37.33.63-5.27.23-10.66.34-15.97.06-6.8-2.1-12.64-4-19.04v.01z"
                        />
                        <ellipse
                            stroke="none"
                            ry="25"
                            rx="25"
                            cy="65"
                            cx="199.124"
                            fill="#ffffff"
                        />
                    </g>
                </motion.svg>
                <motion.div
                    animate={wheel}
                    ref={wheelRef}
                    className="wheel_spinner"
                    style={{
                        background: `conic-gradient(from ${180 + (segmentAngle / 2) - segmentAngle}deg, ${gradient})`
                    }}
                >
                    {
                        segments.map((segment, index) => {
                            return (
                                <div
                                    key={index}
                                    className="wheel_spinner-segment"
                                    style={{
                                        transform: `rotate(${index * segmentAngle}deg) translateY(50%)`,
                                        width: `${segmentWidth}px`,
                                        zIndex: segments.length - index,
                                    }}
                                >
                                    <img
                                        src={segment.icon}
                                        className="wheel_spinner-segment-image"
                                    />
                                </div>
                            )
                        })
                    }
                </motion.div>
            </div>
        </div>
    )
}

export default Wheel;
