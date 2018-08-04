import { isEmpty } from "ramda";
export default class StorageWrapper {
  key = "";
  default = {};
  cache = {};
  constructor(val, defaultObj) {
    this.key = val;
    this.default = defaultObj;
  }
  get() {
    if (!isEmpty(this.cache)) {
      return Promise.resolve(this.cache);
    }
    return browser.storage.sync
      .get({ [this.key]: this.default })
      .then(data => {
        this.cache = data[this.key];
        return this.cache;
      })
      .catch(err => {
        console.warn(err);
        return err;
      });
  }
  save(obj, key) {
    return browser.storage.sync
      .set({ [key || this.key]: obj })
      .then(data => {
        this.cache = data;
        return data;
      })
      .catch(err => {
        console.warn(err);
        return err;
      });
  }
}
