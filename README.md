# TERSE KEYS
<sub>v2.0.0</sub><br>

Keybinds that make it faster to type code constructs.

🔗 [VSCode Extention](https://marketplace.visualstudio.com/items?itemName=zackdcat.terse-keys)

## Keybinds

| Key | Inserts |
|-----|---------|
| `Alt + v` | Variable declaration |
| `Alt + c` | Constant declaration |
| `Alt + f` | Function skeleton |
| `Alt + i` | If-statement skeleton |

Each keybind inserts the correct syntax for whatever language you're currently editing. Not every language has a real construct for every bind (e.g. Python has no `const` keyword) — in those cases, the keybind does nothing rather than inserting something wrong.

## Tab

You can press tab to move through the expression to fill out each section of the skeleton/declaration.

## Supported Languages

Assembly, Bash, C, C#, C++, Dart, Go, Haskell, Java, JavaScript, Kotlin, Lua, PHP, Python, R, Ruby, Rust, SQL, Swift, TypeScript, Zig

### Disclaimer!

All these languages are supported but not all expressions may work since they may have special data types or not supported expressions for each type. Multiple data types may be added soon.

## Getting Started

You can install the extention from the vscode extention store or you could install with this command:
```bash
code --install-extension zackdcat.terse-keys
```
or you can install it with:
```bash
ext install zackdcat.terse-keys
```
after pressing ctrl+p.

## Bug Reporting

If you discover a security vulnerability, find a bug, or have an improvement idea, please report it by opening an issue or contacting me directly, including a description of the issue and, where possible, steps to reproduce or a suggested remediation. Reports will be reviewed and addressed as promptly as possible. Contributors who responsibly disclose vulnerabilities will be credited in this README upon request. Email: zwhseton@gmail.com

## License

This project is source-available, not open source. You may view and modify the code for personal, non-commercial use. Redistribution (of the original or modified code) and commercial use are not permitted without explicit permission. See [LICENSE](./LICENSE) for full terms.

### Version Number Explanation

- First number corresponds to a big update adding a full feature that greatly impacts the vscode extension or changes something drastically.
- Second number corresponds to changes that have been made to the vscode extension since the last update of the second number.
- Third number corresponds to the amount of commits that have been made since the last update of the second number.

### Credits

Built and maintained by [zackdcat](https://github.com/zackdcat).

- Nothing here yet — contributors who report vulnerabilities or submit code will be listed here, with their permission.
