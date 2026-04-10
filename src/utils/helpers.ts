export const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value))

export const formatRating = (rating: number) => `${rating.toFixed(1)} / 5`
