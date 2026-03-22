---
title: Spotify Integration
description: How ReleaseLoop uses Spotify to enrich artist profiles.
---

ReleaseLoop integrates with the Spotify API to enrich artist profiles with up-to-date data.

## What gets synced

When you add or refresh an artist from Spotify, ReleaseLoop pulls:

- **Profile photo** -- the artist's Spotify profile image
- **Follower count** -- current number of Spotify followers
- **Popularity score** -- Spotify's 0-100 popularity metric
- **Spotify ID** -- used for ongoing sync

## Adding artists from Spotify

When creating a new artist:

1. Click **Add Artist**
2. Type the artist name in the search field
3. Select the correct artist from Spotify results
4. The profile is created with Spotify data pre-populated

## Bulk refresh

If you have artists that were created manually or haven't been synced recently:

1. Go to the **Artists** page
2. Click **Refresh from Spotify** (available for admin/owner roles)
3. All un-enriched artists with matching Spotify profiles will be updated

## Discography import

From an artist's detail page (Discography tab), you can import their Spotify discography. This creates release entries for their albums, EPs, and singles.

## No Spotify account required

You don't need to connect a personal Spotify account. The integration uses Spotify's public API to search for and retrieve artist data.
