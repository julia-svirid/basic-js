const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const activity = Number(sampleActivity);
  if (activity <= 0 || activity > MODERN_ACTIVITY) return false;
  if (typeof sampleActivity === "undefined" || isNaN(activity) || typeof sampleActivity !== 'string') return false;
  const halfT = 0.693 / HALF_LIFE_PERIOD;
  const res = (Math.log(MODERN_ACTIVITY / sampleActivity)) / halfT;
  return Math.ceil(res);
};
