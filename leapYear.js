const isLeapYear = function (yearNum){
    if(isNaN(yearNum)){
        console.log("Pleas enter a valid year .. !!!");
    }else { 
        if(yearNum <=0 ){
            console.log("There is no year less than/ equal 0 .. !!!");
        }else{

            if(yearNum %4 === 0 ){
                if(yearNum % 100 === 0 ){
                    return (yearNum % 400 === 0 ) ? true : false ; 
                }else{
                    return true ; 
                }
            }else {
               return false ; 
            }

        }// end else of yearNum <=0 
    }//end else of isNaN 
}//end isLeapYear function 