### Security

- **A chat purlis wraps (opencode, Codex) never writes the folder that holds its hook socket.**
  It already could not where the socket sits in the project's state folder; now the wrap holds
  the folder itself wherever the app put the socket, as a Claude Code chat's settings do (#1408).
