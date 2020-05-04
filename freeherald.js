const freeContent = () => {
	window.wrappedJSObject.isMobile.any = () => true;
	const p = $(".premium-content");
	if (p.length == 0){
		if (pageHeader != null){
			pageHeader.text("All content is free");
		}
		console.log("All content is free");
		return;
	}
	pageHeader.text("Freeing content");
	console.log("Freeing content");
	const c = p.children();
	c.css('display', '');
	c.removeClass();
	p.removeClass("premium-content");
	$(".article-offer").remove();
	console.log("Freeing complete");
};

let secondsToFree = 3;
let firstRun = true;
let pageHeader = null;

const delayedFreeContent = () => {
	if (firstRun){
		pageHeader = $(".dar-header-h3");
	}
	if (secondsToFree > 0){
		const freeText = `Freeing content in ${secondsToFree}...`;
		console.log(freeText);
		if (pageHeader != null){
			pageHeader.text(freeText);
		}
		setTimeout(() => {
			secondsToFree--;
			delayedFreeContent();
		}, 1000);
	} else {
		if (pageHeader != null){
			pageHeader.text("Freeing now...");
		}
		freeContent();
		pageHeader.text("Done...");
	}
};

window.addEventListener("load", delayedFreeContent, false);