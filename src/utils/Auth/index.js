import { supabase } from '../SupabaseClient'

async function signInWithGoogle () {
  await supabase.auth.signIn({
    provider: 'google'
  })
}

async function signout () {
  await supabase.auth.signOut()
}

const getSession = async () => {
  const user = await supabase.auth.user()
  const session = await supabase.auth.session()
  return [user, session]
}

export { signInWithGoogle, signout, getSession }
