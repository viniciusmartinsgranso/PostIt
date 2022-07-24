import { PostItColorEnum } from '../enum/post-it-color.enum';
import { CommentProxy } from './comment.proxy';

export interface PostItProxy {
  id: number;
  title: string;
  annotation: string;
  color: PostItColorEnum;
  comments?: CommentProxy[];
}
