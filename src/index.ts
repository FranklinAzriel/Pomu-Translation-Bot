/**
 * LUNA'S TRANSLATIONS DISCORD BOT
 */
Error.stackTraceLimit = Infinity
import * as dotenv from 'dotenv'
dotenv.config ({ path: __dirname+'/../.env' })
import { client } from './core/'
import { config } from './config'
import mongoose from 'mongoose'
import './modules/community/communityNotifier'
import './modules/youtubeNotifier'
import './modules/twitcastingNotifier'
import './modules/livechat/chatRelayer'
import { oldSettings } from './oldSettings'
import { NewSettings, updateGuildData, updateBotData, updateSettings } from './core/db/functions'
import { findStreamerName } from './core/db/streamers/'
import { Snowflake } from 'discord.js'

client.login (config.token)

mongoose.connect ('mongodb://localhost/luna', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})

// ;(async () => {
  // client.guilds.cache.forEach (guild => {
    // updateGuildData (guild.id, { relayHistory: new Map () })
  // })
  // updateBotData ({ relayHistory: new Map () })
// })()


// ;(async () => {
  // for (const [guildId, _settings] of oldSettings) {
    // const settings = _settings as any
    // const newSettings: NewSettings = {
      // admins: settings?.adminRole ? [settings.adminRole.id as any] : [],
      // blacklist: settings?.blacklist
        // ? settings.blacklist
          // .map ((x: any) => ({ ytId: x.channel, name: x.name, reason: x.reason }))
        // : [],
      // blacklisters: settings?.modRole ? [settings.modRole.id as any] : [],
      // community: settings?.communityStreamer
        // ? [{
          // streamer: findStreamerName (settings?.communityStreamer) as any,
          // discordCh: settings?.communityChannel.replace (/\D/g, '') as any,
          // roleToNotify: settings?.communityRole?.id as any
        // }]
        // : [],
      // customWantedPatterns: settings?.customWantedStrings ?? [],
      // customBannedPatterns: settings?.customBannedStrings ?? [],
      // deepl: settings?.deepl == null ? true : settings?.deepl,
      // holochats: settings?.stalkStreamer
        // ? [{
          // streamer: findStreamerName (settings?.stalkStreamer) as any ?? 'Himemori Luna',
          // discordCh: settings?.stalkChannel.replace (/\D/g, '') as any,
        // }]
        // : [],
      // modMessages: settings?.modMessages == null ? true : settings.modMessages,
      // relay: settings?.streamer
        // ? [{
          // streamer: findStreamerName (settings?.streamer) as any,
          // discordCh: settings?.streamChannel.replace (/\D/g, '') as any,
        // }]
        // : [],
      // twitcasting: settings.twitcastingStreamer
        // ? [{
          // streamer: findStreamerName (settings?.twitcastingStreamer) as any,
          // discordCh: settings?.twitcastingChannel.replace (/\D/g, '') as any,
          // roleToNotify: settings?.twitcastingRole?.id as any
        // }]
        // : [],
      // youtube: settings.youtubeStreamer
        // ? [{
          // streamer: findStreamerName (settings?.youtubeStreamer) as any,
          // discordCh: settings?.youtubeChannel.replace (/\D/g, '') as any,
          // roleToNotify: settings?.youtubeRole?.id as any
        // }]
        // : [],
    // }
    // await updateSettings (guildId as Snowflake, newSettings)
  // }
// })()
