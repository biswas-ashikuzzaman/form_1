class FormValues {
    constructor(formData) {
        for (let [name, value] of formData) {
            this[name] = formData.getAll(name).join(",");
        }
    }

    //getAll method return an array of all the values by a key name.
    showData() {
        var result = "Name: " + this.fn + "<br>";
        result += "Contact: " + this.Con + "<br>";
        result += "Email: " + this.email + "<br>";
        result += "About: " + this.abo + "<br>";
        result += "Remark: " + this.remark + "<br>";
        result += "Gender: " + this.gender + "<br>";
        result += "Course: " + this.course + "<br>";
        result += "Education: " + this.Education + "<br>";
        result += "Location: " + this.location + "<br>";
        var win = window.open("", "", "width=400,height=400");
        win.document.write(result);
    }
}

form1.onsubmit = async (event) => {
    event.preventDefault();
    // user for default event program stop
    var form = document.querySelector("#form1");
    // #form1 use of object
    var form_data = new FormData(form);
    //  JavaScript FormData

    var f = new FormValues(form_data);

    f.showData();
}