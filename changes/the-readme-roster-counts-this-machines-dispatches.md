### Changed

- **The README's persona roster counts the dispatches this machine recorded.** `purlis docs
  generate` now adds the dispatch records purlis keeps on this machine (never committed, kept
  30 days) to the committed dispatch log's count, the sum `purlis persona stats` shows, so the
  block moves again since a persona became a chat of its own. The headline says the count is
  the one the machine that last regenerated the block took. Where the records cannot be read,
  as in a sandboxed chat, the block is left as it was and the command says so and exits 1
  (#1460).
