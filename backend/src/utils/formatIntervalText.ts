export const formatIntervalText = (interval: string) => {
  if (interval === "MONTH") return interval;
  if (interval === "YEAR") return "ANNUAL";
};
