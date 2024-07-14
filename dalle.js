
import OpenAI from 'openai';

const openai = new OpenAI();

const callDallE = async function (prompt) {
    const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: "Can you generare an image for a adventure game, this is the scenario with 2 possible options: " + prompt,
        n: 1,
        size: "1024x1024",
    });
    const image_url = response.data[0].url;
    return image_url;
}

export default callDallE