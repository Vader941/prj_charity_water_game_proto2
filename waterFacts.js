// Template for clean water facts to be displayed in the game modal
const waterFacts = [
  {
    boldStatement: "Diseases from dirty water kill more people every year than all forms of violence, including war.",
    claim: "Children under-five are on average more than 20 times more likely to die from illnesses linked to unsafe water and bad sanitation than from conflict.",
    source: "<a href='https://news.un.org/en/story/2019/03/1035171'>UNICEF 2019</a>"
  },
  {
    boldStatement: "Every day, women and girls around the world spend an estimated 200 million hours collecting water.",
    claim: "Access to clean water gives communities more time to grow food, earn an income, and go to school -- all of which fight poverty.",
    source: "<a href='https://www.un.org/sustainabledevelopment/blog/2016/08/at-start-of-world-water-week-unicef-highlights-how-girls-lose-time-collecting-water/'>UNICEF 2016</a>, <a href='https://d26p6gt0m19hor.cloudfront.net/whywater/JMP-2010Final.pdf'>Progress on Sanitation and Drinking-water: 2010 Update.</a>"
  },
  {
    boldStatement: "Clean water helps keep kids in school, especially girls.",
    claim: "Less time collecting water means more time in class. Clean water and proper toilets at school means teenage girls don’t have to stay home for a week out of every month.",
    source: "<a href='https://www.charitywater.org/global-water-crisis/education'>Charity Water: Impact of clean water on education</a>"
  },
  {
    boldStatement: "Women and girls are responsible for water collection in 8 out of 10 households with water off premises.",
    claim: "When a community gets water, women and girls get their lives back. They start businesses, improve their homes, and take charge of their own futures.",
    source: "<a href='https://www.who.int/publications/i/item/9789241512893'>WHO/UNICEF 2017</a>"
  }
];

// Function to get a random water fact
function getRandomWaterFact() {
  const randomIndex = Math.floor(Math.random() * waterFacts.length);
  return waterFacts[randomIndex];
}

// Function to format fact for display in modal
function formatFactForModal(fact) {
  return {
    boldStatement: fact.boldStatement,
    fullText: `${fact.claim}`,
    source: fact.source
  };
}