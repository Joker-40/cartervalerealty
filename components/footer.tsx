import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { BRAND } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-primary text-white mt-20">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-serif font-bold text-accent mb-4">{BRAND?.name ?? ''}</h3>
            <p className="text-gray-300 mb-4">{BRAND?.tagline ?? ''}</p>
            <p className="text-sm text-gray-400">Established {BRAND?.founded ?? ''}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-accent mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{BRAND?.address ?? ''}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-accent flex-shrink-0" />
                <span className="text-gray-300 text-sm">{BRAND?.phone ?? ''}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-accent flex-shrink-0" />
                <a href={`mailto:${BRAND?.email ?? ''}`} className="text-gray-300 text-sm hover:text-accent transition-colors">
                  {BRAND?.email ?? ''}
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link href="/properties" className="text-gray-300 hover:text-accent transition-colors text-sm">
                Browse Properties
              </Link>
              <Link href="/agents" className="text-gray-300 hover:text-accent transition-colors text-sm">
                Meet Our Agents
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-accent transition-colors text-sm">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date()?.getFullYear?.()} {BRAND?.name ?? ''}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
