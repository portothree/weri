import * as socketCfg from './socket.js';

const socketBuilder = new socketCfg.SocketBuilder({
	socketUrl: socketCfg.url,
	namespace: socketCfg.namespaces.room,
});

const socket = socketBuilder.build();

const room = {
	id: Date.now(),
	topic: 'Wire introduction',
};

const user = {
	img:
		'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
	username: 'gporto',
};

socket.emit(socketCfg.events.JOIN_ROOM, { user, room });
