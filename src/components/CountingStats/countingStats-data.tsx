import { IconType } from 'react-icons';
import { AiOutlineFieldTime, AiOutlineTeam, AiOutlineCar } from 'react-icons/ai';


type CountingStatsProps = {
    count: number,
    text: string,
    icon: IconType
}

export const countingStats: Array<CountingStatsProps> = [
    {
        count: 20,
        text: "Seit 20 Jahren für Sie unterwegs.",
        icon: AiOutlineFieldTime,
    },
    {
        count: 23,
        text: "Und 23 motivierten Mitarbeitern.",
        icon: AiOutlineTeam,
    },
    {
        count: 19,
        text: "Mit über 19 Fahrzeugen.",
        icon: AiOutlineCar,
    }
]