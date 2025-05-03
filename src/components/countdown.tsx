'use client';

import useCountdown from '@/hooks/useCountdown';

export default function Countdown() {
    const timeLeft = useCountdown(new Date('2025-05-04T12:00:00+07:00'));

    return (
        <p className='font-bold text-xl'>
            We'll start in :{' '}
            <span className='text-[#FFB41E]'>
                {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{' '}
                {timeLeft.seconds}s
            </span>
        </p>
    );
}
