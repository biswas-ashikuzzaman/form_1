class FormValues {
    constructor(formData) {
        for(let [name,value] of formData) {
            this[name]=formData.getAll(name).join(',');
        }
    }
    getData() {
        var result="Name:" + this.sn+ "<br>";
         result+="Student ID:" + this.sid+ "<br>";
         result+="Contact Number:" + this.scon+ "<br>";
         result+="Email:" +this.email+ "<br>";
         result+="Gender:"+ this.gender+ "<br>";
         result+="Round:" + this.round+ "<br>";
         result+="Course:" + this.course+ "<br>";
        //  var win=window.open(" " ,'width=400, height=400');
         var win = window.open("", '', 'width=400,height=400');
         win.document.write(result);
    }
}
form1.onsubmit=async(e)=>{
    e.preventDefault();
    var fm= document.querySelector('#form1');
    var form_data=new FormData(fm);
			
		var f=new FormValues(form_data);
		f.getData();
}