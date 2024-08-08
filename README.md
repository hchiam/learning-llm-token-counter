# Learning about LLM token counters

Just one of the things I'm learning. https://github.com/hchiam/learning

Tell the user ahead of time that there’s too many tokens in the input.

For example: here’s [OpenAI token counter](https://platform.openai.com/tokenizer) that could be implemented in JS with [`js-tiktoken`](https://www.npmjs.com/package/js-tiktoken):

```js
import { getEncoding, encodingForModel } from "js-tiktoken";
const tokenCount = getEncoding(modelName).encode(text).length;
```

Or maybe for other models like Meta LLama, use `@xenova/transformers`:

- https://www.npmjs.com/package/@xenova/transformers
- https://huggingface.co/docs/transformers.js/main/en/api/models#module_models.LlamaPreTrainedModel
- https://huggingface.co/docs/transformers.js/main/en/api/tokenizers#tokenizers

* [LICENSE](https://github.com/xenova/transformers.js/blob/main/LICENSE)

```js
import { AutoTokenizer } from "@xenova/transformers";
const tokenizer = await AutoTokenizer.from_pretrained(modelName);
const { input_ids } = await tokenizer(text);
const tokenCount = input_ids.size; // ?
```

Or maybe simply with `llama-tokenizer-js`:

- https://github.com/belladoreai/llama-tokenizer-js?tab=readme-ov-file#-llama-tokenizer-js-
- [LICENSE](https://github.com/belladoreai/llama-tokenizer-js/blob/master/LICENSE.md)

```js
import llamaTokenizer from "llama-tokenizer-js";
const tokenCount = llamaTokenizer.encode(text).length;
```
