---
title: MCP example prompts
description: Prompts you can paste into Claude, Muse, or Grok after you connect ReleaseLoop with an API key from Settings.
---

These prompts assume you already connected the assistant with an API key from [Settings → Integrations](/integrations/mcp/). Paste them into Claude, Muse, or Grok. ChatGPT's connector still needs an OAuth consent flow this server does not offer, so the ChatGPT prompts apply only after that login works.

If you belong to more than one workspace, name the one you mean. The assistant will not guess.

## Claude

List what you can see.

```text
Open my workspace, then list the scheduled releases. If I belong to more than one, stop and ask which workspace.
```

Open one release.

```text
Open the release titled Night Bus. Summarize the tracks, open tasks, marketing, and budget. If you cannot see marketing or budget, tell me I do not have access to that section.
```

Create a draft, then try again without making a second copy.

```text
Create a draft release titled Night Bus for artist Ada, out on 16 October 2026. Then try to create that same release again, and tell me whether you made a new one or kept the first.
```

Add a task on that release.

```text
On the Night Bus release, add a Marketing task called Pitch playlists. Leave it to do. Keep it on the release, not on the artist.
```

## ChatGPT

Use these only after ChatGPT can sign you in. An API key does not complete that step. The requests are the same ones you would give Claude.

```text
List my ReleaseLoop workspaces. Then list the contacts in the workspace I name. If I am not allowed to see contacts, say so. Do not make up any contacts.
```

```text
Move the Night Bus release to scheduled. Leave deal terms, owner share, and files alone. If you cannot change something, stop and tell me what it was.
```

## Muse

Muse uses the hosted URL and the API key from Settings.

```text
Show the royalty imports in my workspace. If I cannot see royalties, stop. If I can, open one import and summarize the rows that matched a release. Leave the raw file alone.
```

```text
Add a to-do called Book photographer. It is not tied to a release, an artist, or a contact, and it starts as to do. Then mark it in progress. Do not give it a phase. Phases belong on release tasks.
```

## Grok

```text
Find artists whose name contains Ada. Then create a draft release called Harbor Lights for 1 November 2026 for that artist, and put their name on the release. If I have two workspaces, ask which one before you create it.
```

```text
Show the to-do tasks on the Harbor Lights release. If there is a mastering task, mark it done. Do not delete anything.
```
