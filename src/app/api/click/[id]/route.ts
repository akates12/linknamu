import { NextResponse } from "next/server";
import { links } from "@/data/profile";
import { getClicksCollection } from "@/lib/mongodb";

export async function POST(_req: Request, { params }: { params: { id: string } }) {
  // 등록된 링크만 집계해 임의의 id가 쌓이지 않게 한다
  if (!links.some((link) => link.id === params.id)) {
    return NextResponse.json({ error: "unknown link" }, { status: 404 });
  }

  const clicks = await getClicksCollection();
  if (!clicks) {
    return NextResponse.json({ error: "MONGODB_URI is not set" }, { status: 503 });
  }

  await clicks.updateOne({ _id: params.id }, { $inc: { count: 1 } }, { upsert: true });
  return NextResponse.json({ ok: true });
}
