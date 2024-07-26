import { Chat, Contact } from './types';

export const chatData: Chat[] = [
  {
    id: 1,
    contactId: 1,
    messages: [
      {
        id: 1,
        sender: 'self',
        text: 'I won Huge in Bingo last night. you should have come',
        time: '17:10:00',
      },
      {
        id: 2,
        sender: 'John Fisher',
        text: 'Whoa, how much?',
        time: '17:12:00',
      },
      {
        id: 3,
        sender: 'self',
        text: '5 Bucks :D',
        time: '17:15:00',
      },
    ],
  },
  {
    id: 2,
    contactId: 2,
    messages: [
      {
        id: 1,
        sender: 'self',
        text: "Let's meet up tomorrow.",
        time: '16:40:00',
      },
      {
        id: 2,
        sender: 'James Green',
        text: 'Sounds great!',
        time: '16:45:00',
      },
    ],
  },
  {
    id: 3,
    contactId: 3,
    messages: [],
  },
];

export const contactData: Contact[] = [
  {
    id: 1,
    name: 'John Fisher',
    avatar: 'src/assets/av1.jpg',
  },
  {
    id: 2,
    name: 'James Green',
    avatar: 'src/assets/av2.jpg',
  },
  {
    id: 3,
    name: 'Kate Williams',
    avatar: 'src/assets/av3.jpg',
  },
  {
    id: 4,
    name: 'Emily Johnson',
    avatar: 'src/assets/av4.jpg',
  },
  {
    id: 5,
    name: 'Michael Brown',
    avatar: 'src/assets/av5.jpg',
  },
];
