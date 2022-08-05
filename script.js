function NewElement() {

    form();

}
function form() {
    const div = document.createElement("div");
    const labelname = document.createElement("LABEL");
    const inputname = document.createElement("input");

    const labeldegree = document.createElement("LABEL");
    const inputdegree = document.createElement("input");

    const labelcgpa = document.createElement("LABEL");
    const inputcgpa = document.createElement("input");

    const del = document.createElement("button");
    del.className = "btn-lg bg-secondary text-white";
    del.addEventListener("click", delfun);
    del.innerHTML = "Remove";

    labelname.innerHTML = "Name:";
    labeldegree.innerHTML = "Degree:";
    labelcgpa.innerHTML = "CGPA:";

    inputname.placeholder = "Name Here...";
    inputdegree.placeholder = "Degree Here...";
    inputcgpa.placeholder = "CGPA Here...";

    div.className = "form-group";
    inputname.className = "form-control";

    inputdegree.className = "form-control";

    inputcgpa.className = "form-control";

    div.appendChild(labelname);
    div.appendChild(inputname);
    div.appendChild(labeldegree);
    div.appendChild(inputdegree);
    div.appendChild(labelcgpa);
    div.appendChild(inputcgpa);
    div.appendChild(del);
    document.forms["form"].appendChild(div);
}
function delfun() {
    x = this.parentElement;
    x.remove();
}