import type { News } from '@/types/news'

export const newsService = () => {
  const supabase = useSupabaseClient()

  /**
   * Homepage - 3 berita terbaru
   */
  const getLatestNews = async (): Promise<News[]> => {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(3)

    if (error) {
      console.error('getLatestNews error:', error.message)
      return []
    }

    return data ?? []
  }

  /**
   * Pagination
   */
  const getNewsPaginated = async (page: number, limit = 6) => {
    const from = (page - 1) * limit
    const to = from + limit - 1

    const { data, error, count } = await supabase
      .from('news')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(from, to)

    if (error) {
      console.error('getNewsPaginated error:', error.message)
      return { data: [], total: 0 }
    }

    return {
      data: data ?? [],
      total: count ?? 0
    }
  }

  /**
   * Detail
   */
  const getNewsBySlug = async (slug: string): Promise<News | null> => {
    const { data, error } = await supabase.from('news').select('*').eq('slug', slug).single()

    if (error) {
      console.error('getNewsBySlug error:', error.message)
      return null
    }

    return data
  }

  return {
    getLatestNews,
    getNewsPaginated,
    getNewsBySlug
  }
}
