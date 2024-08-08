import llamaTokenizer from "https://cdn.jsdelivr.net/npm/llama-tokenizer-js@1.2.2/llama-tokenizer.min.js";
// import llamaTokenizer from "llama-tokenizer-js";

export const modelName = 'llamaTokenizer';

export function processInput(inputText) {
    const text = inputText; // || 'Hello world!';
    const tokenCount = llamaTokenizer.encode(text).length; // 4

    return tokenCount;

    alert(`llamaTokenizer:

text: ${text}
tokenCount: ${tokenCount}`);
}