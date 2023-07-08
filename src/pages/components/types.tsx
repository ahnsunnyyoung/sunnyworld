export const lang_idx = 0;
export const front_idx = 1;
export const back_idx = 2;
export const others_idx = 3;
export const etc_idx = 4;

export interface Skill {
  category: string;
  title: string;
  img_alt: string;
  img: string;
  period?: string;
  percent?: string;
}

export interface VisionIcon {
  title: string;
  color: string;
  logo: string;
}