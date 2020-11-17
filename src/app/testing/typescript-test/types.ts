export type Hungry = boolean;
export type Greeting = (name: string) => string;

type Person = {
  name: string;
  hungry: boolean
};
type Youtuber = {
  youtube: boolean;
};
type Streamer = {
  isStreaming: boolean;
};
export type Harry = Person | Youtuber | Streamer;
