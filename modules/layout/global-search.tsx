'use client';

import { startTransition, useDeferredValue, useState } from 'react';
import type { FormEvent } from 'react';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function GlobalSearch({ placeholder = 'Search Austin, listings, or agents' }: { placeholder?: string }) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    startTransition(() => {
      router.push(`/properties?location=${encodeURIComponent(deferredQuery.trim())}`);
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="hidden flex-1 items-center gap-3 rounded-full border border-stroke/70 bg-surface/90 px-4 py-3 shadow-soft lg:flex"
    >
      <Search className="h-4 w-4 text-muted" />
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
        placeholder={placeholder}
      />
    </form>
  );
}
