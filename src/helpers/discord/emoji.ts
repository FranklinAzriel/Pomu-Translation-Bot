export const emoji: Record<Name, EmojiCode> = {
  respond: '<:NinaExcited:1009724066346840114>',
  deepl: '<:deepl:1009723703807987772>',
  nbsp: '<:nbsp:832910690998026260>',
  discord: '<:Discord:1009723380188061746>',
  holo: '<:Hololive:1009723078722469968>',
  ping: '<:LuLuPeek:1009722823075430460>',
  tc: '<:TwitCasting:1009722538080882760>',
  yt: '<:YouTube:1009722198073815122>',
  peek: '<:PomuPeek:1009721716295090206>',
  niji: '<:nijisanji:1009718487364673566>',
} as const

///////////////////////////////////////////////////////////////////////////////

type Name = string
type EmojiCode = string

