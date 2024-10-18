const { WebClient } = require('@slack/web-api');

const token = process.env.SLACK_BOT_TOKEN;
const web = new WebClient(token);

async function sendMessage(channelId, message) {
    try {
        await web.chat.postMessage({
            channel: channelId,
            text: message,
        });
        console.log('Message sent successfully');
    } catch (error) {
        console.error('Error sending message:', error);
    }
}

async function uploadFile(channelId, filePath, fileName) {
    try {
        await web.files.uploadv2({
            channels: channelId,
            file: require('fs').createReadStream(filePath),
            filename: fileName,
        });
        console.log('File uploaded successfully');
    } catch (error) {
        console.error('Error uploading file:', error);
    }
}


const channelId = process.env.SLACK_CHANNEL_ID;

sendMessage(channelId, "message");

uploadFile(channelId, './path/to/file.txt', "fileName");