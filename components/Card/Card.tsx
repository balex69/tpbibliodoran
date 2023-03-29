import {ChildProp} from "next/dist/server/app-render";
import styles from './Card.module.scss'


export default function Card({ children }: ChildProp) {
    return (
        <dic className={styles.card}>
            { children }
        </dic>
    )
}