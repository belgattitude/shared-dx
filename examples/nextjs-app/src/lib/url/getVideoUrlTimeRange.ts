import { stringToFloat } from '@/lib/convert';

type VideoUrlTimeRange = {
  end: number | null;
  start: number;
};
export const getVideoUrlTimeRange = (url: string): VideoUrlTimeRange => {
  const parsedUrl: { hash: string } = { hash: '' };
  try {
    parsedUrl.hash = new URL(url).hash ?? '';
  } catch (e) {
    /* empty */
  }
  const parsed = parsedUrl.hash.match(
    /t=(?<parsedStart>([^,]+))(,(?<parsedEnd>(.+)))?/
  );
  const { parsedStart, parsedEnd } = parsed?.groups ?? {};
  const end = stringToFloat(parsedEnd) ?? null;
  return {
    start: stringToFloat(parsedStart) ?? 0,
    end: end,
  };
};
