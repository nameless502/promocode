import { useEffect } from "react";
import * as motion from "motion/react-client"
import { useAnimation } from "motion/react";
import rocketImage from '../../assets/rocket.svg';
import './Prize.css'

type Props = {
    onAnimationEnd: () => void;
}

function Prize({ onAnimationEnd }: Props) {
    const prize = useAnimation();
    const description = useAnimation();
    const ribbon = useAnimation();
    const cover = useAnimation();
    const box = useAnimation();

    useEffect(() => {
        ribbon.start({
            opacity: 0,
            transition: { duration: 1.25, delay: 1 }
        })
            .then(() => {
                cover.start({
                    rotate: '15deg',
                    translateY: '-50%',
                    transition: { duration: 1.5 }
                })

                return cover.start({
                    opacity: 0,
                    transition: { duration: 0.75, delay: 0.75 }
                })
            })
            .then(() => {
                box.start({
                    rotate: '10deg',
                    translateY: '75%',
                    transition: { duration: 1.5 }
                })

                box.start({
                    opacity: 0,
                    transition: { duration: 0.75, delay: 0.75 }
                })

                prize.start({
                    opacity: 1,
                    transition: { duration: 1 }
                })

                return prize.start({
                    scale: 1.25,
                    transition: { duration: 1.5, delay: 0.2 }
                })
            })
            .then(() => description.start({
                opacity: 1,
                transition: { duration: 0.15 }
            }))
            .then(() => setTimeout(() => onAnimationEnd(), 1000))
    }, [])

    return (
        <div className="prize">
            <motion.svg
                width="100%"
                height="100%"
                viewBox="0 0 907 907"
                fill="none"
                className='prize_box'
                animate={box}
                initial={{ opacity: 1, translate: '-50% -50%' }}
            >
                <path d="M859.375 375H46.875V906.25H859.375V375Z" fill="#7EA82D" />
                <path d="M859.375 375H46.875V437.5H859.375V375Z" fill="#729C22" />
                // cover
                <motion.path animate={cover} initial={{ opacity: 1 }} d="M906.25 187.5H0V375H906.25V187.5Z" fill="#7EA82D" />
                // ribbon
                <motion.path animate={ribbon} initial={{ opacity: 1 }} d="M546.875 187.5H359.375V906.25H546.875V187.5Z" fill="#DD4A43" />
                <motion.path animate={ribbon} initial={{ opacity: 1 }} d="M385.281 51.8281C377.496 36.2562 365.529 23.1596 350.721 14.0057C335.912 4.85172 318.847 0.00204255 301.438 0H171.875C147.011 0 123.165 9.87721 105.584 27.4587C88.0022 45.0403 78.125 68.886 78.125 93.75C78.125 118.614 88.0022 142.46 105.584 160.041C123.165 177.623 147.011 187.5 171.875 187.5H453.125L385.281 51.8281Z" fill="#DD4A43" />
                <motion.path animate={ribbon} initial={{ opacity: 1 }} d="M453.125 187.5H296.875C272.011 187.5 248.165 177.623 230.584 160.041C213.002 142.46 203.125 118.614 203.125 93.75C203.125 68.886 213.002 45.0403 230.584 27.4587C248.165 9.87721 272.011 0 296.875 0H301.438C318.847 0.00204255 335.912 4.85172 350.721 14.0057C365.529 23.1596 377.496 36.2562 385.281 51.8281L453.125 187.5Z" fill="#B0342E" />
                <motion.path animate={ribbon} initial={{ opacity: 1 }} d="M520.969 51.8281C528.754 36.2562 540.721 23.1596 555.529 14.0057C570.338 4.85172 587.403 0.00204255 604.812 0H734.375C759.239 0 783.085 9.87721 800.666 27.4587C818.248 45.0403 828.125 68.886 828.125 93.75C828.125 118.614 818.248 142.46 800.666 160.041C783.085 177.623 759.239 187.5 734.375 187.5H453.125L520.969 51.8281Z" fill="#DD4A43" />
                <motion.path animate={ribbon} initial={{ opacity: 1 }} d="M453.125 187.5H609.375C634.239 187.5 658.085 177.623 675.666 160.041C693.248 142.46 703.125 118.614 703.125 93.75C703.125 68.886 693.248 45.0403 675.666 27.4587C658.085 9.87721 634.239 0 609.375 0H604.812C587.403 0.00204255 570.338 4.85172 555.529 14.0057C540.721 23.1596 528.754 36.2562 520.969 51.8281L453.125 187.5Z" fill="#B0342E" />
                <motion.path animate={ribbon} initial={{ opacity: 1 }} d="M546.875 515.625V187.5H359.375V531.25L453.125 296.875L546.875 515.625Z" fill="#D13E37" />
                <motion.path animate={ribbon} initial={{ opacity: 1 }} d="M281.25 609.375L218.75 531.25L109.375 562.5L265.625 187.5H453.125L281.25 609.375Z" fill="#DD4A43" />
                <motion.path animate={ribbon} initial={{ opacity: 1 }} d="M625 609.375L687.5 531.25L796.875 562.5L640.625 187.5H453.125L625 609.375Z" fill="#DD4A43" />
                <motion.path animate={ribbon} initial={{ opacity: 1 }} d="M258.835 322.619L203.734 462.837L232.819 474.266L287.92 334.048L258.835 322.619Z" fill="#E66B65" />
                <motion.path animate={ribbon} initial={{ opacity: 1 }} d="M282.28 260.013L270.266 291.267L299.435 302.48L311.449 271.225L282.28 260.013Z" fill="#E66B65" />
                //
                <path d="M125 718.75H93.75V859.375H125V718.75Z" fill="#95C43B" />
                <path d="M125 656.25H93.75V687.5H125V656.25Z" fill="#95C43B" />
            </motion.svg>
            <div className='prize_image-wrapper'>
                <motion.img
                    initial={{ opacity: 0, scale: 0.6, translateX: '-50%' }}
                    animate={prize}
                    src={rocketImage}
                    className="prize_image"
                />
            </div>
        </div>
    )
}

export default Prize