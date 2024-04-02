import styles from "./TimeComViews.module.scss"
import Icons from "@components/ui/icons"
import { Divider } from "@components/ui/divider"
import { useMemo } from "react"

type TCVProps = {
  time: number
  coms: number
  views: number
}

export const TimeComViews = ({ time, coms, views }: TCVProps) => {
  const parsedTime = useMemo(() => {
    const hours = time / 60
    const minutes = time % 60
    return (
      (hours > 0 ? hours.toFixed(0) + "h" : "") +
      " " +
      (minutes > 0 ? minutes + "m" : "")
    )
  }, [time])

  return (
    <div className={"textBody " + styles.tcv}>
      <div className={styles.tcvGroup}>
        <Icons name={"clock"} size={16} />
        <p>{parsedTime}</p>
      </div>
      <Divider className={styles.tcvDivider} />
      <div className={styles.tcvGroup}>
        <Icons name={"comment"} size={16} />
        <p>{coms}</p>
      </div>
      <div className={styles.tcvGroup}>
        <Icons name={"eye"} size={16} />
        <p>{views}</p>
      </div>
    </div>
  )
}
