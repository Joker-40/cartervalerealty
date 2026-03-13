'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import { LEAD_CATEGORIES } from '@/lib/constants';

interface LeadFormProps {
  propertyId?: string;
  propertyTitle?: string;
}

export function LeadForm({ propertyId, propertyTitle }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    leadCategory: 'Schedule Property Visit',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e?.target?.name ?? '']: e?.target?.value ?? '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault?.();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          propertyId: propertyId ?? null,
          propertyTitle: propertyTitle ?? null,
        }),
      });

      const result = await response.json();

      if (!response?.ok) {
        throw new Error(result?.message ?? 'Failed to submit inquiry');
      }

      setMessage({ type: 'success', text: 'Thank you! We will contact you soon.' });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        leadCategory: 'Schedule Property Visit',
      });
    } catch (error: any) {
      setMessage({ type: 'error', text: error?.message ?? 'Failed to submit. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-serif font-bold text-primary mb-4">
        {propertyId ? 'Schedule a Visit' : 'Contact Us'}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
          <input
            type="text"
            name="name"
            value={formData?.name ?? ''}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
          <input
            type="email"
            name="email"
            value={formData?.email ?? ''}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData?.phone ?? ''}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Inquiry Type *</label>
          <select
            name="leadCategory"
            value={formData?.leadCategory ?? ''}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
          >
            {LEAD_CATEGORIES?.map?.((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            )) ?? []}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
          <textarea
            name="message"
            value={formData?.message ?? ''}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
          />
        </div>

        {message && (
          <div
            className={`p-3 rounded-md text-sm ${
              message?.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}
          >
            {message?.text ?? ''}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent text-primary font-semibold rounded-md hover:bg-accent/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send size={18} />
          {isSubmitting ? 'Sending...' : 'Send Inquiry'}
        </button>
      </form>
    </div>
  );
}
