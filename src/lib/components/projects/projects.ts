const status = {
  done: { text: 'done', class: 'badge-success' },
  progress: { text: 'in progress', class: 'badge-warning' },
  cancelled: { text: 'cancelled', class: 'badge-error' }
};
export default [
  {
    id: 1,
    title: 'BubbleTube',
    emoji: '🫧',
    status: status.progress,
    description: 'TUI youtube music player',
    gitUrl: 'https://github.com/stefanwatt/bubbletube/'
  },
  {
    id: 2,
    title: 'Go-Launch',
    emoji: '🚀',
    status: status.progress,
    description: 'App launcher with customizable Frontend.',
    gitUrl: 'https://github.com/stefanwatt/go-launch/'
  },
  {
    id: 3,
    title: 'Tierlist App',
    emoji: '🏆',
    status: status.done,
    description: 'No non-sense tierlist app. Built with Svelte and Tailwind.',
    gitUrl: 'https://github.com/stefanwatt/TierList'
  },
  {
    id: 4,
    title: 'Sandr',
    emoji: '🔍',
    status: status.progress,
    description:
      "A neovim plugin that's supposed to mimic the search and replace dialog in IntelliJ/VSCode etc. Written in Lua.",
    gitUrl: 'https://github.com/stefanwatt/change_audio_device'
  },
  {
    id: 5,
    title: 'My Neovim config',
    emoji: '📔',
    status: status.progress,
    description:
      "It's always a work in progress. This will keep evolving over time, but I'm very happy with how it works today.",
    gitUrl: 'https://github.com/stefanwatt/nvim'
  }
];
