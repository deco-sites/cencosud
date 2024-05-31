import { useEffect, useState } from "preact/compat";

interface AnimatedNumberProps {
    value?: number;
    duration?: number;
}


interface ContentProps {
    symbol?: string;
    number?: number;
    last?: string;
    text?: string;
}

export interface Props {
    ContentProps: ContentProps[];
}

function AnimatedNumber({ value, duration = 3000 }: AnimatedNumberProps) {
    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
        if (typeof value !== 'number' || isNaN(value)) return;
        const start = 0;
        const end = value;
        if (start === end) return;

        const range = end - start;
        const increment = end > start ? 1 : -1;
        const incrementTime = duration / Math.abs(range); // calculates the time for each increment

        const timer = setInterval(() => {
            setCurrentValue(prev => {
                const nextValue = prev + increment;
                if (nextValue === end) {
                    clearInterval(timer);
                }
                return nextValue;
            });
        }, incrementTime);

        return () => clearInterval(timer);
    }, [value, duration]);

    return <span className="font-montserrat number">{currentValue}</span>;
}

function Information({ ContentProps }: Props) {
    const animationDuration = 3000;

    return (
        <div class="pt-[50px] bg-base-300">
            <div class="px-[33px] mx-auto max-w-[550px] footer-container">
                <div class="w-full">
                    <div class="flex items-start flex-wrap w-full">
                        {ContentProps.map((content) => (
                            <div class="w-[50%] lg:w-[25%]">
                                <div class="mb-[20px] md:mb-[40px] md:mx-[12px] text-center">
                                    <div class="text-info-content font-semibold text-[60px] leading-[60px]">
                                        {content.symbol && <span class="text-[70%] leading-[100%] font-opensans">{content.symbol}</span>}
                                        {content.number !== undefined && <AnimatedNumber value={content.number} duration={animationDuration} />}
                                        {content.last && <span class="text-[70%] leading-[100%] font-opensans">{content.last}</span>}
                                    </div>
                                    {content.text && <h3 class="text-secondary text-[18px] font-montserrat font-semibold">{content.text}</h3>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information