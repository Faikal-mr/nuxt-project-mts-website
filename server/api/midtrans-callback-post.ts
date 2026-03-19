import midtransClient from 'midtrans-client'
import { createClient } from '@supabase/supabase-js'
import nodemailer from 'nodemailer'
import crypto from 'crypto'

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE!)

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY
  })

  const status = await snap.transaction.notification(body)

  const orderId = status.order_id
  const transactionStatus = status.transaction_status
  const email = status.customer_details?.email

  // ✅ hanya jika sukses
  if (transactionStatus === 'settlement') {
    // 🔥 generate token unik
    const token = crypto.randomBytes(4).toString('hex').toUpperCase()

    // simpan ke supabase
    await supabase.from('tokens').insert({
      code: token,
      email,
      status: 'unused'
    })

    // 🔥 kirim email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    await transporter.sendMail({
      from: '"Admin" <admin@email.com>',
      to: email,
      subject: 'Token Akses Formulir',
      html: `
        <h2>Token Anda</h2>
        <p>${token}</p>
        <p>Gunakan token ini untuk membuka formulir.</p>
      `
    })
  }

  return { success: true }
})
