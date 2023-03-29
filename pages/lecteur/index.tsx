import useSwr from 'swr';
import {IBook} from "@/pages/api/books";
import Card from "@/components/Card/Card";
import styles from "@/styles/Lecteur.module.scss"
import RedirectButton from "@/components/RedirectButton/RedirectButton";


const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function Lecteur() {

    const { data, error, isLoading } = useSwr('/api/books', fetcher);

    return (
        <div className={styles.container}>
            <h1>Voici la liste des livres</h1>
            {isLoading && <>Chargement des données...</>}
            <div className={styles.bookContainer}>
                {data && data.map((book: IBook) => {
                    return (
                        <Card key={book.id}>
                            <div className="core">
                                <h1>{book.titre}</h1>
                                <h2 style={{marginBottom: '5px'}}>{book.auteur}</h2>
                            </div>
                            <div className="action">
                                <RedirectButton name="Voir le détail" path="#" />
                            </div>
                        </Card>
                    )

                })}
            </div>
        </div>
    );
}