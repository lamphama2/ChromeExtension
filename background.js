function main(){ 
	console.log("start")
	var idList = [
	"didomi-host", 
	"ez-cookie-dialog-wrapper", 
	"qc-cmp2-container",
	"lmgbjq1",
	"player-right-ads",
	"onetrust-consent-sdk",
	"image_popup_wrapper",
	"image_popup_background",
	"privacy-consent",
	"cookie-banner-root",
	"CybotCookiebotDialog"
	]
	removeById(idList)

	var classList =  [
	"sticky below_nav piano-paywall relative", 
	"toast-positioning-wrapper-1j0He64l",
	"fc-consent-root",
	"stripe _cookieBanner-module_cookieBanner__vXsew span--100",
	"flex flex-col p-2 w-full",
	"ff-sans ps-fixed z-nav-fixed ws4 sm:w-auto p32 bg-black-750 fc-white bar-lg b16 l16 r16 js-consent-banner"
	]
	removeByClass(classList)
	actionOnClass("content paywall-abo blurText", e => e.style.filter = "none" )
	actionOnClass("embed-responsive embed-responsive-16by9", e => e.style.width = "100%")
	document.getElementsByTagName("BODY")[0].style.overflow = null;
	console.log("finish")
}

setTimeout(main, 1000);
setTimeout(main, 2000);
setTimeout(main, 3000);
setTimeout(main, 4000);

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
