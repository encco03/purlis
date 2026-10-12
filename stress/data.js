window.BENCHMARK_DATA = {
  "lastUpdate": 1791810482347,
  "repoUrl": "https://github.com/purlis/purlis",
  "entries": {
    "stress (macos-latest)": [
      {
        "commit": {
          "author": {
            "email": "eyehollow@gmail.com",
            "name": "Aaron Yordanyan",
            "username": "dbrownsimple"
          },
          "committer": {
            "email": "aaron.yor@gmail.com",
            "name": "Aaron Yordanyan",
            "username": "diazoxide"
          },
          "distinct": true,
          "id": "2605072b06de338895ece86f89f942eb10338081",
          "message": "search-to-chat.e2e.ts knows its chat by the tab in front once it started\n\nOn Linux an earlier spec can leave a chat of the same name open, so the chat this spec started\nwas not a new name on the strip and was never found among those offered. The chat is now the\ntab in front once it is up; the after hook ends that one and closes the view tabs it opened.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nAssisted-by: claude-code:claude-opus-5-5\nPurlis-Chat: 01M4AREQXXRGBAEWM0SZ0N0WBN\nPurlis-Persona: steward",
          "timestamp": "2026-10-12T05:54:29+04:00",
          "tree_id": "07a25b3d9c0e721698dd9bb661dedb291a5bf64e",
          "url": "https://github.com/purlis/purlis/commit/2605072b06de338895ece86f89f942eb10338081"
        },
        "date": 1791771751164,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "M2 web content at fifty hot chats (footprint peak)",
            "value": 867,
            "unit": "MB",
            "extra": "median of 3 samples: 636, 867, 1000 MB"
          },
          {
            "name": "M3 native side with no chats (resident)",
            "value": 177.9,
            "unit": "MB",
            "extra": "median of 6 samples: 201.9, 201.2, 199.4, 155.6, 156.3, 127.3 MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aaron.yor@gmail.com",
            "name": "Aaron Yordanyan",
            "username": "diazoxide"
          },
          "committer": {
            "email": "aaron.yor@gmail.com",
            "name": "Aaron Yordanyan",
            "username": "diazoxide"
          },
          "distinct": true,
          "id": "30a7daebb0d2fe6c5c702af6cb2da734f97560fc",
          "message": "Secret scan: a prefilter in front of the vendor and personal-data rules; linear-time tests compare sizes\n\nLane VA (#773) took the per-line rules from 9 vendor and 3 personal-data\npatterns to 63 and 12, each run over every line. On PR #1800\nmany_escaped_addresses_and_many_joined_lines_read_in_linear_time took 14.66 s\nand then 14.54 s against its 10 s bound.\n\nEach gitleaks rule now carries its keywords, as gitleaks' own rules do, and one\nRegexSet of them, read case-insensitively, says which vendor rules a line can\nhold; the personal-data rules are asked once as a RegexSet for the same. Only\nthose rules run. No rule or check changes: the_prefilters_never_hide_a_hit\nholds the prefiltered scan to the scan asking every rule over every planted\nvalue, near-miss, personal datum and two source files, upper-cased and with\nthe long s and Kelvin sign a (?i) rule folds.\n\nThe four linear-time tests the scan owns now time a size and four times it,\nthree rounds each, and fail when the larger takes 8 times as long or more\n(linear is 4, quadratic 16), under a 120 s ceiling. Turning escaped_leaks' seen\nset into a list fails two of them (8.9x and 13.1x).\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nAssisted-by: claude-code:claude-opus-5-5\nPurlis-Chat: 01M4AREQXXRGBAEWM0SZ0N0WBN\nPurlis-Persona: steward",
          "timestamp": "2026-10-12T07:24:04+04:00",
          "tree_id": "acd4b8cba573a2468b89ffaddbbff39bc4b32615",
          "url": "https://github.com/purlis/purlis/commit/30a7daebb0d2fe6c5c702af6cb2da734f97560fc"
        },
        "date": 1791777563140,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "M2 web content at fifty hot chats (footprint peak)",
            "value": 842,
            "unit": "MB",
            "extra": "median of 3 samples: 708, 842, 923 MB"
          },
          {
            "name": "M3 native side with no chats (resident)",
            "value": 188.7,
            "unit": "MB",
            "extra": "median of 6 samples: 207.1, 188.3, 189.8, 188.4, 189.1, 164.6 MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aaron.yor@gmail.com",
            "name": "Aaron Yordanyan",
            "username": "diazoxide"
          },
          "committer": {
            "email": "aaron.yor@gmail.com",
            "name": "Aaron Yordanyan",
            "username": "diazoxide"
          },
          "distinct": true,
          "id": "ec72f237b6328673b007eea6d61914caba0c9dd3",
          "message": "A dev release builds nothing when its source carries another release.yml\n\nRelease run 38189104321 was started by ci at fc7131dd, which went green\njust after train 76 (37ec362e) merged. A workflow_run executes main's\nrelease.yml (37ec362e, with the new third-party notices check) but builds\nthe triggering commit (fc7131dd, from before the notices existed), so the\ncheck's grep found no app/dist/THIRD-PARTY-NOTICES and exited 2 on both\nplatforms. The notices themselves are fine: run 38190972158 built\n37ec362e under the same check and passed it.\n\nplan now checks out the release.yml it executes (github.workflow_sha,\nsparsely) beside the source, and a workflow_run whose two files differ\nskips its build with a notice; the newer commit's own ci starts the\nrelease that builds it. A new release-manifest test pins the notices'\npath across the generator, vite, tauri.release.conf.json and the check,\nand pins the skew skip.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nAssisted-by: claude-code:claude-opus-5-5\nPurlis-Chat: 01M4AREQXXRGBAEWM0SZ0N0WBN\nPurlis-Persona: steward",
          "timestamp": "2026-10-12T07:52:26+04:00",
          "tree_id": "a87af27fbda4252470d20ba00bd58b6980450d25",
          "url": "https://github.com/purlis/purlis/commit/ec72f237b6328673b007eea6d61914caba0c9dd3"
        },
        "date": 1791779264078,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "M2 web content at fifty hot chats (footprint peak)",
            "value": 750,
            "unit": "MB",
            "extra": "median of 3 samples: 616, 750, 928 MB"
          },
          {
            "name": "M3 native side with no chats (resident)",
            "value": 189.1,
            "unit": "MB",
            "extra": "median of 6 samples: 208.4, 190.4, 188, 188.8, 189.5, 164.1 MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eyehollow@gmail.com",
            "name": "Aaron Yordanyan",
            "username": "dbrownsimple"
          },
          "committer": {
            "email": "aaron.yor@gmail.com",
            "name": "Aaron Yordanyan",
            "username": "diazoxide"
          },
          "distinct": true,
          "id": "5b6d627387fc0b1b2379d219f703c6fd1f95ecac",
          "message": "pane-notices.e2e.ts names no helper inside an execute\n\nOn macOS the run failed in `raise`: the spec's bundler wrapped the\npage-side helper in a `__name` call the page does not have, as\ngauge.e2e.ts and view-tabs.e2e.ts already note. Every helper the page\nruns is now held in a list rather than bound by name.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nAssisted-by: claude-code:claude-opus-5-5\nPurlis-Chat: 01M4AREQXXRGBAEWM0SZ0N0WBN\nPurlis-Persona: steward",
          "timestamp": "2026-10-12T08:27:26+04:00",
          "tree_id": "6b72845cb65edaf956f98a8c1caf70d6c60b86e6",
          "url": "https://github.com/purlis/purlis/commit/5b6d627387fc0b1b2379d219f703c6fd1f95ecac"
        },
        "date": 1791780722699,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "M2 web content at fifty hot chats (footprint peak)",
            "value": 841,
            "unit": "MB",
            "extra": "median of 3 samples: 629, 841, 880 MB"
          },
          {
            "name": "M3 native side with no chats (resident)",
            "value": 195.8,
            "unit": "MB",
            "extra": "median of 6 samples: 196.7, 196.1, 194.8, 195.5, 196.1, 107.4 MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aaron.yor@gmail.com",
            "name": "Aaron Yordanyan",
            "username": "diazoxide"
          },
          "committer": {
            "email": "aaron.yor@gmail.com",
            "name": "Aaron Yordanyan",
            "username": "diazoxide"
          },
          "distinct": true,
          "id": "c90766a7ea647d63dd648d35cc11ce5a7eaab628",
          "message": "A launch's first event is redacted even while the log's rules are still building\n\nThe rules are built on a thread beside the launch now, so the first event\ncan be raised before they are ready. Every write already asks the rules\nthrough the same OnceLocks, so that event waits for them and is never\nwritten as it was said. A test proves it in a child of the test binary,\nwhose first event carries a token while the rules are still building: the\nfile and standard error hold the redaction line and never the token. A\nvariant that lets events through until the rules are ready fails it.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nAssisted-by: claude-code\nPurlis-Chat: 01M4AREQXXRGBAEWM0SZ0N0WBN\nPurlis-Persona: steward",
          "timestamp": "2026-10-12T11:10:44+04:00",
          "tree_id": "1c46be1c4c77e4bd4b0aee2e015945c765026855",
          "url": "https://github.com/purlis/purlis/commit/c90766a7ea647d63dd648d35cc11ce5a7eaab628"
        },
        "date": 1791791129448,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "M2 web content at fifty hot chats (footprint peak)",
            "value": 882,
            "unit": "MB",
            "extra": "median of 3 samples: 882, 882, 1078 MB"
          },
          {
            "name": "M3 native side with no chats (resident)",
            "value": 172.9,
            "unit": "MB",
            "extra": "median of 6 samples: 190.9, 189.5, 192.6, 155.6, 156.3, 122.9 MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aaron.yor@gmail.com",
            "name": "Aaron Yordanyan",
            "username": "diazoxide"
          },
          "committer": {
            "email": "aaron.yor@gmail.com",
            "name": "Aaron Yordanyan",
            "username": "diazoxide"
          },
          "distinct": true,
          "id": "40f2ac86b9471cfb153825eda867a96f8b0bbac3",
          "message": "A Go tool's refused certificate check is read from a failed command\n\nA sandboxed chat's `glab api` failed with `x509: OSStatus -26276` and no\nNotice came up. A Go program refused the system's certificate check exits\nnon-zero, so its words reach the block hook only in PostToolUseFailure's\n`error`, which is read as standard output: a line counts only where it\nends as a refusal, and no ending matched the certificate check. The one\nexisting test fed the line as standard error of a command that succeeded,\na shape real Go CLIs never produce for this failure.\n\n`ends_as_a_refusal` now ends on `x509: OSStatus -26276`, so the existing\ncertificate-check block, and its Notice, comes up. A line that only\nquotes the words is still not a block. Nothing is granted.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nAssisted-by: claude-code\nPurlis-Chat: 01M4AREQXXRGBAEWM0SZ0N0WBN\nPurlis-Persona: steward",
          "timestamp": "2026-10-12T11:18:22+04:00",
          "tree_id": "09d518c68fb95e77c39601dd4ab334be10717cdf",
          "url": "https://github.com/purlis/purlis/commit/40f2ac86b9471cfb153825eda867a96f8b0bbac3"
        },
        "date": 1791793718518,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "M2 web content at fifty hot chats (footprint peak)",
            "value": 747,
            "unit": "MB",
            "extra": "median of 3 samples: 524, 747, 914 MB"
          },
          {
            "name": "M3 native side with no chats (resident)",
            "value": 188.2,
            "unit": "MB",
            "extra": "median of 6 samples: 209.1, 207.9, 189.1, 186.6, 187.3, 160.2 MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Aaron Yordanyan",
            "username": "diazoxide",
            "email": "aaron.yor@gmail.com"
          },
          "committer": {
            "name": "Aaron Yordanyan",
            "username": "diazoxide",
            "email": "aaron.yor@gmail.com"
          },
          "id": "40f2ac86b9471cfb153825eda867a96f8b0bbac3",
          "message": "A Go tool's refused certificate check is read from a failed command\n\nA sandboxed chat's `glab api` failed with `x509: OSStatus -26276` and no\nNotice came up. A Go program refused the system's certificate check exits\nnon-zero, so its words reach the block hook only in PostToolUseFailure's\n`error`, which is read as standard output: a line counts only where it\nends as a refusal, and no ending matched the certificate check. The one\nexisting test fed the line as standard error of a command that succeeded,\na shape real Go CLIs never produce for this failure.\n\n`ends_as_a_refusal` now ends on `x509: OSStatus -26276`, so the existing\ncertificate-check block, and its Notice, comes up. A line that only\nquotes the words is still not a block. Nothing is granted.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nAssisted-by: claude-code\nPurlis-Chat: 01M4AREQXXRGBAEWM0SZ0N0WBN\nPurlis-Persona: steward",
          "timestamp": "2026-10-12T06:59:36Z",
          "url": "https://github.com/purlis/purlis/commit/40f2ac86b9471cfb153825eda867a96f8b0bbac3"
        },
        "date": 1791800572154,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "M2 web content at fifty hot chats (footprint peak)",
            "value": 873,
            "unit": "MB",
            "extra": "median of 3 samples: 766, 873, 958 MB"
          },
          {
            "name": "M3 native side with no chats (resident)",
            "value": 158.8,
            "unit": "MB",
            "extra": "median of 6 samples: 204.1, 184.7, 174.7, 142.1, 142.8, 117.5 MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eyehollow@gmail.com",
            "name": "Aaron Yordanyan",
            "username": "dbrownsimple"
          },
          "committer": {
            "email": "aaron.yor@gmail.com",
            "name": "Aaron Yordanyan",
            "username": "diazoxide"
          },
          "distinct": true,
          "id": "9cb49c8295431c94460eb8dc9d153226fde2f3e4",
          "message": "Train 80 CI: every removed or added submodule pointer in the fixture names its own commit\n\nThe dropped and the added pointer named one commit too, which both git and gitoxide then read\nas a rename. The added pointer now names a third commit.\n\nRefs #704\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nAssisted-by: claude-code\nPurlis-Chat: 01M4AREQXXRGBAEWM0SZ0N0WBN\nPurlis-Persona: steward",
          "timestamp": "2026-10-12T14:29:29+04:00",
          "tree_id": "3825fa91d4b639a3eda5e78d007871f30215ffca",
          "url": "https://github.com/purlis/purlis/commit/9cb49c8295431c94460eb8dc9d153226fde2f3e4"
        },
        "date": 1791803039759,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "M2 web content at fifty hot chats (footprint peak)",
            "value": 721,
            "unit": "MB",
            "extra": "median of 3 samples: 721, 721, 847 MB"
          },
          {
            "name": "M3 native side with no chats (resident)",
            "value": 200.4,
            "unit": "MB",
            "extra": "median of 6 samples: 188.8, 200.6, 203.1, 200.2, 200.8, 126.6 MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eyehollow@gmail.com",
            "name": "Aaron Yordanyan",
            "username": "dbrownsimple"
          },
          "committer": {
            "email": "aaron.yor@gmail.com",
            "name": "Aaron Yordanyan",
            "username": "diazoxide"
          },
          "distinct": true,
          "id": "2e24d553b8377c380b90bf587d2f22c053b48a95",
          "message": "A fenced build's stand-in config home is its process's own\n\nA test process of the app's suite kept this machine's sandbox record in one\nfolder of the temporary directory that every test process shared, so one\ntest's folders could refuse another's write. It is per user and process now;\na run that keeps its store across launches names one inside its fence.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nAssisted-by: claude-code\nPurlis-Chat: 01M4AREQXXRGBAEWM0SZ0N0WBN\nPurlis-Persona: steward",
          "timestamp": "2026-10-12T15:24:07+04:00",
          "tree_id": "f6d38a79fd42190114e329549b586e5148911e5d",
          "url": "https://github.com/purlis/purlis/commit/2e24d553b8377c380b90bf587d2f22c053b48a95"
        },
        "date": 1791806214615,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "M2 web content at fifty hot chats (footprint peak)",
            "value": 786,
            "unit": "MB",
            "extra": "median of 3 samples: 651, 786, 935 MB"
          },
          {
            "name": "M3 native side with no chats (resident)",
            "value": 158.8,
            "unit": "MB",
            "extra": "median of 6 samples: 182, 189.8, 163.5, 153.5, 154.2, 123.5 MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aaron.yor@gmail.com",
            "name": "Aaron Yordanyan",
            "username": "diazoxide"
          },
          "committer": {
            "email": "aaron.yor@gmail.com",
            "name": "Aaron Yordanyan",
            "username": "diazoxide"
          },
          "distinct": true,
          "id": "d4fec603f5eaa2fc2ccd387e7afd31cb60e495ac",
          "message": "e2e: the gauge spec runs purlis in the run's own environment\n\nWith the harness and CLI built with the app (purlis-core/fenced), gauge.e2e.ts's statusline and\nhook calls were refused: they ran with the runner's own environment, so purlis opened the\nmachine store at ~/.config, outside the run's fenced tree. Unfenced, that was the operator's own\nstore on a local run (charter-app#129). Both now take theRunsEnvironment(plane), as the app does.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nAssisted-by: claude-code\nPurlis-Chat: 01M4EJSYV68AZG1SWR231JAEZE\nPurlis-Persona: steward",
          "timestamp": "2026-10-12T15:41:36+04:00",
          "tree_id": "c15ee8da67b0b3b86195a188511f2b7bc655333a",
          "url": "https://github.com/purlis/purlis/commit/d4fec603f5eaa2fc2ccd387e7afd31cb60e495ac"
        },
        "date": 1791810480873,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "M2 web content at fifty hot chats (footprint peak)",
            "value": 757,
            "unit": "MB",
            "extra": "median of 3 samples: 639, 757, 853 MB"
          },
          {
            "name": "M3 native side with no chats (resident)",
            "value": 168.5,
            "unit": "MB",
            "extra": "median of 6 samples: 182.1, 179.6, 182.5, 156.7, 157.4, 123.8 MB"
          }
        ]
      }
    ],
    "stress (ubuntu-24.04)": [
      {
        "commit": {
          "author": {
            "email": "eyehollow@gmail.com",
            "name": "Aaron Yordanyan",
            "username": "dbrownsimple"
          },
          "committer": {
            "email": "aaron.yor@gmail.com",
            "name": "Aaron Yordanyan",
            "username": "diazoxide"
          },
          "distinct": true,
          "id": "2605072b06de338895ece86f89f942eb10338081",
          "message": "search-to-chat.e2e.ts knows its chat by the tab in front once it started\n\nOn Linux an earlier spec can leave a chat of the same name open, so the chat this spec started\nwas not a new name on the strip and was never found among those offered. The chat is now the\ntab in front once it is up; the after hook ends that one and closes the view tabs it opened.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nAssisted-by: claude-code:claude-opus-5-5\nPurlis-Chat: 01M4AREQXXRGBAEWM0SZ0N0WBN\nPurlis-Persona: steward",
          "timestamp": "2026-10-12T05:54:29+04:00",
          "tree_id": "07a25b3d9c0e721698dd9bb661dedb291a5bf64e",
          "url": "https://github.com/purlis/purlis/commit/2605072b06de338895ece86f89f942eb10338081"
        },
        "date": 1791771767130,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "M2 web content at fifty hot chats (resident)",
            "value": 1490.9,
            "unit": "MB",
            "extra": "median of 3 samples: 1306.6, 1490.9, 1655.7 MB"
          },
          {
            "name": "M3 native side with no chats (resident)",
            "value": 419.8,
            "unit": "MB",
            "extra": "median of 6 samples: 385.2, 404.7, 415.1, 424.5, 425, 536.3 MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aaron.yor@gmail.com",
            "name": "Aaron Yordanyan",
            "username": "diazoxide"
          },
          "committer": {
            "email": "aaron.yor@gmail.com",
            "name": "Aaron Yordanyan",
            "username": "diazoxide"
          },
          "distinct": true,
          "id": "30a7daebb0d2fe6c5c702af6cb2da734f97560fc",
          "message": "Secret scan: a prefilter in front of the vendor and personal-data rules; linear-time tests compare sizes\n\nLane VA (#773) took the per-line rules from 9 vendor and 3 personal-data\npatterns to 63 and 12, each run over every line. On PR #1800\nmany_escaped_addresses_and_many_joined_lines_read_in_linear_time took 14.66 s\nand then 14.54 s against its 10 s bound.\n\nEach gitleaks rule now carries its keywords, as gitleaks' own rules do, and one\nRegexSet of them, read case-insensitively, says which vendor rules a line can\nhold; the personal-data rules are asked once as a RegexSet for the same. Only\nthose rules run. No rule or check changes: the_prefilters_never_hide_a_hit\nholds the prefiltered scan to the scan asking every rule over every planted\nvalue, near-miss, personal datum and two source files, upper-cased and with\nthe long s and Kelvin sign a (?i) rule folds.\n\nThe four linear-time tests the scan owns now time a size and four times it,\nthree rounds each, and fail when the larger takes 8 times as long or more\n(linear is 4, quadratic 16), under a 120 s ceiling. Turning escaped_leaks' seen\nset into a list fails two of them (8.9x and 13.1x).\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nAssisted-by: claude-code:claude-opus-5-5\nPurlis-Chat: 01M4AREQXXRGBAEWM0SZ0N0WBN\nPurlis-Persona: steward",
          "timestamp": "2026-10-12T07:24:04+04:00",
          "tree_id": "acd4b8cba573a2468b89ffaddbbff39bc4b32615",
          "url": "https://github.com/purlis/purlis/commit/30a7daebb0d2fe6c5c702af6cb2da734f97560fc"
        },
        "date": 1791777578098,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "M2 web content at fifty hot chats (resident)",
            "value": 1482.9,
            "unit": "MB",
            "extra": "median of 3 samples: 1358.3, 1482.9, 1541.8 MB"
          },
          {
            "name": "M3 native side with no chats (resident)",
            "value": 417.2,
            "unit": "MB",
            "extra": "median of 6 samples: 389.8, 405.4, 417.8, 416.9, 417.5, 532.7 MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aaron.yor@gmail.com",
            "name": "Aaron Yordanyan",
            "username": "diazoxide"
          },
          "committer": {
            "email": "aaron.yor@gmail.com",
            "name": "Aaron Yordanyan",
            "username": "diazoxide"
          },
          "distinct": true,
          "id": "ec72f237b6328673b007eea6d61914caba0c9dd3",
          "message": "A dev release builds nothing when its source carries another release.yml\n\nRelease run 38189104321 was started by ci at fc7131dd, which went green\njust after train 76 (37ec362e) merged. A workflow_run executes main's\nrelease.yml (37ec362e, with the new third-party notices check) but builds\nthe triggering commit (fc7131dd, from before the notices existed), so the\ncheck's grep found no app/dist/THIRD-PARTY-NOTICES and exited 2 on both\nplatforms. The notices themselves are fine: run 38190972158 built\n37ec362e under the same check and passed it.\n\nplan now checks out the release.yml it executes (github.workflow_sha,\nsparsely) beside the source, and a workflow_run whose two files differ\nskips its build with a notice; the newer commit's own ci starts the\nrelease that builds it. A new release-manifest test pins the notices'\npath across the generator, vite, tauri.release.conf.json and the check,\nand pins the skew skip.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nAssisted-by: claude-code:claude-opus-5-5\nPurlis-Chat: 01M4AREQXXRGBAEWM0SZ0N0WBN\nPurlis-Persona: steward",
          "timestamp": "2026-10-12T07:52:26+04:00",
          "tree_id": "a87af27fbda4252470d20ba00bd58b6980450d25",
          "url": "https://github.com/purlis/purlis/commit/ec72f237b6328673b007eea6d61914caba0c9dd3"
        },
        "date": 1791779279168,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "M2 web content at fifty hot chats (resident)",
            "value": 1398.9,
            "unit": "MB",
            "extra": "median of 3 samples: 1283.3, 1398.9, 1672.8 MB"
          },
          {
            "name": "M3 native side with no chats (resident)",
            "value": 427.8,
            "unit": "MB",
            "extra": "median of 6 samples: 386.1, 417.4, 432.5, 427.6, 427.9, 542.4 MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eyehollow@gmail.com",
            "name": "Aaron Yordanyan",
            "username": "dbrownsimple"
          },
          "committer": {
            "email": "aaron.yor@gmail.com",
            "name": "Aaron Yordanyan",
            "username": "diazoxide"
          },
          "distinct": true,
          "id": "5b6d627387fc0b1b2379d219f703c6fd1f95ecac",
          "message": "pane-notices.e2e.ts names no helper inside an execute\n\nOn macOS the run failed in `raise`: the spec's bundler wrapped the\npage-side helper in a `__name` call the page does not have, as\ngauge.e2e.ts and view-tabs.e2e.ts already note. Every helper the page\nruns is now held in a list rather than bound by name.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nAssisted-by: claude-code:claude-opus-5-5\nPurlis-Chat: 01M4AREQXXRGBAEWM0SZ0N0WBN\nPurlis-Persona: steward",
          "timestamp": "2026-10-12T08:27:26+04:00",
          "tree_id": "6b72845cb65edaf956f98a8c1caf70d6c60b86e6",
          "url": "https://github.com/purlis/purlis/commit/5b6d627387fc0b1b2379d219f703c6fd1f95ecac"
        },
        "date": 1791780736815,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "M2 web content at fifty hot chats (resident)",
            "value": 1448,
            "unit": "MB",
            "extra": "median of 3 samples: 1370.3, 1448, 1661.5 MB"
          },
          {
            "name": "M3 native side with no chats (resident)",
            "value": 440,
            "unit": "MB",
            "extra": "median of 6 samples: 396.3, 420, 430.9, 449.1, 449.4, 545.3 MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aaron.yor@gmail.com",
            "name": "Aaron Yordanyan",
            "username": "diazoxide"
          },
          "committer": {
            "email": "aaron.yor@gmail.com",
            "name": "Aaron Yordanyan",
            "username": "diazoxide"
          },
          "distinct": true,
          "id": "c90766a7ea647d63dd648d35cc11ce5a7eaab628",
          "message": "A launch's first event is redacted even while the log's rules are still building\n\nThe rules are built on a thread beside the launch now, so the first event\ncan be raised before they are ready. Every write already asks the rules\nthrough the same OnceLocks, so that event waits for them and is never\nwritten as it was said. A test proves it in a child of the test binary,\nwhose first event carries a token while the rules are still building: the\nfile and standard error hold the redaction line and never the token. A\nvariant that lets events through until the rules are ready fails it.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nAssisted-by: claude-code\nPurlis-Chat: 01M4AREQXXRGBAEWM0SZ0N0WBN\nPurlis-Persona: steward",
          "timestamp": "2026-10-12T11:10:44+04:00",
          "tree_id": "1c46be1c4c77e4bd4b0aee2e015945c765026855",
          "url": "https://github.com/purlis/purlis/commit/c90766a7ea647d63dd648d35cc11ce5a7eaab628"
        },
        "date": 1791791144513,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "M2 web content at fifty hot chats (resident)",
            "value": 1503.3,
            "unit": "MB",
            "extra": "median of 3 samples: 1334.7, 1503.3, 1610.1 MB"
          },
          {
            "name": "M3 native side with no chats (resident)",
            "value": 418,
            "unit": "MB",
            "extra": "median of 6 samples: 392.7, 401.9, 414, 422, 422.6, 515.6 MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aaron.yor@gmail.com",
            "name": "Aaron Yordanyan",
            "username": "diazoxide"
          },
          "committer": {
            "email": "aaron.yor@gmail.com",
            "name": "Aaron Yordanyan",
            "username": "diazoxide"
          },
          "distinct": true,
          "id": "40f2ac86b9471cfb153825eda867a96f8b0bbac3",
          "message": "A Go tool's refused certificate check is read from a failed command\n\nA sandboxed chat's `glab api` failed with `x509: OSStatus -26276` and no\nNotice came up. A Go program refused the system's certificate check exits\nnon-zero, so its words reach the block hook only in PostToolUseFailure's\n`error`, which is read as standard output: a line counts only where it\nends as a refusal, and no ending matched the certificate check. The one\nexisting test fed the line as standard error of a command that succeeded,\na shape real Go CLIs never produce for this failure.\n\n`ends_as_a_refusal` now ends on `x509: OSStatus -26276`, so the existing\ncertificate-check block, and its Notice, comes up. A line that only\nquotes the words is still not a block. Nothing is granted.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nAssisted-by: claude-code\nPurlis-Chat: 01M4AREQXXRGBAEWM0SZ0N0WBN\nPurlis-Persona: steward",
          "timestamp": "2026-10-12T11:18:22+04:00",
          "tree_id": "09d518c68fb95e77c39601dd4ab334be10717cdf",
          "url": "https://github.com/purlis/purlis/commit/40f2ac86b9471cfb153825eda867a96f8b0bbac3"
        },
        "date": 1791793734364,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "M2 web content at fifty hot chats (resident)",
            "value": 1485.9,
            "unit": "MB",
            "extra": "median of 3 samples: 1317.9, 1485.9, 1559.5 MB"
          },
          {
            "name": "M3 native side with no chats (resident)",
            "value": 423.5,
            "unit": "MB",
            "extra": "median of 6 samples: 387.7, 411.4, 419.5, 427.4, 427.9, 503.6 MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Aaron Yordanyan",
            "username": "diazoxide",
            "email": "aaron.yor@gmail.com"
          },
          "committer": {
            "name": "Aaron Yordanyan",
            "username": "diazoxide",
            "email": "aaron.yor@gmail.com"
          },
          "id": "40f2ac86b9471cfb153825eda867a96f8b0bbac3",
          "message": "A Go tool's refused certificate check is read from a failed command\n\nA sandboxed chat's `glab api` failed with `x509: OSStatus -26276` and no\nNotice came up. A Go program refused the system's certificate check exits\nnon-zero, so its words reach the block hook only in PostToolUseFailure's\n`error`, which is read as standard output: a line counts only where it\nends as a refusal, and no ending matched the certificate check. The one\nexisting test fed the line as standard error of a command that succeeded,\na shape real Go CLIs never produce for this failure.\n\n`ends_as_a_refusal` now ends on `x509: OSStatus -26276`, so the existing\ncertificate-check block, and its Notice, comes up. A line that only\nquotes the words is still not a block. Nothing is granted.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nAssisted-by: claude-code\nPurlis-Chat: 01M4AREQXXRGBAEWM0SZ0N0WBN\nPurlis-Persona: steward",
          "timestamp": "2026-10-12T06:59:36Z",
          "url": "https://github.com/purlis/purlis/commit/40f2ac86b9471cfb153825eda867a96f8b0bbac3"
        },
        "date": 1791800589397,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "M2 web content at fifty hot chats (resident)",
            "value": 1544.3,
            "unit": "MB",
            "extra": "median of 3 samples: 1337, 1557.8, 1544.3 MB"
          },
          {
            "name": "M3 native side with no chats (resident)",
            "value": 422.8,
            "unit": "MB",
            "extra": "median of 6 samples: 394.7, 404.8, 410.8, 434.7, 435.1, 520.6 MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eyehollow@gmail.com",
            "name": "Aaron Yordanyan",
            "username": "dbrownsimple"
          },
          "committer": {
            "email": "aaron.yor@gmail.com",
            "name": "Aaron Yordanyan",
            "username": "diazoxide"
          },
          "distinct": true,
          "id": "9cb49c8295431c94460eb8dc9d153226fde2f3e4",
          "message": "Train 80 CI: every removed or added submodule pointer in the fixture names its own commit\n\nThe dropped and the added pointer named one commit too, which both git and gitoxide then read\nas a rename. The added pointer now names a third commit.\n\nRefs #704\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nAssisted-by: claude-code\nPurlis-Chat: 01M4AREQXXRGBAEWM0SZ0N0WBN\nPurlis-Persona: steward",
          "timestamp": "2026-10-12T14:29:29+04:00",
          "tree_id": "3825fa91d4b639a3eda5e78d007871f30215ffca",
          "url": "https://github.com/purlis/purlis/commit/9cb49c8295431c94460eb8dc9d153226fde2f3e4"
        },
        "date": 1791803058333,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "M2 web content at fifty hot chats (resident)",
            "value": 1420.1,
            "unit": "MB",
            "extra": "median of 3 samples: 1276.2, 1420.1, 1427.3 MB"
          },
          {
            "name": "M3 native side with no chats (resident)",
            "value": 417.9,
            "unit": "MB",
            "extra": "median of 6 samples: 383.5, 397.7, 410.1, 425.6, 426.4, 517.4 MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eyehollow@gmail.com",
            "name": "Aaron Yordanyan",
            "username": "dbrownsimple"
          },
          "committer": {
            "email": "aaron.yor@gmail.com",
            "name": "Aaron Yordanyan",
            "username": "diazoxide"
          },
          "distinct": true,
          "id": "2e24d553b8377c380b90bf587d2f22c053b48a95",
          "message": "A fenced build's stand-in config home is its process's own\n\nA test process of the app's suite kept this machine's sandbox record in one\nfolder of the temporary directory that every test process shared, so one\ntest's folders could refuse another's write. It is per user and process now;\na run that keeps its store across launches names one inside its fence.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nAssisted-by: claude-code\nPurlis-Chat: 01M4AREQXXRGBAEWM0SZ0N0WBN\nPurlis-Persona: steward",
          "timestamp": "2026-10-12T15:24:07+04:00",
          "tree_id": "f6d38a79fd42190114e329549b586e5148911e5d",
          "url": "https://github.com/purlis/purlis/commit/2e24d553b8377c380b90bf587d2f22c053b48a95"
        },
        "date": 1791806354542,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "M2 web content at fifty hot chats (resident)",
            "value": 1368.4,
            "unit": "MB",
            "extra": "median of 3 samples: 1225.1, 1368.4, 1472.4 MB"
          },
          {
            "name": "M3 native side with no chats (resident)",
            "value": 409.1,
            "unit": "MB",
            "extra": "median of 6 samples: 383.7, 409.4, 414.7, 408.2, 408.8, 513 MB"
          }
        ]
      }
    ]
  }
}