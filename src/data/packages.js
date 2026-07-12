/* Shared pricing data for the /start landing page — used by both
   the pricing/offer section (StartPage.jsx) and the survey's
   result-screen recommendation card (StartSurvey.jsx), so both
   always show the exact same card for a given tier, in either
   language. */

export const packages = {
  sr: [
    {
      name: "Starter",
      price: "4.999 RSD",
      period: "/mesečno",
      features: ["Na 2 nedelje", "2 čišćenja mesečno"],
    },
    {
      name: "Standard",
      price: "5.999 RSD",
      period: "/mesečno",
      features: ["Nedeljno", "4 čišćenja mesečno", "40% jeftinije po poseti"],
    },
    {
      name: "Premium",
      price: "9.999 RSD",
      period: "/mesečno",
      features: ["2x nedeljno", "8 čišćenja mesečno"],
    },
  ],
  en: [
    {
      name: "Starter",
      price: "4,999 RSD",
      period: "/month",
      features: ["Every 2 weeks", "2 cleanings per month"],
    },
    {
      name: "Standard",
      price: "5,999 RSD",
      period: "/month",
      features: ["Weekly", "4 cleanings per month", "40% cheaper per visit"],
    },
    {
      name: "Premium",
      price: "9,999 RSD",
      period: "/month",
      features: ["Twice weekly", "8 cleanings per month"],
    },
  ],
};
