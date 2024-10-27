# luna-translations-bot

## Navigation
- [Installation](#installation)
- [Features](#features)
- [Screenshots](#screenshots)

Luna's Translations is a private Discord bot for the Hololive fandom written in TypeScript and multithreaded.
It is being used on over 190 servers with an average of over 11,000 users each.

### Features

- Relaying YouTube livestream chat translations in real time from YouTube livechat to Discord
- Relaying channel owner and channel mod messages
- Relaying a streamer's activity in other streamers' livestream chat
- Sending notifications for community posts, YouTube streams, TwitCasting streams
- Easy translator blacklisting system 

### Installation
1. Install docker and docker-compose
2. clone this repository
3. Modify docker-compose.yml
As example:
```
DISCORD_PROD_TOKEN: "694200"
HOLODEX_API_KEY: "426900"
MONGODB_URL: "mongodb://db/luna"
GUILD_ID: "006942"
CLIENT_ID: "004269"
```
4. Build and Run the container
```
docker-compose up -d
```


### Screenshots

![image](https://user-images.githubusercontent.com/1331748/128500085-9126b768-8dc8-42d2-96e2-1c8e25b5b9c9.png)
![image](https://user-images.githubusercontent.com/1331748/128500129-b3d9de63-489b-463f-8a78-2b4e1093e8e3.png)
