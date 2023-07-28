/** 
 *@NApiVersion 2.x
 *@NScriptType UserEventScript
*/
define (['N/log', 'N/https'] , function(log, https) {
    function myAfterSubmit (context) {
        try {
            // Step 1: Define the User Event that will trigger the script.
            if (context.type === context.UserEventType.EDIT)
            {
            // Step 2: Make the request to the API (include headers data, parameters or credentials if needed).
                var response = https.get({url:'https://jsonplaceholder.typicode.com/todos/1'});
            // Step 3: Handle the response.    
                if(response.code === 200){
                    var responseBody = response.body;
                    log.debug('Successful request to JSONPlaceholder: ' + responseBody);
                    /*  
                        *Optional* Add a sample response to the log.debug() statement.
                            Sample response: {
                                "userId": 1,
                                "id": 1,
                                "title": "delectus aut autem",
                                "completed": false
                            } 
                    */ 
                } 
                else {
                    log.error("Error on the request " + "Code: " + response.code);
                }
            }
            else{
                return
            }
        }
        // Step 4: Handle any error.
        catch (e) {
            log.error({
                title: 'Error',
                details: e
            });
        }                     
    }
    // Step 5: Add the return statement that identifies the entry point functions.
    return {
        afterSubmit: myAfterSubmit,
    };   
});   