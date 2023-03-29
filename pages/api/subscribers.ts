import {NextApiRequest, NextApiResponse} from "next";

export interface ISubscriber {
    id: number,
    pseudo: string,
    password: string,
    nom: string,
    prenom: string
}

type Subscriber = ISubscriber;

const fakeData: Subscriber[] = [
    {id: 0, nom: "Tansaout", password: "azerty123", prenom: "Juba", pseudo: "j.tansaout"},
    {id: 1, nom: "Bagnasco", password: "azerty123", prenom: "Alexys", pseudo: "a.bagnasco"},
    {id: 2, nom: "Anselin", password: "azerty123", prenom: "Ludovic", pseudo: "l.anselin"},
    {id: 3, nom: "Onnesaitpas", password: "azerty123", prenom: "Didier", pseudo: "d.onnesaitpas"},
]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Subscriber[]>
) {

    const {method} = req;

    switch (method) {
        case "GET":
            res.status(200).json(fakeData);
            break;
    }
}