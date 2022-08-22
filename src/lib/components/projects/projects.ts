const status = {
  done: { text: 'done', class: 'badge-success' },
  progress: { text: 'in progress', class: 'badge-warning' },
  cancelled: { text: 'cancelled', class: 'badge-error' }
}
export default [
  {
    id: 1,
    title: 'Portfolio',
    emoji: '🧑‍💻',
    status: status.done,
    description:
      'This Website. A brief Introduction of me as a professional and also as a person.',
    gitUrl: 'https://github.com/stefanwatt/stefan-watt/'
  },
  {
    id: 2,
    title: 'My Neovim config',
    emoji: '📔',
    status: status.progress,
    description:
      "It's always a work in progress. This will keep evolving over time, but I'm very happy with how it works today. Forked from LunarVim/nvim-basic-ide. It's an unbreakable config as all plugins are pinned to a certain commit.",
    gitUrl: 'https://github.com/stefanwatt/stefans-blog'
  },
  {
    id: 3,
    title: 'Kmonad',
    emoji: '⌨️',
    status: status.done,
    description: `I had to live without my custom keyboard and all it's perks for a while. Being forced to make due with a regular keyboard, I at least wanted my layout and custom keybindings back. This posed some challenges, so I created some config files and shell scripts.`,
    gitUrl: 'https://github.com/stefanwatt/kmonad'
  },
  {
    id: 4,
    title: 'Rust applet for alternating audio outputs',
    emoji: '🎧',
    status: status.done,
    description: `Just a little program to alternate my audio output between headphones and speaker. I bind it to a hotkey in my window manager for quick access. I ported this from nodejs to rust for practice.`,
    gitUrl: 'https://github.com/stefanwatt/change_audio_device'
  },
  {
    id: 5,
    title: 'Neovim typing test',
    emoji: '⌨️',
    status: status.progress,
    description: `When relearning 10-finger typing on an alternative layout monkeytype.com was a great tool for practice. It does however not provide a good way to practice coding under real life circumstances. I set out to fill this gap with a neovim plugin.`,
    gitUrl: 'https://github.com/stefanwatt/nvim-typing-test'
  }
]
