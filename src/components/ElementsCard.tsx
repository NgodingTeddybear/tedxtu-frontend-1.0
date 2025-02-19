import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const cardVariants = cva(
    'relative transition-all hover:brightness-110 border-4 border-transparent bg-clip-padding',
    {
        variants: {
            variant: {
                red: "bg-[url('/card/red-theme.png')] bg-cover text-white rounded-0 [border-image:linear-gradient(to_right,#2E2E2E,#8E8E8E)_1]",
                black: "bg-[url('/card/black-theme.png')] bg-cover text-white [border-image:linear-gradient(to_right,#951900,#CE2406)_1]",
            },
            size: {
                default: 'w-full p-6',
                lg: 'w-full p-8',
                sm: 'w-full p-4',
            },
        },
        defaultVariants: {
            variant: 'red',
            size: 'default',
        },
    },
);

const titleVariants = cva('font-bold tracking-tight', {
    variants: {
        size: {
            default: 'text-2xl md:text-3xl lg:text-4xl',
            lg: 'text-3xl md:text-4xl lg:text-5xl',
            sm: 'text-xl md:text-2xl lg:text-3xl',
        },
    },
    defaultVariants: {
        size: 'default',
    },
});

const contentVariants = cva('text-muted-foreground', {
    variants: {
        size: {
            default: 'text-base md:text-lg',
            lg: 'text-lg md:text-xl',
            sm: 'text-sm md:text-base',
        },
    },
    defaultVariants: {
        size: 'default',
    },
});

export interface CardProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof cardVariants> {
    title: string;
    content: string;
}

const ElementsCard = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant, size, title, content, ...props }, ref) => {
        return (
            <Card
                ref={ref}
                className={cn(
                    'rounded-none min-h-[200px] flex items-center',
                    cardVariants({ variant, size, className }),
                )}
                {...props}
            >
                <div className='flex flex-row items-center justify-between w-full'>
                    {variant === 'red' ? (
                        <>
                            <div className='w-1/3 pl-6 flex items-center'>
                                <CardHeader className='p-0'>
                                    <CardTitle
                                        className={cn(titleVariants({ size }))}
                                    >
                                        {title}
                                    </CardTitle>
                                </CardHeader>
                            </div>
                            <CardContent
                                className={cn(
                                    'w-2/3 !text-white !text-2xl font-[family-name:var(--font-raleway)] p-6 flex items-center',
                                    contentVariants({ size }),
                                )}
                            >
                                {content}
                            </CardContent>
                        </>
                    ) : (
                        <>
                            <CardContent
                                className={cn(
                                    'w-2/3 !text-white !text-2xl font-[family-name:var(--font-raleway)] p-6 flex items-center',
                                    contentVariants({ size }),
                                )}
                            >
                                {content}
                            </CardContent>
                            <div className='w-1/3 pr-10'>
                                <CardHeader className='p-0'>
                                    <CardTitle
                                        className={cn(
                                            'text-right',
                                            titleVariants({ size }),
                                        )}
                                    >
                                        {title}
                                    </CardTitle>
                                </CardHeader>
                            </div>
                        </>
                    )}
                </div>
            </Card>
        );
    },
);
ElementsCard.displayName = 'ElementsCard';

export { ElementsCard, cardVariants };
