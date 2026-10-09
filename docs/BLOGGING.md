# Posting to the TNN blog (no coding needed)

Posts are simple text files in `src/content/blog/`. Saving one to `main` publishes it automatically in about a minute.

## What to write, and how often

- **Cadence:** 2 posts a month. One solid, useful post beats several quick ones.
- **Topics** (TNN's consulting pillars plus AI):
  - **Impact Auditing**: measuring the value systems and leaders actually create.
  - **Utility Optimization**: removing noise so people can focus on higher-level service.
  - **Legacy Architecture**: systems and governance that outlast the leader.
  - **Practical AI adoption**: where AI genuinely helps a team, and how to adopt it responsibly.
- Tag articles like these `Insight`; use `Network Update` for TNN news and announcements.

## Write and publish a post

1. Open https://github.com/Top-Notch-Network/Top-Notch-Network.github.io and sign in.
2. Click into `src` → `content` → `blog`.
3. Open `_template.md`, click the **copy raw file** button (two overlapping squares) and go back to the `blog` folder.
4. Click **Add file → Create new file**.
5. Name it after the post, lowercase with dashes, ending in `.md`, e.g. `leading-through-change.md`.
   The name becomes the address: `top-notchnetwork.com/blog/leading-through-change/`.
6. Paste the template and fill in the part between the `---` lines:
   - `title`, `date` (YYYY-MM-DD) and `summary` are required.
   - `tags`: exactly one of these two, spelled exactly like this:
     `["Insight"]` for articles and ideas, or `["Network Update"]` for news about TNN and the network.
     Any other tag stops the build (see "If the build fails").
   - `draft: true` keeps it hidden. Set `draft: false` when you're ready to publish.
7. Write the post below the second `---`. Leave a blank line between paragraphs, start headings with `## `, bullets with `- `.
   Use the **Preview** tab to check it.
8. Click **Commit changes…**, keep "Commit directly to the `main` branch", and click **Commit changes**.
9. Wait about a minute, then open https://top-notchnetwork.com/blog/ (refresh if needed).
   You can watch progress under the repo's **Actions** tab: a green check means it's live.

To edit a post later, open its file, click the pencil icon, change it and commit again.

## Add a cover image

1. Go to `src/content/blog/images/` and click **Add file → Upload files**.
   Use a JPG or PNG about **1600 × 840** (wide); keep it under ~1 MB. Use a simple file name, e.g. `leading-through-change.jpg`.
2. Commit the upload to `main`.
3. In your post, add (or uncomment) these lines between the `---` lines:
   ```
   cover: ./images/leading-through-change.jpg
   coverAlt: "One sentence describing the image"
   ```
The cover appears on the blog page, at the top of the post, and as the preview image when the link is shared.
Posts without a cover use the standard TNN preview image.

## Drafts

- `draft: true`: the post is **not** published (it won't appear on the site, in the RSS feed or the sitemap). It only shows when a developer runs the site locally.
- `draft: false`: the post goes live on the next commit.
- Files whose names start with `_` (like `_template.md`) are never published.

## Comments

The blog has no comment section, and none is planned. Readers who want to respond can use the contact page (every post ends with a link to it).

## If the build fails

If the Actions tab shows a red ✗, the site keeps showing the last good version; nothing breaks for visitors.

1. Click the failed run, then the failed step, and look for a line mentioning your file, e.g.
   `blog → my-post data does not match collection schema` followed by the field that's wrong.
2. Common fixes:
   - **title / summary missing or empty**: fill them in, inside quotes.
   - **date**: must be `YYYY-MM-DD`, e.g. `2026-11-03`.
   - **tags**: `Tag must be exactly "Network Update" or "Insight"` means a typo in the tag; `tags: Required` means the line is missing.
     Use `["Insight"]` or `["Network Update"]` (quotes, square brackets, same capital letters).
   - **cover image not found**: the file name and folder in `cover:` must match the uploaded file exactly (capital letters matter).
   - **YAML error**: usually a missing quote or a colon inside a title. Put the title in double quotes.
   - Make sure the file starts and the settings block ends with a line of exactly `---`.
3. Fix the file, commit again and wait for the green check. Still stuck? Send the link to the failed run to the CITO.
