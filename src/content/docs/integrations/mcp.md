---
title: AI assistants (MCP)
description: Create an API key in Settings and connect Claude, Muse Code, or Grok to your ReleaseLoop workspace. ChatGPT still needs an OAuth consent flow this server does not provide.
---

An AI assistant can read your ReleaseLoop workspace and create or update releases and tasks. It acts as your account, so it only sees workspaces you belong to and the same areas you can already open in the app.

Connect it with an API key from Settings and the hosted ReleaseLoop MCP URL on that same screen. You do not clone the ReleaseLoop repository or run a local server.

## Create an API key

1. Open [ReleaseLoop](https://app.releaseloop.com).
2. Go to **Settings**.
3. Create an API key and copy it.

ReleaseLoop shows the full key once. Keep it in the client you are connecting. If you lose it, revoke that key and create another.

On that same screen, copy the hosted MCP URL and the name of the credential field your client should use. Paste the URL into the client. Paste the key into the field that screen names.

:::note
Use the server URL and the credential field name shown on the API key screen. This guide does not guess a header name. If Settings does not list a URL and a credential field yet, wait for that screen rather than inventing one.
:::

## Revoke or rotate a key

In **Settings**, revoke a key you no longer want a client to use. Revoking stops that key immediately. A client that still has the old key can no longer read or change your workspace.

To rotate, revoke the old key, create a new one, and paste the new key into the client in place of the old one.

## What the assistant can do

Read tools:

- `list_workspaces`
- `list_artists`
- `list_releases`
- `read_release` (credits, tracks, tasks, marketing activities, and budget for one release)
- `list_tasks`
- `list_contacts`
- `list_royalties` (pass an import id to include that import's rows)

Write tools:

- `create_release` and `update_release`
- `create_task` and `update_task`

Nothing can be deleted. Deal terms and file-storage ids are not in the results, and update tools reject them. Royalty raw file payloads are never returned.

If you belong to more than one workspace, name the workspace. The assistant must pass that workspace id. It will not guess.

Contacts, royalties, marketing activities, and budgets come back as `{ "access": "hidden" }` when you are not allowed to see that area and there is nothing to show. An empty section you are allowed to see means you can read it and there is nothing there.

Creates take an idempotency key, a UUID the assistant chooses. Repeating the same key with the same fields returns the original row. Changing the fields for that key returns a conflict, so a retry does not create a duplicate release or task.

Release statuses are `draft`, `scheduled`, `released`, and `archived`. Task statuses are `todo`, `in_progress`, `done`, and `approved`. Phase, required, and offset days apply only when a task is attached to a release.

## Claude

Claude Desktop, and other Claude clients that accept a remote MCP server, can use the hosted URL.

1. Add a remote MCP server.
2. Set the server URL to the hosted URL from Settings.
3. Paste the API key into the credential field that screen names.

Restart the client after you save. Ask it to list your workspaces. A successful reply names the workspaces your account belongs to.

Do not put your ReleaseLoop password in the Claude config.

## Muse

The consumer Muse app does not attach MCP servers. Muse Code does.

In Muse Code, add the hosted URL from Settings and paste the API key into the credential field that screen names. A missing or rejected key is rejected before any tool runs.

## Grok

Grok clients that can call a remote MCP server use the same hosted URL and the same API key. There is no separate Grok tool list.

If the client has no field for the key, it cannot use the hosted server. Do not put your password in the client config.

## ChatGPT

ChatGPT custom connectors expect a public HTTPS MCP endpoint and an interactive OAuth login, a consent screen where you approve access.

An API key does not complete that consent flow. This server does not include a consent page, and creating a key in Settings does not turn on ChatGPT's connector login. Do not follow a connector setup that treats a pasted key, or your password, as a finished OAuth sign-in.

Until that consent flow exists, use Claude, Muse Code, or Grok. The [ChatGPT example prompts](/integrations/mcp-prompts/#chatgpt) apply only after connector login works.

## Example prompts

See [Example prompts](/integrations/mcp-prompts/) for requests you can paste once the client is connected.
