 var humanYearsCatYearsDogYears = function(humanYears) {
        let catYears = 0
        let dogYears = 0
        let counter = humanYears
        
        for(i = 0; i < humanYears; i++) {
          if (i === 0){
            catYears += 15
          } else if (i === 1){
            catYears += 9
          } else {
            catYears += 4
          }
        }
      
        for(i = 0; i < humanYears; i++) {
          if (i === 0){
            dogYears =+ 15
          } else if (i === 1){
            dogYears =+ 9
          } else {
            dogYears =+ 5
          }
        }

        console.log(humanYears)
        console.log(catYears)
        console.log(dogYears)
        return [humanYears,catYears,dogYears];
      }




    humanYearsCatYearsDogYears(10)