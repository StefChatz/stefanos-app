const baseUrl = 'https://htb-steam-api.vercel.app/api';

const allAppsUrl = `${baseUrl}/apps`; // (List all available apps)

// eslint-disable-next-line max-len
const selectedAppUrl = (id) => `${baseUrl}/apps?appid=${id}`; // (List detailed information about specified app)

// eslint-disable-next-line max-len
const trendingAppsUrl = `${baseUrl}/apps?tab=new_and_trending`; // (List new and trending apps)

// eslint-disable-next-line max-len
const topSellerAppsUrl = `${baseUrl}/apps?tab=top_sellers`; // (List top seller apps)

// eslint-disable-next-line max-len
const beingPlayedAppsUrl = `${baseUrl}/apps?tab=being_played`; // (List most being played apps)

// eslint-disable-next-line max-len
const upcomingAppsUrl = `${baseUrl}/apps?tab=upcoming`; // (List future release apps)

export {
  allAppsUrl,
  selectedAppUrl,
  trendingAppsUrl,
  topSellerAppsUrl,
  beingPlayedAppsUrl,
  upcomingAppsUrl,
};
