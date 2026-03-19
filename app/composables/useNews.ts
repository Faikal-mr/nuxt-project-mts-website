import type { News } from '@/types/news'
import { newsService } from '@/services/news/newsService'

export const useNews = () => {
  const { getLatestNews } = newsService()

  const { data, pending, error } = useAsyncData<News[]>(
    'latest-news',
    async () => {
      return await getLatestNews()
    },
    {
      default: () => [] // 🔥 penting biar tidak null
    }
  )

  return {
    news: data, // ✅ tetap ref (ini best practice Nuxt)
    loading: pending,
    error
  }
}
