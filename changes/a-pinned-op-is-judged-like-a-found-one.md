### Security

- **The `op` a stored token was pinned to is judged at every read, as a found one is.** A vault
  whose token is kept in the keyring runs only the `op` pinned when the token was stored. That
  pin is now held to the same rule as an `op` purlis looks up: it is refused, and not run, when
  it or the file it points to is where a chat may write, including a folder the reading chat was
  let write, or when the pin is not a whole path. The refusal says where purlis looks for `op`
  rather than asking for purlis to be started from a shell (#1517).
