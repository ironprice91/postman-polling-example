const server = require('server');
const { get, post } = server.router;

let called = 0;

// port 3000 dy default
server(
  {
  	// disable csrf for testing only
  	security: { csrf: false }
  },
  post('/start-task', ctx => ({"taskId": 123456, "created": new Date()})),
  get('/task-status/:id', () => {
  	called += 1;

  	if (called === 3) {
  		return {"status": "success"};
  	} else if (called > 3) {
		called = 1;
  	}

  	return {"status": "pending"};
  })
);