import { FC } from "react"
import { CardTitleProps } from "./CardTitle.types"
import styles from './CardTitle.module.css'

export const CardTitle: FC<CardTitleProps> = ({ title }) => {
    return <p className={`${styles.title} `}>
        {title}
    </p>
}