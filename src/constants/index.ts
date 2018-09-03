export const GNOME: string = 'gnome';
export const GNOME_CLASSIC: string = 'gnome-classic';
export const KDE_PLASMA: string = 'kde-plasma';

export const platforms: Platforms = {
  mac: 'darwin',
  win: 'win32',
  linux: 'linux',
};

export const dictionary: Dictionary = {
  EXTENSION_NAME: 'open-native-terminal',
  SETTINGS_NAME: 'use-default-terminal',
  WRONG_PATH: 'Oops, the path is wrong, please try again',
  EMPTY_PATH: 'Oops, the path is empty, please try again',
};

interface Platforms {
  [key: string]: string;
}

interface Dictionary {
  [key: string]: string;
}
