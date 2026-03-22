---
title: Royalty Imports
description: How to import distributor royalty CSV files and match them to your releases.
---

ReleaseLoop lets you import royalty statements from any distributor as CSV files and automatically matches them to your releases and tracks.

:::note
Royalty imports require a **Team** or **Label** plan.
:::

## How it works

1. Export a royalty/sales report CSV from your distributor
2. Import it into ReleaseLoop
3. Map the distributor's columns to ReleaseLoop fields
4. ReleaseLoop matches rows to your releases and tracks
5. Revenue appears in release financials

## Importing a CSV

1. Go to the **Royalties** section from the sidebar
2. Click **Import CSV**
3. Select your CSV file
4. The column mapper will appear

## Column mapping

Distributors all use different column names. The import wizard shows your CSV's columns and lets you map them to ReleaseLoop fields:

- **ISRC** -- maps to track ISRC for track-level matching
- **UPC** -- maps to release UPC for release-level matching
- **Catalogue number** -- maps to release catalogue number
- **Revenue/Amount** -- the earnings amount
- **Currency** -- the currency of the earnings
- **Period** -- the reporting period

ReleaseLoop auto-suggests mappings for common distributor formats, but you can adjust them manually.

## Matching logic

Once columns are mapped, ReleaseLoop matches each row to your releases using this priority:

1. **ISRC** -- matched to a track, which links to its release
2. **UPC** -- matched directly to a release
3. **Catalogue number** -- matched directly to a release

For best results, make sure your releases and tracks have ISRCs, UPCs, and catalogue numbers filled in.

## Unmatched rows

Rows that can't be matched to any release or track are stored as **unmatched**. You can:

- View all unmatched rows in the **Unmatched** tab
- Manually link them to a release or track retroactively
- This is useful when you import royalties before creating the corresponding release

## Import history

The **Imports** tab shows all previous imports with:

- File name and import date
- Number of rows imported
- Number of matched vs. unmatched rows

You can review past imports at any time.
