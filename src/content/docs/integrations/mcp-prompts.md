---
title: MCP example prompts
description: Prompts you can paste into Claude, Muse Code, or Grok after you connect ReleaseLoop with an API key from Settings.
---

These prompts assume you already connected the assistant with an API key from [Settings](/integrations/mcp/). The tools are the same in every client. Connection is not. Claude, Muse Code, and Grok can use the hosted MCP URL and that key. ChatGPT's connector still needs the OAuth consent flow this build does not ship, so the ChatGPT prompts apply only after that login works.

Ask for one workspace by name when you belong to several. The server will not guess.

## Claude

List what you can see.

```text
Call list_workspaces, then list the scheduled releases in my only workspace. If I belong to more than one, stop and ask which workspace.
```

Open one release.

```text
Find the release titled Night Bus and call read_release. Summarize the tracks, open tasks, marketing activities, and budget. If marketing or budget says access hidden, say I cannot see that section.
```

Create a draft, then retry without duplicating it.

```text
Create a draft release titled Night Bus for artist Ada with release date 2026-10-16. Use idempotency key 6ba7b810-9dad-11d1-80b4-00c04fd430c8. Then call create_release again with the same key and the same fields, and tell me whether the outcome is created or existing.
```

Add a task on that release.

```text
Create a task named Pitch playlists on the Night Bus release. Put phase Marketing on the release context. Status todo. Use a new idempotency key. Do not attach the task to an artist.
```

## ChatGPT

Use these only after the connector can finish its own login and obtain access as you. Pasting an API key does not complete that step. The tool calls are the same as Claude.

```text
List my ReleaseLoop workspaces. Then list contacts in the workspace I name. If the result is access hidden, tell me I do not have contacts permission. Do not invent contact rows.
```

```text
Update the Night Bus release status to scheduled. Do not send deal terms, owner share, or file ids. If the tool rejects a field, stop and tell me which field.
```

## Muse Code

Muse Code uses the same tools against the hosted URL, with the API key from Settings.

```text
List royalty imports in my workspace. If they are hidden, stop. If they are visible, call list_royalties again with one import id and summarize matched rows. Do not ask for raw file contents.
```

```text
Create a workspace task named Book photographer with context type none, status todo, and a fresh idempotency key. Then update that task to in_progress. Do not set phase. Phase is only valid on a release task.
```

## Grok

```text
List artists whose name contains Ada. Then create a draft release titled Harbor Lights on 2026-11-01 using that artist id when you have one, plus the artist display name. Use idempotency key 6ba7b811-9dad-11d1-80b4-00c04fd430c8. If I have two workspaces, ask me which one before you write.
```

```text
Show tasks on the Harbor Lights release that are still todo. Mark the mastering task done if it exists. Do not delete anything. There is no delete tool.
```
