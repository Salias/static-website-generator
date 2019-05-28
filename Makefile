build:
	# Compile Templates
	python generator.py

server:
	python -m http.server --directory=output/

deploy:
	# Deploying to Github Page
	cd output && git add . && git commit -m "New Feature" && git push && cd ..
