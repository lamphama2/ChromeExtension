setTimeout(() => { 
	var idList = [
	"didomi-host", 
	"ez-cookie-dialog-wrapper", 
	"qc-cmp2-container",
	"lmgbjq1",
	"player-right-ads"
	]
	removeById(idList)

	var classList =  [
	"sticky below_nav piano-paywall relative", 
	"toast-positioning-wrapper-1beCTfHO",
	"toast-positioning-wrapper-1beCTfHO"
	]
	removeByClass(classList)
	actionOnClass("content paywall-abo blurText", e => e.style.filter = "none" )
	actionOnClass("embed-responsive embed-responsive-16by9", e => e.style.width = "100%")
}, 1000);

function launch(f) {
	try {
		f()
	} catch(e) {
		console.log(e)
	}
}


function removeById(ids) {
	Array.prototype.forEach.call (ids, id => launch( function() { document.getElementById(id).remove(); }) )			
}

function removeByClass(cls) {
	Array.prototype.forEach.call(cls, function(cl) {
		launch( function() { 
			var list = document.getElementsByClassName(cl)
			Array.prototype.forEach.call(list, function(element) {
				element.remove()
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