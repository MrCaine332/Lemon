import React from "react"
import styles from "./DifficultyButtons.module.scss"
import { Button } from "@components/ui/button"
import { Difficulty } from "@app/enums"

type DifficultyButtonsProps = {
  difficulty: Difficulty
  setDifficulty: React.Dispatch<React.SetStateAction<Difficulty>>
}

export const DifficultyButtons = ({
  difficulty,
  setDifficulty,
}: DifficultyButtonsProps) => {
  return (
    <div className={styles.homeRecipesButtons}>
      <Button
        onClick={() => setDifficulty(Difficulty.easy)}
        className={difficulty === Difficulty.easy ? styles.buttonActive : ""}
      >
        EASY
      </Button>
      <Button
        onClick={() => setDifficulty(Difficulty.medium)}
        className={difficulty === Difficulty.medium ? styles.buttonActive : ""}
      >
        MEDIUM
      </Button>
      <Button
        onClick={() => setDifficulty(Difficulty.hard)}
        className={difficulty === Difficulty.hard ? styles.buttonActive : ""}
      >
        HARD
      </Button>
    </div>
  )
}
