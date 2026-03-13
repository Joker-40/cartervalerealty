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
      <div className="relative h-14 w-14">
        <Image src="/favicon.svg" alt={BRAND.name} fill className="object-contain" sizes="56px" priority />
      </div>
      <div className={cn('flex flex-col', compact && 'hidden sm:flex')}>
        <span className={cn('text-lg font-semibold', inverse ? 'text-white' : 'text-primary')}>{BRAND.name}</span>
        <span className={cn('text-xs uppercase tracking-[0.18em]', inverse ? 'text-white/80' : 'text-muted')}>{BRAND.tagline}</span>
      </div>
    </Link>
  );
}
