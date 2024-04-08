export interface Step {
  title: string;
  imageUrl: string;
  shortDescription: string;
  longDescription: string;
  date: Date;
  url?: string;
}

export const steps: Step[] = [
  {
    title: 'MEDNET Service für Ärzte AG',
    imageUrl:
      'https://comentic.sirv.com/Images/MEDNET-logo-King.png?scale.option=fill&scale.width=300&scale.height=149',
    longDescription: `This is was my first job as a developer and also the company where I completed my apprenticeship. It's a very small company providing software services in the healthcare sector and I was the only web-developer.

I worked as a full-stack developer using a typescript only stack with Svelte(Kit) as a frontend framework.

I completed several small projects while working here but the most noteworthy one was an appointment-booking platform used mainly for Covid-19 vaccines and rapid tests. During the height of the pandemic over 40.000 users have booked their vaccinations with several large medical facilities using the service for their patients. I am very proud of my contribution to combat a global crisis.

This is the biggest project that I've completed as a sole developer to this day.`,
    shortDescription: 'My first dev job and place of apprenticeship',
    date: new Date('2018-09-01'),
    url: 'https://termine.mednet.de/'
  },
  {
    title: 'Dedalus Healthcare',
    imageUrl:
      'https://comentic.sirv.com/Images/800px-Logo-Dedalus.png?scale.option=fill&scale.width=528&scale.height=588&quality=60',
    longDescription: `I've been working as a full-stack developer in a team of ~10 people focusing on medication/administration of drugs.
I was forced to leave my comfort zone of Svelte+NodeJS as we use Java+Angular here. It was a big jump in company size and consequently I'm sharing a code base with many devs. I can confidently say that I lived up to the challenges and adapted to the new situation very quickly.
Making the move to this company was a very important decision in my life and also my professional development.`,
    shortDescription:
      "My current place of employment. It's one of the leading enterprises or hospital information systems.",
    date: new Date('2022-04-01'),
    url: 'https://www.dedalus.com'
  }
];
