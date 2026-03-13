import { Bed, Bath, Square, MapPin, Tag, Check } from 'lucide-react';
import { formatPrice } from '@/lib/utils';
import type { Property } from '@/lib/types';

interface PropertyDetailsProps {
  property: Property;
}

export function PropertyDetails({ property }: PropertyDetailsProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Tag className="w-5 h-5 text-accent" />
            <span className="px-3 py-1 bg-accent/20 text-accent text-sm font-semibold rounded-md">
              {property?.transactionType ?? ''}
            </span>
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-md">
              {property?.propertyType ?? ''}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">
            {property?.title ?? ''}
          </h1>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin size={18} className="text-accent" />
            <span>
              {property?.address ?? ''}, {property?.city ?? ''}, {property?.state ?? ''} {property?.zipCode ?? ''}
            </span>
          </div>
        </div>

        <div className="text-4xl font-bold text-accent mb-6">
          {formatPrice(property?.price ?? 0)}
        </div>

        <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-gray-200">
          {property?.bedrooms != null && (
            <div className="text-center">
              <Bed className="w-6 h-6 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">{property?.bedrooms ?? 0}</div>
              <div className="text-sm text-gray-600">Bedrooms</div>
            </div>
          )}
          {property?.bathrooms != null && (
            <div className="text-center">
              <Bath className="w-6 h-6 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">{property?.bathrooms ?? 0}</div>
              <div className="text-sm text-gray-600">Bathrooms</div>
            </div>
          )}
          <div className="text-center">
            <Square className="w-6 h-6 text-accent mx-auto mb-2" />
            <div className="text-2xl font-bold text-primary">
              {property?.squareFootage?.toLocaleString?.() ?? 0}
            </div>
            <div className="text-sm text-gray-600">Sq Ft</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-serif font-bold text-primary mb-4">Description</h2>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">{property?.description ?? ''}</p>
      </div>

      {(property?.amenities?.length ?? 0) > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">Amenities</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {property?.amenities?.map?.((amenity) => (
              <div key={amenity} className="flex items-center gap-2">
                <Check className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-gray-700">{amenity}</span>
              </div>
            )) ?? []}
          </div>
        </div>
      )}
    </div>
  );
}
