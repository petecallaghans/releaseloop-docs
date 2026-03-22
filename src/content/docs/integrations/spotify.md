---
title: Spotify
description: How ReleaseLoop uses Spotify to enrich your artist profiles.
---

ReleaseLoop uses the Spotify API to enrich artist profiles with photos, follower counts, and popularity metrics. No Spotify account connection is required.

## What Spotify provides

When you add or refresh an artist via Spotify:

- **Profile photo** -- automatically set as the artist's avatar
- **Follower count** -- current Spotify followers
- **Popularity score** -- Spotify's 0-100 metric based on streaming activity
- **Spotify link** -- direct link to the artist's Spotify profile

## How to use it

### When adding artists
Search for an artist name during the "Add Artist" flow. Select the correct match from Spotify results to auto-populate the profile.

### Refreshing existing artists
From the Artists page, use the **Refresh from Spotify** button to bulk-update all artists that haven't been enriched yet.

### Importing discography
From an artist's detail page, go to the **Discography** tab and import their Spotify catalog to create release entries.

## No account connection needed

Unlike Google Drive, Spotify integration works automatically using Spotify's public API. You don't need to connect a Spotify account or grant any permissions.

## Data freshness

Artist data is fetched at the time of creation or refresh. To get updated follower counts and popularity scores, use the bulk refresh feature periodically.
