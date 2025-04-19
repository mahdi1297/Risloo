import { fetchCenters } from '@/services/fetchCenters'
import { CounselingCenter } from '@/types/CounselingCenter'
import HomeView from '@/view/Home/Home'

import { limitData } from '@/utils/limitData'

import { environments } from '@/constants/enviroments'

import styles from './page.module.css'

export const metadata = {
  title: environments.SITE_TITLE,
  description: environments.SITE_DESCRIPTION,
  keywords: environments.SITE_KEYWORDS,
  openGraph: {
    title: environments.OPEN_GRAPH_TITLE,
    description: environments.OPEN_GRAPH_DESCRIPTION,
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: environments.SITE_NAME,
    locale: environments.OPEN_GRAPH_LOCALE,
    type: environments.OPEN_GRAPH_TYPE,
  },
  twitter: {
    card: environments.TWITTER_CARD,
    title: environments.TWITTER_TITLE,
    description: environments.TWITTER_DESCRIPTION,
  },
}

export async function getAndManipulateCenters() {
  const response = await fetchCenters()

  if (response.error) {
    return { data: null, error: response.error }
  }

  const limitedData = limitData<CounselingCenter>(response.data, 10)
  return { data: limitedData, error: null }
}

export default async function Home() {
  const { data, error } = await getAndManipulateCenters()

  if (error) {
    return <div className="text-red-500 p-4">{error.message}</div>
  }

  return (
    <div className={styles.page}>
      <HomeView data={data} />
    </div>
  )
}
