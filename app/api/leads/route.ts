import { NextResponse } from 'next/server';
import { leadCaptureSchema } from '@/lib/schemas';

export async function POST(request: Request) {
  const payload = await request.json();
  const result = leadCaptureSchema.safeParse(payload);

  if (!result.success) {
    return NextResponse.json(
      {
        ok: false,
        errors: result.error.flatten(),
      },
      { status: 400 },
    );
  }

  return NextResponse.json({
    ok: true,
    leadId: `lead_${Date.now()}`,
    submittedAt: new Date().toISOString(),
    data: result.data,
  });
}
