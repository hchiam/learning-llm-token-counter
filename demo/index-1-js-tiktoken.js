import { getEncoding, encodingForModel } from "https://cdn.jsdelivr.net/npm/js-tiktoken@1.0.12/+esm";
// import { getEncoding, encodingForModel } from "js-tiktoken";

export const modelName = 'gpt2'; // must be an OpenAI model

export function processInput(inputText) {
    const text = inputText; // || 'Hello world!';
    const tokenCount = getEncoding(modelName).encode(text).length; // 3

    return tokenCount;

    alert(`modelName: ${modelName}
text: ${text}
tokenCount: ${tokenCount}`);
}