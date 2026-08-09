import type { Metadata } from "next";
import GuideLayout, {
  GuideCallout,
  GuideFaq,
  GuideSteps,
} from "@/components/GuideLayout";
import { getGuideBySlug } from "@/lib/guides";

const guide = getGuideBySlug("keep-transactions-accurate");

const faqs = [
  {
    question: "What should I write in a note?",
    answer:
      "Write it the way you speak. Short notes like “office chai”, “weekend petrol”, “Amul milk”, or “medicine for fever” are enough. Later, you can search those words and see exactly how much you spent.",
  },
  {
    question: "What if I forget the category?",
    answer:
      "Pick the closest category for now, then edit it later if needed. Consistency matters more than perfection — using Food for all food spending is better than leaving it blank.",
  },
  {
    question: "Do I need to open Cashnix after every purchase?",
    answer:
      "No. Once a day is enough for most people. Open the app at night, review automatic entries, add cash spends, and fill notes or categories while the day is still fresh.",
  },
  {
    question: "What kind of expenses should go into recurring?",
    answer:
      "Anything that repeats every month on a fixed amount — loan EMI, SIP, rent, Netflix, gym, insurance premium, or mobile recharge plans. Set them once so Cashnix adds them automatically.",
  },
];

export const metadata: Metadata = {
  title: guide?.title ?? "Keep Your Transactions Accurate",
  description: guide?.description,
  alternates: {
    canonical: "/guides/keep-transactions-accurate",
  },
  openGraph: {
    title: `${guide?.title ?? "Keep Your Transactions Accurate"} | Cashnix Guides`,
    description: guide?.description,
    url: "/guides/keep-transactions-accurate",
  },
};

