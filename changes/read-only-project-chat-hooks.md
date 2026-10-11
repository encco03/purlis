### Fixed

- **A chat writes nothing committed to a project this purlis may only read.** In a project
  that requires a feature this purlis lacks, or declares a newer format, a chat's hooks no
  longer log its skill uses into `personas/_skills/`. A session record, memory, a todo, a
  workspace's manifest, vision or sections, and a handoff's row in the dispatch log are each
  refused, saying nothing was written and why, whichever way the write was asked for. Every
  guard still refuses what it refused before. The window says so in the project's tab before a
  release carries this rule (#826).
