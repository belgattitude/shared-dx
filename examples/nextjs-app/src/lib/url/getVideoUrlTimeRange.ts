import { stringToFloat } from '@/lib/convert';

type VideoUrlTimeRange = {
  end: number | undefined;
  start: number;
};
export const getVideoUrlTimeRange = (url: string): VideoUrlTimeRange => {
  const parsedUrl: { hash: string } = { hash: '' };
  try {
    parsedUrl.hash = new URL(url).hash ?? '';
  } catch {}
  const parsed = parsedUrl.hash.match(
    // eslint-disable-next-line regexp/no-unused-capturing-group
    /t=(?<parsedStart>\d{1,9}\.?\d{1,4})(,(?<parsedEnd>\d{1,9}\.?\d{1,4}))?/
  );
  const { parsedStart, parsedEnd } = parsed?.groups ?? {};
  const end = stringToFloat(parsedEnd) ?? undefined;
  return {
    start: stringToFloat(parsedStart) ?? 0,
    end: end,
  };
};
