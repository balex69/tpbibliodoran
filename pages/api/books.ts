import type {NextApiRequest, NextApiResponse} from 'next'

interface IBook {
    id: number,
    titre: string,
    auteur: string
}

type Book = IBook;

const fakeData: Book[] = [
    {auteur: "Éric Cheysson, Michel Faure", id: 0, titre: "AFGHANISTAN, LA SPIRALE INFERNALE"},
    {auteur: "Shannon Burke", id: 1, titre: "BLACK FLIES"},
    {auteur: "Ophélie Roque", id: 2, titre: "BLACK MESA"},
    {auteur: "Vincent Jauvert", id: 3, titre: "DICTIONNAIRE AMOUREUX DE L'ESPIONNAGE"},
    {
        auteur: "Vincent Baguian, Baptiste Vignol, Raphaël Gauthey",
        id: 4,
        titre: "EMILE TITAN – DIX JOURS POUR SAUVER PARIS !"
    },
    {
        auteur: "Nora Sahara",
        id: 5,
        titre: "HÔPITAL : TANT QU'IL N'Y A PAS DE PLAINTE..."
    },
    {auteur: "Ciara Smyth", id: 6, titre: "JE DÉTESTE LES COMÉDIES ROMANTIQUES"},
    {auteur: "Heinz Linge", id: 7, titre: "JUSQU'À LA CHUTE"},
    {auteur: "Francis SOLET", id: 8, titre: "L'ART PAUVRE DES RICHES"},
    {auteur: "Franck Aggeri, Rémi Beulque, Helen Micheaux", id: 9, titre: "L'ÉCONOMIE CIRCULAIRE"},

]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Book[]>
) {

    const { method } = req;

    switch (method) {
        case "GET":
            res.status(200).json(fakeData);
            break;
    }
}
