export interface BeforeAfterCase {
  id: string;
  title: string;
  beforeImageUrl: string;
  afterImageUrl: string;
}

// Real patient case photos (client-provided, 2026-09-30), shared with patient consent.
// Patients are intentionally not named.
export const beforeAfterCases: BeforeAfterCase[] = [
  {
    id: "case-1",
    title: "Bite & Gap Correction",
    beforeImageUrl: "/images/results/case-1-before.jpg",
    afterImageUrl: "/images/results/case-1-after.jpg",
  },
  {
    id: "case-2",
    title: "Crowded Teeth Alignment",
    beforeImageUrl: "/images/results/case-2-before.jpg",
    afterImageUrl: "/images/results/case-2-after.jpg",
  },
];
