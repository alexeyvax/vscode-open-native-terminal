'use strict';

import * as vscode from 'vscode';
import {
  compose,
  checkCurrentOS,
  checkEmptyPath,
  getCorrectPath,
  checkExistingPath,
  getRootPath,
} from './utils';

export function activate(context: vscode.ExtensionContext): void {

  const openTerminal = vscode.commands.registerCommand(
    'extension.openNativeTerminal',
    (e: vscode.Uri) => {
      compose(
        checkCurrentOS,
        checkEmptyPath,
        getCorrectPath,
        checkExistingPath,
      )(e.fsPath);
    }
  );

  const openTerminalOnRootFolder = vscode.commands.registerCommand(
    'extension.openNativeTerminalOnRootFolder',
    (e: vscode.Uri) => {
      compose(
        checkCurrentOS,
        checkEmptyPath,
        getRootPath,
      )(e.fsPath);
    }
  );

  context.subscriptions.push(openTerminal);
  context.subscriptions.push(openTerminalOnRootFolder);
}

export function deactivate(): void {}
