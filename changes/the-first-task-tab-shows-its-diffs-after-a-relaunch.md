### Fixed

- **The First task tab shows each chat's diff after a relaunch.** A chat started before purlis
  was relaunched was shown as started, on its branch, but without **Show its diff**. purlis now
  reads back from the clone the commit the branch was cut from, and offers the diff again, or
  says why it cannot (#945).
