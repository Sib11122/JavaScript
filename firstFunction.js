function calculateArea(){
    let length=document.getElementById('length').value;
    let breadth=document.getElementById('width').value;
    let result=document.getElementById('result');

    let Area=length*breadth;
    result.innerText="The area of the triangle is:"+Area;
}