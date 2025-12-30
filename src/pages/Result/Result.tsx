import { useEffect, useState } from "react";
import * as motion from "motion/react-client"
import { useAnimation } from "motion/react"
import Prize from '../../components/Prize/Prize'
import Promocode from "../../components/Promocode/Promocode";
import './Result.css'

function Result() {
    const [isAnimationCompleted, setIsAnimationCompleted] = useState(false);

    const promocode = useAnimation();

    useEffect(() => {
        if (isAnimationCompleted) {
            promocode.start({
                opacity: 1,
                transition: { duration: 0.15 }
            })
        }
    }, [isAnimationCompleted])

    return (
        <div className="result">
            <Prize
                onAnimationEnd={() => setIsAnimationCompleted(true)}
            />
            <motion.div
                className="result_promocode"
                initial={{ opacity: 0 }}
                animate={promocode}
            >
                <Promocode />
            </motion.div>
        </div>
    )
}

export default Result