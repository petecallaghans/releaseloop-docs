---
title: Artist Statements
description: Batch-generate branded royalty statements for all your artists, deliver them by email with a PDF attachment, and give artists a portal to view their history.
---

When royalties come in from your distributors, artist statements are how you close the loop. Instead of generating payout info release by release, statements roll up everything an artist earned across your entire catalogue for a given date range -- then package it into a branded PDF you can email directly from ReleaseLoop.

:::note
Artist statements require a **Team** or **Label** plan.
:::

## Overview

The Statements tab (within Royalties) lets you:

- **Batch-generate drafts** for all artists at once, based on a date range you choose
- **Review and edit** each draft before sending
- **Send branded PDFs** by email, with a link to the artist's personal portal
- **Track payment status** and send payment confirmation emails when you mark statements as paid
- **Customise branding** so statements look like they came from your label, not generic software

## Setting up branding

Before you send your first statement, take a few minutes to configure your workspace branding. This controls how the PDFs and emails look.

1. Go to **Settings** and find the **Branding** section
2. Upload your label **logo** -- this appears at the top of every PDF and in outgoing emails
3. Set your **primary and secondary colours** to match your label's visual identity
4. Add **footer text** -- typically your company name, website, and contact info
5. Write your **terms text** -- any standard terms or disclaimers you want on every statement
6. Set a **default notes template** -- boilerplate notes you want pre-filled on every new statement (you can edit per-statement before sending)

Branding is per-workspace, so if you manage multiple labels under separate workspaces each one can have its own look.

## Generating statements

1. Go to **Royalties > Statements**
2. Click **Generate Statements**
3. Select your **date range** -- the system will roll up all royalty revenue across all releases that falls within this period
4. Review the generated drafts -- one per artist with a royalty split on any release

Each draft shows the artist name, the total amount owed for the period, and a breakdown by release. At this point nothing has been sent -- drafts are for your review.

:::note
Statement amounts are calculated from matched royalty imports. Make sure you've imported all relevant distributor CSVs before generating. See [Royalty Imports](/financials/royalty-imports/) for details.
:::

## Generating PDFs

Once you're happy with a draft, you can generate the PDF. This creates a branded document using your workspace branding settings, including:

- Your logo and colours
- The artist's name and statement period
- Breakdown of earnings by release
- Your footer text and terms

PDFs are generated client-side and can be downloaded directly for your own records, or sent to the artist via email.

## Sending statements

To send a statement to an artist:

1. Open the draft
2. Review the amounts and add any notes (the default notes template pre-fills this for you)
3. Click **Send Statement**

The artist receives an email containing:

- A summary of what they're owed and for which period
- The branded PDF as an attachment
- A **portal link** so they can view their full statement history

Each email includes a fresh 6-digit PIN that the artist uses to access their portal. You don't need to manage passwords or set up artist accounts -- the PIN handles authentication automatically.

### Where the email goes

Statements are sent to the email address on the artist's split entry. For artists on your roster, this is pulled from their artist profile. For custom stakeholders (producers, writers, etc.) added directly to a split, you enter the email manually when setting up the split. See [Royalty Splits](/financials/royalty-splits/) for details on the email field.

If a split entry has no email, the workspace owner's email is used as a fallback -- but it's worth making sure each stakeholder has their own email set so statements reach the right person.

## The artist portal

The artist portal is a public page where artists can access all the statements you've sent them. When an artist clicks the portal link in their email:

1. They're prompted to enter their 6-digit PIN (included in the email)
2. Once authenticated, they see their full statement history
3. They can view each statement online or download the PDF

The portal is read-only -- artists can view and download, but can't modify anything. Each time you send a new statement, the email contains a fresh PIN for that session.

## Marking as paid

When you pay out an artist -- by bank transfer, PayPal, or however you handle it -- you can mark the statement as paid in ReleaseLoop:

1. Open the statement
2. Click **Mark as Paid**
3. Optionally add a payment reference or note

When you mark a statement as paid, the artist automatically receives a payment confirmation email. This gives them a record of the payment without any extra effort on your part.

The Statements tab shows the payment status of every statement at a glance, so you always know what's outstanding.

## Tips

- **Generate for all artists at once.** The batch generation flow creates drafts for every artist with a split in your date range. Review them all before sending any -- it's easier to catch discrepancies when you can compare across artists side by side.
- **Set up branding first.** Statements sent before you configure branding will use default styling. It only takes a few minutes to add your logo and colours, and it makes a real difference to how professional the statements look.
- **Use the default notes template.** If you always include the same payment terms or instructions, put them in the template so you don't have to type them every time.
- **Check the email field on splits.** If a stakeholder doesn't have an email set, they won't receive their statement directly. See [Royalty Splits](/financials/royalty-splits/) for how to add emails to split entries.
