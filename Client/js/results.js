window.onload = () => {
    matchUsers();
}


class User {
    constructor(_parent,_id, _fname, _lname, _subject, _i) {
        this.parent = _parent;
        this.id = _id;
        this.fname = _fname;
        this.lname = _lname;
        this.subject = _subject;
        this.i =_i+1;
    }
    render() {
        let newDiv = $("<tr></tr>");
        $(this.parent).append(newDiv);

        $(newDiv).append(`
        <th scope="row">${this.i}</th>
        <td>${this.fname}</td>
        <td>${this.lname}</td>
        <td>${this.subject}</td>
         `)

        //  let trDiv = $("<tr></tr>");
        //  $(newDiv).append(trDiv);

        // let btnEdit = $(`<button class="btn btn-warning px-2"  data-light="light"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>`);
        //   $(trDiv).append(btnEdit);
        //   $(btnEdit).on("click",() => {
        //     window.location.href = "edit.html"
        //     //editAction(this.id);
        // })

        // let btnDelete = $(`<button class="btn btn btn-danger px-2"><i class="fa fa-trash" aria-hidden="true"></i></button>`);
        // $(trDiv).append(btnDelete);
        // $(btnDelete).on("click",() => {
        //     let ans = alert('Are you sure you want to delete the item?');
        //     if(ans){
        //         console.log(this.id);
        //         //deleteAction(this.id);
        //     }
    //   })
    }
}

const matchUsers = () => {
    let myUrl = "http://localhost:3000/users/";
    let res = await axios.get(myUrl);
    console.log(res);
    createUser(res);
}


const createUser = (_ar) => {
    document.querySelector("tbody").innerHTML = "";
    if (_ar.data.length > 0) {
        console.log("ar",_ar.data);
        _ar.data.map((item,i) => {
            let mov = new User("main table tbody", item._id, item.user, item.email,i);
            mov.render();
        })
    }
    else {
        document.querySelector("main table tbody").innerHTML = "Not Found...";
    }
}