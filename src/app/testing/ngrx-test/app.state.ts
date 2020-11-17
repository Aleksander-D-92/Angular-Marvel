export interface Tutorial {
  name: string;
  url: string;
}

export interface AppState {
  readonly tutorial: Tutorial[];
}
