import React, { useState } from 'react'
// Hooks
import { usePlayer } from '../hooks/usePlayer'
import { useStage } from '../hooks/useStage'

// Components
import Display from './Display'
import Stage from './Stage'
import StartButton from './StartButton'
import { StyledTetris, StyledTetrisWrapper } from './styles/StyledTetris'

const Tetris = () => {
    const [dropTime, setDropTime] = useState(null)
    const [gameOver, setGameOver] = useState(false)

    const [player] = usePlayer()
    const [stage, setStage] = useStage(player)

    return (
        <StyledTetrisWrapper>
            <StyledTetris>
                <Stage stage={stage} />
                <aside>
                    {gameOver ? (
                        <Display gameOver={gameOver} text='Game over' />
                    ) : (
                        <>
                            <Display text="Score" />
                            <Display text="Rows" />
                            <Display text="Level" />
                        </>
                    )}
                    <StartButton />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris
