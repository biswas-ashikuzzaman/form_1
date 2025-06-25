class FormValues {
    constructor (formData) {
        for (let [name,value] of FormData){
            this[name]=formData.getAll.join(',')
        }
    }
    getDisplay() {
        let result=`
        Name: ${this.sfn} <br>
        Name: ${this.sln} <br>
        Name: ${this.semail} <br>
        Name: ${this.sgender} <br>
        Name: ${this.scourse} <br>
        `;
        let win= window.open('','','width=400,height=400');
        win.document.write(result);
    }
}
form1.onsubmit=async (e)=>{
    e.preventDefault ();
    var fm =document.querySelector('#form1');
    var form_data= new FormData (fm);
    var f = new FormValues(form_data);
    f.getDisplay();
}