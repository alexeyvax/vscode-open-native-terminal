'use strict';

import * as vscode from 'vscode';
import * as fs from 'fs';
import { exec } from 'child_process';
import { terminals, platforms, config, messages } from '../constants';

const showErrorMessage = message => vscode.window.showErrorMessage(message);
const showInfoTooltip = message => (
  getSettings(config.SHOW_TOOLTIPS) && vscode.window.showInformationMessage(message)
);
const getSettings = (name: string): string|void => {
  const settings = vscode.workspace.getConfiguration(config.RULE_NAME);
  return settings.get(name);
};

export const compose = (...fns) =>
  fns.reduceRight((prevFn, nextFn) =>
    (...args) => nextFn(prevFn(...args)),
  );

export const checkExistingPath = (path: string): string|void => {
  if (fs.existsSync(path)) {
    return path;
  } else {
    showErrorMessage(messages.EXIST_PATH);
    return;
  }
};

export const checkEmptyPath = (path: string): string|void => {
  if (path) {
    return path;
  } else {
    showErrorMessage(messages.EMPTY_PATH);
    return;
  }
};

export const getRightPath = (path: string): string => {
  if (fs.lstatSync(path).isDirectory()) {
    return path.replace(/\s/g, '\\ ');
  }

  const pathToParentDir = path.replace(/(\/|\\)?([^\/\\]*)(\/*|\*)$/, '');
  if (fs.lstatSync(pathToParentDir).isDirectory()) {
    return pathToParentDir.replace(/\s/g, '\\ ');
  }

  getRightPath(pathToParentDir);
};

export const chooseLinuxTerminal = (path: string): void => {
  const defaultTerminal = getSettings(config.DEFAULT_TERMINAL);
  if (defaultTerminal) {
    exec(`cd ${path} && ${defaultTerminal}`);
    showInfoTooltip(messages.OPEN_TERMINAL);
    return;
  }

  switch(true) {
    case (process.env.DESKTOP_SESSION === terminals.GNOME
      || process.env.DESKTOP_SESSION === terminals.GNOME_CLASSIC):
      exec(`cd ${path} && gnome-terminal`);
      break;
    case (process.env.DESKTOP_SESSION === terminals.KDE_PLASMA):
      exec(`cd ${path} && konsole`);
      break;
    default:
      exec(`cd ${path} && x-terminal-emulator`);
  }

  showInfoTooltip(messages.OPEN_TERMINAL);
};

export const checkCurrentOS = (path: string): void => {
  switch(process.platform) {
    case platforms.mac:
      exec(`open -a Terminal.app "${path}"`);
    case platforms.win:
      exec(`start /D ${path} "%cd%" cmd`);
    default:
      chooseLinuxTerminal(path);
  }
};
