### Security

- **The handoff, consent and operator-rule checks read every level of a shell string.** A
  command a shell is handed as a string, and that string hands on to another shell, is now read
  at every level up to the nesting limit, and refused past it. That covers a `-c` string inside
  a `-c` string, a heredoc fed to a shell, a script piped or given as a here-string to a shell,
  and the command a `find -exec` runs. The handoff check also reads a `case` branch and a shell
  function the command defines. The three checks read one way, and they agree on a script a
  string writes to a file: each refuses it. A test runs every shape through bash and zsh to
  confirm which ones really run the command (#1426, #1419).
- **A helper's dispatch is seen in the same places.** The check that refuses a dispatch from a
  helper, and the one that refuses a dispatch's text beside a live substitution, read every
  level a shell is handed a text at, the same way (#1582).
- **More of what a project's hooks load is protected from a chat.** A colon list in a
  variable (`PYTHONPATH=./a:./b`) is read part by part. A bare name Node, gawk or Ruby looks up
  along `NODE_PATH`, `AWKPATH` or a `-I` folder is protected there too (#1425).
