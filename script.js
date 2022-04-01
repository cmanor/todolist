const textarea = document.getElementById("ta");





function add()
{
    const newLI = document.createElement('li');
    newLI.innerHTML = textarea.value;
    document.querySelector('ul').appendChild(newLI);
    textarea.value = null;

}

document.getElementsByTagName("ul")[0].addEventListener("click", (e)=>
{
    if (e.target.tagName == "LI")
    {
       setTimeout(() => e.target.remove(), 2000);
    }
})