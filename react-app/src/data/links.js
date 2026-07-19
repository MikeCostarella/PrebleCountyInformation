// Preble County, Ohio — curated directory of meaningful links.
// Single source of truth for the app. Keep entries verified and current.
// Fields: name, category, subcategory, url, description
// Last reviewed: 2026-07-19

export const CATEGORIES = [
  "Government",
  "Education",
  "Health",
  "Business & Economy",
  "Community & Social",
  "Recreation & Tourism",
  "News & Media",
];

// The vendor that hosts the county Auditor's online parcel/property records.
export const AUDITOR_VENDOR = "Beacon (Schneider Geospatial)";

export const LINKS = [
  // ---------- Government ----------
  { name: "Preble County (Official Site)", category: "Government", subcategory: "County", url: "https://www.prebco.org/", description: "Official government portal for Preble County, Ohio (county seat: Eaton)." },
  { name: "Preble County Auditor", category: "Government", subcategory: "Auditor", url: "https://www.preblecountyauditor.org/", description: "Property records, valuations, and parcel/property search (hosted on Beacon / Schneider Geospatial)." },
  { name: "Preble County Board of Elections", category: "Government", subcategory: "Elections", url: "https://preble.boe.ohio.gov/", description: "Voter registration, polling locations, and election administration." },
  { name: "City of Eaton", category: "Government", subcategory: "City", url: "https://www.cityofeaton.org/", description: "Government site for the City of Eaton, the county seat." },
  // ---------- Education ----------
  { name: "Preble County District Library", category: "Education", subcategory: "Library", url: "https://www.preblelibrary.org/", description: "County district library serving Eaton and Preble County." },
  { name: "Eaton Community Schools", category: "Education", subcategory: "K-12", url: "https://www.eatonschools.org/", description: "Public school district serving Eaton and surrounding Preble County." },
  { name: "OSU Extension – Preble County", category: "Education", subcategory: "Extension", url: "https://preble.osu.edu/", description: "Ohio State University Extension office: agriculture, 4-H, and community education." },
  // ---------- Health ----------
  { name: "Preble County Public Health", category: "Health", subcategory: "Public Health", url: "https://www.preblecountyhealth.org/", description: "County public-health agency: clinics, inspections, vital records, and programs." },
  { name: "Reid Health", category: "Health", subcategory: "Hospital", url: "https://www.reidhealth.org/", description: "Regional health system (Richmond, IN) serving Preble County and the western Ohio border." },
  // ---------- Business & Economy ----------
  { name: "Preble County Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://preblecountyohio.com/", description: "Business advocacy, member support, and community resources across Preble County." },
  // ---------- Community & Social ----------
  { name: "OhioMeansJobs Preble County", category: "Community & Social", subcategory: "Assistance", url: "https://ohiomeansjobs.ohio.gov/job-seekers/find-a-job/local-help/preble-county", description: "Workforce, job-search, and employment services for county residents." },
  // ---------- Recreation & Tourism ----------
  { name: "Visit Preble County", category: "Recreation & Tourism", subcategory: "Tourism", url: "https://visitpreblecounty.org/", description: "Official visitor guide to Preble County — historic covered bridges, parks, events, and dining." },
  // ---------- News & Media ----------
  { name: "The Register-Herald", category: "News & Media", subcategory: "Newspaper", url: "https://www.registerherald.com/", description: "Eaton-based newspaper covering Preble County." },
];
