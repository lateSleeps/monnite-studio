import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon, PlusIcon } from 'lucide-react';

type ContactInfoProps = React.ComponentProps<'div'> & {
  icon: LucideIcon;
  label: string;
  value: string;
};

type ContactCardProps = React.ComponentProps<'div'> & {
  title?: string;
  description?: string;
  contactInfo?: ContactInfoProps[];
  formSectionClassName?: string;
};

export function ContactCard({
  title = 'Contact With Us',
  description = 'If you have any questions regarding our Services or need help, please fill out the form here.',
  contactInfo,
  className,
  formSectionClassName,
  children,
  ...props
}: ContactCardProps) {
  return (
    <div
      className={cn(
        'bg-card border border-border relative grid h-full w-full shadow-2xl md:grid-cols-2 lg:grid-cols-3 rounded-[4px] overflow-hidden',
        className,
      )}
      {...props}
    >
      <PlusIcon className="absolute -top-3 -left-3 h-6 w-6 text-white/40" />
      <PlusIcon className="absolute -top-3 -right-3 h-6 w-6 text-white/40" />
      <PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 text-white/40" />
      <PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6 text-white/40" />

      <div className="flex flex-col justify-between lg:col-span-2">
        <div className="relative h-full space-y-6 px-8 py-10 md:p-10">
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl text-foreground leading-tight">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-xl text-sm md:text-base leading-relaxed">
            {description}
          </p>
          {contactInfo && contactInfo.length > 0 && (
            <div className="flex flex-col pt-4">
              {contactInfo.map((info, index) => (
                <ContactInfo key={index} {...info} />
              ))}
            </div>
          )}
        </div>
      </div>

      <div
        className={cn(
          'bg-muted/40 flex h-full w-full items-center border-t border-border p-6 md:p-8 md:col-span-1 md:border-t-0 md:border-l',
          formSectionClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}

function ContactInfo({ icon: Icon, label, value, className, ...props }: ContactInfoProps) {
  return (
    <div className={cn('flex items-center gap-3 py-3', className)} {...props}>
      <div className="bg-muted rounded-[4px] p-2.5 shrink-0">
        <Icon className="h-4 w-4 text-foreground" />
      </div>
      <div>
        <p className="text-sm font-medium text-foreground">{label}</p>
        <p className="text-muted-foreground text-xs">{value}</p>
      </div>
    </div>
  );
}
