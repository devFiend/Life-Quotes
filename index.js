import express from "express";
import ejs from "ejs";
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
    try {
        const response = await axios.get("http://api.quotable.io/quotes/random");
        const result = response.data[0];
        console.log(result);
        res.render("index.ejs", { result: result });
    } catch (error) {
        console.error("Failed to make request:", error.message);
        
    }});

    app.post("/quote", async (req, res) => {
        try {
            const response = await axios.get("http://api.quotable.io/quotes/random");
            const result = response.data[0];
            console.log(result);
            res.render("index.ejs", { result: result });
        } catch (error) {
            console.error("Failed to make request:", error.message);
        }
    });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});