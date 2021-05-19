export const url = 'http://localhost';

export const namespaces = {
	room: 'room',
	lobby: 'lobby',
};

export const events = {
	USER_CONNECTED: {
		event: 'userConnection',
		handle: () => console.log(),
	},
	USER_DISCONNECTED: {
		event: 'userDisconnection',
		handle: () => console.log(),
	},
	JOIN_ROOM: {
		event: 'joinRoom',
		handle: () => console.log(),
	},
};

export class SocketBuilder {
	constructor({ socketUrl, namespace }) {
		this.socketUrl = `${socketUrl}/${namespace}`;
	}

	build() {
		const socket = globalThis.io.connect(this.socketUrl, {
			withCredentials: false,
		});

		socket.on('connection', () => console.log('connected'));

		Object.entries(events).map(([key, { event, handle }]) => {
			socket.on(event, handle);
		});

		return socket;
	}
}
