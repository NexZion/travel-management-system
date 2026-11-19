const fs = require("fs");

const line = fs.readFileSync(".env", "utf8")
  .split(/\r?\n/)
  .find(line => /^\s*DATABASE_URL\s*=/.test(line));

if (!line) {
  console.log("DATABASE_URL not found");
  process.exit(1);
}

const raw = line.split("=").slice(1).join("=").trim().replace(/^["']|["']$/g, "");

try {
  const u = new URL(raw);
  console.log("Host:", u.hostname);
  console.log("Port:", u.port || "5432");
  console.log("Database:", decodeURIComponent(u.pathname.slice(1)));
  console.log("Username:", decodeURIComponent(u.username));
  console.log("Password: [hidden]");
} catch (e) {
  console.log("URL parsing failed:", e.message);
}
