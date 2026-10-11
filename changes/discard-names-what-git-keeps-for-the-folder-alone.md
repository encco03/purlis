### Changed

- **Discard names what git keeps for a task's folder alone.** Before it removes the folder of a
  task's own branch, the question now lists the refs only that folder has, its own
  `config.worktree` and the commits only its history of HEAD holds, all of which go with it,
  or says that purlis could not read them. A change in them since the question refuses the
  Discard and says so (#1472).
