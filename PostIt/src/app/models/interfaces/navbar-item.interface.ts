import { NavbarEnum } from '../enum/navbar.enum';

export interface NavbarItemInterface {
  type: NavbarEnum;
  link: string;
  icon: string;
  iconActivated: string;
}
