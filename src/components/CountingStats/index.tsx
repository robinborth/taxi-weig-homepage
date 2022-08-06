import {CounterParameters, useCounter} from './useCounter';
import {
    Container,
    Title,
    Item,
    Icon,
    CounterText,
    Description,
    Header,
} from './styles';
import { countingStats } from './countingStats-data';
import { InView } from 'react-intersection-observer';

const header = {
    animate: {
        opacity: 1,
        y: 0,
        transition: {duration: 1.3},
    },
    initial: {opacity: 0, y: "-6px"}
}

const title = {
    animate: {
        opacity: 1,
        x: 0,
        transition: {duration: 0.7},
    },
    initial: {opacity: 0, x: "-20px"}
}

const text = {
    animate: {
        opacity: 1,
        y: 0,
        transition: {duration: 0.7},
    },
    initial: {opacity: 0, y: "10px"}
}

const CountingStats = () => {
    return <>
        <Container>
             <InView threshold={0.75}>
                    {({ref, inView})=> (
                        <Title ref={ref} initial="initial" animate={inView ? "animate" : "inital"} variants={title}>Familienbetrieb seit 2001, das zahlt sich aus!</Title>
                    )}
              </InView>          
            {countingStats.map((stats, index) => {
                const StatsIcon = stats.icon;
                return (
                    <InView threshold={0.75}>
                            {({ref, inView})=> (
                                <Item key={index} ref={ref}>
                                    <Header initial="initial" animate={inView ? "animate" : "inital"} variants={header}>
                                        <Icon><StatsIcon /></Icon>
                                        <Counter to={stats.count} />
                                    </Header>
                                    <Description initial="initial" animate={inView ? "animate" : "inital"} variants={text}>{stats.text}</Description>
                                </Item>
                            )}
                    </InView>
                );
            })}
        </Container>
    </>;
}

const Counter = (props: CounterParameters) => {
    const {viewRef, counterRef} = useCounter(props);
    return (
        <div ref={viewRef}>
            <CounterText ref={counterRef} />
        </div>
    );
}

export default CountingStats;