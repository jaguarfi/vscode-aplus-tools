// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "aplustools" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let createModule = vscode.commands.registerCommand('aplustools.createModule', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('This feature will be implement in upcoming versions of the Aplus tools!');
	});

	context.subscriptions.push(createModule);

	let type = 'aplus';
	vscode.tasks.registerTaskProvider(type, {
		provideTasks(token?: vscode.CancellationToken){
			let execution =new vscode.ShellExecution("./docker-compile.sh");
			let problemMatchers = ["$apluProblemMatcher"];
			return[
				new vscode.Task({type:type}, vscode.TaskScope.Workspace,
					"Build", "aplustools", execution, problemMatchers)
			];
		},
		resolveTask(task: vscode.Task, token?: vscode.CancellationToken) {
            return task;
        }
	});

}

// this method is called when your extension is deactivated
export function deactivate() {}
