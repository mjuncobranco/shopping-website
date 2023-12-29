const GenerateContent = class{
  fruits = {
    1: ["01","grapes","uvas",4.95],
    2: ["02","kiwis","kiwi",3.85],
   
  }

  getYear = () => {
    let year = new Date()
    document.querySelector(".date").innerHTML+= year.getFullYear();
  }
}
let obj = new GenerateContent();
obj.getYear();