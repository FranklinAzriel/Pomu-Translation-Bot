import { Command } from '../../helpers/discord'
import { oneLine } from 'common-tags'
import { ChatInputCommandInteraction } from 'discord.js'
import { validateInputAndModifyEntryList } from '../db/functions'
import { notificationCommand } from '../../helpers/discord/slash'

export const relay: Command = {
  config: {
    permLevel: 2,
  },
  help: {
    category: 'Relay',
    description: oneLine`
     ストリーマーの翻訳（およびオーナー/他のストリーマーのメッセージ）のリレーを、現在のDiscordチャンネルで開始または停止します。
     ストリーマーのメッセージ) を、現在の Discord チャンネルで中継することを開始または停止します。
    `,
  },
  slash: notificationCommand({ name: 'relay', subject: 'start of TL relays' }),
  callback: (intr: ChatInputCommandInteraction): void => {
    const streamer = intr.options.getString('channel')!

    validateInputAndModifyEntryList({
      intr,
      verb: intr.options.getSubcommand(true) as 'add' | 'remove' | 'clear' | 'viewcurrent',
      streamer,
      role: intr.options.getRole('role')?.id,
      feature: 'relay',
      add: {
        success: `:speech_balloon: のTLを中継する。`,
        failure: `
           :warning: ${streamer} は、すでにこのチャンネルでリレーされている
        `,
      },
      remove: {
        success: `:speech_balloon: のTL中継を停止しました。`,
        failure: oneLine`
          :warning: ${streamer}'s 翻訳がすでにリレーされていなかったので
          in <#${intr.channel!.id}>. あなたは正しいチャンネルにいますか？
        `,
      },
    })
  },
}
