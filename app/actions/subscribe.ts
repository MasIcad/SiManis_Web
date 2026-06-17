'use server'

import { supabase } from '@/lib/supabase'

export async function subscribeToWaitingList(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const interest = formData.get('interest') as string

  // Validasi input
  if (!name || !email || !interest) {
    return { error: 'Semua field harus diisi' }
  }

  // Validasi email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { error: 'Format email tidak valid' }
  }

  try {
    // Cek apakah email sudah terdaftar
    const { data: existingUser, error: checkError } = await supabase
      .from('waiting_list')
      .select('email')
      .eq('email', email)
      .single()

    if (existingUser) {
      return { error: 'Email sudah terdaftar di waiting list' }
    }

    // Insert data ke Supabase
    const { data, error } = await supabase
      .from('waiting_list')
      .insert([
        {
          name: name,
          email: email,
          interest: interest,
          created_at: new Date().toISOString(),
        },
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return { error: 'Gagal mendaftar. Silakan coba lagi.' }
    }

    return { success: true, data: data }
  } catch (error) {
    console.error('Server error:', error)
    return { error: 'Terjadi kesalahan pada server' }
  }
}