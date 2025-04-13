import { NextResponse } from 'next/server'
import { BetaAnalyticsDataClient } from '@google-analytics/data'

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: process.env.GA_CLIENT_EMAIL,
    private_key: process.env.GA_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
})

export const runtime = 'nodejs'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const [response] = await analyticsDataClient.runReport({
      property: process.env.GA_PROPERTY_ID!, 
      dateRanges: [{ startDate: '2025-04-12', endDate: 'today' }],
      metrics: [{ name: 'activeUsers' }],
    })

    const visitors = response?.rows?.[0]?.metricValues?.[0]?.value ?? '0'

    return new NextResponse(JSON.stringify({ visitors }), {
      headers: {
        'Cache-Control': 'no-store',
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('GA API 오류:', error)
    return new NextResponse(JSON.stringify({ visitors: '오류' }), {
      status: 500,
      headers: {
        'Cache-Control': 'no-store',
        'Content-Type': 'application/json',
      },
    })
  }
}
