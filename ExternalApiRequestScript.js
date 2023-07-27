/** 
 *@NApiVersion 2.x
 *@NScriptType UserEventScript
*/
define (['N/log', 'N/https'] , function(log, https) {
    function myAfterSubmit (context) {
        try {
            // 
            if (context.type === context.UserEventType.EDIT)
            {
                var response = https.get({url:'https://jsonplaceholder.typicode.com/todos/1'});
                if(response.code === 200){
                    var responseBody = response.body;
                    log.debug('This is a successful request to JSONPlaceholder: ' + responseBody);
                    /*  Sample response: {
                            "userId": 1,
                            "id": 1,
                            "title": "delectus aut autem",
                            "completed": false
                        } 
                    */ 
                } 
                else {
                    log.error("There's been an error on the request " + "Code: " + response.code);
                }
            }
            else{
                return
            }
        }
        // Handle errors.
        catch (e) {
            log.error({
                title: 'Error',
                details: e
            });
        }                     
    }
    // Add the return statement that identifies the entry point functions.
    return {
        afterSubmit: myAfterSubmit,
    };   
});   