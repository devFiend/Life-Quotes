import express from "express";
import ejs from "ejs";
import axios from "axios";
import https from "https";  // Import the https module

const app = express();
const PORT = process.env.PORT || 3000;

// Create an HTTPS agent to bypass SSL verification (for local testing only)
const agent = new https.Agent({  
    rejectUnauthorized: false  // Disable SSL verification (not recommended for production)
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
    try {
        const response = await axios.get("https://api.quotable.io/quotes/random", { httpsAgent: agent });
        const result = response.data[0];
        console.log(result);
        res.render("index.ejs", { result: result });
    } catch (error) {
        console.error("Failed to make request:", error.message);
        res.status(500).send("Failed to fetch quote.");
    }
});

app.post("/quote", async (req, res) => {
    try {
        const response = await axios.get("https://api.quotable.io/quotes/random", { httpsAgent: agent });
        const result = response.data[0];
        console.log(result);
        res.render("index.ejs", { result: result });
    } catch (error) {
        console.error("Failed to make request:", error.message);
        res.status(500).send("Failed to fetch quote.");
    }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});