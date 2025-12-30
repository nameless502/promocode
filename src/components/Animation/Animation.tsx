import { useState } from "react";
import * as motion from "motion/react-client"
import { AnimatePresence } from "motion/react"
import Wheel from '../Wheel/Wheel'
import Prize from "../Prize/Prize";
import presentSmall from '../../assets/prize-small.svg'
import './Animation.css'

function Animation() {
    const [stage, setStage] = useState(1);
    const [isAnimationStarted, setIsAnimationStarted] = useState(false);

    const handleAnimationEnd = () => {
        setStage((current) => current + 1)
    };

    const handleAnimationStart = () => {
        setIsAnimationStarted(true)
    };

    return (
        <div className="animation">
            <AnimatePresence mode="wait">
                {
                    stage === 1 &&
                    <motion.div
                        key="wheel"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="animation_element"
                    >
                        <Wheel
                            size={400}
                            winner={3}
                            minSpins={10}
                            duration={10}
                            onAnimationEnd={handleAnimationEnd}
                            isAnimationStarted={isAnimationStarted}
                        />
                    </motion.div>
                }
                {
                    (stage === 2 || stage === 3) &&
                    <motion.div
                        key="prize"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onAnimationEnd={handleAnimationEnd}
                        className="animation_element"
                    >
                        <Prize
                            onAnimationEnd={handleAnimationEnd}
                        />
                    </motion.div>
                }
            </AnimatePresence>
            <AnimatePresence mode="wait">
                {
                    !isAnimationStarted &&
                    <motion.button
                        key="button"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="animation_start-button"
                        onClick={handleAnimationStart}
                        disabled={isAnimationStarted}
                    >
                        <img src={presentSmall} className="animation_start-button-image"/>
                        <span>
                            Крутить
                        </span>
                    </motion.button>
                }
            </AnimatePresence>
        </div>
    )
}

export default Animation