# DiscordBot
To run the bot, you must create `config.json` that includes

```json
{
    "token" : "**Your discord token here**",
    "prefix" : "!"
}
```

```
docker build . -t dingofox/rlis-discord-bot
docker push dingofox/rlis-discord-bot
```

```
node .\deploy-commands.js
```