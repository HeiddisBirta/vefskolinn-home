"use client"

import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import {
  StyledCalendar,
  Headline,
  EventListContainer,
  EventColumn,
  EventDay,
  EventDate,
  EventContent,
  EventIcon,
  ContainerFrame,
  EventWrapper,
  BellIcon
} from "./calendarStyle";
import Image from "next/image";
import Bell from "/public/Icon.svg";
import DarkBell from "/public/Reminder.svg"

type ValuePiece = Date | null;//

type Value = ValuePiece | [ValuePiece, ValuePiece];//

const CalendarComponent = () => {
  const [value, onChange] = useState<Value>(new Date());

  console.log(value);

  const events = [
    {
      day: "Fri",
      date: "7.",
      content: "10:00 React Native  Lecture",
      image: Bell,
    },
    {
      day: "Tue",
      date: "11.",
      content: "10:00  Atomic Design Lecture",
      image: Bell,
    },
    {
        day: "Sat",
        date: "15.",
        content: "12:00  Weekend Pizza",
        image: Bell,
    }
]

console.log(Number(events[0].date))
    return (

        <ContainerFrame>
            <StyledCalendar onChange={onChange} value={value}/>
                <EventWrapper>
                    <Headline>Events</Headline>
                        {events.map((event)=>{
                            const isToDay=Number(event.date)===(value as Date).getDate()
                             return(
                                <EventListContainer key={event.date} $inputColor={(isToDay&&'rgba(196, 171, 176, 0.25)') as string}>
                                    <EventColumn>
                                        <EventDay>{event.day}</EventDay>
                                            <EventDate>{event.date}</EventDate>
                                                <div style={{borderLeft: '1px solid #C4ABB0', height: '30px',}} ></div>
                                            <EventContent>{event.content}</EventContent>
                                    </EventColumn>
                                        <EventIcon
                                        $inputColor={(isToDay&&'var(--100-Burgundy, #7C2D38);') as string}>
                                            <BellIcon src={isToDay?DarkBell:event.image}
                                                $iconColor={(isToDay&&' #fffff;') as string} alt="icon"  width="24" height="24" />
                                        </EventIcon>

                                </EventListContainer>
                                    )
                                    })}
                 </EventWrapper>
        </ContainerFrame>
    )
}

/*const CalendarComponent

  return (
    <ContainerFrame>
      <StyledCalendar onChange={onChange} value={value} />
      <EventWrapper>
        <Headline>Events</Headline>
        {events.map((event, index) => {
          return (
            <EventListContainer key={index}>
              <EventColumn>
                <EventDay>{event.day}</EventDay>
                <EventDate>{event.date}</EventDate>
                <div
                  style={{ borderLeft: "1px solid #C4ABB0", height: "30px" }}
                ></div>
                <EventContent>{event.content}</EventContent>
              </EventColumn>
              <EventIcon>
                {" "}
                <Image
                  src={event.image}
                  alt="icon"
                  width="24"
                  height="24"
                />{" "}
              </EventIcon>
            </EventListContainer>
          );
        })}
      </EventWrapper>
    </ContainerFrame>
  );
};*/

export default CalendarComponent;
