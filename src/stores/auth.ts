import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { supabase } from '@/lib/supabaseClient'
import type { User } from '@supabase/supabase-js'

export const useAuthStore = defineStore('auth', () => {
  
  const user = ref<User | null>(null)


  const authenticated = computed(() => !!user.value)

  const login = async ({ email, password }: { email: string; password: string }): Promise<User> => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
    return data.user
  }

  const logout = async (): Promise<void> => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }

  //get user data from localstorage
  

  return {
    authenticated,
    user,
    login,
    logout
  }
})
