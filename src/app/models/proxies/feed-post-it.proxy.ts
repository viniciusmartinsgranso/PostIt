import { PostItProxy } from './post-it.proxy';
import { UserProxy } from './user.proxy';

export interface FeedPostItProxy extends PostItProxy {
  userId: number;
  hasLiked: boolean;
  user?: UserProxy;
}
