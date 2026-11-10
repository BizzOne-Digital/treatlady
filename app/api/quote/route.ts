import { NextResponse } from "next/server";
import { quoteSchema } from "@/lib/validation";
import { sendQuoteEmail } from "@/lib/email";

export async function POST(req: Request) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  const parsed = quoteSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Please check the highlighted fields.", errors: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  try {
    await sendQuoteEmail(parsed.data);
    return NextResponse.json({ ok: true, message: "Thank you! Your quote request has been received." });
  } catch (e) {
    console.error("[quote] send failed", e);
    return NextResponse.json(
      { ok: false, message: "Something went wrong. Please call us or try again." },
      { status: 500 },
    );
  }
}
