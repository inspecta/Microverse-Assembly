speakers = [
  {
    id: 1,
    photo: 'photo-1',
    name: 'Yochai Benkler',
    honours: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School.',
    achievements: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',

  },
  {
    id: 2,
    photo: 'photo-2',
    name: 'SohYeong Nog',
    honours: 'Director at Art Center Nabi and a board member of CC Korea.',
    achievements: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities and the arts..',
  },
  {
    id: 3,
    photo: 'photo-3',
    name: 'Yochai Benkler',
    honours: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School.',
    achievements: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },
  {
    id: 4,
    photo: 'photo-4',
    name: 'Yochai Benkler',
    honours: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School.',
    achievements: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },
  {
    id: 5,
    photo: 'photo-5',
    name: 'Yochai Benkler',
    honours: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School.',
    achievements: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },
  {
    id: 1,
    photo: 'photo-6',
    name: 'Yochai Benkler',
    honours: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School.',
    achievements: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
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

let noOfSpeakers = Object.keys(speakers).length;

speakers.forEach((i) => {
  const speakerContainer = document.createElement('div')
  speakerContainer.className = 'speaker'
  speakerContainerMain.appendChild(speakerContainer);

  const speakerImg = document.createElement('div')
  speakerImg.className = 'speaker-photo ' + `${speakers[speakers.indexOf(i)].photo}`
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
  speakerName.appendChild(document.createTextNode((speakers[speakers.indexOf(i)]).name))

  const speakerHonours = document.createElement('li')
  speakerHonours.classList.add('speaker-honours')
  speakerDetails2.appendChild(speakerHonours)
  speakerHonours.appendChild(document.createTextNode((speakers[speakers.indexOf(i)]).honours))

  const separatorIcon = document.createElement('li')
  separatorIcon.classList.add('speaker-icon')
  const separator = document.createElement('hr')
  separator.classList.add('separator')
  speakerDetails2.appendChild(separatorIcon)
  separatorIcon.appendChild(separator)

  const speakerAchievements = document.createElement('li')
  speakerAchievements.classList.add('speaker-achievements')
  speakerDetails2.appendChild(speakerAchievements)
  speakerAchievements.appendChild(document.createTextNode((speakers[speakers.indexOf(i)]).achievements))
});
