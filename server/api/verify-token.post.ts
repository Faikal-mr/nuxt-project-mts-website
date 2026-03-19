import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE!)

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { token } = body

  const { data } = await supabase
    .from('tokens')
    .select('*')
    .eq('code', token)
    .eq('status', 'unused')
    .single()

  if (!data) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Token tidak valid / sudah digunakan'
    })
  }

  // 🔥 langsung pakai (ONE TIME USE)
  await supabase
    .from('tokens')
    .update({
      status: 'used',
      used_at: new Date()
    })
    .eq('code', token)

  return { success: true }
})
