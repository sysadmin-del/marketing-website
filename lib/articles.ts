export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ArticleFaq = {
  question: string;
  answer: string;
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  publishedAt: string;
  updatedAt: string;
  readingTimeMinutes: number;
  intro: string[];
  sections: ArticleSection[];
  faqs: ArticleFaq[];
  relatedSlugs: string[];
  relatedTool?: {
    href: string;
    title: string;
    description: string;
  };
};

export const articles: Article[] = [
  {
    slug: "how-to-start-an-emergency-fund",
    title: "How to Start an Emergency Fund: A Practical Step-by-Step Guide",
    description:
      "Learn how to build an emergency fund from scratch, calculate your target, choose what expenses to include, and save consistently without stress.",
    keywords: [
      "how to start an emergency fund",
      "build emergency savings",
      "emergency fund guide",
      "financial safety net",
      "emergency fund India",
    ],
    publishedAt: "2026-08-07",
    updatedAt: "2026-08-07",
    readingTimeMinutes: 8,
    intro: [
      "An emergency fund is money set aside for unexpected costs such as a medical bill, job loss, urgent travel, or a major home or vehicle repair. Its job is simple: help you handle a setback without taking high-interest debt or selling long-term investments.",
      "You do not need a large salary or perfect budget to begin. The most important step is starting with a clear target and building the habit of saving regularly.",
    ],
    sections: [
      {
        heading: "1. Decide what your emergency fund is for",
        paragraphs: [
          "An emergency fund should cover true emergencies, not planned spending. True emergencies are urgent, unexpected, and necessary.",
          "Good uses include temporary income loss, emergency medical expenses not covered by insurance, essential repairs that keep your home or transport usable, and unavoidable family emergencies.",
        ],
        bullets: [
          "Do use it for sudden job loss or medical emergencies",
          "Do use it for urgent essential repairs",
          "Do not use it for vacations, gadgets, festivals, or sales",
          "Do not treat it as a general shopping buffer",
        ],
      },
      {
        heading: "2. Calculate a realistic target",
        paragraphs: [
          "A widely used guideline is to save three to six months of essential living expenses. If your income is irregular, you are self-employed, or you support dependants, aiming for six to twelve months can provide a stronger cushion.",
          "Focus on essential monthly costs only: housing, groceries, utilities, transport, insurance premiums, minimum loan EMIs, school fees if applicable, and basic healthcare. Leave out lifestyle spending such as dining out, entertainment subscriptions you can pause, and discretionary shopping.",
          "Example: if your essential expenses are ₹40,000 a month and you want six months of cover, your target is ₹2,40,000.",
        ],
      },
      {
        heading: "3. Start with a smaller first milestone",
        paragraphs: [
          "A full emergency fund can feel overwhelming, so break it into milestones. A practical first goal is one month of essential expenses. After that, move to three months, then six.",
          "Small wins matter. Reaching the first milestone quickly builds momentum and makes the larger target feel achievable.",
        ],
      },
      {
        heading: "4. Open a separate, easy-to-access account",
        paragraphs: [
          "Keep emergency money separate from your everyday spending account. Mixing the two makes it easy to spend the fund without noticing.",
          "Choose an account that is safe, liquid, and accessible within a day or two. A high-liquidity savings account is often the simplest starting point. As your balance grows, you can later split funds between a savings account and other low-risk liquid options.",
        ],
      },
      {
        heading: "5. Automate your contributions",
        paragraphs: [
          "Consistency beats intensity. Automate a transfer to your emergency fund on payday, even if the amount is small at first.",
          "If ₹5,000 a month is difficult, start with ₹1,000 or ₹2,000 and increase it whenever your income rises or an EMI ends. Treat the contribution like a non-negotiable bill.",
        ],
      },
      {
        heading: "6. Free up money without extreme budgeting",
        paragraphs: [
          "You can fund your emergency savings by reducing a few high-impact expenses rather than cutting everything at once.",
        ],
        bullets: [
          "Pause unused subscriptions and memberships",
          "Lower food delivery and impulse shopping for 60–90 days",
          "Redirect any bonus, tax refund, or cash gift into the fund",
          "Sell unused items and send the proceeds straight to savings",
        ],
      },
      {
        heading: "7. Rebuild after every withdrawal",
        paragraphs: [
          "Using the fund for a real emergency is not failure. That is what it is for. The important part is rebuilding it afterward.",
          "After a withdrawal, pause non-essential upgrades temporarily and restart automatic contributions until the fund is restored.",
        ],
      },
      {
        heading: "Common mistakes to avoid",
        paragraphs: [
          "Many people delay starting because they wait for the perfect amount. Others invest emergency money in volatile assets and cannot access it when needed. Both mistakes weaken your safety net.",
        ],
        bullets: [
          "Waiting until you can save a large lump sum",
          "Keeping the fund in the same account used for daily spending",
          "Investing emergency cash in stocks or long lock-in products",
          "Counting credit cards as an emergency fund",
        ],
      },
    ],
    faqs: [
      {
        question: "How much should a beginner save first?",
        answer:
          "Start with one month of essential expenses. Once that is done, build toward three months and then six months based on your income stability and responsibilities.",
      },
      {
        question: "Should I build an emergency fund or invest first?",
        answer:
          "It is usually wiser to build at least a basic emergency buffer before aggressive investing. Without a safety net, you may be forced to sell investments at a bad time or borrow at high interest.",
      },
      {
        question: "Can I keep my emergency fund in a fixed deposit?",
        answer:
          "A fixed deposit can work for part of a larger emergency fund if premature withdrawal is easy and penalties are low. For the first few months of cover, prefer a liquid savings option you can access quickly.",
      },
    ],
    relatedSlugs: [
      "needs-vs-wants-in-your-budget",
      "where-to-keep-emergency-savings",
    ],
    relatedTool: {
      href: "/tools/emergency-fund-calculator",
      title: "Emergency Fund Calculator",
      description:
        "Estimate your emergency fund target based on monthly expenses and coverage months.",
    },
  },
  {
    slug: "needs-vs-wants-in-your-budget",
    title: "Needs vs Wants in Your Budget: What Belongs in an Emergency Fund",
    description:
      "Learn the difference between needs and wants so you can calculate a realistic emergency fund and build a clearer monthly budget.",
    keywords: [
      "needs vs wants budget",
      "essential expenses",
      "emergency fund expenses",
      "budgeting basics",
      "personal finance India",
    ],
    publishedAt: "2026-08-07",
    updatedAt: "2026-08-07",
    readingTimeMinutes: 7,
    intro: [
      "One of the most common reasons people miscalculate their emergency fund is mixing needs with wants. If your target includes every lifestyle expense, the goal becomes unnecessarily large. If it excludes true essentials, the fund may not protect you when income stops.",
      "Separating needs from wants helps you set a realistic savings target and make better day-to-day spending decisions.",
    ],
    sections: [
      {
        heading: "What counts as a need?",
        paragraphs: [
          "Needs are expenses required to maintain basic stability and meet essential obligations. In an emergency, these are the costs you would still have to cover even if you temporarily cut lifestyle spending.",
        ],
        bullets: [
          "Rent or home loan EMI",
          "Groceries and basic household supplies",
          "Utilities such as electricity, water, cooking gas, and internet if required for work",
          "Transport needed for work or essential travel",
          "Health, life, and vehicle insurance premiums",
          "Minimum payments on loans and credit cards",
          "Essential medicines and healthcare",
          "Childcare or school fees where applicable",
        ],
      },
      {
        heading: "What counts as a want?",
        paragraphs: [
          "Wants improve comfort and enjoyment, but they can usually be reduced or paused during a financial emergency. They matter for quality of life, yet they should not inflate your emergency fund target.",
        ],
        bullets: [
          "Dining out and food delivery",
          "Streaming services and unused subscriptions",
          "New gadgets, fashion upgrades, and impulse shopping",
          "Premium gym memberships you can temporarily pause",
          "Entertainment, hobbies, and non-essential travel",
          "Frequent cab rides when cheaper options exist",
        ],
      },
      {
        heading: "The grey area: expenses that depend on your situation",
        paragraphs: [
          "Some costs sit between needs and wants. The right category depends on your work, family, and location.",
          "For example, a high-speed internet connection may be a need if you work from home, but a want if it is mainly for entertainment. A second vehicle may be essential for a two-income household with different commute routes, or discretionary if one vehicle is enough.",
          "When unsure, ask: If my income stopped for three months, would I still need to pay this to keep my life stable?",
        ],
      },
      {
        heading: "How this affects your emergency fund calculation",
        paragraphs: [
          "Your emergency fund should be based mainly on needs. That keeps the target achievable and focused on survival and stability rather than maintaining your current lifestyle in full.",
          "Example: Suppose your total monthly spending is ₹70,000, but only ₹45,000 is essential. A six-month emergency fund based on needs is ₹2,70,000. If you wrongly used total spending, the target would jump to ₹4,20,000 and feel much harder to reach.",
        ],
      },
      {
        heading: "A simple monthly budgeting method",
        paragraphs: [
          "Once you know your needs, you can build a clearer budget. A practical structure is:",
        ],
        bullets: [
          "Needs: cover these first every month",
          "Emergency fund and debt payments: protect your future self next",
          "Wants: spend what remains intentionally",
          "Long-term investing: increase this after your basic emergency buffer is in place",
        ],
      },
      {
        heading: "How to cut wants without feeling deprived",
        paragraphs: [
          "Extreme restriction rarely lasts. Instead, reduce the wants that give you the least value.",
        ],
        bullets: [
          "Keep one or two meaningful lifestyle expenses",
          "Set a weekly spending limit for discretionary purchases",
          "Use a 24-hour waiting rule for non-essential buys",
          "Review subscriptions every month and cancel what you barely use",
        ],
      },
      {
        heading: "Review your categories when life changes",
        paragraphs: [
          "Needs change with life stages. A new dependant, a job switch, a move to a different city, or a health condition can all alter your essential expenses.",
          "Recalculate your emergency fund whenever your fixed costs change by a meaningful amount, such as after a rent increase or when a loan is closed.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should EMI payments be included in an emergency fund?",
        answer:
          "Yes. Minimum loan obligations usually continue even during a job loss or income shock, so include those required payments in your essential expenses.",
      },
      {
        question: "Are subscriptions needs or wants?",
        answer:
          "Most entertainment subscriptions are wants and can be paused. Tools required for earning income may be needs. Categorize based on whether the expense is necessary for work or basic stability.",
      },
      {
        question: "What if my needs already take most of my income?",
        answer:
          "Start with a smaller emergency milestone, such as ₹10,000 to ₹25,000, while you look for ways to lower fixed costs or increase income. A partial buffer is still better than having none.",
      },
    ],
    relatedSlugs: [
      "how-to-start-an-emergency-fund",
      "where-to-keep-emergency-savings",
    ],
    relatedTool: {
      href: "/tools/emergency-fund-calculator",
      title: "Emergency Fund Calculator",
      description:
        "Use your essential monthly expenses to calculate a practical emergency fund target.",
    },
  },
  {
    slug: "where-to-keep-emergency-savings",
    title: "Where to Keep Emergency Savings: Safe and Accessible Options",
    description:
      "Compare practical places to keep an emergency fund, including savings accounts, liquid funds, and other low-risk options that balance safety and access.",
    keywords: [
      "where to keep emergency fund",
      "emergency savings account",
      "liquid fund emergency fund",
      "safe place for emergency money",
      "emergency fund India",
    ],
    publishedAt: "2026-08-07",
    updatedAt: "2026-08-07",
    readingTimeMinutes: 8,
    intro: [
      "Where you keep your emergency fund is almost as important as how much you save. The money must be safe, easy to access during a crisis, and separate from day-to-day spending.",
      "The best option is usually not the one with the highest return. For emergency savings, liquidity and stability matter more than maximizing growth.",
    ],
    sections: [
      {
        heading: "What makes a good emergency fund account?",
        paragraphs: [
          "Before choosing a product, use three filters: safety, liquidity, and separation.",
        ],
        bullets: [
          "Safety: the value should not swing wildly",
          "Liquidity: you should be able to access money within one or two days",
          "Separation: it should not be mixed with your regular spending balance",
        ],
      },
      {
        heading: "1. Savings account dedicated to emergencies",
        paragraphs: [
          "A separate savings account is the simplest and often best starting point. It is easy to understand, quick to access, and low risk.",
          "Use an account that is not linked to your UPI spending habits if possible, or keep a balance you do not treat as spendable cash. Some people open a second bank account only for emergency reserves.",
          "Best for: beginners, first one to three months of expenses, and anyone who wants maximum simplicity.",
        ],
      },
      {
        heading: "2. High-liquidity bank options and sweeps",
        paragraphs: [
          "Some banks offer savings setups with slightly better interest while still allowing withdrawals. These can work if the money remains accessible without long lock-ins or complicated conditions.",
          "Always check withdrawal limits, minimum balance rules, and whether funds can be moved to your main account quickly in an emergency.",
        ],
      },
      {
        heading: "3. Liquid funds or similar low-risk mutual fund options",
        paragraphs: [
          "Once you have a basic cash buffer, some people park part of a larger emergency fund in liquid or ultra-short-term debt funds. These can offer better return potential than a basic savings account while remaining relatively accessible.",
          "They are still not risk-free. Debt fund values can move slightly, redemption can take one business day or more, and returns are not guaranteed. For that reason, many households keep the first month or two of expenses in a bank account and only place additional reserves in liquid options.",
          "Best for: people who already have a cash cushion and understand redemption timelines.",
        ],
      },
      {
        heading: "4. Fixed deposits: use carefully",
        paragraphs: [
          "Fixed deposits can be suitable for a portion of a well-funded emergency reserve, especially if your bank allows quick loans against the FD or low-friction premature withdrawal.",
          "They are usually a weaker primary option because breaking an FD may reduce interest and slow access. If you use FDs, keep enough instantly available cash for immediate needs.",
        ],
      },
      {
        heading: "Where you should not keep an emergency fund",
        paragraphs: [
          "Avoid parking emergency money in assets that can fall sharply or are hard to sell quickly.",
        ],
        bullets: [
          "Stocks and equity mutual funds",
          "Long lock-in products where early exit is difficult or costly",
          "Cryptocurrency and other highly volatile assets",
          "Cash at home beyond a very small immediate float",
          "Credit cards or buy-now-pay-later limits presented as savings",
        ],
      },
      {
        heading: "A practical allocation approach",
        paragraphs: [
          "You do not need one single product for the entire fund. A layered approach often works well:",
        ],
        bullets: [
          "Month 1 of expenses: savings account for instant access",
          "Months 2–3: savings account or highly liquid bank option",
          "Months 4–6+: optional low-risk liquid investment after the cash layer is ready",
        ],
      },
      {
        heading: "Access and documentation checklist",
        paragraphs: [
          "In a real emergency, speed matters. Make sure you can actually use the money when needed.",
        ],
        bullets: [
          "Know your account login and withdrawal process",
          "Keep nominee details updated",
          "Understand cut-off times for redemptions if using funds",
          "Avoid putting the entire reserve in an account only one family member can access",
        ],
      },
    ],
    faqs: [
      {
        question: "Should emergency funds earn high returns?",
        answer:
          "No. The primary goal is protection, not growth. A moderate return is useful, but safety and quick access are more important than chasing higher yields.",
      },
      {
        question: "Is it okay to split emergency money across banks?",
        answer:
          "Yes. Splitting funds can reduce operational risk and improve access, especially once your reserve becomes larger. Just keep the system simple enough to manage under stress.",
      },
      {
        question: "How quickly should I be able to withdraw the money?",
        answer:
          "Ideally within one day for at least the first portion of your fund. Some later layers can take a little longer, but the whole reserve should not be locked away.",
      },
    ],
    relatedSlugs: [
      "how-to-start-an-emergency-fund",
      "needs-vs-wants-in-your-budget",
    ],
    relatedTool: {
      href: "/tools/emergency-fund-calculator",
      title: "Emergency Fund Calculator",
      description:
        "Calculate how large your emergency fund should be before deciding where to park it.",
    },
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getRelatedArticles(slug: string): Article[] {
  const article = getArticleBySlug(slug);
  if (!article) return [];
  return article.relatedSlugs
    .map((relatedSlug) => getArticleBySlug(relatedSlug))
    .filter((item): item is Article => Boolean(item));
}

export const relatedToolArticles = [
  {
    slug: "how-to-start-an-emergency-fund",
    title: "How to start an emergency fund",
    description:
      "A practical step-by-step guide for building your first safety buffer.",
  },
  {
    slug: "needs-vs-wants-in-your-budget",
    title: "Needs vs wants in your budget",
    description:
      "Learn which expenses belong in your emergency fund calculation.",
  },
  {
    slug: "where-to-keep-emergency-savings",
    title: "Where to keep emergency savings",
    description:
      "Compare accessible options for keeping your safety net secure.",
  },
] as const;
