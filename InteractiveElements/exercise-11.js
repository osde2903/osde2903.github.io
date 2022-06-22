

// document.getElementById("mydiv").onmouseover = function()
// {
//     this.style.backgroundColor = "blue";
// }

document.getElementById("mydiv").onmouseover = function()
{
  this.style.backgroundColor = "green";
}
document.getElementById("try").addEventListener("click", function()
{
    document.getElementById("text").innerText = "I told you not to click this!";
});
