import {useEffect, useRef} from 'react';
import {animate} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export interface CounterParameters {
    from?: number,
    to: number,
    duration?: number
}

export function useCounter ({from = 0, to = 10, duration = 1}: CounterParameters) {
    const counterRef = useRef<HTMLDivElement>(null)
    const {ref: viewRef, inView} = useInView({threshold: 1.0});

    useEffect(()=> {
        if(inView) {
            animate(from, to, {
                duration: duration,
                ease: "easeOut",
                onUpdate: (value) => {
                    if (!counterRef.current) return;
                    counterRef.current.textContent = Math.floor(value).toString();
                }
            });
        }
    });

    return {viewRef, counterRef};
}