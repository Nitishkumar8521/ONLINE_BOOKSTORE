function Author(name,birthYear,nationality){
    this.name=name;
    this.birthYear=birthYear;
    this.nationality=nationality;

}
function Book(title,Author,genre,price){
    this.title=title;
    this.Author=Author;
    this.genre=genre;
    this.price=price;

    this.getBookInfo=function()
    {
        console.log("book's title:",this.title,"author's name:",this.Author,"genre:",this.genre,"price:",this.price);
    }    
}
let Author1=new Author("Nitish",2000,"Indian");
let Book1=new Book("Lets study",Author1,"sanskrit",0);
Book1.getBookInfo();