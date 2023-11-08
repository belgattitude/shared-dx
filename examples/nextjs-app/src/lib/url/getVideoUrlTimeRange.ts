import { stringToFloat } from '@/lib/convert';

type VideoUrlTimeRange = {
  end: number | null;
  start: number;
};
export const getVideoUrlTimeRange = (url: string): VideoUrlTimeRange => {
  const parsedUrl = new URL(url) ?? { hash: '' };
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
