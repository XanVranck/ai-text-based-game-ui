import express from 'express';
import callOpenAI from './openai.js';
import callDallE from './dalle.js';
import cors from 'cors';
const app = express();
const port = 3000;
app.use(cors())

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/api/scenario', (req, res) => {
    callOpenAI(req.body.chosenScenarios, req.body.playerChoice, 0)
        .then(nextScenario => {
            callDallE(nextScenario.message)
                .then(img => {
                    res.status(200).json({ nextScenario, img });
                });
        });

});

app.listen(port, () => {
    console.log(`Chatbot app listening at http://localhost:${port}`);
});

export default app;