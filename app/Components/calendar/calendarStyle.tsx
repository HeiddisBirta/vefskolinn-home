import styled from "styled-components";
import Calendar from 'react-calendar';
import Image from "next/image";

export const StyledCalendar = styled(Calendar)`
     background: rgba(255, 255, 255, 0);
    font-family: Karma;
    color: var(--100-Burgundy, #7C2D38);
    border: none;
    margin: 0 auto;

  //hiding the arrow for display decades on calendar, the left arrow//
  .react-calendar__navigation__prev2-button {
    display: none;
  }
  //hiding the arrow for display decades on calendar, the right arrow//
  .react-calendar__navigation__next2-button {
    display: none;
  }

    // allir dagar í dagatali, aðallitur á font//
    .react-calendar__month-view__days__day {
        font-family: 'Lato', sans-serif;
        color: var(--100-Burgundy, #7C2D38);
        font-size: 16px;
    }
    //dagar sem tilheyra ekki dögum í mánuðinum//
    .react-calendar__month-view__days__day--neighboringMonth{
        font-family: 'Lato', sans-serif;
        color:red;
        color: var(--30-Burgundy, #C4ABB0);
        font-size: 16px;
    }
    //vikudagar//
    .react-calendar__month-view__weekdays__weekday>abbr{
        font-size: 12px;
        text-decoration: none;
    }
  
  .react-calendar__tile--active {
    background: rgba(196, 171, 176, 0.5);
    border-radius: 20px;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: rgba(196, 171, 176, 0.5);
  }

    .react-calendar__year-view__months{
        font-family: 'Lato', sans-serif;
    }

    //Headline of the calendar- months and arrow//
    .react-calendar__navigation__label {
        color: var(--100-Burgundy, #7C2D38); 
        font-size:28px;
        font-weight: 600;
        font-family: Karma;


    }
     //hiding the arrow for display decades on calendar, the left arrow//
     .react-calendar__navigation__prev2-button{
        display:none;

    }
     //hiding the arrow for display decades on calendar, the right arrow//
    .react-calendar__navigation__next2-button{
        display:none;
    }

     //color of the arrow which are displayed//
    .react-calendar__navigation__arrow{
        color: var(--100-Burgundy, #7C2D38);
    }

    .react-calendar__month-view__days__day:nth-child(12) {
        position:relative;
        ::after{
            content:".";
            font-size:35px;
            position: absolute;
            left:40%;
            
        }
    }

    .react-calendar__month-view__days__day:nth-child(16) {
        position:relative;
        ::after{
            content:".";
            font-size:35px;
            position: absolute;
            left:40%;
        }
    }

    .react-calendar__month-view__days__day:nth-child(20) {
        position:relative;
        ::after{
            content:".";
            font-size:35px;
            position: absolute;
            left:40%;
            
        }
    }
    .react-calendar__tile--active{
        background: rgba(196, 171, 176, 0.50);
        border-radius:20px;
    }
    .react-calendar__tile--active:enabled:hover, .react-calendar__tile--active:enabled:focus {
        background: rgba(196, 171, 176, 0.50);
    }

    .react-calendar__tile--now {
        background-color: #faf2f2;
        border-radius:20px;

    }
    .react-calendar__tile--now:enabled:hover,
    .react-calendar__tile--now:enabled:focus {
        background-color: #faf2f2;

        
        
}
.react-calendar__tile:enabled:hover {
       background-color: #C4ABB0;
        border-radius:20px;

}
`

export const ContainerFrame = styled.div `
background: rgba(255, 255, 255, 0.7);   
    width: 503px;
    height: 750px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding:35px;
    border-radius:16px;
    box-shadow: 0px 4px 32px 0px rgba(124, 68, 79, 0.5);

`

export const Headline = styled.div`
  display: flex;
  font-family: Karma;
  font-size: 28px;
  font-weight: 700;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
export const EventWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

//ramminn utan um athugasemdir//
export const EventListContainer = styled.div<{ $inputColor?: string; }>`
    display: flex;
    justify-content: space-between;
    width: 436px;
    height: 91px;
    padding: 20px;
    border: 1px solid #7C444F;
    border-radius: 10px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
    margin: 0 auto;
    background-color: ${props => props.$inputColor || ""};


`
export const EventColumn = styled.div `
    display:flex;
    align-items: center;
    gap:15px;
`
export const EventDay= styled.div `
    color: var(--30-Burgundy, #C4ABB0);font-family: "Chocolate Classical Sans";
    font-size: 16px;
    font-weight: 400;
`
export const EventDate = styled.div`
    color: var(--100-Burgundy, #7C444F);
    font-size: 24px;
    font-weight: 550;
`
export const EventContent = styled.div `
    color: var(--100-Burgundy, #7C444F);
    font-family: Karma;
    font-size: 14px;
    font-weight: 400;
`   
export const EventIcon = styled.div<{ $inputColor?: string;  }> `
    display: flex;
    align-items: center;
    padding:10px;
    border-radius:20px;
    background: rgba(196, 171, 176, 0.50);
    background-color: ${props => props.$inputColor || ""};    



`

export const BellIcon = styled(Image)<{$iconColor?:string;}>`
    background: ${props => props.$iconColor || ""};
`



