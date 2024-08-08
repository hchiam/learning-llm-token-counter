import { AutoTokenizer, LlamaTokenizer } from "https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.2";
// import { AutoTokenizer, LlamaTokenizer } from "@xenova/transformers";

export const modelName = 'Xenova/bert-base-uncased';

export async function processInput(inputText) {
    const text = inputText; // ||'Hello world!';

    const tokenizer = await AutoTokenizer.from_pretrained(modelName);
    const { input_ids } = await tokenizer(text);
    const tokenCount = input_ids.size; // 5

    return tokenCount;

    alert(`modelName: ${modelName}
text: ${text}
tokenCount: ${tokenCount}`)

//     const tokenizer = new LlamaTokenizer({}, {type:'Sequence'});
//     const tokenCount = tokenizer.encode(text).length;
//         alert(`LlamaTokenizer:

// text: ${text}
// tokenCount: ${tokenCount}`)
}