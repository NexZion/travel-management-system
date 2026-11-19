const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const pgDump = "C:\\Program Files\\PostgreSQL\\18\\bin\\pg_dump.exe";

const line = fs.readFileSync(".env", "utf8")
  .split(/\r?\n/)
  .find(line => /^\s*DATABASE_URL\s*=/.test(line));

if (!line) {
  console.error("DATABASE_URL not found in .env");
  process.exit(1);
}

const raw = line.split("=").slice(1).join("=")
  .trim().replace(/^["']|["']$/g, "");

let db;
try {
  db = new URL(raw);
} catch {
  console.error("Invalid DATABASE_URL");
  process.exit(1);
}

const backupDir = path.resolve("backups");
fs.mkdirSync(backupDir, { recursive: true });

const backupFile = path.join(
  backupDir,
  `travel_management_${new Date().toISOString().replace(/[:.]/g, "-")}.dump`
);

const result = spawnSync(pgDump, [
  "--host", db.hostname,
  "--port", db.port || "5432",
  "--username", decodeURIComponent(db.username),
  "--dbname", decodeURIComponent(db.pathname.slice(1)),
  "--format=custom",
  "--no-password",
  `--file=${backupFile}`
], {
  encoding: "utf8",
  env: {
    ...process.env,
    PGPASSWORD: decodeURIComponent(db.password)
  }
});

if (result.status === 0) {
  console.log("BACKUP SUCCESSFUL");
  console.log("File:", backupFile);
  console.log("Size:", fs.statSync(backupFile).size, "bytes");
} else {
  console.error("BACKUP FAILED");
  if (result.stderr) console.error(result.stderr);
  process.exit(result.status || 1);
}
