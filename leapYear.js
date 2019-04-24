const isLeapYear = function (yearNum){
    if(isNaN(yearNum)){
        console.log("Pleas enter a valid year .. !!!");
    }else { 
        if(yearNum <=0 ){
            console.log("There is no year less than/ equal 0 .. !!!");
        }else{

            return (yearNum % 4 === 0 && yearNum %100 === 0  )? (yearNum % 400 === 0 ) ? true : false : true  ;
            
        }// end else of yearNum <=0 
    }//end else of isNaN 
}//end isLeapYear function 