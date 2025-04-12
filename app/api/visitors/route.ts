import { NextResponse } from 'next/server'
import { BetaAnalyticsDataClient } from '@google-analytics/data'

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: process.env.GA_CLIENT_EMAIL,
    private_key: process.env.GA_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
})

export async function GET() {
  try {
    const [response] = await analyticsDataClient.runReport({
      property: process.env.GA_PROPERTY_ID!, 
      dateRanges: [{ startDate: '2025-04-12', endDate: 'today' }],
      metrics: [{ name: 'activeUsers' }],
    })

    const visitors = response?.rows?.[0]?.metricValues?.[0]?.value ?? '0'
    return NextResponse.json({ visitors })
  } catch (error) {
    console.error('GA API 오류:', error)
    return NextResponse.json({ visitors: '오류' }, { status: 500 })
  }
}
