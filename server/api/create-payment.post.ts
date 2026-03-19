import midtransClient from 'midtrans-client'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    const snap = new midtransClient.Snap({
      isProduction: false,
      serverKey: process.env.MIDTRANS_SERVER_KEY
    })

    console.log('SERVER KEY:', process.env.MIDTRANS_SERVER_KEY)

    const transaction = await snap.createTransaction({
      transaction_details: {
        order_id: 'ORDER-' + Date.now(),
        gross_amount: 10000
      },
      customer_details: {
        email: body.email
      }
    })

    return {
      token: transaction.token
    }
  } catch (error) {
    console.error('MIDTRANS ERROR:', error)

    return {
      error: true,
      message: error.message
    }
  }
})
