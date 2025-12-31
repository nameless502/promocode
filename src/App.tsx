import { useState } from "react";
import * as motion from "motion/react-client"
import { AnimatePresence } from "motion/react"
import GamePage from './pages/Game/Game';
import ResultPage from './pages/Result/Result';
import './App.css'

function App() {
  const [page, setPage] = useState('result');

  return (
    <div className='content'>
      <AnimatePresence mode="wait">
        {
          page === 'game' &&
          <motion.div
            key="game"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='content_screen'
          >
            <GamePage
              onComplete={() => setPage('result')}
            />
          </motion.div>
        }
        {
          page === 'result' &&
          <motion.div
            key="result"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='content_screen'
          >
            <ResultPage />
          </motion.div>
        }
      </AnimatePresence>
    </div>
  );
}

export default App;
