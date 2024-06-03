import ImageKit from 'imagekit';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const imagekit = new ImageKit({
  urlEndpoint: process.env.NEXT_PUBLIC_IMAGE_KIT_URL!,
  publicKey: process.env.NEXT_PUBLIC_IMAGE_KIT_KEY!,
  privateKey: process.env.IMAGE_KIT_PVT_KEY!
});

export async function GET() {
  const result = await imagekit.getAuthenticationParameters();
  if (result) {
    return NextResponse.json(result);
  } else {
    return NextResponse.json({
      error: 'An error occurred while fetching authentication parameters.'
    });
  }
}
