import connectDB from "@/lib/mongodb";
import { Lead } from "@/models/leads";
import { NextRequest, NextResponse } from "next/server";

connectDB;

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, email, phone, company, service, message } = reqBody;
    const lead = await Lead.create({
      name,
      email,
      phone,
      company,
      service,
      message,
    });
    return NextResponse.json(
      { message: "Lead created successfully" },
      { status: 201 },
    );
  } catch (err : any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
