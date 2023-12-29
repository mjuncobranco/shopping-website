const GenerateContent = class{
  getYear = () => {
    let year = new Date()
    document.querySelector(".date").innerHTML+= year.getFullYear();
  }
}
let obj = new GenerateContent();
obj.getYear();