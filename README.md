# Commit Log

A small cheat sheet of git commands worth knowing, built while learning git.

**Live site:** [maripirs.github.io/ghtest](https://maripirs.github.io/ghtest/)

## Run it locally

No build step. Open `index.html` in a browser, or serve the folder so it
behaves like the live site:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Files

| File | What it does |
|------|--------------|
| `index.html` | Page content: header, command list, workflow, glossary |
| `style.css` | Layout, colors, light and dark themes |
| `script.js` | Splits each command into name and description, filtering, click to copy |

Each command in the list is one line in `index.html`, written as
`git name: description`. `script.js` splits the line on the first colon.

## How we work

1. Pull main before starting: `git switch main && git pull`
2. Make a branch for your change: `git switch -c short-description`
3. Commit in small steps, then push the branch: `git push -u origin short-description`
4. Open a pull request and ask for a review
5. After the merge, go back to step 1

Nothing technically blocks pushing to `main`, but we don't. Every change goes
through a pull request, and merging to `main` updates the live site within a
minute or two.

## Roadmap

These come in as issues, one pull request each.

1. Expandable rows that show a usage example for each command
2. Move the commands into a data file and render the list from it
3. A theme toggle that remembers your choice
4. A "Which command do I need?" quiz page
5. Basic tests and a GitHub Actions check on pull requests
