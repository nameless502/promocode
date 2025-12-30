import { useState } from "react";
import * as motion from "motion/react-client"
import { useAnimation } from "motion/react"
import Wheel from '../../components/Wheel/Wheel'
import presentSmall from '../../assets/prize-small.svg'
import './Game.css'

type Props = {
    onComplete: () => void
}

function Game({ onComplete }: Props) {
    const [isGameStarted, setIsGameStarted] = useState(false);

    const title = useAnimation();
    const button = useAnimation();

    const handleGameStart = () => {
        button.start({
            opacity: 0,
            transition: { duration: 0.25 }
        })

        title.start({
            opacity: 0,
            transition: { duration: 0.25 }
        })

        setIsGameStarted(true)
    }

    return (
        <div className="game">
            <div className="game_wheel-wrapper">
                <motion.h1
                    initial={{ opacity: 1 }}
                    animate={title}
                    className="game_title"
                >
                    Крути колесо и получай подарки!
                </motion.h1>
                <Wheel
                    winner={3}
                    minSpins={10}
                    duration={10}
                    onAnimationEnd={onComplete}
                    isAnimationStarted={isGameStarted}
                />
            </div>
            <motion.button
                className="game_start-button"
                initial={{ opacity: 1 }}
                animate={button}
                onClick={handleGameStart}
                disabled={isGameStarted}
            >
                <img src={presentSmall} className="game_start-button-image" />
                <span>
                    Крутить
                </span>
            </motion.button>
        </div>
    )
}

export default Game