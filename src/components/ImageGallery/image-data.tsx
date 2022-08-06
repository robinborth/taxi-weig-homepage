import Family from '../../assets/family-min.jpg';
import Team from '../../assets/team-min.jpg';
import TaxiOpen from '../../assets/taxiOpen-croped-min.jpg';
import AllTaxis from '../../assets/allTaxis-min.jpg';
import HelpPerson from '../../assets/helpPerson-croped-min.jpg';

export type ImageData = {
    url: string,
    header: string,
    text: string,
    format?: ImgFormat,
    isTeamSection?: boolean,
}

export enum ImgFormat{
    Small,
    Large
}

export const imagesFirst: Array<ImageData> = [
    {
        url: Family,
        header: "Wir sind eine Familie.",
        text: "Wir legen besonderen Wert auf ein familiäres Verhältnis unter den Mitarbeitern und ein freundliches Auftreten gegenüber unseren Kunden.",
        format: ImgFormat.Small,
    },
    {
        url: Team,
        header: "Wir sind ein Team.",
        text: "2001 gründeten wir Taxi Weig als Familienunternehmen in Kochertürn. Angefangen hatte alles mit einem Mitarbeiter. Mittlerweile umfasst der Betrieb 23 professionelle Angestellte.",
        format: ImgFormat.Small,
        isTeamSection: true,
    },
    {
        url: HelpPerson,
        header: "Wir sind für Sie da.",
        text: "Kunden mit Gehbeschwerden haben die Möglichkeit sicher und ohne große Anstrengung von zuhause zu ihrem Zielort gefahren zu werden. Die hilfsbereiten Fahrer sind gerne bereit, die Fahrgäste bis zur Wohnung zu begleiten. Da wir Vertragspartner aller Kranken- und Rentenkassen sind, sind Fahrten auch auf ärztliche Verordnung möglich! (Gegebenenfalls benötigen Sie eine Genehmigung bei der Krankenkasse). Auch junge Fahrgäste sollen sicher an ihr Ziel kommen. Die Beförderung geistig und körperlich eingeschränkter Kinder zur Schule liegt uns am Herzen.",
        format: ImgFormat.Large,
    }
]

export const imagesSecond: Array<ImageData> = [
     {
        url: AllTaxis,
        header: "Unser Fuhrpark.",
        text: "Mit über neunzehn Großraumtaxen bieten wir für jeden Fahrgast ausreichend Platz. Fahrten sind nicht nur im privaten Rahmen nach Feiern oder Veranstaltungen möglich. Unser Service umfasst auch Arzt- und Krankenhausfahrten, Chemotherapie, Dialyse, Bestrahlungsfahrten, Physiotherapie, Flughafentransfer, 24-Stunden-Service oder Fahrten zu Kur und Reha an.",
        format: ImgFormat.Small,
    },
    {
        url: TaxiOpen,
        header: "Überall einsatzfähig.",
        text: "Besonders wichtig ist uns auch gehbehinderten Fahrgästen eine angenehme Fahrt zu bieten. Dafür gehören zu unserem Fuhrpark mehrere Fahrzeuge, die rollstuhl- und behindertengerecht umgebaut sind. Wir sind für jede Herausforderung gerüstet! Jedes Rollstuhltaxi ist mit einem Treppensteiger ausgerüstet. Somit kann jeder Mitarbeiter vor Ort bei Bedarf den Treppensteiger einsetzen.",
        format: ImgFormat.Large,
    }
]