function dyn_window() {
        var title = "My Title";

        var name = document.f.txtName.value;
        var address = document.f.txtAddress.value;
        var course = document.f.txtCourse.value;

        var sex = "";
        var subject = "";

        //check if radio button is selected and read selected value
        for (i = 0; i < document.f.rdoSex.length; i++) {
          if (document.f.rdoSex[i].checked) {
            sex = document.f.rdoSex[i].value;
          }
        }

        for (j = 0; j < document.f.chkSubject.length; j++) {
          if (document.f.chkSubject[j].checked) {
            subject += document.f.chkSubject[j].value + ", ";
          }
        }

        // create new window here

        a = open("", "", "width=200px,height=200px");

        with (a.document) {
          write("<html>");
          write("<head><title>" + title + "</title></head>");
          write("<body>");

          write("<div style='border:1px solid gray'>Name:" + name + "<br/>");
          write("Address:" + address + "<br/>");
          write("Course:" + course + "<br/>");
          write("Sex:" + sex + "<br/>");
          write("Subject:" + subject + "<br/></div>");
          write(
            "<input type='button' value='Close me' onclick='self.close();' />"
          );
          write(
            "<input type='button' value='Print' onclick='self.print();' />"
          );
          write("</body>");
          write("</html>");
        }
      }
      // end the function