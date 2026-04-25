# Privacy-First Design

## The Claim

Every GoWin Tools page says: "Everything runs in your browser. Nothing is sent to any server."

This document explains what that means technically and why you can verify it.

## What "In the Browser" Actually Means

When you open a GoWin Tools page, the server sends you a static HTML file, CSS, and JavaScript. After that, the server is not involved. All tool logic — calculations, text processing, file parsing — runs inside your browser tab using the JavaScript engine built into your browser (Chrome's V8, Firefox's SpiderMonkey, etc.).

Your input never leaves your device over the network.

## What We Do Not Collect

| Data type | Collected? |
|---|---|
| Text you type into tools | No |
| Files you upload | No |
| Tool output / results | No |
| Your IP address (linked to tool use) | No |
| Browser fingerprint | No |
| Search terms that brought you here | No |
| Name, email, or any personal identifier | No |

## What We Do Collect

| Data type | Purpose |
|---|---|
| Page view count (per tool slug) | Understanding which tools are used |

A page view is a single integer increment associated with a URL path. It contains no personal data, no session ID, and no timestamp tied to you.

## How to Verify This

You do not need to trust this document. You can verify it:

1. Open any GoWin Tools page
2. Open your browser's DevTools → Network tab
3. Use the tool (type text, calculate something, upload a file)
4. Observe: no outbound network requests carrying your input

The only outbound requests you will see are:
- The initial page load (HTML, CSS, JS assets from Cloudflare CDN)
- The page view counter increment (URL slug only, no input data)

## Third-Party Scripts

GoWin Tools does not load:
- Google Analytics or Tag Manager
- Meta Pixel or any ad network SDK
- Hotjar, FullStory, or any session recording tool
- Any third-party authentication SDK

## File Uploads

Some tools (e.g., image metadata viewer, favicon generator) allow file uploads. These files are read by the browser's File API and processed entirely in JavaScript. The file bytes are never transmitted to a server.

## Local Storage

Some tools save preferences (e.g., recently used tools, pinned tools) in your browser's `localStorage`. This data lives only on your device and is never sent anywhere.

## Data Retention

Since we collect no personal data, there is nothing to retain, export, or delete. The privacy policy reflects this: we do not need a GDPR data export flow because we have no personal data to export.
