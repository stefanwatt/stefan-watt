const status = {
  done: { text: 'done', class: 'badge-success' },
  progress: { text: 'in progress', class: 'badge-warning' },
  cancelled: { text: 'cancelled', class: 'badge-error' },
}
export default [
  {
    id: 4,
    emoji:'💉',
    title: "MEDNET Terminservice",
    status: status.done,
    description: `
    A vaccine-appointment booking platform for COVID-19 vaccines and other appointments.
    Over 40.000 users have booked their vaccinations and several large medical facilities use the service. 
    This project certainly helped combat a global pandemic and of that I am very proud.
    As the sole developer this is the biggest project that I've worked on to this day.`,
    gitUrl: 'https://termine.mednet.de'
  },
  {
    id: 2,
    title: 'Kmonad',
    emoji:'⌨️',
    status: status.done,
    description: `I had to live without my custom keyboard and all it's perks for a while. Being forced to make due with a regular keyboard, I at least wanted my layout and custom keybindings back. This posed some challenges, so I created some config files and shell scripts.`,
    gitUrl: 'https://github.com/stefanwatt/kmonad'
  },
  {
    id: 1,
    title: "Portfolio",
    emoji:'🧑‍💻',
    status: status.progress,
    description: 'This Website. A brief Introduction of me as a professional and also as a person.',
    gitUrl: 'https://github.com/stefanwatt/stefan-watt/'
  },
  {
    id: 3,
    title: 'Blog',
    emoji:'📔',
    status: status.progress,
    description: 'I would like to share my discoveries with anybody who seeks this information and thereby contribute back to the huge ecosystem that I use everyday.',
    gitUrl: 'https://github.com/stefanwatt/stefans-blog'
  },
];