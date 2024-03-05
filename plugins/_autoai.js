import fetch from 'node-fetch';

export async function before(m) {
    const chat = global.db.data.chats[m.chat];
    if (m.isBaileys || !m.text) return false;
    let text = m.text;
    try {
        if (chat.autoAi) {
            const openAIResponse = await chatgpt(text)
            const result = openAIResponse;

            if (result.status === true) {
                await this.sendMessage(m.chat, {
                    text: result.result
                }, {
                    quoted: m
                });
            }
        }
    } catch {
        await this.reply(m.chat, 'Error occurred.', m);
    }
}

export const disabled = false;


async function chatgpt(input) {
    if (!input) {
        return {
            status: false,
            message: "No input.",
            contoh: "Halo"
        };
    }

    const result = {
        status: true,
        result: "",
    };

    const apiEndpoints = [{
            url: "https://aemt.me/openai?text=",
            processResponse: (data) => {
                if (data.result !== 'error' && data.result !== '' && data.result !== undefined) {
                    return data.result;
                }
                return null;
            }
        },
        // Add more endpoints with the appropriate processResponse functions
    ];

    for (const endpoint of apiEndpoints) {
        try {
            const response = await fetch(`${endpoint.url}${input}`);
            if (response.ok) {
                const responseData = await response.json();
                if (responseData) {
                    const processedResult = endpoint.processResponse(responseData);
                    if (processedResult) {
                        result.result = processedResult.trim();
                        return result;
                    }
                }
            }
        } catch (error) {
            // Handle errors if needed
        }
    }

    result.status = false;
    result.result = "Error";
    return result;
}