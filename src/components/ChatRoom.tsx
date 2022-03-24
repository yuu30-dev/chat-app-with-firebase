import Image from 'next/image';

const ChatRoom = () => {
  return (
    <div className="flex flex-col justify-between p-8 gap-6">
      <div className="flex justify-between p-4 ">
        <div className="relative w-14 h-14">
          <Image
            className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
            src="https://www.gravatar.com/avatar/bbb?d=monsterid"
            alt="icon"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <input
          type="text"
          className="border-b-2 border-0 w-5/6"
          placeholder="What’s happening?"
          autoFocus
        />
        <div className="relative w-14 h-14">
          <Image
            className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
            src="https://www.gravatar.com/avatar/bbb?d=monsterid"
            alt="icon"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div>
        {[...Array(10)].map((message) => (
          <div key={message} className="flex gap-4 border-b-2 p-3">
            <div className="relative w-14 h-14">
              <Image
                className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                src="https://www.gravatar.com/avatar/aaa?d=monsterid"
                alt="icon"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div>
              <span className="font-bold">User Name</span>
              <p>message</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatRoom;
