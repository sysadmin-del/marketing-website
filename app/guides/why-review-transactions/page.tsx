import type { Metadata } from "next";
import GuideLayout, {
  GuideCallout,
  GuideFaq,
  GuideFigure,
  GuideSteps,
} from "@/components/GuideLayout";
import { getGuideBySlug } from "@/lib/guides";

const guide = getGuideBySlug("why-review-transactions");

const faqs = [
  {
    question: "Do I need to review every transaction?",
    answer:
      "No. Focus mainly on transactions that were automatically tracked. Confirm those entries, add any missing cash spends, and ignore anything that is not yours.",
  },
  {
    question: "What if an automatic transaction is wrong?",
    answer:
      "You can edit it if the details need correction. If the transaction does not need to be added to your records, ignore it so it is not counted in your dashboard.",
  },
  {
    question: "Why should I add notes for spending?",
    answer:
      "Because later you can search and clearly see how you spent on chai, petrol, travel, sabji, and other everyday expenses.",
  },
  {
    question: "Does reviewing help budgeting?",
    answer:
      "Yes. It improves transaction accuracy and helps you see a clear picture of where money went, so misleading expenses are not added to your budget.",
  },
];

export const metadata: Metadata = {
  title: guide?.title ?? "Why Review Transactions",
  description: guide?.description,
  alternates: {
    canonical: "/guides/why-review-transactions",
  },
  openGraph: {
    title: `${guide?.title ?? "Why Review Transactions"} | Cashnix Guides`,
    description: guide?.description,
    url: "/guides/why-review-transactions",
  },
};

export default function WhyReviewTransactionsGuidePage() {
  return (
    <GuideLayout slug="why-review-transactions">
      <h2>Introduction</h2>
      <p>
        Cashnix can create transactions automatically from supported financial
        SMS messages. Reviewing those transactions helps you confirm that each
        record is correct before you rely on it for budgets and insights.
      </p>
      <p>
        This guide explains why review matters, what to look for, and how often
        you should check your recent activity.
      </p>

      <h2>Why reviewing transactions is important</h2>
      <p>
        Your main dashboard shows only approved transactions and the ones you
        add manually. SMS-detected transactions stay in Pending Review until you
        confirm them. That keeps your balance, income, and expense totals clean.
      </p>

      <GuideFigure
        src="/images/guides/dashboard-pending-review.jpg"
        alt="Cashnix dashboard showing approved totals on top and a Pending Review section for SMS-detected transactions"
        caption="Dashboard totals use approved and manually added transactions only. SMS-detected entries wait in Pending Review until you confirm them."
        width={446}
        height={1024}
      />

      <p>
        Automatic detection saves time, but no system can understand every
        message perfectly. A quick review keeps your records aligned with what
        actually happened in your accounts.
      </p>
      <ul>
        <li>Catch duplicate or incomplete transactions early</li>
        <li>Confirm merchant names and categories</li>
        <li>Separate expenses from income correctly</li>
        <li>Keep monthly totals trustworthy</li>
        <li>Ignore entries that are not your expenses before they affect the dashboard</li>
      </ul>

      <GuideCallout title="Note" variant="note">
        Reviewing does not mean re-entering everything. In most cases, you only
        need a short check of recent automatic entries in Pending Review.
      </GuideCallout>

      <h2>How reviewing improves accuracy</h2>
      <p>
        Accurate transactions lead to clearer spending insights. When your data
        is clean, Cashnix can give you a more reliable view of budgets,
        recurring expenses, and category trends.
      </p>
      <GuideSteps>
        <li>Open the Pending Review section on your dashboard.</li>
        <li>Scan newly detected entries from banks, UPI apps, or wallets.</li>
        <li>Approve correct entries, edit details if needed, or ignore what is not yours.</li>
        <li>Approved transactions then appear in your main dashboard totals.</li>
      </GuideSteps>

      <h2>When you should review transactions</h2>
      <p>A light review habit is usually enough:</p>
      <ul>
        <li>At the end of the day, after your spending is done</li>
        <li>After a busy spending day</li>
        <li>At the end of each week</li>
        <li>Before checking monthly budget progress</li>
        <li>Whenever an automatic entry looks unfamiliar</li>
      </ul>

      <h3>End-of-day review</h3>
      <p>
        The simplest habit is a short end-of-day check. Open Cashnix, look at
        today&apos;s transactions, and make sure the list matches how you actually
        spent money.
      </p>
      <GuideSteps>
        <li>Review all transactions tracked for the day.</li>
        <li>
          Manually add any cash payments the app could not detect, such as chai,
          sabji, food, auto fare, or small kirana purchases.
        </li>
        <li>
          Add a short note in your own words so you remember where the money
          went later — for example, &quot;bought sabji&quot;, &quot;office chai&quot;, or
          &quot;lunch with friends&quot;.
        </li>
        <li>
          If a tracked transaction was not made by you, ignore it so it is not
          counted in your dashboard.
        </li>
      </GuideSteps>

      <GuideCallout title="Tip" variant="tip">
        Simple notes in everyday language are enough. Later, when you check your
        spending, you will clearly understand where the money went.
      </GuideCallout>

      <h3>Ignore transactions that are not yours</h3>
      <p>
        Sometimes Cashnix may detect a message that does not belong to your own
        spending — for example, a family account alert, a refund message you do
        not need as an expense, or a debit you did not make.
      </p>
      <p>
        In those cases, ignore the transaction. Ignored entries are kept out of
        your dashboard totals, so your reports stay focused only on expenses you
        actually made.
      </p>

      <GuideCallout title="Note" variant="note">
        Reviewing regularly is easier than fixing a full month of mismatched
        records later. A few minutes each evening is usually enough.
      </GuideCallout>

      <h2>Tips</h2>
      <ul>
        <li>Start with the newest transactions first.</li>
        <li>Add cash spending the same day, before you forget the details.</li>
        <li>
          Write notes the way you speak — food, chai, sabji, petrol, medicine —
          so future you can understand them quickly.
        </li>
        <li>Ignore anything that is not your expense so the dashboard stays clean.</li>
        <li>Pay special attention to large amounts and unfamiliar merchants.</li>
        <li>Update categories while the purchase is still fresh in memory.</li>
      </ul>

      <GuideFaq items={faqs} />
    </GuideLayout>
  );
}
