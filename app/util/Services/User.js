import StorageWrapper from "./StorageWrapper";

// providers
export const NONE = "NONE";
export const ANILIST = "ANILIST";
export const KISTU = "KISTU";

// OPTIONS
export const TIME_ELAPSED = "timeElapsed";
export const TOTAL_EPISODES = "totalEps";
export const NEW_TAB = "newTab";
export const defaultVal = {
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
class User extends StorageWrapper {
  constructor() {
    super("user", defaultVal);
  }
  defaultFunc() {
    this.save(defaultVal);
  }
  toggleOption(key) {
    return this.save(!this.cache["options"][key], key);
  }
}

const user = new User();
export default user;
