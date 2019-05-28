$(document).ready(function()
{
	// listens for any navigation keypress activity
	$(document).keypress(function(e)
	{
		switch(e.which)
		{
			// user presses the "a"
			case '0'.charCodeAt(0):	window.location.href="index.html";
						break;

			// user presses the "s" key
			case '1'.charCodeAt(0):	window.location.href="research.html";
						break;

			case '2'.charCodeAt(0):	window.location.href="publications.html";
						break;

			case '3'.charCodeAt(0):	window.location.href="code.html";
					break;

			case '4'.charCodeAt(0):	window.location.href="talks.html";
					break;

			case '5'.charCodeAt(0):	window.open("static/docs/cv.pdf", "_blank");
					break;					
		}
	});
});
