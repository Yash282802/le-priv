import { NextResponse } from 'next/server';

const reservations: any[] = [];

export async function GET() {
  return NextResponse.json(reservations);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, date, time, guests, specialRequests, paymentId } = body;

    if (!name || !email || !phone || !date || !time || !guests) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const reservation = {
      id: `RES${Date.now()}`,
      name,
      email,
      phone,
      date,
      time,
      guests: parseInt(guests),
      specialRequests: specialRequests || '',
      paymentId: paymentId || 'pending',
      status: 'confirmed',
      createdAt: new Date().toISOString(),
    };

    reservations.push(reservation);

    console.log('📋 New Reservation:', reservation);
    console.log('📧 Email would be sent to:', email);
    console.log('📱 SMS would be sent to:', phone);

    return NextResponse.json({
      success: true,
      reservation,
      message: 'Reservation confirmed!',
    });
  } catch (error) {
    console.error('Reservation error:', error);
    return NextResponse.json({ error: 'Failed to create reservation' }, { status: 500 });
  }
}
