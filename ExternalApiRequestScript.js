/** 
 *@NApiVersion 2.x
 *@NScriptType UserEventScript
*/
define (['N/record', 'N/log', 'N/https'] , function(record, log, https) {
    function myAfterSubmit (context) {
        try {
            // 
            if (context.type === context.UserEventType.EDIT)
            {
                var response = https.get({
                    url: 'https://jsonplaceholder.typicode.com/todos/1',
                });
                if(response.code === 200){
                    var body = response.body;
                    log.debug('This is a successful request to JSONPlaceholder: ', body);
                    /*  This should be the response: {
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
        catch (error) {
            log.error("There's been an error. Check the following message: " + error.message);
        }                     
    }
    // Add the return statement that identifies the entry point funtions.
    return {
        afterSubmit: myAfterSubmit,
    };   
}); 

      