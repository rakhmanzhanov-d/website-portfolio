let defferedPrompt;
window.addEventListener("beforeinstallprompt", (e) => {
	e.preventDefault();
	defferedPrompt = e;
	btnAdd.style.display = "block";
});

btnAdd.addEventListener("click", (e) => {
	defferedPrompt.prompt();
	defferedPrompt.userChoice.then((chiceResult) => {
		if (chiceResult.outcome === "accepted") {
			console.log("User accepted the A2HS prompt");
		}
		defferedPrompt = null;
	});
});
