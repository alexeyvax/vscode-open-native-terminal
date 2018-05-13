export const terminals: Constants = {
  GNOME: 'gnome',
  GNOME_CLASSIC: 'gnome-classic',
  KDE_PLASMA: 'kde-plasma',
};

export const platforms: Constants = {
  mac: 'darwin',
  win: 'win32',
  linux: 'linux',
};

export const config: Constants = {
  RULE_NAME: 'open-native-terminal',
  DEFAULT_TERMINAL: 'use-default-terminal',
  SHOW_TOOLTIPS: 'show-tooltips',
};

export const messages: Constants = {
  EXIST_PATH: 'Oops, the path is wrong, please try again',
  EMPTY_PATH: 'Oops, the path is empty, please try again',
  OPEN_TERMINAL: 'Terminal has been opened',
};

interface Constants {
  [key: string]: string;
}
