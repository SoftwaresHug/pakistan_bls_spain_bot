// Auto-generated configuration for BLS Spain Pakistan AutoBot

export const config = {
  botName: "BLS Spain Pakistan",
  country: "Pakistan",
  provider: "BLS International",
  destination: "Spain",
  loginUrl: "https://thespainvisa.com/account/login",
  centers: [
  "Islamabad",
  "Lahore",
  "Karachi"
],
  visaCategories: [
  "Tourist",
  "Business",
  "Family/Friends",
  "Cultural/Sports",
  "Official",
  "Medical",
  "Study",
  "Transit",
  "Seafarers",
  "National/Work"
],
  defaultPolling: {
    minIntervalSeconds: 30,
    maxIntervalSeconds: 60,
  },
  alerts: {
    telegram: {
      supportUser: "iqrouter",
    },
    whatsapp: {
      supportNumber: "+201200655872",
    },
  },
} as const;

export type RouteConfig = typeof config;
