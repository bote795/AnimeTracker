import StorageWrapper from "./StorageWrapper";

// providers
export const NONE = "NONE";
export const ANILIST = "ANILIST";
export const KISTU = "KISTU";

// OPTIONS
export const TIME_ELAPSED = "timeElapsed";
export const TOTAL_EPISODES = "totalEps";
export const NEW_TAB = "newTab";

export default class User extends StorageWrapper {
  constructor() {
    const defaultVal = {
      provider: {
        type: NONE,
        token: {
          access_token: null,
          expires: null
        },
        refreshToken: {
          token: null,
          expires: null
        }
      },
      user: {
        id: null,
        displayName: null
      },
      options: {
        timeElapsed: false,
        totalEps: false,
        newTab: false
      }
    };
    super("user", defaultVal);
  }
  toggleOption(key) {
    return this.save(!this.cache["options"][key]);
  }
}
