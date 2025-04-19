import { FetchResult } from '@/types/FetchResult'

import { logError } from '@/utils/serverLogger'

import { configs } from '@/constants/configs'
import { environments } from '@/constants/enviroments'
import { ERROR_FA_FAILED_TO_GET_CENTER, ERROR_FA_FAILED_TO_GET_DATA } from '@/constants/messages'

const URL = environments.RISLOO_CENTER_URI

export async function fetchCenters(): Promise<FetchResult> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${URL}`, {
      ...configs.SSR_REQUEST_CONFIG,
    })

    if (!res.ok) {
      logError(JSON.stringify(res), ERROR_FA_FAILED_TO_GET_CENTER)
      return { data: null, error: { message: ERROR_FA_FAILED_TO_GET_DATA } }
    }

    const json = await res.json()
    return { data: json, error: null }
  } catch (err) {
    logError(err, ERROR_FA_FAILED_TO_GET_CENTER)
    return { data: null, error: { message: ERROR_FA_FAILED_TO_GET_DATA } }
  }
}
