import * as vscode from 'vscode';

const expansions: Record<string, Record<string, string>> = {
	assembly: {
		variableShortcut: '${1} dq ${2}',
		constVariableShortcut: '${1} equ ${2}',
		functionShortcut: '${1}:\n	${2}',
		ifShortcut: ''
	},
	bash: {
		variableShortcut: '${1}=${2}',
		constVariableShortcut: 'readonly ${1}=${2}',
		functionShortcut: '${1}() {\n\t${2}\n}',
		ifShortcut: 'if [ ${1} ]; then\n\t${2}\nfi'
	},
	c: {
		variableShortcut: 'int ${1} = ${2};',
		constVariableShortcut: 'const int ${1} = ${2};',
		functionShortcut: 'void ${1}() {\n\t${2}\n}',
		ifShortcut: 'if (${1}) {\n\t${2}\n}'
	},
	csharp: {
		variableShortcut: 'int ${1} = ${2};',
		constVariableShortcut: 'const int ${1} = ${2};',
		functionShortcut: 'void ${1}() {\n\t${2}\n}',
		ifShortcut: 'if (${1}) {\n\t${2}\n}'
	},
	cpp: {
		variableShortcut: 'int ${1} = ${2};',
		constVariableShortcut: 'const int ${1} = ${2};',
		functionShortcut: 'void ${1}() {\n\t${2}\n}',
		ifShortcut: 'if (${1}) {\n\t${2}\n}'
	},
	dart: {
		variableShortcut: 'var ${1} = ${2};',
		constVariableShortcut: 'const ${1} = ${2};',
		functionShortcut: '',
		ifShortcut: 'if (${1}) {\n\t${2}\n}'
	},
	go: {
		variableShortcut: '${1} := ${2}',
		constVariableShortcut: 'const ${1} = ${2}',
		functionShortcut: 'func ${1}() {\n\t${2}\n}',
		ifShortcut: 'if ${1} {\n\t${2}\n}'
	},
	haskell: {
		variableShortcut: '${1} = ${2}',
		constVariableShortcut: '${1} = ${2}',
		functionShortcut: '${1} ${2} = ${3}',
		ifShortcut: 'if ${1} then\n\t${2}\nelse\n\t${3}'
	},
	java: {
		variableShortcut: 'int ${1} = ${2};',
		constVariableShortcut: 'final int ${1} = ${2};',
		functionShortcut: '',
		ifShortcut: 'if (${1}) {\n\t${2}\n}'
	},
	javascript: {
		variableShortcut: 'let ${1} = ${2};',
		constVariableShortcut: 'const ${1} = ${2};',
		functionShortcut: 'function ${1}() {\n\t${2}\n}',
		ifShortcut: 'if (${1}) {\n\t${2}\n}'
	},
	kotlin: {
		variableShortcut: 'var ${1} = ${2}',
		constVariableShortcut: 'val ${1} = ${2}',
		functionShortcut: 'fun ${1}() {\n\t${2}\n}',
		ifShortcut: 'if (${1}) {\n\t${2}\n}'
	},
	lua: {
		variableShortcut: 'local ${1} = ${2}',
		constVariableShortcut: '${1} = ${2}',
		functionShortcut: 'function ${1}()\n\t${2}\nend',
		ifShortcut: 'if ${1} then\n\t${2}\nend'
	},
	php: {
		variableShortcut: '$${1} = ${2};',
		constVariableShortcut: 'const ${1} = ${2};',
		functionShortcut: 'function ${1}() {\n\t${2}\n}',
		ifShortcut: 'if ($${1}) {\n\t${2}\n}'
	},
	python: {
		variableShortcut: '${1} = ${2}',
		constVariableShortcut: '${1} = ${2}',
		functionShortcut: 'def ${1}():\n\t${2}',
		ifShortcut: 'if ${1}:\n\t${2}'
	},
	r: {
		variableShortcut: '${1} <- ${2}',
		constVariableShortcut: '${1} <- ${2}',
		functionShortcut: '${1} <- function() {\n\t${2}\n}',
		ifShortcut: 'if (${1}) {\n\t${2}\n}'
	},
	ruby: {
		variableShortcut: '${1} = ${2}',
		constVariableShortcut: '${1} = ${2}',
		functionShortcut: 'def ${1}\n\t${2}\nend',
		ifShortcut: 'if ${1}\n\t${2}\nend'
	},
	rust: {
		variableShortcut: 'let mut ${1} = ${2};',
		constVariableShortcut: 'let ${1} = ${2};',
		functionShortcut: 'fn ${1}() {\n\t${2}\n}',
		ifShortcut: 'if ${1} {\n\t${2}\n}'
	},
	shellscript: {
		variableShortcut: '${1}=${2}',
		constVariableShortcut: 'readonly ${1}=${2}',
		functionShortcut: '${1}() {\n\t${2}\n}',
		ifShortcut: 'if [ ${1} ]; then\n\t${2}\nfi'
	},
	sql: {
		variableShortcut: 'SET @${1} = ${2};',
		constVariableShortcut: '',
		functionShortcut: 'CREATE FUNCTION ${1}()\nRETURNS ${2}\nBEGIN\n\t${3}\nEND;',
		ifShortcut: 'IF ${1} THEN\n\t${2}\nEND IF;'
	},
	swift: {
		variableShortcut: 'var ${1} = ${2}',
		constVariableShortcut: 'let ${1} = ${2}',
		functionShortcut: 'func ${1}() {\n\t${2}\n}',
		ifShortcut: 'if ${1} {\n\t${2}\n}'
	},
	typescript: {
		variableShortcut: 'let ${1} = ${2};',
		constVariableShortcut: 'const ${1}: ${2} = ${3};',
		functionShortcut: 'function ${1}() {\n\t${2}\n}',
		ifShortcut: 'if (${1}) {\n\t${2}\n}'
	},
	zig: {
		variableShortcut: 'var ${1}: ${2} = ${3};',
		constVariableShortcut: 'const ${1}: ${2} = ${3};',
		functionShortcut: 'fn ${1}() void {\n\t${2}\n}',
		ifShortcut: 'if (${1}) {\n\t${2}\n}'
	}
}

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('terse-keys.binds', (trigger) => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) return;

		const lang = editor.document.languageId;
		const langTable = expansions[lang];
		const text = langTable ? langTable[trigger] : undefined;

		if (text === undefined) return;

		editor.insertSnippet(
			new vscode.SnippetString(text),
			editor.selection.active
		);
	});
	context.subscriptions.push(disposable);
}

export function deactivate() {}