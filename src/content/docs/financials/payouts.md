---
title: Payout Statements
description: Generate payout statements for your artists based on imported royalty data so you can reconcile what's owed each quarter.
---

:::note
**Looking for artist statements?** The newer [Artist Statements](/financials/artist-statements/) feature is the recommended way to handle royalty payouts. It batch-generates branded PDF statements across all artists, delivers them by email, and gives artists a portal to view their history. It's available on all paid plans (Solo gets 3 per quarter; Team and above get unlimited statements).

This page covers the per-release payout view, which is useful for reviewing individual release financials.
:::

If you run a label or manage multiple artists, you know the drill: royalties come in from distributors, and you need to figure out who gets what. Payout statements in ReleaseLoop take the royalty data you've already imported and calculate what's owed to each artist -- so you can stop wrestling with spreadsheets and start sending accurate statements on a regular schedule.

:::note
Payout statements require a **Label** plan.
:::

## Overview

The Payouts section (within Royalties) gives you:

- **Summary cards** showing total royalties collected and current payout status at a glance
- **Statement generation** for specific periods -- monthly, quarterly, or whatever cadence you use
- **Payout history** so you have a clear paper trail of every statement you've issued

## Generating a payout statement

1. Go to **Royalties > Payouts**
2. Click **Generate Statement**
3. Select the period you're paying out for (e.g., Q4 2025) and which artists to include
4. Review the calculated amounts -- these are derived directly from the royalty data you've imported via CSV
5. Confirm to create the statement

The amounts are based entirely on matched royalty imports, so the accuracy of your payouts depends on the quality of your imported data. If you're seeing numbers that look off, check that the relevant distributor CSVs have been imported and that ISRCs and UPCs are matching correctly.

## Payout history

Every statement you generate is saved and accessible from the Payouts tab. Each one records:

- **Period covered** -- the date range the statement accounts for
- **Artists included** -- which artists appear on the statement
- **Total amount** -- the sum owed across all included artists
- **Statement date** -- when the statement was created

This gives you a complete audit trail. When an artist or their manager asks about a past payout, you can pull up the exact statement instead of digging through old emails or spreadsheets.

## Getting accurate payouts

Payout accuracy is only as good as the data feeding into it. Before generating statements, make sure you have:

- **[Imported royalty CSVs](/financials/royalty-imports/)** from all your distributors for the period you're paying out. If you use multiple distributors, import each one -- revenue won't appear until the CSV is in the system.
- **ISRCs on every track** -- this is how distributor earnings get matched to specific recordings and, by extension, to the right artist. Missing ISRCs mean missing revenue in payout calculations.
- **UPCs or catalogue numbers on every release** -- these serve as fallback identifiers when revenue is reported at the release level rather than the track level.

Taking a few minutes to verify your metadata before generating statements will save you from uncomfortable corrections later.
