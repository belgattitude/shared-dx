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
  const parsed =
    // eslint-disable-next-line regexp/no-unused-capturing-group
    /t=(?<parsedStart>\d{1,9}\.?\d{1,4})(,(?<parsedEnd>\d{1,9}\.?\d{1,4}))?/.exec(
      parsedUrl.hash
    );
  const end = stringToFloat(parsed?.groups?.parsedEnd) ?? undefined;
  return {
    start: stringToFloat(parsed?.groups?.parsedStart) ?? 0,
    end: end,
  };
};
