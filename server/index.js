const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

// Set up the server
const app = express();
app.use(bodyParser.json());
app.use(cors())

// Set up the ChatGPT endpoint
app.post("/chat", async (req, res) => {
  // Get the prompt from the request
  const { prompt } = req.body;

  // Generate a response with ChatGPT
  const completion = await openai.createChatCompletion(
    {
      "model": "gpt-3.5-turbo",
      "messages": [{"role": "user", "content": "Hello!"}]
    });
    console.log(completion.data/choices)
  res.send(completion.data.choices[0].text);
});

// Start the server
const port = 8080;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});