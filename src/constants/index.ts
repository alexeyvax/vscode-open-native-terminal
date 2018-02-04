export const GNOME: string = 'gnome';
export const GNOME_CLASSIC: string = 'gnome-classic';
export const KDE_PLASMA: string = 'kde-plasma';

export const platforms: Platforms = {
  mac: 'darwin',
  win: 'win32',
  linux: 'linux',
};

interface Platforms {
  [key: string]: string;
}
