import * as vscode from 'vscode';

const expansions: Record<string, Record<string, string>> = {
	Assembly: {
		variableShortcut: '',
		constVariableShortcut: '',
		functionShortcut: '',
		ifShortcut: ''
	},
	bash: {
		variableShortcut: '',
		constVariableShortcut: 'readonly ',
		functionShortcut: '',
		ifShortcut: 'if []; then\n\nfi'
	},
	c: {
		variableShortcut: '',
		constVariableShortcut: 'const ',
		functionShortcut: '',
		ifShortcut: 'if () {\n\n}'
	},
	csharp: {
		variableShortcut: 'int ',
		constVariableShortcut: 'const int ',
		functionShortcut: '',
		ifShortcut: 'if () {\n\n}'
	},
	cpp: {
		variableShortcut: 'int ',
		constVariableShortcut: 'const int ',
		functionShortcut: '',
		ifShortcut: 'if () {\n\n}'
	},
	dart: {
		variableShortcut: '',
		constVariableShortcut: 'const ',
		functionShortcut: '',
		ifShortcut: 'if () {\n\n}'
	},
	go: {
		variableShortcut: '',
		constVariableShortcut: 'const ',
		functionShortcut: 'func ',
		ifShortcut: 'if  {\n\n}'
	},
	haskell: {
		variableShortcut: '',
		constVariableShortcut: '',
		functionShortcut: '',
		ifShortcut: ''
	},
	java: {
		variableShortcut: 'int ',
		constVariableShortcut: 'final int ',
		functionShortcut: '',
		ifShortcut: 'if () {\n\n}'
	},
	javascript: {
		variableShortcut: 'var ',
		constVariableShortcut: 'const ',
		functionShortcut: 'function ',
		ifShortcut: 'if () {\n\n}'
	},
	kotlin: {
		variableShortcut: 'var ',
		constVariableShortcut: 'const val ',
		functionShortcut: 'fun ',
		ifShortcut: 'if () {\n\n}'
	},
	lua: {
		variableShortcut: '',
		constVariableShortcut: '',
		functionShortcut: 'function ',
		ifShortcut: 'if  then\n\nend'
	},
	php: {
		variableShortcut: '$',
		constVariableShortcut: 'const ',
		functionShortcut: 'function ',
		ifShortcut: 'if ($) {}'
	},
	python: {
		variableShortcut: '',
		constVariableShortcut: '',
		functionShortcut: 'def ():',
		ifShortcut: 'if :'
	},
	r: {
		variableShortcut: '',
		constVariableShortcut: '',
		functionShortcut: ' <- function() {\n\n}',
		ifShortcut: 'if () {\n\n}'
	},
	ruby: {
		variableShortcut: '',
		constVariableShortcut: '',
		functionShortcut: 'def \n\nend',
		ifShortcut: 'if \n\nend'
	},
	rust: {
		variableShortcut: 'let mut ',
		constVariableShortcut: 'let ',
		functionShortcut: 'fn () {\n\n}',
		ifShortcut: 'if  {\n\n}'
	},
	sql: {
		variableShortcut: 'SET ',
		constVariableShortcut: '',
		functionShortcut: '',
		ifShortcut: 'SELECT IF()'
	},
	swift: {
		variableShortcut: 'var ',
		constVariableShortcut: 'let ',
		functionShortcut: 'func ',
		ifShortcut: 'if  {\n\n}'
	},
	typescript: {
		variableShortcut: 'var ',
		constVariableShortcut: 'const ',
		functionShortcut: 'function ',
		ifShortcut: 'if () {\n\n}'
	},
	zig: {
		variableShortcut: 'var x: ',
		constVariableShortcut: 'const x: ',
		functionShortcut: 'fn () {\n\n}',
		ifShortcut: 'if () {\n\n}'
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

		editor.edit(editBuilder => {
			editBuilder.insert(editor.selection.active, text);
		})
	});
	context.subscriptions.push(disposable);
}

export function deactivate() {}