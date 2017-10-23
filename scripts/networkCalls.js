
/**
 * GET methods to the API.
 * 
 * Only use the url for the API.
 */

function getAllBeers(){
	return apiCallRead("/beer", testSuccessMethod, testErrorMethod);
}

function getBeerById(id){
	apiCallRead("/beer/"+id, testSuccessMethod, testErrorMethod);
}

function getBeerFrom(number){
	apiCallRead("/beer/start/"+number, testSuccessMethod, testErrorMethod);
}

function getAllBewery(){
	apiCallRead("/brewery", testSuccessMethod, testErrorMethod);
}

function getBeweryById(id){
	apiCallRead("/brewery/"+id, testSuccessMethod, testErrorMethod);
}

function getAllBeweryFrom(number){
	apiCallRead("/brewery/start/"+number, testSuccessMethod, testErrorMethod);
}

function getAllStyles(){
	apiCallRead("/style", testSuccessMethod, testErrorMethod);
}

function getStyleById(id){
	apiCallRead("/style/"+id, testSuccessMethod, testErrorMethod);
}

function getAllCategories(){
	apiCallRead("/category", testSuccessMethod, testErrorMethod);
}

function getCategoryById(id){
	apiCallRead("/category/"+id, testSuccessMethod, testErrorMethod);
}

function searchByKey(key){
	apiCallRead("/search/"+key, testSuccessMethod, testErrorMethod);
}

function searchByKeyAndFromNumber(key, number){
	apiCallRead("/search/"+key+"/start/"+number, testSuccessMethod, testErrorMethod);
}

/**
 * POST methods to the API.
 * 
 * Send extra data to the API.
 */

//TODO

/**
 * PUT methods to the API.
 * 
 * Send extra data to the API.
 */

//TODO

/**
 * DELETE methods to the API.
 * 
 * Send extra data to the API.
 */

//TODO
