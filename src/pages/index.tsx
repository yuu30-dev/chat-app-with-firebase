import ChatRoom from '~/components/ChatRoom';
import SignIn from '~/components/SignIn';

export default function Home() {
  return true ? <ChatRoom /> : <SignIn />;
}
