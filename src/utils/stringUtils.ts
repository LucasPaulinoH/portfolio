export const shortenLargeTexts = (text: string, limitIndex: number): string => {
  let shortVersion = text;

  if (text.length > limitIndex)
    shortVersion = text.substring(0, limitIndex) + "...";

  return shortVersion;
};

