let defferedPrompt;
let btnAdd = document.querySelector("#submit-btn");
window.addEventListener("beforeinstallprompt", (e) => {
	e.preventDefault();
	defferedPrompt = e;
	btnAdd.style.display = "block";
});

btnAdd.addEventListener("click", (e) => {
	e.preventDefault();
	defferedPrompt.prompt();
	defferedPrompt.userChoice.then((chiceResult) => {
		if (chiceResult.outcome === "accepted") {
			console.log("User accepted the A2HS prompt");
		}
		defferedPrompt = null;
	});
});
