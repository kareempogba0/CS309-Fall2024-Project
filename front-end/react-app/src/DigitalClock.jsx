import { useState, useEffect } from 'react'

function DigitalClock() {
    const [date, setDate] = useState(new Date());
    
    useEffect(() => {
        const timerID = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(timerID);
    }, []);

    function formatTime(){
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const meridiem = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }

    function padZero(number) {
        return (number < 10 ? '0' : "") + number;
    }

    return (
        <div className='clock-container'>
            <h1>Digital Clock</h1>
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}

export default DigitalClock