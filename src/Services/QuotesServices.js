import Axios from "axios";

export default class QuotesServices {
  static async getQuotes() {
    try {
      const result = await Axios.get("https://type.fit/api/quotes");
      return result.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
