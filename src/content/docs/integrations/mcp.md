---
title: AI assistants (MCP)
description: Create a named API key in Settings → Integrations and connect Claude, Muse, or Grok with the hosted MCP URL. ChatGPT cannot connect until OAuth consent exists.
---

An AI assistant can read your ReleaseLoop workspace and create or update releases and tasks. It uses your account, so it can only see and change what you can.

## Create a key

1. Open [Settings](https://app.releaseloop.com/settings).
2. Go to **Integrations**.
3. Name the key (for example, "Claude on my laptop") and click **Create key**.
4. Copy the secret. ReleaseLoop shows it once.

The secret starts with `rl_mcp_`. If you lose it, rotate the key on this same screen. The list keeps the name and the prefix. It does not show the secret again.

## Connect Claude, Muse, or Grok

Use this server URL:

```text
https://mcp.releaseloop.com
```

Send this header with every request. Replace `rl_mcp_…` with the secret you copied:

```text
Authorization: Bearer rl_mcp_…
```

Claude Desktop, Muse, and Grok take the same config. The Integrations screen has a copy button for it.

```json
{
  "mcpServers": {
    "releaseloop": {
      "type": "http",
      "url": "https://mcp.releaseloop.com",
      "headers": {
        "Authorization": "Bearer rl_mcp_…"
      }
    }
  }
}
```

Restart the client after you save. Ask it to list your workspaces. A successful reply names the workspaces your account belongs to. If you belong to more than one, name the workspace before it writes.

## Revoke or rotate

On **Settings → Integrations**, each active key has **Rotate** and **Revoke**.

**Revoke** stops that key on the next request. Assistants still holding it can no longer read or change your workspace.

**Rotate** issues a new secret, shown once, and the previous secret stops working. Paste the new secret into the client.

## ChatGPT

ChatGPT connectors sign in with OAuth. This server does not offer that login, so ChatGPT cannot use an API key yet. Claude, Muse, and Grok can.

The [ChatGPT example prompts](/integrations/mcp-prompts/#chatgpt) apply only after that login exists.

## What the assistant can do

It can look up your workspaces, artists, releases, tasks, contacts, and royalty imports. On one release it can summarize credits, tracks, tasks, marketing, and budget. For royalties, it can open one import and summarize the rows that matched a release. It does not return the raw royalty file.

It can create and update releases and tasks. It cannot delete anything. It will not change deal terms or file links.

If you belong to more than one workspace, name the workspace. The assistant will not guess.

If you are not allowed to see contacts, royalties, marketing, or budget, it tells you that section is hidden. An empty section you are allowed to see means there is nothing there yet.

If you ask it to create the same release or task again, it keeps the first one instead of making a copy.

Release statuses are draft, scheduled, released, and archived. Task statuses are to do, in progress, done, and approved. A phase belongs on a release task.

## Example prompts

See [Example prompts](/integrations/mcp-prompts/) for requests you can paste once the client is connected.
