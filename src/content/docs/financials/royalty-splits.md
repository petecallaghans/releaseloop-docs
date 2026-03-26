---
title: Royalty Splits
description: Configure how revenue from each release is divided between artists, producers, songwriters, and other stakeholders.
---

Most releases involve more than one person who needs to get paid. Between the artist, the label, producers, songwriters, and managers, you need a clear breakdown of who gets what percentage. Royalty splits in ReleaseLoop let you define that breakdown per release -- and the system uses it to calculate payout amounts automatically when you generate statements.

:::note
Royalty splits require a **Team** or **Label** plan.
:::

## Setting up splits

1. Open a release and go to the **Financials** tab
2. Click the **gear icon** in the top-right corner to open Financial Settings
3. Go to the **Splits** tab
4. Add stakeholders and assign each one a percentage -- the total must equal 100%
5. Click **Save**

When you add a stakeholder, you can either pick from suggestions (your release artists, plus common roles like Label, Manager, Producer, Publisher, Writer) or type any name you want. The name field is free-text, so you're not limited to predefined roles.

Each stakeholder also has an optional **email** field. This is used for [artist statement delivery](/financials/artist-statements/) -- when you send a statement, it goes to the email on the split entry. For artists on your roster, the email is auto-populated from their artist profile. For custom stakeholders (producers, writers, external collaborators), you'll need to enter it manually. If no email is set, the workspace owner's email is used as a fallback.

## Using individual names vs. generic roles

You have full flexibility in how you name stakeholders. Both approaches work -- pick whichever makes your accounting clearer.

**Generic roles** work well when you only have one person per role:

| Stakeholder | Split |
|---|---|
| Label | 50% |
| Artist | 30% |
| Producer | 20% |

**Individual names** are better when multiple people share a role, or when you want statements addressed to specific people:

| Stakeholder | Split |
|---|---|
| Label | 50% |
| Eliah Sternhardt | 20% |
| DJ Marco (Producer) | 15% |
| Sarah K (Writer) | 15% |

You do **not** need to add producers, songwriters, or managers as Artists in ReleaseLoop. The splits system is completely separate from your artist roster. Just type their name directly when adding a stakeholder.

:::tip
Including the person's role in parentheses -- like "Sarah K (Writer)" -- makes statements easier to read at a glance, especially when you have many stakeholders across multiple releases.
:::

## Common split scenarios

### Simple artist/label deal

The most straightforward setup. The label keeps a share and the artist gets the rest.

| Stakeholder | Split |
|---|---|
| Owner/Label | 60% |
| Artist Name | 40% |

### Artist, producer, and label

When a producer has a points deal (percentage of revenue), add them as a separate stakeholder.

| Stakeholder | Split |
|---|---|
| Owner/Label | 40% |
| Artist Name | 30% |
| Producer Name | 30% |

### Multiple producers

If two producers split production credit, give each their own line. Don't combine them under a single "Producer" entry -- you'll want separate payout statements for each person.

| Stakeholder | Split |
|---|---|
| Owner/Label | 40% |
| Artist Name | 20% |
| Alex (Producer) | 20% |
| Jamie (Producer) | 20% |

### Full split with songwriter

When the songwriter is a different person from the artist or producer, add them as another stakeholder. This is common when the artist performs a song they didn't write.

| Stakeholder | Split |
|---|---|
| Owner/Label | 35% |
| Artist Name | 25% |
| Producer Name | 25% |
| Songwriter Name | 15% |

### Featured artist collaboration

When a release has a featured artist who negotiated their own split, add them by name alongside the primary artist.

| Stakeholder | Split |
|---|---|
| Owner/Label | 40% |
| Main Artist | 25% |
| Featured Artist | 20% |
| Producer Name | 15% |

### Manager with revenue share

Some managers take a percentage of release revenue. Add them as a stakeholder rather than deducting their cut manually.

| Stakeholder | Split |
|---|---|
| Owner/Label | 40% |
| Artist Name | 30% |
| Producer Name | 15% |
| Manager Name | 15% |

## Deal types

When configuring financial settings, you choose a deal type that determines how the distributable pot is calculated. This affects what the split percentages actually apply to.

### Gross Revenue Share

Splits apply to **total revenue** before any expenses are deducted. This is the simpler model -- if the release earns $1,000, the full $1,000 is divided according to the split percentages.

Use this when:
- You have a straightforward revenue-sharing arrangement
- Expenses are handled separately or aren't part of the deal
- You want stakeholders to earn from the first dollar

### Net Profit Split

Splits apply to **revenue minus expenses**. If the release earns $1,000 and has $400 in expenses, the $600 net profit is what gets divided.

Use this when:
- The label fronts production or marketing costs and recoups them first
- Stakeholders only participate in profit, not gross revenue
- You have a traditional label deal where the label recovers its investment before paying out

## Recoupment

If you enable **Recoup Expenses** (available with the Net Profit deal type), stakeholders won't receive payouts until the release has earned back its expenses. The Financials tab shows a recoupment progress bar so everyone can see how close the release is to breaking even.

Once the release is fully recouped, the remaining revenue is distributed according to the split percentages. This is how most traditional label deals work -- the label invests in the release and recovers costs before profit sharing kicks in.

## How splits connect to payouts

Splits define the percentages. [Payout statements](/financials/payouts/) use those percentages to calculate actual dollar amounts:

1. Revenue comes in via [royalty imports](/financials/royalty-imports/) or manual entries
2. The system calculates the distributable pot based on your deal type
3. Each stakeholder's share is calculated from their split percentage
4. When you generate statements, each stakeholder gets their own statement showing what they're owed

If you change a split after generating statements, past statements remain unchanged -- they're snapshots of the split at the time they were created. Only future statements use the updated percentages.

## Tips

- **Name stakeholders clearly.** When you generate payout statements, the stakeholder name is what appears on the statement. "DJ Marco" is more useful than "Producer" when you have multiple releases with different producers.
- **One line per person.** Even if two people share the same role, give each their own split entry. This way they each get their own payout statement.
- **Splits are per-release.** The same artist can have different split percentages on different releases. There's no global default -- configure each release based on its specific deal.
- **Percentages must total 100%.** The system won't let you save splits that don't add up. If you're getting an error, check that all percentages sum to exactly 100.
