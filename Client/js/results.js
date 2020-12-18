window.onload = () => {
    matchUsers();
}


class User {
    constructor(_parent,_id, _fname, _lname, _match, _i) {
        this.parent = _parent;
        this.id = _id;
        this.fname = _fname;
        this.lname = _lname;
        this.match = _match;
        this.i =_i+1;
    }
    render() {
        let newDiv = $("<tr></tr>");
        $(this.parent).append(newDiv);

        $(newDiv).append(`
        <th scope="row">${this.i}</th>
        <td>${this.fname}</td>
        <td>${this.lname}</td>
        <td>${this.match}</td>
         `)
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
            let mov = new User("main table tbody", item._id, item.fname, item.lname,item.match,i);
            mov.render();
        })
    }
    else {
        document.querySelector("main table tbody").innerHTML = "Not Found...";
    }
}