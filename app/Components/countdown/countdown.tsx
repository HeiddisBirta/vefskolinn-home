'use client'
import {useState, useEffect} from 'react';
import {Container, TimerSegment, Time, Label, TimerWrapper, TimerInner, Headline, TimerTitle, FrameCountdown} from './countdownStyle'


const Countdown = ( ) => {
    const [lasPalmas, setLasPalmas] = useState (false)
    const [weeks, setWeeks] = useState(0)
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minuets, setMinuets] = useState(0)
    const [sec, setSec] = useState(0)

    useEffect (() =>{
        const target = new Date ("03/30/2025 08:00:59") 
        let interval;

        interval=setInterval(() => {


    const interval = setInterval (() => {
        const now= new Date ()
        const difference =target.getTime()-now.getTime();

    const w = Math.floor(difference/(1000 * 60 * 60 * 24 * 7));
    setWeeks (w)

    const d = Math.floor((difference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    setDays(d);

    const h = Math.floor ((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    setHours(h);

    const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    setMinuets(m);

    const s = Math.floor((difference % (1000 * 60)) / 1000);
    setSec(s);
    
if (w <= 0 && d <=0 && h <=0 && m <=0  && s <=m) {
    setLasPalmas (true);
} 

    }, 1000);
})

return () => clearInterval(interval);
},[]);

    return (
       <Container>
         <FrameCountdown>
        {lasPalmas ? <h1>Hólímólí! Það er komið að þessu!! </h1>:null}
       
        <TimerWrapper>
            <TimerInner>
                <TimerTitle>
                <Headline>Countdown to Las Palmas</Headline>
                </TimerTitle>
                <TimerSegment >
                    <Time>{weeks.toString().slice(0)}</Time>
                    <Label>Weeks</Label>    
                </TimerSegment> 
                <TimerSegment>
                    <Time>{days.toString().slice(0)}</Time>
                    <Label>Days</Label>    
                </TimerSegment>  
                <TimerSegment>
                    <Time>{hours.toString().slice(0)}</Time>
                    <Label>Hours</Label>    
            </TimerSegment>  
                <TimerSegment>
                    <Time>{minuets.toString().slice(0)}</Time>
                    <Label>Minuets</Label>  
            </TimerSegment>  
                <TimerSegment>
                    <Time>{sec.toString().slice(0)}</Time>
                    <Label>Seconds</Label>
                </TimerSegment>
                </TimerInner>
            </TimerWrapper>
            </FrameCountdown>
    </Container>   
             );      
          };


export default Countdown 


