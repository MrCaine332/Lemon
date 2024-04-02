import styles from "./NotImplemented.module.scss"
import { Section } from "@components/ui/section"

export const NotImplemented = () => {
  return (
    <Section className={"page " + styles.notImplementedPage}>
      <p className={"textHeader2"}>
        Unfortunately, this feature is not implemented yet.
      </p>
    </Section>
  )
}