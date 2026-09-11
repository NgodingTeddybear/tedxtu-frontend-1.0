import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function GET() {
  // Tiket dihitung "terjual" jika sudah ada bukti pembayaran (proofUrl),
  // bukan lagi berdasarkan status CONFIRMED.
  const confirmedByTier = await prisma.ticket.groupBy({
    by: ["tier"],
    where: { proofUrl: { not: null } },
    _count: { tier: true },
  });

  const soldByTier: Record<string, number> = {};
  for (const row of confirmedByTier) {
    soldByTier[row.tier] = row._count.tier;
  }

  return NextResponse.json({ confirmed: soldByTier });
}
