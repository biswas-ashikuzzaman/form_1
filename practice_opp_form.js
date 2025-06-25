class FormValues {
    constructor (formData) {
        for (let[name,value] of formData) { 
            this[name]=formData.getAll(name).join(',');
            }
    }
    getDisplay() {
        var result="First Name:" + this.sfn + "<br>";
        result +="last Name:" +this.sln + "<br>";
        result +="Student ID:" +this.sid + "<br>";
        result +="Gender:" +this.sgender + "<br>";
        result +="last Name:" +this.sln + "<br>";


    }
}