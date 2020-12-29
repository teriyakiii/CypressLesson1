import { Gutter } from 'antd/lib/grid/row';

export const validateMessages = {
  required: '${name} is required',
};

export const gutter: [Gutter, Gutter] = [6, 16];

export const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export enum Gender {
  'Male' = 1,
  'Female',
}

export enum SkillDes {
  'Know' = 1,
  'Practiced',
  'Comprehend',
  'Expert',
  'Master',
}

export const skillDes = new Array(5).fill(0).map((_, index) => SkillDes[index + 1]);

export const programLanguageColors: string[] = [
  'magenta',
  'volcano',
  'orange',
  'gold',
  'green',
  'cyan',
  'geekblue',
  'purple',
  'red',
  'lime',
];