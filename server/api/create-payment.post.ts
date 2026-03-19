import midtransClient from 'midtrans-client'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY
  })

  const orderId = 'ORDER-' + Date.now()

  const transaction = await snap.createTransaction({
    transaction_details: {
      order_id: orderId,
      gross_amount: 10000 // harga token
    },
    customer_details: {
      email: body.email
    }
  })

  return {
    token: transaction.token
  }
})
