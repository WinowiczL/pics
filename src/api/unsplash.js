import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID dc4575df061a5d71b046dc1434afce4e0b41d6d78dae419c53540d33b0af8b54"
  }
});
