export interface Location {
  name: string;
  slug: string;
  population?: string;
  description?: string;
  nearbyTowns?: string[];
}

export const locations: Location[] = [
  {
    name: "Cannock",
    slug: "cannock",
    population: "65,000",
    description:
      "A market town in Staffordshire, home to many local businesses looking to grow online.",
    nearbyTowns: ["Rugeley", "Hednesford", "Burntwood"],
  },
  {
    name: "Tamworth",
    slug: "tamworth",
    population: "77,000",
    description:
      "A historic town in Staffordshire, with a thriving business community.",
    nearbyTowns: ["Lichfield", "Fazeley", "Kingsbury"],
  },
  {
    name: "Lichfield",
    slug: "lichfield",
    population: "32,000",
    description:
      "A cathedral city in Staffordshire, known for its heritage and local businesses.",
    nearbyTowns: ["Tamworth", "Burntwood", "Rugeley"],
  },
  {
    name: "Stafford",
    slug: "stafford",
    population: "70,000",
    description:
      "The county town of Staffordshire, home to a wide range of businesses.",
    nearbyTowns: ["Stone", "Rugeley", "Uttoxeter"],
  },
  {
    name: "Burton upon Trent",
    slug: "burton-upon-trent",
    population: "72,000",
    description:
      "A market town on the River Trent, with strong retail and manufacturing sectors.",
    nearbyTowns: ["Uttoxeter", "Swadlincote", "Lichfield"],
  },
  {
    name: "Newcastle-under-Lyme",
    slug: "newcastle-under-lyme",
    population: "75,000",
    description:
      "A borough in Staffordshire neighbouring Stoke-on-Trent.",
    nearbyTowns: ["Stoke-on-Trent", "Kidsgrove", "Leek"],
  },
  {
    name: "Rugeley",
    slug: "rugeley",
    population: "24,000",
    description:
      "A town in Cannock Chase district, surrounded by beautiful countryside.",
    nearbyTowns: ["Cannock", "Lichfield", "Stafford"],
  },
  {
    name: "Burntwood",
    slug: "burntwood",
    population: "28,000",
    description:
      "A large town in Lichfield district, with a strong local business community.",
    nearbyTowns: ["Lichfield", "Cannock", "Walsall"],
  },
  {
    name: "Uttoxeter",
    slug: "uttoxeter",
    population: "13,000",
    description:
      "A market town in East Staffordshire, known for its racecourse and local businesses.",
    nearbyTowns: ["Stafford", "Burton upon Trent", "Cheadle"],
  },
  {
    name: "Leek",
    slug: "leek",
    population: "20,000",
    description:
      "The capital of the Staffordshire Moorlands, a market town with rich heritage.",
    nearbyTowns: ["Stoke-on-Trent", "Macclesfield", "Buxton"],
  },
  {
    name: "Kidsgrove",
    slug: "kidsgrove",
    population: "23,000",
    description:
      "A town in the north of Staffordshire, bordering Cheshire.",
    nearbyTowns: ["Newcastle-under-Lyme", "Stoke-on-Trent", "Crewe"],
  },
  {
    name: "Stone",
    slug: "stone",
    population: "16,000",
    description:
      "A market town on the River Trent in Staffordshire.",
    nearbyTowns: ["Stafford", "Stoke-on-Trent", "Eccleshall"],
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((loc) => loc.slug === slug);
}

export const featuredLocations = locations.slice(0, 8);
