import { useEffect, useState } from "react";
import { Lock } from "lucide-react";

import { commands, type PlaneId, type ReadOnlyProject } from "./bindings";
import { SETTINGS, usePlaneChanged } from "./planeChanged";

/**
 * Why this purlis opens `plane` read-only, or null when it may write it (#826, FR-24).
 *
 * Asked at the mount and again whenever the project's own files change (`SETTINGS` is what a
 * change to its manifest concerns), since a pull that adds a `requires` entry makes the project
 * read-only from that moment. A window that cannot ask says nothing: the core refuses every
 * write of a committed file whatever the window shows, so silence never lets one through.
 *
 * Every action that writes a committed project file is disabled with `sentence` as its reason.
 */
export function useReadOnly(plane: PlaneId): ReadOnlyProject | null {
  const changes = usePlaneChanged([plane], SETTINGS);
  // Kept with the project it is about, so another project's tab never shows it for a moment.
  const [read, setRead] = useState<{ plane: PlaneId; readOnly: ReadOnlyProject | null }>();
  useEffect(() => {
    let gone = false;
    void commands
      .projectReadOnly(plane)
      .then((answer) => {
        if (!gone && answer.status === "ok") setRead({ plane, readOnly: answer.data });
      })
      .catch(() => undefined);
    return () => {
      gone = true;
    };
  }, [plane, changes]);
  return read?.plane === plane ? read.readOnly : null;
}

/**
 * The project tab's one sentence when this purlis opens it read-only: which feature is missing
 * and which version has it. Said once, in the tab; the disabled actions repeat it as their
 * reason. Nothing is drawn for a project this purlis may write.
 */
export function ReadOnlyLine({ readOnly }: { readOnly: ReadOnlyProject | null }) {
  if (!readOnly) return null;
  return (
    <p className="read-only-line" role="note" aria-label="Read-only project">
      <Lock aria-hidden="true" />
      <span>{readOnly.sentence}</span>
    </p>
  );
}
