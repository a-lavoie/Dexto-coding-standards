start:
	node api && node index.js

test-express-server: 
	cd api && nodemon --debug --harmony express-index.js

test-koa-server: 
	cd api && nodemon --debug --harmony lib/koa-index.js

test-runner:
	cd api && grunt


.PHONY: start test-runner


 
