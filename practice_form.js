class FormValues {
    constructor(formData) {
        for (let [name,value] of formData) {
            this[name]=formData.getAll(name).join(',')
        }
    }
    getDisplay(){
        var result="Name" + this.sn+ "<br>";
        result += "Student Id:"+ this.sid + "<br>";
        result += "Age:"+ this.sage+ "<br>";
        result += "Email:"+ this.semail + "<br>";
        result += "Contact:"+ this.scontact + "<br>";
        result += "Gender:"+ this.sgender + "<br>";
        result += "Round:"+ this.round + "<br>";
        result += "Course:"+ this.scourse + "<br>";
        var win =window.open(' ', '', 'width=400, height=400');
        win.document.write(result);
    }
}
form1.onsubmit=async(e)=> {
    e.preventDefault();
    var fm= document.querySelector('#form1');
    var form_data=new FormData(fm);
    var f = new FormValues(form_data);
    f.getDisplay ();
}
