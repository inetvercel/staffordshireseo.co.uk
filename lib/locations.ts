export interface Location {
  name: string;
  slug: string;
  population?: string;
  nearbyTowns?: string[];
  heroHeadline: string;
  heroSubtext: string;
  marketContext: string;
  industries: string[];
  seoInsight: string;
  uniqueReasons: string[];
  stats: { value: string; label: string }[];
}

export const locations: Location[] = [
  {
    name: "Cannock",
    slug: "cannock",
    population: "65,000",
    nearbyTowns: ["Rugeley", "Hednesford", "Burntwood"],
    heroHeadline: "Cannock SEO Company — Outrank Birmingham & Wolverhampton",
    heroSubtext:
      "Cannock businesses face a unique battle: competing online against the marketing budgets of Birmingham and Wolverhampton agencies who target your customers before you even get a look in. We specialise in putting Cannock businesses front and centre for exactly the searches your local customers are making — so they call you, not someone 15 miles away.",
    marketContext:
      "Cannock is a commercially active market town with a strong base of trades, motor businesses, independent retail along the A5 corridor, and growing hospitality around Cannock Chase. The town sits at a crossroads between the West Midlands and Staffordshire, meaning businesses here must fight for visibility against larger neighbouring cities. Those that invest in local SEO early build a durable competitive moat that national chains struggle to breach.",
    industries: ["Trades & Construction", "Motor Trade", "Independent Retail", "Hospitality & Leisure", "Health & Wellbeing"],
    seoInsight:
      "Cannock searches are dominated by West Midlands-based businesses appearing in local results due to proximity. Hyper-localised SEO — targeting Cannock, Hednesford, Rugeley, and Chase-area keywords specifically — cuts through that and positions your business as the obvious local choice, capturing buyers with genuine local intent.",
    uniqueReasons: [
      "We know how Birmingham SEO agencies bleed Cannock's search traffic — and exactly how to stop it",
      "Cannock Chase catchment strategy: we target the full area, not just the town centre",
      "A5 corridor business experience across retail, automotive, and trade sectors",
      "Proven results for Cannock businesses against West Midlands competition",
    ],
    stats: [
      { value: "3×", label: "More local enquiries vs national agencies" },
      { value: "Top 3", label: "Google rankings for Cannock clients" },
      { value: "6 mo", label: "Average time to page one" },
      { value: "94%", label: "Client retention rate" },
    ],
  },
  {
    name: "Tamworth",
    slug: "tamworth",
    population: "77,000",
    nearbyTowns: ["Lichfield", "Fazeley", "Kingsbury"],
    heroHeadline: "Tamworth SEO Company — Anchor Your Customers Before Birmingham Pulls Them Away",
    heroSubtext:
      "Tamworth's proximity to Birmingham is both an opportunity and a constant threat. Without a strong local SEO presence, your potential customers are being intercepted by Birmingham businesses ranking for Tamworth searches. We anchor your business to Tamworth's search results so that local buyers find you first — every time.",
    marketContext:
      "Tamworth has one of Staffordshire's most diverse economies: a major logistics and distribution corridor along the A5/M42, a substantial retail offering around the Ankerside centre, manufacturing roots, and growing leisure and tourism driven by the castle and Drayton Manor. Its B78 and B79 postcode buyers are demonstrably loyalty-driven — they prefer local businesses, but only if they can find them online.",
    industries: ["Logistics & Distribution", "Retail & E-commerce", "Manufacturing", "Hospitality & Tourism", "Automotive"],
    seoInsight:
      "Tamworth has unusually high local search intent — postcode-loyal buyers actively look for 'Tamworth' businesses rather than defaulting to Birmingham. This means a well-optimised Tamworth SEO strategy converts at a significantly higher rate than generic Staffordshire campaigns. The opportunity is real; the window to claim it before competitors do is closing.",
    uniqueReasons: [
      "B2B logistics and manufacturing SEO expertise along the A5/M42 corridor",
      "Retail and e-commerce SEO strategies that work for Tamworth's shopping economy",
      "We target Tamworth, Fazeley, and surrounding villages as a single catchment area",
      "Results benchmarked against Tamworth competitors, not generic national averages",
    ],
    stats: [
      { value: "77k", label: "Tamworth population reached" },
      { value: "Top 3", label: "Google rankings achieved" },
      { value: "2×", label: "Average enquiry increase" },
      { value: "No", label: "Long-term contracts" },
    ],
  },
  {
    name: "Lichfield",
    slug: "lichfield",
    population: "32,000",
    nearbyTowns: ["Tamworth", "Burntwood", "Rugeley"],
    heroHeadline: "Lichfield SEO Company — Premium Rankings for a Premium Cathedral City",
    heroSubtext:
      "Lichfield's affluent, heritage-driven demographic expects quality at every touchpoint — including how they find businesses online. If your website and Google presence don't reflect the standard of your service, you are losing high-value enquiries to competitors who have made that investment. We help Lichfield businesses present themselves at the standard their customers expect.",
    marketContext:
      "As a cathedral city with a highly educated, above-average income demographic, Lichfield is home to a concentration of professional services — solicitors, accountants, surveyors, independent healthcare providers, and premium retail. The local market is smaller but the transaction values are higher, the clients are more loyal, and the organic search traffic converts at an exceptional rate compared to larger towns.",
    industries: ["Professional Services", "Heritage & Tourism", "Independent Retail", "Healthcare & Wellbeing", "Property & Construction"],
    seoInsight:
      "Lichfield keyword searches carry some of the highest commercial intent in Staffordshire. The average cost-per-click for Lichfield professional services keywords reflects the premium value of the traffic — which makes organic SEO a compelling investment: you capture that same high-intent audience at zero per-click cost, every single month.",
    uniqueReasons: [
      "Professional services SEO expertise — law, finance, healthcare, and property sectors",
      "Premium brand positioning: we optimise your digital presence to match Lichfield's quality expectations",
      "Heritage and tourism angle: strategies that work for both local residents and visitor-facing businesses",
      "Long-term relationship focus that reflects Lichfield's loyalty-driven business culture",
    ],
    stats: [
      { value: "High", label: "Commercial intent search traffic" },
      { value: "Top 3", label: "Professional services rankings" },
      { value: "£££", label: "Above-average client transaction values" },
      { value: "94%", label: "Client retention rate" },
    ],
  },
  {
    name: "Stafford",
    slug: "stafford",
    population: "70,000",
    nearbyTowns: ["Stone", "Rugeley", "Uttoxeter"],
    heroHeadline: "Stafford SEO Company — Dominate Search Results Across the County Town",
    heroSubtext:
      "As Staffordshire's county town, Stafford attracts searches from across the entire county — not just local residents. Businesses that rank well here capture an outsized share of regional traffic. We build SEO strategies that reflect Stafford's unique role as a county-wide commercial hub and position your business as the obvious first choice.",
    marketContext:
      "Stafford combines a significant public sector and administrative workforce with a growing private sector across professional services, retail, and construction. Greengate Street supports independent retail; the university campus brings a young, digitally active population; and the town's central Staffordshire location means businesses here frequently appear in searches from Stone, Rugeley, Eccleshall, and beyond. Broad local SEO coverage is essential.",
    industries: ["Professional & Legal Services", "Retail & Hospitality", "Construction & Trades", "Public Sector Suppliers", "Education"],
    seoInsight:
      "Stafford's 'county town' status creates a search catchment far larger than its population alone suggests. Searches for services like solicitors, accountants, and tradespeople frequently include 'Stafford' as the anchor even when the searcher is in a nearby village. A comprehensive Stafford SEO strategy — covering town centre and surrounding catchment — unlocks that wider audience.",
    uniqueReasons: [
      "County-wide SEO strategy that captures Stafford, Stone, Eccleshall, and surrounding villages",
      "Public sector and B2G experience — we understand Stafford's administrative economy",
      "Retail and hospitality campaigns that compete on Greengate Street and online simultaneously",
      "We're Staffordshire based — Stafford is our home market",
    ],
    stats: [
      { value: "Wide", label: "County-spanning search catchment" },
      { value: "Top 3", label: "Stafford keyword rankings" },
      { value: "6 mo", label: "Average time to page one" },
      { value: "200+", label: "Staffordshire businesses helped" },
    ],
  },
  {
    name: "Burton upon Trent",
    slug: "burton-upon-trent",
    population: "72,000",
    nearbyTowns: ["Uttoxeter", "Swadlincote", "Lichfield"],
    heroHeadline: "Burton upon Trent SEO Company — Rank Higher in a Growing Business Hub",
    heroSubtext:
      "Burton upon Trent is one of the Midlands' most active commercial centres, with a diverse economy spanning brewing and food production, manufacturing, retail, and logistics. The businesses investing in SEO here now are the ones that will command the first page of Google for the next decade — and the window to get there first is open right now.",
    marketContext:
      "Burton's economy is anchored by its world-famous brewing heritage — Molson Coors and the broader brewing supply chain — but the town's commercial base extends well beyond beer. A major retail centre around the Octagon Shopping Centre, strong B2B manufacturing suppliers, and a growing logistics corridor along the A38 make Burton one of East Staffordshire's most commercially rich SEO markets.",
    industries: ["Brewing & Food Production", "Manufacturing & Engineering", "Retail", "Logistics & Distribution", "Construction"],
    seoInsight:
      "Burton's manufacturing and B2B economy generates high-value, low-competition organic search opportunities. Businesses supplying into the brewing, engineering, and logistics sectors have strong online search demand but weak local SEO competition — meaning a focused campaign can reach page one rankings and generate significant B2B leads within months.",
    uniqueReasons: [
      "B2B SEO expertise for Burton's manufacturing, engineering, and brewing supply sectors",
      "Retail and e-commerce strategies for the Octagon catchment and surrounding area",
      "Cross-border targeting: Burton sits between Staffordshire and Derbyshire — we capture both",
      "Long-form content and authority building to reflect Burton's deep industry expertise",
    ],
    stats: [
      { value: "72k", label: "Population in Burton catchment" },
      { value: "High", label: "B2B search opportunity" },
      { value: "Top 3", label: "Local keyword rankings" },
      { value: "No", label: "Long-term contracts" },
    ],
  },
  {
    name: "Newcastle-under-Lyme",
    slug: "newcastle-under-lyme",
    population: "75,000",
    nearbyTowns: ["Stoke-on-Trent", "Kidsgrove", "Leek"],
    heroHeadline: "Newcastle-under-Lyme SEO Company — Outrank Stoke on Every Search",
    heroSubtext:
      "Newcastle-under-Lyme businesses face a permanent battle for online visibility against the sheer size of neighbouring Stoke-on-Trent. Without targeted local SEO, your Newcastle business is invisible to the very customers looking for exactly what you offer. We make sure that when someone searches locally, your business comes up — not a Stoke competitor.",
    marketContext:
      "Newcastle-under-Lyme has a strong independent retail and hospitality scene around Merrial Street, a significant student and academic population driven by Keele University, and a resilient manufacturing base. The town's distinct identity from Stoke is a commercial asset — local buyers actively seek 'Newcastle-under-Lyme' businesses. Capturing that local intent is what separates growing businesses from stagnant ones.",
    industries: ["Independent Retail & Hospitality", "Education & Student Services", "Manufacturing", "Healthcare", "Professional Services"],
    seoInsight:
      "The Newcastle-under-Lyme vs Stoke search dynamic is well-documented: local buyers use 'Newcastle' or 'NUL' as search qualifiers specifically to avoid Stoke results. This hyper-local intent creates a clearly defined, winnable SEO opportunity — one that requires postcode-level targeting and local content that signals genuine Newcastle relevance to Google.",
    uniqueReasons: [
      "NUL-specific SEO — we target Newcastle-under-Lyme postcodes and search terms, not broad Stoke keywords",
      "Keele University catchment strategy: student and academic audience targeting",
      "Merrial Street and town centre retail experience",
      "We understand the NUL/Stoke distinction and make it work in your favour",
    ],
    stats: [
      { value: "75k", label: "Newcastle-under-Lyme population" },
      { value: "Top 3", label: "Local search rankings" },
      { value: "High", label: "Local buyer intent" },
      { value: "94%", label: "Client retention rate" },
    ],
  },
  {
    name: "Rugeley",
    slug: "rugeley",
    population: "24,000",
    nearbyTowns: ["Cannock", "Lichfield", "Stafford"],
    heroHeadline: "Rugeley SEO Company — Stop Losing Customers to Cannock & Lichfield",
    heroSubtext:
      "Rugeley's tight-knit business community is genuinely valued by local residents — but when those residents search online, they're too often landing on Cannock or Lichfield businesses simply because those businesses rank first. We fix that. We put Rugeley businesses at the top of local search so the community's spend stays in the community.",
    marketContext:
      "Rugeley sits within Cannock Chase district and carries a strong local identity anchored by trades, independent retail, and growing leisure and tourism linked to Cannock Chase. Following the closure of the power station, the town's business community has diversified — but many businesses have yet to establish a meaningful online presence, which represents a genuine first-mover advantage for those who act now.",
    industries: ["Trades & Construction", "Independent Retail", "Tourism & Leisure (Cannock Chase)", "Health & Care Services", "Hospitality"],
    seoInsight:
      "Rugeley is an underserved SEO market. With lower keyword competition than Cannock or Lichfield, a well-executed local SEO strategy here can achieve page-one rankings for key search terms significantly faster — and hold them for longer. For small businesses in particular, Rugeley represents one of the best SEO ROI opportunities in the whole of Staffordshire.",
    uniqueReasons: [
      "Low-competition market: Rugeley businesses can reach page one faster than in any major Staffordshire town",
      "Cannock Chase tourism angle: we capture visitors searching for local services in the area",
      "We target Rugeley, Hednesford, and Brereton as one joined-up catchment",
      "Community-first approach that reflects Rugeley's local business culture",
    ],
    stats: [
      { value: "Fast", label: "Page-one ranking timeline" },
      { value: "Low", label: "Keyword competition vs larger towns" },
      { value: "Top 3", label: "Local rankings achieved" },
      { value: "No", label: "Long-term contracts" },
    ],
  },
  {
    name: "Burntwood",
    slug: "burntwood",
    population: "28,000",
    nearbyTowns: ["Lichfield", "Cannock", "Walsall"],
    heroHeadline: "Burntwood SEO Company — Capture Staffordshire's Fastest-Growing Community",
    heroSubtext:
      "Burntwood is one of Staffordshire's fastest-growing residential communities — thousands of new residents actively searching for local trades, services, and retailers. Yet most Burntwood businesses are effectively invisible online, losing those customers to Lichfield and Cannock businesses that rank above them. This is the moment to claim your position before the market gets competitive.",
    marketContext:
      "Burntwood's rapid residential development has created a surge in demand for local services — from builders and electricians to dentists, estate agents, and restaurants. The town's growing population skews toward families and working professionals who are highly comfortable searching and buying online. Businesses that establish strong local SEO now are creating an audience that will compound for years as the town continues to grow.",
    industries: ["Trades & Home Services", "Healthcare & Dental", "Retail & Local Services", "Care & Education", "Estate Agency & Property"],
    seoInsight:
      "Burntwood's growth trajectory makes it one of the highest-upside SEO markets in Staffordshire. Search volume for Burntwood-specific terms is rising year on year as the population grows, yet competition remains relatively low. Businesses that rank now will benefit from both current traffic and rising future demand — a compounding return that is rarely available in more established markets.",
    uniqueReasons: [
      "Growth-market SEO: we track rising Burntwood search demand and position you ahead of it",
      "Home services and trades expertise — the dominant business sector in a growing residential community",
      "Lichfield-adjacent positioning: we leverage Burntwood's proximity to capture both audiences",
      "We know Burntwood's new residential developments and target them with precision",
    ],
    stats: [
      { value: "↑", label: "Rising search volume year-on-year" },
      { value: "Low", label: "Current keyword competition" },
      { value: "Top 3", label: "Burntwood rankings achieved" },
      { value: "No", label: "Lock-in contracts" },
    ],
  },
  {
    name: "Uttoxeter",
    slug: "uttoxeter",
    population: "13,000",
    nearbyTowns: ["Stafford", "Burton upon Trent", "Cheadle"],
    heroHeadline: "Uttoxeter SEO Company — Grow Your Market Town Business Well Beyond Its Borders",
    heroSubtext:
      "Uttoxeter punches well above its weight: a renowned racecourse bringing national visitors, proximity to JCB's global headquarters, and a market town retail tradition that draws customers from a wide rural catchment. We help Uttoxeter businesses build an online presence that reflects this genuine reach — and captures the full breadth of that opportunity in search.",
    marketContext:
      "Uttoxeter's economy is anchored by three distinct pillars: the racecourse and events sector bringing high-spending visitors from across the UK, the agricultural and rural hinterland providing steady trade demand, and the JCB supply chain creating significant B2B search opportunity. Its position between Stafford and Burton also means it sits within the catchment of two larger commercial centres — which creates both challenge and opportunity for local SEO.",
    industries: ["Hospitality & Events (Racecourse)", "Agricultural & Rural Businesses", "Engineering & Manufacturing", "Independent Retail", "Construction & Trades"],
    seoInsight:
      "Uttoxeter's rural catchment is its secret SEO weapon. Customers in surrounding villages — Abbots Bromley, Cheadle, Rocester — regularly search for services anchored to Uttoxeter. A location page strategy targeting these villages alongside the town creates a search footprint far larger than the population alone suggests, multiplying organic reach without additional ad spend.",
    uniqueReasons: [
      "Racecourse and events SEO: we capture national visitors searching before and after Uttoxeter races",
      "Rural catchment strategy: we target the villages that look to Uttoxeter as their service town",
      "Agricultural and B2B experience for the JCB and engineering supply sector",
      "Market town retail strategy — capturing local buyers and day visitors simultaneously",
    ],
    stats: [
      { value: "Wide", label: "Rural search catchment" },
      { value: "Top 3", label: "Uttoxeter keyword rankings" },
      { value: "National", label: "Visitor audience via racecourse" },
      { value: "No", label: "Long-term contracts" },
    ],
  },
  {
    name: "Leek",
    slug: "leek",
    population: "20,000",
    nearbyTowns: ["Stoke-on-Trent", "Macclesfield", "Buxton"],
    heroHeadline: "Leek SEO Company — The Moorlands' Gateway to Google Page One",
    heroSubtext:
      "Leek occupies a unique position as the capital of the Staffordshire Moorlands and the natural gateway to the Peak District. Its business community serves two distinct audiences: loyal local residents and the steady flow of tourists and day-trippers drawn to the area. We build SEO strategies that capture both — because most agencies only see one.",
    marketContext:
      "Leek's market town identity is one of the most distinctive in Staffordshire. The town's antiques trade, independent retailers, and artisan food businesses draw visitors who are willing to travel and spend. At the same time, the Moorlands' rural residents depend on Leek as their commercial hub for professional services, trades, and healthcare. This dual audience — local loyalists and destination visitors — creates a rich, layered SEO opportunity.",
    industries: ["Tourism & Hospitality", "Independent Retail & Antiques", "Agricultural & Rural Services", "Creative & Craft Businesses", "Professional Services"],
    seoInsight:
      "Leek sits at the intersection of local search and destination tourism search — two audiences with very different but complementary intent. A dual-audience SEO strategy targeting 'Leek Staffordshire' keywords for residents and 'Peak District edge' or 'Staffordshire Moorlands' keywords for visitors creates compounding organic traffic that neither a purely local nor a purely tourism-focused approach can achieve alone.",
    uniqueReasons: [
      "Dual-audience strategy: we optimise for both Leek residents and Peak District visitors simultaneously",
      "Antiques, retail, and artisan business experience — sectors that thrive on Google discovery",
      "Staffordshire Moorlands area coverage: we target rural villages as well as the town",
      "Tourism SEO that captures visitors researching before they arrive, not just after",
    ],
    stats: [
      { value: "Dual", label: "Local + tourism audience targeting" },
      { value: "Top 3", label: "Moorlands keyword rankings" },
      { value: "Peak", label: "District visitor traffic captured" },
      { value: "No", label: "Long-term contracts" },
    ],
  },
  {
    name: "Kidsgrove",
    slug: "kidsgrove",
    population: "23,000",
    nearbyTowns: ["Newcastle-under-Lyme", "Stoke-on-Trent", "Crewe"],
    heroHeadline: "Kidsgrove SEO Company — Be Found Before Stoke Steals Your Customers",
    heroSubtext:
      "Kidsgrove sits on the Staffordshire-Cheshire border — a genuinely strategic location that most businesses fail to exploit online. Without targeted local SEO, your Kidsgrove customers are being picked up by Stoke-on-Trent and Crewe businesses that rank for searches your business should be winning. We close that gap.",
    marketContext:
      "Kidsgrove's position at the intersection of three distinct search markets — Staffordshire, Cheshire, and the Stoke conurbation — gives well-optimised local businesses unusual reach for a town of its size. The canal corridor creates a leisure and tourism angle; the town's trades and services sector is strong; and its proximity to both Newcastle-under-Lyme and Crewe means customer catchment extends well beyond Kidsgrove itself.",
    industries: ["Trades & Home Services", "Independent Retail", "Canal & Leisure Tourism", "Manufacturing", "Healthcare & Care Services"],
    seoInsight:
      "The three-market dynamic — Staffordshire, Cheshire, Stoke — is both the challenge and the opportunity for Kidsgrove SEO. The right strategy captures searches from all three areas without diluting local relevance. We use a structured multi-location approach that positions Kidsgrove as the anchor while drawing in searches from surrounding postcodes across two counties.",
    uniqueReasons: [
      "Three-county SEO approach: we capture Staffordshire, Cheshire, and Stoke searches simultaneously",
      "Canal tourism angle: we target the leisure and visitor economy as well as local trade",
      "Border-town expertise — we know how to rank in markets that cross county lines",
      "Local intent targeting that prevents Stoke from dominating Kidsgrove search results",
    ],
    stats: [
      { value: "3", label: "Search markets captured" },
      { value: "Top 3", label: "Kidsgrove keyword rankings" },
      { value: "Wide", label: "Cross-county catchment" },
      { value: "No", label: "Long-term contracts" },
    ],
  },
  {
    name: "Stone",
    slug: "stone",
    population: "16,000",
    nearbyTowns: ["Stafford", "Stoke-on-Trent", "Eccleshall"],
    heroHeadline: "Stone SEO Company — Own Your Market Town's Search Results Before Anyone Else Does",
    heroSubtext:
      "Stone is a prosperous, characterful market town on the River Trent — but its business community is one of the most underserved by SEO in the whole of Staffordshire. The businesses that invest in local SEO here right now will own those search results for years. The first-mover advantage in Stone is real, and it is available now.",
    marketContext:
      "Stone's economy blends a quality-focused professional services community, a growing commuter population working in Stafford and Stoke, and a leisure economy anchored by the River Trent canal corridor. The town's independent retail and hospitality on High Street are well-regarded, and the agricultural hinterland adds rural business demand. It is a market with strong spending power and, currently, very limited SEO competition.",
    industries: ["Professional Services", "Canal & Leisure Tourism", "Independent Retail & Hospitality", "Agriculture & Rural Services", "Construction & Trades"],
    seoInsight:
      "Stone has lower SEO competition than almost any comparable Staffordshire market town. A straightforward, well-executed local SEO campaign can achieve and sustain top-three Google rankings across the most commercially valuable search terms within four to six months — at a fraction of the cost that the same results would require in Stafford or Stoke. This window will close as more businesses wake up to the opportunity.",
    uniqueReasons: [
      "First-mover advantage: Stone's low competition means faster, cheaper, and more durable rankings",
      "Canal and leisure tourism SEO to capture the River Trent visitor economy",
      "Commuter town strategy: we target Stafford and Stoke searchers who prefer to use Stone businesses",
      "Professional services experience for Stone's solicitors, accountants, and consultants",
    ],
    stats: [
      { value: "Low", label: "Local SEO competition" },
      { value: "Fast", label: "Page-one ranking timeline" },
      { value: "Top 3", label: "Stone keyword rankings" },
      { value: "No", label: "Long-term contracts" },
    ],
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((loc) => loc.slug === slug);
}

export const featuredLocations = locations.slice(0, 8);
