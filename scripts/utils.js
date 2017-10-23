var localhost = "http://10.5.1.250/team1"

/**
 * Method doing the ajax call.
 * Data are optional for GET methods.
 */
function apiCall(mUrl, mMethod, mSuccessMethod, mErrorMethod, mData = {}){
	$.ajax({
 		url: localhost+mUrl,
 		method: mMethod,
 		data: mData,
		success: mSuccessMethod,
		error: mErrorMethod
	});
	//debugger;
	return mData;
}

/**
 * Method for ajax calls GET methods.
 * In theory, no extra data are provided, except api url.
 */
function apiCallRead(mUrl, mSuccessMethod, mErrorMethod){
	//debugger;
	return apiCall(mUrl, 'GET', mSuccessMethod, mErrorMethod)
}


/**
 * Method for ajax calls with POST, PUT, DELETE methods.
 * In this case, extra data are given.
 */
function apiCallWrite(mUrl, mMethod, mData, mSuccessMethod, mErrorMethod){
	apiCall(mUrl, mMethod, mSuccessMethod, mErrorMethod, mData)
}


// ----------------- VIEW TO DISPLAY AFTER NETWORK CALL. ----------------- //

// Generics for tests.


function testErrorMethod(error){
	$('#pid').text("Erreur"+error);
}