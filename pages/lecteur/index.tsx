import useSwr from 'swr';
import {IBook} from "@/pages/api/books";
import Card from "@/components/Card/Card";
import styles from "@/styles/Lecteur.module.scss"


const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function Lecteur() {

    const { data, error, isLoading } = useSwr('/api/books', fetcher);

    return (
        <div className={styles.container}>
            {isLoading && <>Chargement des données...</>}
            {data && data.map((book: IBook) => {
                return (
                    <Card>
                        <h1>{book.titre}</h1>
                        <h2>{book.auteur}</h2>
                    </Card>
                )

            })}
        </div>
    );
}