import {
    Button,
    Text,
    ColoredText,
    IconPhone
} from './style';
import {motion, useAnimation} from 'framer-motion';
import { useEffect } from 'react';

type CallButtonProps = {
    animate?: boolean;
    text?: string;
}

const CallButton = ({animate=true, text="Jetzt anrufen!"}: CallButtonProps) => { 
    const animation = useAnimation();

    useEffect(()=>{
        const shake = async (ammount: number = 1) => {
            for(let i = 0; i < ammount; i++){
                await animation.start({
                    rotate: 20,
                    transition: {duration: 0.1},
                });
                await animation.start({
                    rotate: 0,
                    transition: {duration: 0.1},
                });
            }
        }

        const sequence = async () => {
            await animation.start({
                fontSize: "1.5rem",
                transition: {duration: 0.5},
            });
            await shake(3);
            await animation.start({
                fontSize: "1.2rem",
                transition: {duration: 0.5},
            });
            setTimeout(sequence, 1500);
        }
        if (animate) {
            sequence();
        }
        return animation.stop;
    }, [animate, animation]);

    return (
        <Button
            whileHover={{
                boxShadow: `0px 1px 4px rgba(36, 36, 36, 0.5)`,
                scale: 1.05,
                transition: {duration: 0.3}
            }}
            initial={{
                boxShadow: `0px 1px 2px rgba(36, 36, 36, 0.2)`,
            }}
            href="tel:+07139932444"
        >
            <motion.div
                initial={{ fontSize: "1.2rem" }}
                animate={animation}
            >
                <IconPhone />     
            </motion.div>
            <Text>Jetzt <ColoredText>anrufen</ColoredText> !</Text>
        </Button>
    );
}

export default CallButton;