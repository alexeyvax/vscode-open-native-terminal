'use strict';

import * as vscode from 'vscode';
import {
  compose, checkCurrentOS, checkEmptyPath, getRightPath, checkExistingPath,
} from './utils';

export function activate(context: vscode.ExtensionContext): void {

  const disposable = vscode.commands.registerCommand(
    'extension.openNativeTerminal',
    (e: vscode.Uri) => {
      compose(
        checkCurrentOS,
        checkEmptyPath,
        getRightPath,
        checkExistingPath,
      )(e.fsPath);
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate(): void {}
