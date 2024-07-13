import express from 'express';
import callOpenAI from './openai.js';
import cors from 'cors';
const app = express();
const port = 3000;
app.use(cors())

app.use(express.static('public'));
app.use(express.json());
app.post('/api/scenario', (req, res) => {
    callOpenAI(req.body.chosenScenarios, req.body.playerChoice, 0)
    .then((nextScenario) => {
        res.status(200).json(nextScenario);
    })

});

app.listen(port, () => {
  console.log(`Chatbot app listening at http://localhost:${port}`);
});

export default app;