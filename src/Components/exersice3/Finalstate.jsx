export function getFinalState(baseState, queue) {
    let finalState = baseState;
    
      for (item of queue)
        {
          
          if(typeof(item)==="function")
            {
              finalState = finalState + 1;
              
            }
          else{
            finalState= item;
          }
    
        }
      
    return finalState;

    }
    //solved code for react documentation challenge