import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1196259a37634f9f9e14d91d04c47de2",
  },
});
