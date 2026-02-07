// Please do not change the name of this function
function updateRemoteStudents(str) {
    // Your code here
  
    // for (let i=0; i<str.length; i++) {
    //   if(!str[i].hasOwnProperty('location')){
    //     str[i]["location"] = "remote";
    //   }
  
    // }
  
    // console.log(str);
    // return str;
  
    const updatedStudents = str.map((student) => {
      if(!(student.hasOwnProperty('location'))) {
        return { ...student, location: "remote"};
      }
      return student;
    });
  
    return updatedStudents;
  
  
  }

  module.exports = updateRemoteStudents;