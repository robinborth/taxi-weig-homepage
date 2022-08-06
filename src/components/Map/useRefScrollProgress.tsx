import { useRef, useState, useLayoutEffect } from "react";
import {useViewportScroll} from "framer-motion";

export function useRefScrollProgress<Type extends HTMLElement> () {
    const ref = useRef<Type>(null);
    const [start, setStart] = useState<number>(0);
    const [end, setEnd] = useState<number>(0);
    const { scrollYProgress } = useViewportScroll();

    const calcInput = (size: number = 2) => {
        if (size <= 2) return [start ,end];
        const dif = end - start;
        const length = size - 2;
        const arr = Array.from({length: length}, (v,i) => start + (dif * (i + 1))/(length+1));
        return [start, ...arr, end];
    };
    
    useLayoutEffect(()=>{
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const offsetTop = rect.top + scrollTop;
        setStart(offsetTop / document.body.clientHeight);
        setEnd((offsetTop + rect.height) / document.body.clientHeight); 
    }, []);
    return {ref, start, end, calcInput, progress: scrollYProgress};
}

