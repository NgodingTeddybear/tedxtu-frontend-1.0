'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { Plus, Minus } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { gsap } from 'gsap';

interface ImageAccordionProps {
  title: string;
  children: React.ReactNode;
  closedHeaderImage: string;
  openHeaderImage: string;
  contentImage: string;
  className?: string;
}

const ImageAccordion = ({
  title,
  children,
  closedHeaderImage,
  openHeaderImage,
  contentImage,
  className,
}: ImageAccordionProps) => {
  const [open, setOpen] = React.useState(false);
  const [imageWidth, setImageWidth] = React.useState(0);
  const imageRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const iconRef = React.useRef<HTMLDivElement>(null);
  const headerImageRef = React.useRef<HTMLDivElement>(null);

  // Track image width to make content the same width
  React.useEffect(() => {
    if (imageRef.current) {
      const updateWidth = () => {
        if (imageRef.current) {
          setImageWidth(imageRef.current.offsetWidth);
        }
      };

      // Set initial width
      updateWidth();

      // Update width on window resize
      window.addEventListener('resize', updateWidth);
      return () => window.removeEventListener('resize', updateWidth);
    }
  }, []);

  // GSAP animations
  React.useEffect(() => {
    if (headerImageRef.current) {
      // Animate header image transition
      if (open) {
        gsap.to(headerImageRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut",
          onComplete: () => {
            if (headerImageRef.current) {
              gsap.fromTo(
                headerImageRef.current,
                { opacity: 0, scale: 0.95 },
                { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
              );
            }
          },
        });
      } else {
        gsap.fromTo(
          headerImageRef.current,
          { opacity: 0, scale: 1.05 },
          { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
        );
      }
    }

    // Animate content appearance/disappearance
    if (contentRef.current) {
      if (open) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", delay: 0.1 }
        );
      } else {
        gsap.to(contentRef.current, {
          opacity: 0,
          y: -30,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    }

    // Animate icon rotation and scale
    if (iconRef.current) {
      if (open) {
        gsap.fromTo(
          iconRef.current,
          { rotation: 0, scale: 0.8 },
          { rotation: 180, scale: 1, duration: 0.4, ease: "power2.out" }
        );
      } else {
        gsap.fromTo(
          iconRef.current,
          { rotation: 180, scale: 1 },
          { rotation: 0, scale: 0.8, duration: 0.4, ease: "power2.out" }
        );
      }
    }
  }, [open]);

  return (
    <AccordionPrimitive.Root
      type="single"
      collapsible
      className={cn('w-full', className)}
      onValueChange={(value) => setOpen(value === 'item-1')}
    >
      <AccordionPrimitive.Item value="item-1" className="relative">
        <AccordionPrimitive.Header className="w-full">
          <AccordionPrimitive.Trigger className="w-full group">
            <div className="relative w-full overflow-hidden" ref={imageRef}>
              {/* Header Image */}
              <div className="relative z-10" ref={headerImageRef}>
                <Image
                  src={open ? openHeaderImage : closedHeaderImage}
                  alt={title}
                  width={1000}
                  height={200}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                  priority
                />
              </div>

              {/* Header Content Overlay */}
              <div className="absolute inset-0 flex items-center justify-between px-20 pointer-events-none">
                <h2 className="text-5xl font-bold text-white uppercase z-50 font-cinzel">
                  {title}
                </h2>

                <div
                  ref={iconRef}
                  className="flex items-center justify-center w-10 h-10 text-5xl rounded-full pointer-events-auto z-50"
                >
                  {open ? (
                    <span className="">⊖</span>
                  ) : (
                    <span className="">⊕</span>
                  )}
                </div>
              </div>
            </div>
          </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>

        {/* Accordion Content - with same width as the image */}
        <AccordionPrimitive.Content
          className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down -mt-52"
          style={{ width: imageWidth > 0 ? `${imageWidth}px` : '100%' }}
        >
          <div className="relative">
            {/* Content Image */}
            <div className="relative">
              <Image
                src={contentImage}
                alt="Content background"
                width={1000}
                height={600}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />




              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 mt-32">
                <div
                  ref={contentRef}
                  className="text-white text-justify font-[family-name:var(--font-raleway)]"
                >
                  {children}
                </div>
              </div>
            </div>
          </div>
        </AccordionPrimitive.Content>
      </AccordionPrimitive.Item>
    </AccordionPrimitive.Root>
  );
};

export { ImageAccordion };
