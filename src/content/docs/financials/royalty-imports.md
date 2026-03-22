---
title: Royalty Imports
description: Import royalty CSVs from DistroKid, TuneCore, CD Baby, and other distributors, then automatically match earnings to your releases and tracks.
---

Distributors send you royalty statements as CSV files, but making sense of them -- especially across multiple distributors, hundreds of tracks, and several reporting periods -- is a headache. ReleaseLoop lets you import those CSVs directly and automatically matches each row to the right release and track so revenue shows up where it belongs.

:::note
Royalty imports require a **Team** or **Label** plan.
:::

## How it works

1. Export a royalty or sales report CSV from your distributor (DistroKid, TuneCore, CD Baby, Ditto, AWAL, Stem, The Orchard -- any distributor that provides CSV exports)
2. Import it into ReleaseLoop
3. Map the distributor's column headers to ReleaseLoop fields using the column mapper
4. ReleaseLoop matches each row to your releases and tracks using ISRCs, UPCs, and catalogue numbers
5. Matched revenue automatically appears in each release's Financials tab

## Importing a CSV

1. Go to the **Royalties** section from the sidebar
2. Click **Import CSV**
3. Select your CSV file
4. The column mapper will appear

## Column mapping

Every distributor formats their CSV differently -- what DistroKid calls "ISRC" might be "Track ISRC" in TuneCore or buried in a differently named column in CD Baby. The import wizard displays your CSV's columns and lets you map each one to the corresponding ReleaseLoop field:

- **ISRC** -- the International Standard Recording Code for track-level matching. This is the most reliable identifier because it's unique to each recording.
- **UPC** -- the barcode number on your release, used for release-level matching
- **Catalogue number** -- your internal catalogue number, used as a fallback for release matching
- **Revenue/Amount** -- the earnings amount for each row
- **Currency** -- the currency the earnings are reported in
- **Period** -- the reporting period (month, quarter, etc.)

ReleaseLoop auto-suggests mappings for common distributor formats so you usually won't need to map every column manually. But if your distributor uses non-standard headers, you can adjust the mappings yourself.

## Matching logic

Once columns are mapped, ReleaseLoop matches each row to your catalogue using this priority order:

1. **ISRC** -- matched to a track, which links to its parent release. ISRCs are how distributors identify your recordings -- without them, royalty revenue can't be matched at the track level.
2. **UPC** -- matched directly to a release. This catches revenue reported at the release level rather than the track level.
3. **Catalogue number** -- matched directly to a release using your internal numbering system.

For the best match rates, make sure your releases have UPCs and catalogue numbers filled in, and that every track has its ISRC entered. You'll find these fields on the release detail page and in each track's settings. If your match rate is low after an import, missing ISRCs or UPCs are almost always the reason.

## Unmatched rows

Rows that can't be matched to any release or track are stored as **unmatched**. This happens when:

- An ISRC or UPC in the CSV doesn't exist in your ReleaseLoop catalogue yet
- The distributor reports revenue for a track you haven't added
- There's a typo or formatting difference in the identifier

You can handle unmatched rows by:

- Viewing them in the **Unmatched** tab
- Manually linking them to the correct release or track
- Coming back later after you've added the missing release -- the unmatched rows will be waiting for you

This is particularly useful when royalties arrive before you've had a chance to set up the corresponding release in ReleaseLoop, which happens often when back-catalogue earnings come through.

## Import history

The **Imports** tab keeps a full record of every import you've run:

- File name and import date
- Number of rows imported
- Number of matched vs. unmatched rows

Use this to keep track of which reporting periods you've already imported and to spot any imports with unusually high unmatched counts that might need attention.
