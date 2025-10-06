import { DateTime } from 'luxon';

export function formatDate(date: string, format?: string) {
  if (format) {
    return DateTime.fromISO(date).toFormat(format);
  }
  return DateTime.fromISO(date).toFormat('dd LLL yyyy');
}

export function dateRelativity(date: string) {
  return DateTime.fromISO(date).toRelative();
}
