import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const currency = searchParams.get('currency');

    if (!currency) {
        return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
    }

    try {
        const exchangeRateApiUrl = new URL(`https://v6.exchangerate-api.com/v6/${process.env.EXCHANGE_KEY}/latest/USD`);

        const response = await fetch(exchangeRateApiUrl.toString());
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`HTTP error! status: ${response.status}, details: ${errorData.error}`);
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json({ error: 'Failed to fetch exchange rate data', details: message }, { status: 500 });
    }
}
