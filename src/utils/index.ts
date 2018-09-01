'use strict';

import * as vscode from 'vscode';
import * as fs from 'fs';
import { exec } from 'child_process';
import { GNOME, GNOME_CLASSIC, KDE_PLASMA, platforms } from '../constants';

const getSettings = (name: string): string|void => {
  const settings = vscode.workspace.getConfiguration('open-native-terminal');
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
    vscode.window.showErrorMessage('Oops, the path is wrong, please try again');
    return;
  }
};

export const checkEmptyPath = (path: string): string|void => {
  if (path) {
    return path;
  } else {
    vscode.window.showErrorMessage('Oops, the path is empty, please try again');
    return;
  }
};

export const getCorrectPath = (path: string): string => {
  if (fs.lstatSync(path).isDirectory()) {
    return path.replace(/\s/g, '\\ ');
  } else {
    const pathToParentDir = path.replace(/(\/|\\)?([^\/\\]*)(\/*|\*)$/, '');
    if (fs.lstatSync(pathToParentDir).isDirectory()) {
      return pathToParentDir.replace(/\s/g, '\\ ');
    } else {
      getCorrectPath(pathToParentDir);
    }
  }
};

export const chooseLinuxTerminal = (path: string): void => {
  const defaultTerminal = getSettings('use-default-terminal');
  if (defaultTerminal) {
    exec(`cd ${path} && ${defaultTerminal}`);
    return;
  }

  switch(true) {
    case (process.env.DESKTOP_SESSION === GNOME
      || process.env.DESKTOP_SESSION === GNOME_CLASSIC):
      exec(`cd ${path} && gnome-terminal`);
      break;
    case (process.env.DESKTOP_SESSION === KDE_PLASMA):
      exec(`cd ${path} && konsole`);
      break;
    default:
      exec(`cd ${path} && x-terminal-emulator`);
  }
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

export const getRootPath = (path: string): string => {
  if (vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders[0].uri) {
    return vscode.workspace.workspaceFolders[0].uri.fsPath;
  }

  return getCorrectPath(path);
}