export default function KeepTransactionsAccurateGuidePage() {
  return (
    <GuideLayout slug="keep-transactions-accurate">
      <h2>Introduction</h2>
      <p>
        Recording a transaction is only the first step. To truly understand your
        money, every entry needs a little context — what you bought, which
        category it belongs to, and whether it was a one-time spend or something
        that repeats every month.
      </p>
      <p>
        This guide explains how notes, categories, a simple end-of-day habit, and
        recurring expenses work together so your Cashnix records stay accurate
        and useful.
      </p>

      <h2>Why notes matter</h2>
      <p>
        A note is a short reminder of what the money was actually for. Without
        it, your history may show amounts and merchants, but not the real story
        behind the spend.
      </p>
      <p>
        Imagine you paid ₹120 at a local shop three times this week. Later, when
        you open your transaction list, all three look similar. If you added
        notes like &quot;Amul milk&quot;, &quot;bread and eggs&quot;, and &quot;washing
        powder&quot;, you instantly know what each payment was for.
      </p>
      <p>
        Notes become powerful when you search. Want to know how much you spent on
        chai this month? Search &quot;chai&quot; in your transaction list. Cashnix
        will show every matching entry, and you can add those amounts to see the
        total.
      </p>
      <ul>
        <li>
          Search &quot;petrol&quot; to see how much fuel cost you this month
        </li>
        <li>
          Search &quot;sabji&quot; to track weekly vegetable spending
        </li>
        <li>
          Search &quot;Swiggy&quot; or &quot;lunch&quot; to check food delivery habits
        </li>
        <li>
          Search &quot;medicine&quot; before a doctor visit to recall recent pharmacy costs
        </li>
      </ul>

      <GuideCallout title="Example" variant="info">
        You spent ₹40 on chai on Monday, ₹50 on Tuesday, and ₹80 with friends on
        Saturday. If each transaction has the note &quot;chai&quot;, a quick search
        later shows ₹170 spent on chai that week — something you would never
        notice from merchant names alone.
      </GuideCallout>

      <GuideCallout title="Tip" variant="tip">
        Keep notes short and natural. Write them the way you speak — office chai,
        weekend petrol, medicine for fever. Future you will understand them
        immediately.
      </GuideCallout>

      <h2>Why categories matter</h2>
      <p>
        If notes answer &quot;what exactly did I buy?&quot;, categories answer
        &quot;which area of life is this money going to?&quot;
      </p>
      <p>
        Categories help you see the bigger picture. A single UPI payment of ₹850
        does not tell you much by itself. But when that payment sits under Food,
        Travel, or Shopping, it starts contributing to a clear monthly pattern.
      </p>
      <p>
        Over a few weeks, category totals show where your money is really going:
      </p>
      <ul>
        <li>
          <strong>Food</strong> — groceries, restaurants, chai, tiffin, delivery
        </li>
        <li>
          <strong>Travel</strong> — petrol, auto, metro, cab, train tickets
        </li>
        <li>
          <strong>Shopping</strong> — clothes, gadgets, household items
        </li>
        <li>
          <strong>Bills</strong> — electricity, internet, mobile recharge
        </li>
        <li>
          <strong>Health</strong> — medicines, doctor visits, lab tests
        </li>
      </ul>
      <p>
        For example, if your Food category shows ₹12,000 this month and Travel
        shows ₹4,500, you immediately know food is your largest everyday cost.
        Without categories, those numbers stay scattered across dozens of
        individual transactions.
      </p>

      <GuideCallout title="Example" variant="info">
        You paid ₹2,400 at a supermarket, ₹600 on Swiggy, ₹150 on chai, and
        ₹900 for weekend dining. If all of them are under Food, Cashnix can show
        that food cost you ₹4,050. That single number is much easier to act on
        than four separate payments with no category.
      </GuideCallout>

      <GuideCallout title="Tip" variant="tip">
        Use the same category names consistently. If groceries sometimes go under
        Food and sometimes under Shopping, your monthly picture becomes harder to
        trust.
      </GuideCallout>

      <h2>Add cash transactions at the end of the day</h2>
      <p>
        Cash spending is easy to miss because there is no SMS for Cashnix to
        detect. A ₹20 chai, ₹50 auto fare, or ₹200 kirana bill can disappear from
        memory by the next morning.
      </p>
      <p>
        You do not need to open the app after every purchase. A better habit is
        to open Cashnix once a day — usually at night — and manage everything
        from that day in one short session.
      </p>

      <GuideSteps>
        <li>Open Cashnix at the end of the day, when spending is mostly done.</li>
        <li>Review any automatic transactions from bank or UPI messages.</li>
        <li>
          Manually add cash expenses you remember — chai, sabji, auto, parking,
          tips, or small kirana purchases.
        </li>
        <li>
          Add a short note and the right category for each entry while details
          are still fresh.
        </li>
        <li>
          Ignore anything that is not your expense so it does not affect your
          totals.
        </li>
      </GuideSteps>

      <GuideCallout title="Example" variant="info">
        Your day looked like this: ₹30 chai in the morning (cash), ₹45 auto to
        office (cash), ₹220 lunch via UPI, and ₹180 sabji in the evening (cash).
        Cashnix may already have the lunch payment from SMS. At night, you add
        the three cash spends with notes like &quot;morning chai&quot;,
        &quot;office auto&quot;, and &quot;sabji&quot;. Now the full day is
        recorded — not just the UPI payment.
      </GuideCallout>

      <GuideCallout title="Tip" variant="tip">
        Think of this as a five-minute nightly reset. One short check is easier
        than trying to remember a whole week of cash spending later.
      </GuideCallout>

      <h2>Use recurring expenses for fixed monthly costs</h2>
      <p>
        Some expenses do not change much from month to month — loan EMI, SIP,
        rent, insurance, Netflix, gym membership, or a fixed mobile plan. Adding
        these by hand every month is easy to forget, and when you forget, your
        monthly total looks smaller than it really is.
      </p>
      <p>
        Recurring expenses solve that. You set them once in Cashnix, and the app
        adds those transactions automatically each month. That way, your monthly
        picture always includes the commitments you already know about.
      </p>

      <h3>Good candidates for recurring expenses</h3>
      <ul>
        <li>Home or personal loan EMI</li>
        <li>Monthly SIP or mutual fund investments</li>
        <li>House rent or society maintenance</li>
        <li>Subscriptions like Netflix, Spotify, or cloud storage</li>
        <li>Gym membership or coaching fees</li>
        <li>Insurance premiums paid monthly</li>
        <li>Fixed mobile or broadband plans</li>
      </ul>

      <GuideCallout title="Example" variant="info">
        Suppose every month you pay ₹18,000 rent, ₹8,500 car EMI, ₹5,000 SIP,
        and ₹649 for Netflix. If these are set as recurring expenses, Cashnix
        adds ₹32,149 to your monthly commitments automatically. When you later
        look at the month, you already know that this much is fixed — and
        everything else is flexible everyday spending.
      </GuideCallout>

      <p>
        This clarity matters. Once fixed costs are always present in your
        records, it becomes much easier to answer questions like:
      </p>
      <ul>
        <li>How much do I truly spend every month?</li>
        <li>How much room is left after EMIs and SIPs?</li>
        <li>Can I afford a new subscription without stretching my budget?</li>
      </ul>

      <GuideCallout title="Note" variant="note">
        Recurring expenses are for amounts that repeat on a schedule. One-time
        spends — a birthday gift, a festival purchase, or a medical bill —
        should still be added as normal transactions.
      </GuideCallout>

      <h2>Putting it all together</h2>
      <p>
        Accurate tracking in Cashnix is less about entering every detail
        perfectly in the moment, and more about a simple daily and monthly
        system:
      </p>
      <ul>
        <li>
          <strong>Notes</strong> help you search later and understand specific
          spends like chai, petrol, or sabji.
        </li>
        <li>
          <strong>Categories</strong> show how much goes to Food, Travel,
          Shopping, and other areas of life.
        </li>
        <li>
          <strong>End-of-day review</strong> catches cash spends that SMS
          detection cannot see.
        </li>
        <li>
          <strong>Recurring expenses</strong> keep fixed monthly costs visible
          so your totals stay complete.
        </li>
      </ul>
      <p>
        When these habits work together, your transaction list stops being a
        pile of amounts and becomes a clear picture of how you use money.
      </p>

      <GuideFaq items={faqs} />
    </GuideLayout>
  );
}
