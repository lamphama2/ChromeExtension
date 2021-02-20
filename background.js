setTimeout(() => { 
	console.log("start")
	removeById("didomi-host")
	removeById("ez-cookie-dialog-wrapper")
	removeById("qc-cmp2-container")
	removeByClass("sticky below_nav piano-paywall relative")
	actionOnClass("content paywall-abo blurText", e => e.style.filter = "none" )
	launch( function() { document.getElementsByClassName("content paywall-abo blurText").getElementsByClassName("blurText")[0].filter = "none"; } )
	console.log("finish")
}, 1000);

function launch(f) {
	try {
		f()
	} catch(e) {
		console.log(e)
	}
}


function removeById(id) {
	launch( function() { document.getElementById(id).remove(); } )
}

function removeByClass(cls) {
	launch( function() { 
		var list = document.getElementsByClassName(cls)
		Array.prototype.forEach.call(list, function(element) {
			element.remove()
		});
	} )
}

function actionOnClass(cls, f) {
	launch( function() { 
		var list = document.getElementsByClassName(cls)
		Array.prototype.forEach.call(list, function(element) {
			f(element)
		});
	} )
}