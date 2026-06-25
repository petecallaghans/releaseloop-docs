---
title: Importing Contacts from CSV
description: Bulk-import your existing contact list from a CSV file, with column mapping, duplicate skipping, and category matching.
---

If you already keep your industry contacts in a spreadsheet, you can bring them into ReleaseLoop in one go instead of adding them one at a time. The CSV importer maps your spreadsheet columns to contact fields, skips duplicates, and adds everyone in a single step.

## Importing a file

1. Go to the **Contacts** page
2. Click **Import CSV**
3. Drop a `.csv` file onto the upload area (or click to browse)
4. Map your columns, review the preview, and confirm

Comma, semicolon, and tab-delimited files are all supported -- the importer detects the delimiter automatically. Export directly from your spreadsheet tool as CSV for best results.

### Starting from the template

If you're building your list from scratch, click **Download template** on the upload screen. It gives you a CSV with every supported column already named correctly, plus a couple of example rows to follow. Fill in your contacts, delete the examples, and upload it back -- the columns map themselves.

## Mapping columns

After upload, you match each column in your file to a ReleaseLoop contact field. The importer auto-suggests a mapping based on your column headers (for example, a column called "E-mail Address" maps to **Email**), so most files need little or no adjustment. Anything you don't want to import, set to **Skip**.

Every row needs a **Name**, but you can supply **First Name** / **Last Name** instead and the importer will build the Name from them. Every other field is optional:

| Field | Notes |
|-------|-------|
| Name | Required, but see First/Last below. Rows with no name are skipped. |
| First Name, Last Name | Optional. If a row has these but no Name column, the importer builds the Name from them, so a first/last-only file still imports. |
| Email | Used to detect duplicates. |
| Phone, Company, Role | Plain text. |
| Category | Matched to your category list -- see below. |
| Relationship Status | Unrecognized values default to **New**. |
| Genres, Platforms | Put multiple values in one cell, separated by commas, semicolons, or pipes (e.g. `hip-hop, electronic`). |
| Instagram, Twitter/X, LinkedIn, Website | Profile URLs. |
| Notes | Free text. |

## Matching categories

If your file has a category column, you map each distinct value in it to one of ReleaseLoop's categories. The importer pre-fills obvious matches; any value you leave unmapped (or that ReleaseLoop doesn't recognize) is imported as **Other**, so nothing is ever rejected for an unknown category. You can re-categorize contacts at any time after importing.

## Duplicates

Before importing, ReleaseLoop checks each row's email against your existing contacts. Any row whose email already exists in the workspace is skipped, and duplicate emails within the file itself are skipped too. Rows without an email are always imported (they can't be matched against anything).

The preview shows exactly how many rows will import, how many were skipped as duplicates, and how many were skipped for having no name -- before you commit.

## Plan limits

Imports respect your plan's [contact limit](/contacts/managing-contacts/#plan-limits). If your file has more contacts than your remaining space, ReleaseLoop imports as many as will fit and leaves the rest out -- the preview tells you how many were deferred. To bring in the remainder, upgrade your plan and run the import again; the duplicates already imported will be skipped automatically.

## Tips

- Export from your spreadsheet tool as CSV -- avoid pasting data into the file by hand
- Include a header row; the importer uses it to suggest column mappings
- Keep one contact per row
- If you're close to your plan limit, trim your file or upgrade first so nothing is left behind
