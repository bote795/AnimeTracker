import StorageWrapper from "./StorageWrapper";

export default class Series extends StorageWrapper {
  constructor() {
    const defaultVal = [];
    super("series", defaultVal);
  }
  /**
   * 
   * @param {Object} Series 
   * @param {String} Series.id 
   * @param {String} Series.name 
   * @param {Number} Series.episode 
   * @param {String} Series.time     time you left out of your episode
   * @param {String} Series.totalEps  total episodes of series
   */
  add(item){
      return this.save(item);
  }
}
