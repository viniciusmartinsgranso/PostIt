import { PostItColorEnum } from '../enum/post-it-color.enum';

export interface PostItProxy {
  id: number;
  title: string;
  annotation: string;
  color: PostItColorEnum;
}
