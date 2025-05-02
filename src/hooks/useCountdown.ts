import { useEffect, useState } from 'react';

type CountdownTimeLeft = {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
};

export default function useCountdown(deadline: Date) {
    const [timeLeft, setTimeLeft] = useState<CountdownTimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    function calculateTimeLeft(): CountdownTimeLeft {
        let timeLeft: CountdownTimeLeft = {};
        let currentDate = new Date();
        let difference = deadline.getTime() - currentDate.getTime();

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    }

    return timeLeft;
}
