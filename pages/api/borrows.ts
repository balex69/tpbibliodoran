import {NextApiRequest, NextApiResponse} from "next";

export interface IBorrow {
    id: number,
    date_emprunt: Date,
    date_retour: Date,
    livre_id: number,
    abonne_id: number
}

type Borrow = IBorrow;

const fakeData: Borrow[] = [
    {
        abonne_id: 0,
        date_emprunt: new Date(Date.now()),
        date_retour: new Date(Date.now() + (1000*60) * 3600),
        id: 0,
        livre_id: 1
    },
    {
        abonne_id: 2,
        date_emprunt: new Date(Date.now()),
        date_retour: new Date(Date.now() + (1000*60) * 3980),
        id: 1,
        livre_id: 3
    },
    {
        abonne_id: 2,
        date_emprunt: new Date(Date.now()),
        date_retour: new Date(Date.now() + (1000*60) * 2800),
        id: 2,
        livre_id: 5
    },
    {
        abonne_id: 3,
        date_emprunt: new Date(Date.now()),
        date_retour: new Date(Date.now() + (1000*60) * 4980),
        id: 3,
        livre_id: 9
    },
];

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Borrow[]>
) {

    const {method} = req;

    switch (method) {
        case "GET":
            res.status(200).json(fakeData);
            break;
    }
}
