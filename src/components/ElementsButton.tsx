'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
    'inline-flex items-center justify-center font-black transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 relative w-36 sm:w-40 md:w-44',
    {
        variants: {
            variant: {
                red: "bg-[url('/buttons/red-theme.png')] bg-cover text-white hover:brightness-110 border border-4 border-transparent bg-clip-padding [border-image:linear-gradient(to_right,#2E2E2E,#8E8E8E)_1]",
                gold: "bg-[url('/buttons/gold-theme.png')] bg-cover text-black hover:brightness-110 border border-4 border-transparent bg-clip-padding [border-image:linear-gradient(to_right,#951900,#CE2406)_1]",
            },
            size: {
                default: 'h-12 px-8 text-base',
                lg: 'h-14 px-9 text-lg',
                sm: 'h-10 px-6 text-sm',
            },
        },
        defaultVariants: {
            variant: 'red',
            size: 'default',
        },
    },
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

// Base button component
const BaseButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    },
);
BaseButton.displayName = 'BaseButton';

// Responsive wrapper component
export const ElementsButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, ...props }, ref) => {
        const [windowWidth, setWindowWidth] = React.useState(0);

        React.useEffect(() => {
            // Set initial width
            setWindowWidth(window.innerWidth);

            // Update width on resize
            const handleResize = () => {
                setWindowWidth(window.innerWidth);
            };

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        // Determine size based on window width
        const getResponsiveSize = () => {
            if (windowWidth < 640) return 'sm'; // mobile
            if (windowWidth < 1024) return 'default'; // tablet
            return 'lg'; // desktop
        };

        return (
            <BaseButton
                ref={ref}
                variant={variant}
                size={getResponsiveSize()}
                className={className}
                {...props}
            />
        );
    },
);
ElementsButton.displayName = 'ElementsButton';

export { buttonVariants };
