const articles = [
  {
    id: 'ton-year-explainer',
    number: 13,
    version: '1.0.1',
    date: '01-31-2022',
    title: 'Unpacking ton-year accounting',
    authors: [
      'Freya Chay',
      'Grayson Badgley',
      'Kata Martin',
      'Jeremy Freeman',
      'Joe Hamman',
      'Danny Cullenward',
    ],
    color: 'pink',
    card: 'ton-year-explainer',
    background: 'article-013/blowing',
    quickLook: 'Explaining methods used to value temporary carbon storage',
    summary:
      'Ton-year accounting is used to quantify the value of temporary carbon storage — a task for which we lack a clear intellectual framework. We explain how ton-year accounting methods work and highlight crucial differences between prominent ton-year accounting methods.',
    icon: 'article-013/blowing-small',
    links: [
      { label: 'Read article', href: '/research/ton-year-explainer' },
      { label: 'Our critique of NCX’s methods', href: '/blog/ton-year-ncx' },
    ],
  },
  {
    id: 'soil-protocols-explainer',
    number: 12,
    version: '1.2.0',
    date: '07-15-2021',
    title: 'A buyer’s guide to soil carbon offsets',
    authors: [
      'Jane Zelikova',
      'Freya Chay',
      'Jeremy Freeman',
      'Danny Cullenward',
    ],
    color: 'orange',
    card: 'soil-protocols-explainer',
    background: 'article-012/crop',
    quickLook:
      'Lessons learned from a systematic review of 14 protocols for soil carbon offsets',
    summary:
      'We systematically reviewed protocols used to credit soil carbon in voluntary markets. Explore our database of protocols or read the article for key takeaways.',
    icon: 'article-012/crop-small',
    links: [
      { label: 'Read article', href: '/research/soil-protocols-explainer' },
      { label: 'Browse protocols', href: '/research/soil-protocols' },
      {
        label: 'Response to Gold Standard',
        href: '/research/soil-protocols-explainer-gold-standard-response',
      },
      { label: 'Protocol additions', href: '/blog/soil-protocols-added' },
    ],
  },
  {
    id: 'soil-depth-sampling',
    number: 11,
    version: '1.0.1',
    date: '06-17-2021',
    title: 'Depth matters for soil carbon accounting',
    authors: [
      'Eric Slessarev',
      'Jane Zelikova',
      'Joe Hamman',
      'Danny Cullenward',
      'Jeremy Freeman',
    ],
    color: 'orange',
    card: 'soil-depth-sampling',
    background: 'article-011/tillage',
    quickLook:
      'Why depth is important for soil carbon sampling, and how to avoid key mistakes',
    summary:
      'Estimating soil carbon based on samples is tricky to get right. We explored the role of sampling depth when estimating soil carbon, to show why it matters, and how to avoid common pitfalls.',
    icon: 'article-011/tillage-small',
    links: [{ label: 'Read article', href: '/research/soil-depth-sampling' }],
  },
  {
    id: 'stripe-2021-insights',
    number: 10,
    version: '1.0.0',
    date: '05-26-2021',
    title: 'New lessons from reviewing carbon removal proposals',
    authors: [
      'Freya Chay',
      'Jane Zelikova',
      'Danny Cullenward',
      'Joseph Hamman',
      'Jeremy Freeman',
    ],
    color: 'secondary',
    card: 'stripe-2021-insights',
    background: 'article-010/curve',
    quickLook:
      "Project reports and lessons learned from analyzing proposals for Stripe's Spring 2021 Carbon Removal procurement",
    summary:
      "We analyzed project proposals submitted for Stripe's Spring 2021 Carbon Removal Purchase. Explore our updated database of project reports or read the article for our takeaways and lessons learned.",
    icon: 'article-010/curve-small',
    links: [
      { label: 'Read article', href: '/research/stripe-2021-insights' },
      { label: 'Explore database', href: '/research/cdr-database' },
    ],
  },
  {
    id: 'forest-risks-explainer',
    number: 9,
    date: '05-20-2021',
    title: 'Risks to forest carbon in a changing climate',
    authors: [
      'Oriana S. Chegwidden',
      'William R L Anderegg',
      'Grayson Badgley',
      'Danny Cullenward',
      'John A. Abatzoglou',
      'Jeffrey A. Hicke',
      'Anna T. Trugman',
      'Jeremy Freeman',
      'Joseph J. Hamman',
    ],
    color: 'red',
    quickLook:
      'A detailed look at the disturbance risks to forest carbon under future climate conditions',
    background: 'article-009/forest-fire-red',
    card: 'forest-risks-explainer',
    summary:
      'Forests in the United States are already at risk from wildfire, drought, and insects, and climate change is making it worse. We combined satellite and ecological data with climate models to project future risks to forest carbon. Along with a preprint, we are releasing open data, open software, and an interactive web map.',
    version: '1.0.0',
    icon: 'article-009/forest-fire-small-red',
    links: [
      { label: 'Read article', href: '/research/forest-risks-explainer' },
      {
        label: 'Read preprint',
        href: 'https://doi.org/10.1101/2021.05.11.443688',
      },
      { label: 'Browse map', href: '/research/forest-risks' },
    ],
  },
  {
    id: 'forest-offsets-explainer',
    number: 8,
    date: '04-29-2021',
    title: 'Systematic over-crediting of forest offsets',
    authors: [
      'Grayson Badgley',
      'Jeremy Freeman',
      'Joseph Hamman',
      'Barbara Haya',
      'Anna Trugman',
      'William R L Anderegg',
      'Danny Cullenward',
    ],
    color: 'green',
    quickLook:
      "Statistical and ecological analysis reveals crediting errors in California's forest carbon offsets program",
    quotes: [],
    card: 'forest-offsets-explainer',
    background: 'article-008/ash',
    summary:
      "California's forest offset program is worth over $2 billion. We analyzed detailed public records to show how statistical flaws in the program's design have led to over-crediting — at a scale of tens of millions of tCO₂ and hundreds of millions of dollars.",
    version: '1.0.0',
    icon: 'article-008/ash-small',
    links: [
      { label: 'Read article', href: '/research/forest-offsets-explainer' },
      { label: 'Read paper', href: 'https://doi.org/10.1111/gcb.15943' },
      { label: 'Browse map', href: '/research/forest-offsets' },
      {
        label: 'Press coverage',
        href: 'https://www.propublica.org/article/the-climate-solution-actually-adding-millions-of-tons-of-co2-into-the-atmosphere',
      },
      { label: 'FAQ', href: '/research/forest-offsets-explainer-faq' },
    ],
  },
  {
    id: 'microsoft-2021-insights',
    number: 7,
    version: '1.1.0',
    date: '03-17-2021',
    title: 'Insights from analyzing a new round of carbon removal projects',
    authors: [
      'Freya Chay',
      'Danny Cullenward',
      'Joseph Hamman',
      'Jeremy Freeman',
    ],
    color: 'secondary',
    quickLook:
      "Project reports and lessons learned from analyzing proposals for Microsoft's 2021 Carbon Removal procurement",
    background: 'article-007/sign',
    card: 'microsoft-2021-insights',
    summary:
      "We analyzed project proposals submitted for Microsoft's 2021 Carbon Removal Purchase. Explore our updated database of project reports or read the article for our takeaways and lessons learned.",
    icon: 'article-007/sign-small',
    links: [
      { label: 'Read article', href: '/research/microsoft-2021-insights' },
      { label: 'Explore database', href: '/research/cdr-database' },
    ],
  },
  {
    id: 'dac-calculator-explainer',
    number: 6,
    version: '1.0.0',
    color: 'purple',
    authors: [
      'Noah McQueen',
      'Jennifer Wilcox',
      'Joseph Hamman',
      'Jeremy Freeman',
    ],
    title: 'The cost of direct air capture',
    date: '02-01-2021',
    background: 'article-006/wind',
    card: 'dac-calculator-explainer',
    quickLook:
      'How the cost of direct air capture varies under different energy scenarios',
    summary:
      'Our interactive tool helps explore the cost of direct air capture (DAC) coupled to stand alone energy sources. Try the tool, or read the article to learn more about the model.',
    icon: 'article-006/wind-small',
    links: [
      { label: 'Read article', href: '/research/dac-calculator-explainer' },
      { label: 'Use calculator', href: '/research/dac-calculator' },
      {
        label: 'Read paper',
        href: 'https://www.frontiersin.org/articles/10.3389/fclim.2020.618644/abstract',
      },
    ],
  },
  {
    id: 'permanence-calculator-explainer',
    number: 5,
    version: '1.0.0',
    color: 'pink',
    title: 'The cost of temporary carbon removal',
    authors: ['Danny Cullenward', 'Joseph Hamman', 'Jeremy Freeman'],
    date: '12-09-2020',
    card: 'permanence-calculator-explainer',
    background: 'article-005/leaf',
    quickLook:
      'How to compare the long-term cost of temporary and permanent carbon removal',
    summary:
      'Our interactive tool helps compare the long-term cost of temporary and permanent carbon removal. Try the tool, or read the article to learn about the methods and implications.',
    icon: 'article-005/leaf-small',
    links: [
      {
        label: 'Read article',
        href: '/research/permanence-calculator-explainer',
      },
      { label: 'Use calculator', href: '/research/permanence-calculator' },
      {
        label: 'ClimateWorks post',
        href: 'https://www.climateworks.org/blog/addressing-critical-challenges-in-carbon-dioxide-removal/',
      },
    ],
  },
  {
    id: 'offset-project-fire',
    number: 4,
    version: '1.0.0',
    color: 'red',
    title: 'Carbon offsets burning',
    authors: [
      'Claudia Herbert',
      'Jared Stapp',
      'Grayson Badgley',
      'William R L Anderegg',
      'Danny Cullenward',
      'Joseph Hamman',
      'Jeremy Freeman',
    ],
    date: '09-17-2020',
    card: 'offset-project-fire',
    background: 'article-004/forest',
    quickLook:
      'A major fire in Oregon illustrates the challenges of managing forest carbon permanence',
    quotes: [],
    summary:
      'Fire poses a key risk to the permanence of forest carbon. We analyzed a large fire during the 2020 fire season and analyzed its impact on a forest carbon offset project.',
    icon: 'article-004/forest-small',
    links: [
      { label: 'Read article', href: '/research/offset-project-fire' },
      {
        label: 'Press coverage',
        href: 'https://grist.org/climate/this-oregon-forest-was-supposed-to-store-carbon-for-100-years-now-its-on-fire/',
      },
    ],
  },
  {
    id: 'carbon-removal-mechanisms',
    number: 3,
    version: '1.0.0',
    color: 'grey',
    title: 'Carbon removal mechanisms',
    authors: [
      'Toly Rinberg',
      'Danny Cullenward',
      'Joseph Hamman',
      'Jeremy Freeman',
    ],
    date: '07-24-2020',
    card: 'carbon-removal-mechanisms',
    background: 'article-003/pipes',
    quickLook:
      'How different carbon removal projects interact with the global carbon cycle',
    summary:
      'Carbon removal is confusing because there are many approaches, and all affect the carbon cycle in different ways. In this article we develop and explain a typology for comparing approaches.',
    icon: 'article-003/pipes-small',
    links: [
      { label: 'Read article', href: '/research/carbon-removal-mechanisms' },
    ],
  },
  {
    id: 'soil-carbon-comment',
    number: 1,
    version: '1.1.0',
    color: 'orange',
    title: 'Getting soil carbon right',
    authors: ['Danny Cullenward', 'Joseph Hamman', 'Jeremy Freeman'],
    date: '06-01-2020',
    card: 'soil-carbon-comment',
    background: 'article-001/soil',
    quickLook:
      'Why the science of soil carbon quantification is complicated, and why getting the details right matters for soil carbon protocols',
    summary:
      'There are good reasons to be excited about soil carbon sequestration, but rigorous quantification remains a challenge. We analyzed a carbon offset protocol and wrote multiple letters raising concerns related to program design and scientific integrity.',
    icon: 'article-001/soil-small',
    links: [
      { label: 'Read article', href: '/research/soil-carbon-comment' },
      {
        label: 'Press coverage',
        href: 'https://www.technologyreview.com/2020/06/03/1002484/why-we-cant-count-on-carbon-sucking-farms-to-slow-climate-change/',
      },
      {
        label: 'Read comment letter #1',
        href: 'https://carbonplan-assets.s3.amazonaws.com/docs/Soil-Carbon-Comment-Letter-05-18-2020.pdf',
      },
      {
        label: 'Read comment letter #2',
        href: 'https://carbonplan-assets.s3.amazonaws.com/docs/Soil-Carbon-Comment-Letter-08-25-2020.pdf',
      },
    ],
  },
  {
    id: 'stripe-2020-insights',
    number: 0,
    version: '1.1.0',
    color: 'secondary',
    title: 'Insights from our first project reports',
    authors: ['Danny Cullenward', 'Joseph Hamman', 'Jeremy Freeman'],
    date: '05-18-2020',
    card: 'stripe-2020-insights-gray',
    background: 'article-000/road',
    quickLook:
      'Project reports and lessons learned from analyzing proposals for Stripe’s 2020 Negative Emissions Purchase',
    summary:
      "We analyzed project proposals submitted for Stripe's 2020 Negative Emissions Purchase. Explore our database of project reports or read the article for our main takeaways and lessons learned.",
    icon: 'article-000/road-small',
    links: [
      { label: 'Read article', href: '/research/stripe-2020-insights' },
      { label: 'Explore database', href: '/research/cdr-database' },
    ],
  },
]
export default articles
