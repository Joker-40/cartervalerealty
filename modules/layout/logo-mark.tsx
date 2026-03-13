import Image from 'next/image';
import Link from 'next/link';
import { BRAND } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface LogoMarkProps {
  compact?: boolean;
  href?: string;
  inverse?: boolean;
}

export function LogoMark({ compact = false, href = '/', inverse = false }: LogoMarkProps) {
  return (
    <Link href={href} className="flex items-center gap-3">
      <div
        className={cn(
          'relative h-11 w-11 overflow-hidden rounded-2xl border shadow-soft',
          inverse ? 'border-white/12 bg-white/10' : 'border-stroke/70 bg-white',
        )}
      >
        <Image src="/logo.png" alt={BRAND.name} fill className="object-contain p-1.5" sizes="44px" priority />
      </div>
      <div className={cn('flex flex-col', compact && 'hidden sm:flex')}>
        <span className={cn('font-serif text-lg font-semibold', inverse ? 'text-white' : 'text-primary')}>{BRAND.name}</span>
        <span className={cn('text-xs uppercase tracking-[0.18em]', inverse ? 'text-white/62' : 'text-muted')}>{BRAND.tagline}</span>
      </div>
    </Link>
  );
}
