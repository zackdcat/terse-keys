import * as vscode from 'vscode';

const expansions: Record<string, Record<string, string>> = {
	Assembly: { //FINISHED
		variableShortcut: '',
		constVariableShortcut: '',
		functionShortcut: '',
		ifShortcut: ''
	},
	bash: { //FINISHED
		variableShortcut: '',
		constVariableShortcut: 'readonly ',
		functionShortcut: '',
		ifShortcut: 'if []; then\n\nfi'
	},
	c: { //FINISHED
		variableShortcut: '',
		constVariableShortcut: 'const ',
		functionShortcut: '',
		ifShortcut: 'if () {\n\n}'
	},
	csharp: { //FINISHED
		variableShortcut: 'int ',
		constVariableShortcut: 'const int ',
		functionShortcut: '',
		ifShortcut: 'if () {\n\n}'
	},
	cpp: { //FINISHED
		variableShortcut: 'int ',
		constVariableShortcut: 'const int ',
		functionShortcut: '',
		ifShortcut: 'if () {\n\n}'
	},
	dart: { //FINISHED
		variableShortcut: '',
		constVariableShortcut: 'const ',
		functionShortcut: '',
		ifShortcut: 'if () {\n\n}'
	},
	go: { //FINISHED
		variableShortcut: '',
		constVariableShortcut: 'const ',
		functionShortcut: 'func ',
		ifShortcut: 'if  {\n\n}'
	},
	haskell: { //FINISHED
		variableShortcut: '',
		constVariableShortcut: '',
		functionShortcut: '',
		ifShortcut: ''
	},
	java: { //FINISHED
		variableShortcut: 'int ',
		constVariableShortcut: 'final int ',
		functionShortcut: '',
		ifShortcut: 'if () {\n\n}'
	},
	javascript: { //FINISHED
		variableShortcut: 'var ',
		constVariableShortcut: 'const ',
		functionShortcut: 'function ',
		ifShortcut: 'if () {\n\n}'
	},
	kotlin: { //FINISHED
		variableShortcut: 'var ',
		constVariableShortcut: 'const val ',
		functionShortcut: 'fun ',
		ifShortcut: 'if () {\n\n}'
	},
	lua: { //FINISHED
		variableShortcut: '',
		constVariableShortcut: '',
		functionShortcut: 'function ',
		ifShortcut: 'if  then\n\nend'
	},
	php: { //FINISHED
		variableShortcut: '$',
		constVariableShortcut: 'const ',
		functionShortcut: 'function ',
		ifShortcut: 'if ($) {}'
	},
	python: { //FINISHED
		variableShortcut: '',
		constVariableShortcut: '',
		functionShortcut: 'def ():',
		ifShortcut: 'if :'
	},
	r: { //FINISHED
		variableShortcut: '',
		constVariableShortcut: '',
		functionShortcut: ' <- function() {\n\n}',
		ifShortcut: 'if () {\n\n}'
	},
	ruby: { //FINISHED
		variableShortcut: '',
		constVariableShortcut: '',
		functionShortcut: 'def \n\nend',
		ifShortcut: 'if \n\nend'
	},
	rust: { //FINISHED
		variableShortcut: 'let mut ',
		constVariableShortcut: 'let ',
		functionShortcut: 'fn () {\n\n}',
		ifShortcut: 'if  {\n\n}'
	},
	sql: { //FINISHED
		variableShortcut: 'SET ',
		constVariableShortcut: '',
		functionShortcut: '',
		ifShortcut: 'SELECT IF()'
	},
	swift: { //FINISHED
		variableShortcut: 'var ',
		constVariableShortcut: 'let ',
		functionShortcut: 'func ',
		ifShortcut: 'if  {\n\n}'
	},
	typescript: { //FINISHED
		variableShortcut: 'var ',
		constVariableShortcut: 'const ',
		functionShortcut: 'function ',
		ifShortcut: 'if () {\n\n}'
	},
	zig: { //FINISHED
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