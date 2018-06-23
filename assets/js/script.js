/* Change opacity of the given portfolio image */
function chopac(id) {
		document.getElementById(id).className = "project-img js-transparent";
	}

/* Reset opacity of the given portfolio image */
function reopac(id) {
	document.getElementById(id).className = "project-img";
}

/* Toggle the Nav Icon to show/hide the Nav Links */
function toggle_nav() {
	var x = document.getElementById("nav-bar");
    if (x.className === "innactive") {
        x.className = "active";
        document.getElementById("nav-icon").className += " clicked";
    } else {
        x.className = "innactive";
        document.getElementById("nav-icon").className = "nav-icon";
	}
}

/* Closes the Nav Link Menu if user clicks anywhere outside it or the Nav Icon */
var nav = document.querySelector(".innactive");

	/* Detects whenever the user clicks anywhere on page */
document.addEventListener("click", function(event) {
	/* Only performs this function if the Nav Link Menu is already active */
	if (document.getElementById("nav-bar").className === "active") {
		/* Does nothing if the user clicks either in the Nav Link Menu or on the Nav Icon */
		if (event.target.closest(".active") || event.target.closest(".nav-icon")) {
			return;
		} else {
		/* Closes the Nav Link Menu if the function isn't broken (if the user clicks somewhere else) */
		nav.className = "innactive";
		/* Resets the CSS for the Nav Link back to normal */
		document.getElementById("nav-icon").className = "nav-icon";
		}
	}
}
						  
); /* Closes the original click event-listener */