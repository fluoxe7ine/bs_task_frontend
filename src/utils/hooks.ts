import { useEffect, useState } from 'react';
import { ResizeProvider, Resolution } from './ResizeProvider';

export const useShortDescription = (text: string, limit: number) => (text.length >= limit ? `${text.slice(0, limit)}...` : text);

export const useReadableDate = (date: Date) => {
  if (!date) {
    return '';
  }

  const options = { month: 'long' };

  return `${date.getDate()} ${new Intl.DateTimeFormat('en-US', options).format(date)}`;
};

export const useResolution = () => {
  const [resolution, setResolution] = useState<Resolution>({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    ResizeProvider
      .getInstance()
      .addListener(setResolution);
  }, []);

  return resolution;
};
