setTimeout(() => { 
	console.log("start")
	var idList = [
	"didomi-host", 
	"ez-cookie-dialog-wrapper", 
	"qc-cmp2-container",
	"lmgbjq1",
	"player-right-ads",
	"onetrust-consent-sdk",
	"image_popup_wrapper",
	"image_popup_background"
	]
	removeById(idList)

	var classList =  [
	"sticky below_nav piano-paywall relative", 
	"toast-positioning-wrapper-1beCTfHO",
	"toast-positioning-wrapper-1beCTfHO",
	"fc-consent-root"
	]
	removeByClass(classList)
	actionOnClass("content paywall-abo blurText", e => e.style.filter = "none" )
	actionOnClass("embed-responsive embed-responsive-16by9", e => e.style.width = "100%")
	document.getElementsByTagName("BODY")[0].style.overflow = "auto";
	console.log("finish")
}, 2000);

setTimeout(() => { 
	console.log("start")
	var idList = [
	"onetrust-consent-sdk"
	]
	removeById(idList)
}, 2000);


function removeById(ids) {
	Array.prototype.forEach.call (ids, id => launch( function() {
		console.log("Removing " + id)
	 	document.getElementById(id).remove(); 
		console.log("Removed " + id)
	}) )			
}

function removeByClass(cls) {
	Array.prototype.forEach.call(cls, function(cl) {
		launch( function() { 
			var list = document.getElementsByClassName(cl)
			Array.prototype.forEach.call(list, function(element) {
				element.remove()
				console.log("Remove" + cl)
			});
		} )

	})

}

function actionOnClass(cls, f) {
	launch( function() { 
		var list = document.getElementsByClassName(cls)
		Array.prototype.forEach.call(list, function(element) {
			f(element)
		});
	} )
}


function launch(f) {
	try {
		f()
	} catch(e) {
		console.log(e)
	}
}
