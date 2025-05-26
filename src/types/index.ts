export type User = {
  client: {
    id: number;
    name: string | null;
    phone: string;
    email: string | null;
    birthday: Date | null;
    invitedFriends?: string[];
    cards: {
      number: string;
      unqNumber: string;
      balance: number;
      isLocked: boolean | null;
      dateBegin: Date;
    };
  };
  tokens: {
    accessToken: string;
    accessTokenExp: Date;
    refreshToken: string;
    refreshTokenExp: Date;
  };
  subscribe?: Subscribe;
  invitedCode?: string;
  lastOperDate?: Date;
} | null;

export type Subscribe = {
  amount: number;
  dateDebiting: Date;
  name: string;
  status: "active" | "closed" | "created" | "loading";
  subscribeId: string;
  payUrl?: string;
} | null;
