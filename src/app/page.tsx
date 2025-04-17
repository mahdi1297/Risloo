import { limitData } from "@/utils/limitData";
import styles from "./page.module.css";
import { CounselingCenter } from "@/types/CounselingCenter";
import { environments } from "@/constants/enviroments";
import { configs } from "@/constants/configs";
import { ERROR_FA_FAILED_TO_GET_DATA } from "@/constants/messages";
import { logError } from "@/utils/serverLogger";
import HomvePage from "@/pages/Home/Home";

type FetchResult =
  | { data: CounselingCenter[]; error: null }
  | { data: null; error: { message: string } };

const URL = environments.RISLOO_CENTER_URI

async function fetchCenters(): Promise<FetchResult> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${URL}`, {
      ...configs.SSR_REQUEST_CONFIG,
    });

    if (!res.ok) {
      logError(JSON.stringify(res), 'Failed to fetch centers');
      return { data: null, error: { message: ERROR_FA_FAILED_TO_GET_DATA } };
    }

    const json = await res.json();
    const limited = limitData<CounselingCenter>(json, 10);

    return { data: limited, error: null };
  } catch (err) {
    logError(err, 'Failed to fetch centers');
    return { data: null, error: { message: ERROR_FA_FAILED_TO_GET_DATA } };
  }
}

export default async function Home() {
  const { data, error } = await fetchCenters();

  if (error) {
    return <div className="text-red-500 p-4">{error.message}</div>;
  }

  return (
    <div className={styles.page}>
      <HomvePage data={data} />
    </div>
  );
}
