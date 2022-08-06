import Calling from '../../assets/calling.svg';
import NightCalls from '../../assets/night_calls.svg';
import TimeManagement from '../../assets/time_management.svg';

type Specials = {
    header?: string,
    text?: string,
    url: string,
    call?: boolean
}

export const specials:Array<Specials> = [
    {
        url: TimeManagement,
        header: "Schnell am Ziel.",
        text: "Uns ist es ein besonderes Anliegen Sie sowohl schnell als auch sicher ans Ziel zu bringen.",
    },
    {
        url: NightCalls,
        header: "Immer erreichbar.",
        text: "Wir sind rund um die Uhr für Sie da - sieben Tage die Woche.",
    },
    {
        url: Calling,
        call: true
    }
]