const speakers = [
  {
    id: 1,
    photo: 'photo-1',
    name: 'Ariel Camus',
    honours: 'Microverse Founder & C.E.O.',
    achievements: 'Ariel has been coding since 12 and has lived and worked in 7 different countries. Previously founded Tourist Eye, a travel app with 1MM+ users acquired by Lonely Planet.',

  },
  {
    id: 2,
    photo: 'photo-2',
    name: 'Riley Spicer',
    honours: 'Product & Learning at Microverse.',
    achievements: 'Riley cares about creating community and improving the world we live in. They come to Microverse with an eclectic background that includes attending a coding school then working as a software engineer at AWS.',
  },
  {
    id: 3,
    photo: 'photo-3',
    name: 'Andrea Funda',
    honours: 'Dynamic operations manager with remote work experience and expertise in leading multinational teams.',
    achievements: 'Andrea believes no road trip is successful without getting lost at least once. She loves helping people find their way. Her background is in process, project, and people management.',
  },
  {
    id: 4,
    photo: 'photo-4',
    name: 'Charity Mbaka',
    honours: 'Experience Designer at Microverse.',
    achievements: 'Charity is a designer who enjoys working at the intersection of people, businesses, and great products. She has built product experiences in industries like e-commerce, fintech, and security. Outside of work, you can find her reading, going to open mics, playing tennis, volunteering at animal shelters, or looking for a beach.',
  },
  {
    id: 5,
    photo: 'photo-5',
    name: 'Emilia Andrzejewska',
    honours: 'Technical Curriculum Designer at Microverse / Web Developer (remote).',
    achievements: 'Emilia is a web developer by profession and a teacher at heart. She has 7 years of professional coding experience, mostly in C# and Ruby, and has served as a mentor on various bootcamps and Rails Girls communities. .',
  },
  {
    id: 6,
    photo: 'photo-6',
    name: 'Gaby Suarez',
    honours: 'Head of Admission @ Microverse.',
    achievements: 'Gaby is a native Salvadoran, Spanglish-speaking, dog (and sushi) lover. Her background is in managerial consulting for large tech companies, but her professional passion lies in helping companies with strong social missions solve complex problems.',
  }
];

const speakersSection = document.getElementById('speakers');
const speakerHeader = document.createElement('h3')

speakerHeader.classList.add('speakers-header');
speakersSection.appendChild(speakerHeader);
speakerHeader.appendChild(document.createTextNode('Featured Speakers'))

const hrLine = document.createElement('hr');
hrLine.classList.add('hr-about-1');
speakersSection.appendChild(hrLine);

const speakerContainerMain = document.createElement('div')
speakerContainerMain.className = 'speakers-main'
speakersSection.appendChild(speakerContainerMain);

speakers.forEach((i) => {
  const speakerContainer = document.createElement('div')
  speakerContainer.className = 'speaker'
  speakerContainerMain.appendChild(speakerContainer);

  const speakerImg = document.createElement('div')
  speakerImg.className = 'speaker-photo ' + `${i.photo}`
  speakerContainer.appendChild(speakerImg);

  const speakerDetails = document.createElement('div')
  speakerDetails.setAttribute('class', 'speaker-details')
  speakerContainer.appendChild(speakerDetails)

  const speakerDetails2 = document.createElement('ul')
  speakerDetails2.classList.add('speaker-details2')
  speakerDetails.appendChild(speakerDetails2)

  const speakerName = document.createElement('li')
  speakerName.classList.add('speaker-name')
  speakerDetails2.appendChild(speakerName)
  speakerName.appendChild(document.createTextNode((i.name))

  const speakerHonours = document.createElement('li')
  speakerHonours.classList.add('speaker-honours')
  speakerDetails2.appendChild(speakerHonours)
  speakerHonours.appendChild(document.createTextNode((i.honours))

  const separatorIcon = document.createElement('li')
  separatorIcon.classList.add('speaker-icon')
  const separator = document.createElement('hr')
  separator.classList.add('separator')
  speakerDetails2.appendChild(separatorIcon)
  separatorIcon.appendChild(separator)

  const speakerAchievements = document.createElement('li')
  speakerAchievements.classList.add('speaker-achievements')
  speakerDetails2.appendChild(speakerAchievements)
  speakerAchievements.appendChild(document.createTextNode((i.achievements))
});
