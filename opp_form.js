class FormValues{
		constructor(fromData){
		  for(let [name,value] of fromData){
			this[name]=fromData.getAll(name).join(', ');
		  }
		}
	//getAll method return an array of all the values by a key name.
		getData(){
			var result="Name: "+this.fn+"<br>";
			result+="Contact: "+this.con+"<br>";
			result+="Remark: "+this.remark+"<br>";
			result+="Gender: "+this.gender+"<br>";
			result+="Course: "+this.course+"<br>";
			result+="Location: "+this.location+"<br>";
		  var win=window.open('','','width=400,height=400');
		  win.document.write(result);
		}
	}
	
  
  form1.onsubmit=async(e)=>{
    e.preventDefault();
    //user for default event program stop
		var fm=document.querySelector('#form1');
		var form_data=new FormData(fm);
			
		var f=new FormValues(form_data);
		f.getData();
	}