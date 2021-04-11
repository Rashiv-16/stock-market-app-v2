import express from "express";
import dotenv from "dotenv";
import path from "path";

//db config
import connectDB from "./db/db.js";

//db models
import SavedStock from "./models/savedStockData.js";
import StockData from "./models/StockData.js";

dotenv.config();
connectDB();
const app = express();

app.use(express.json());

const test = async (req, res) => {
  let pagesize = 5;
  let page = Number(req.body.data) || 1;
  const count = await StockData.count();
  const data = await StockData.find({})
    .limit(pagesize)
    .skip(pagesize * (page - 1));

  res.json({ data, page, pages: Math.ceil(count / pagesize) });
};

app.post("/api/data", (req, res) => {
  test(req, res);
});

app.get;

const savedDataHandler = async (res) => {
  try {
    const rawdata = await SavedStock.find({});
    res.send(rawdata);
  } catch (err) {
    throw err;
  }
};

const savingDataHandler = async (req, res) => {
  await StockData.findOneAndUpdate(
    { Symbol: req.body.data.symbol },
    { saved: true }
  );
  const data = await StockData.find({ Symbol: req.body.data.symbol });

  const saveit = new SavedStock({
    Name: data[0].Name,
    Symbol: data[0].Symbol,
    "Market Cap": data[0]["Market Cap"],
    "Net Change": data[0]["Net Change"],
  });

  saveit.save((err, res) => {
    if (err) throw err;
  });
};

app.get("/api/saved", (req, res) => {
  savedDataHandler(res);
});

app.post("/api/saved", (req, res) => {
  savingDataHandler(req, res);
});

const deletingDataHandler = async (req, res) => {
  const symbol = req.body.symbol;

  const data = await StockData.findOneAndUpdate(
    { Symbol: symbol },
    { saved: false }
  );

  await SavedStock.findOneAndDelete({ Symbol: symbol }, (err, doc) => {});
  // res.send("success");
};

app.delete("/api/saved", (req, res) => {
  deletingDataHandler(req, res);
});

const searchData = async (name) => {
  const data = await stockData.find({ name: name });
  res.send(data);
};

app.post("/api/search/:name", (req, res) => {
  searchData(req.params.name);
});

const __dirname = path.resolve();

if (process.env.NODE_ENV === "PRODUCTION") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {});
