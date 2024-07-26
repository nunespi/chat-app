export interface Contact {
  id: number;
  name: string;
  avatar: string;
}

export interface Message {
  id: number;
  sender: 'self' | string;
  text: string;
  time: string;
}

export interface Chat {
  id: number;
  contactId: number;
  messages: Message[];
}

export interface ChatItemProps {
  user: Contact;
  message?: Message;
}

export interface ChatListProps {
  chats: Chat[];
  setSelectedChat: (chat: Chat) => void;
  selectedChat: Chat;
}

export interface ContactInfoProps {
  user: Contact;
}

export interface ChatHistoryProps {
  chat: Chat;
}

export interface ContactListProps {
  chats: Chat[];
  contacts: Contact[];
  setChats: React.Dispatch<React.SetStateAction<Chat[]>>;
  setSelectedChat: React.Dispatch<React.SetStateAction<Chat>>;
}

export interface MessageInputProps {
  onSendMessage: (message: Message) => void;
}
