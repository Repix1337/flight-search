// app/api/searchFlights/route.ts
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const arrival = searchParams.get('arrival');
    const departure = searchParams.get('departure');
    const departureDate = searchParams.get('departureDate');
    const arrivalDate = searchParams.get('arrivalDate');

    if (!arrival || !departure || !departureDate || !arrivalDate) {
        return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
    }

    try {
        const serpApiUrl = new URL('https://serpapi.com/search.json');
        serpApiUrl.searchParams.append('engine', 'google_flights');
        serpApiUrl.searchParams.append('departure_id', departure);
        serpApiUrl.searchParams.append('arrival_id', arrival);
        serpApiUrl.searchParams.append('outbound_date', departureDate);
        serpApiUrl.searchParams.append('return_date', arrivalDate);
        serpApiUrl.searchParams.append('api_key', process.env.SERPAPI_KEY || '');

        const response = await fetch(serpApiUrl.toString());
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`HTTP error! status: ${response.status}, details: ${errorData.error}`);
        }
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json({ error: 'Failed to fetch flight data', details: message }, { status: 500 });
    }
}
