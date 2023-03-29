import styles from '@/styles/Stock.module.scss'
import useSwr, {SWRResponse} from "swr";
import {IBorrow} from "@/pages/api/borrows";
import {IBook} from "@/pages/api/books";
import {ISubscriber} from "@/pages/api/subscribers";

const fetcher = (url: string) => fetch(url).then(res => res.json());

const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
    timeZone: 'Europe/Paris'
};

export default function Stock() {

    const borrows: SWRResponse<IBorrow[], any, boolean> = useSwr('/api/borrows', fetcher);
    const books: SWRResponse<IBook[], any, boolean> = useSwr('/api/books', fetcher);
    const subscribers: SWRResponse<ISubscriber[], any, boolean> = useSwr('/api/subscribers', fetcher);

    return (
        <div className={styles.container}>
            {borrows.isLoading && <>Chargement des données...</>}
            <div className={styles.borrowContainer}>
                {(borrows && books && subscribers) && borrows.data?.map(borrow => {
                    const subscriber: ISubscriber = subscribers.data?.filter(subscriber => subscriber.id === borrow.abonne_id).at(0);

                    return (
                        <div key={borrow.id} className={styles.borrow}>
                            {books.data?.filter(book => book.id === borrow.livre_id).at(0).titre}
                            <br/>
                            {`Emprunté le: ${new Date(borrow.date_emprunt).toLocaleDateString('fr-FR', DATE_OPTIONS)}`}
                            <br/>
                            {`Retour le: ${new Date(borrow.date_retour).toLocaleDateString('fr-FR', DATE_OPTIONS)}`}
                            <br/>
                            {`Par ${subscriber?.nom} ${subscriber?.prenom} - (${subscriber?.pseudo})`}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}