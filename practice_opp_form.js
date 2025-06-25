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
        result +="Course:" +this.scourse + "<br>";
        var win= window.open('','' 'width=500,height=500');
        win.document.write(result);


    }
}
form1.onsubmit=async (e)=> {
    e.preventDefault();
    var fm=document.querySelector('#form1');
    var form_data=new FormData(fm);
    var f= new FormValues(form_data);
    f.getDisplay();
}