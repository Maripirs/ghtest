// Turns each "git status: what's changed?" row into a command plus a
// description, lets visitors filter the list, and copies a command on click.
const items = [...document.querySelectorAll("#commands li")];
const search = document.getElementById("search");
const count = document.getElementById("count");

items.forEach((item) => {
  const text = item.textContent.trim();
  const colon = text.indexOf(":");
  const command = colon === -1 ? text : text.slice(0, colon);
  const description = colon === -1 ? "" : text.slice(colon + 1).trim();

  item.textContent = "";
  const code = document.createElement("code");
  code.textContent = command;
  item.append(code);

  if (description) {
    const desc = document.createElement("span");
    desc.className = "desc";
    desc.textContent = description;
    item.append(desc);
  }

  item.title = "Click to copy";
  item.addEventListener("click", () => copy(item, command));
});

async function copy(item, command) {
  try {
    await navigator.clipboard.writeText(command);
  } catch (error) {
    return;
  }
  const tag = document.createElement("span");
  tag.className = "copied-tag";
  tag.textContent = "Copied";
  item.append(tag);
  setTimeout(() => tag.remove(), 1200);
}

function updateCount(visible) {
  const noun = visible === 1 ? "command" : "commands";
  count.textContent = `Showing ${visible} of ${items.length} ${noun}. Click one to copy it.`;
}

search.addEventListener("input", () => {
  const query = search.value.trim().toLowerCase();
  let visible = 0;
  items.forEach((item) => {
    const match = item.textContent.toLowerCase().includes(query);
    item.hidden = !match;
    if (match) visible++;
  });
  updateCount(visible);
});

updateCount(items.length);
