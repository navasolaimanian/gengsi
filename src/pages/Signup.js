import { Form, redirect } from "react-router-dom";

const Signup = () => {
    const classes = "border block mb-4 mt-2 rounded-lg p-1 outline-0 w-full";
    return (
        <div className='w-96 divide-y md:divide-y-0 md:divide-x mt-[5%] p-10 border rounded-lg shadow bg-white my-12 mx-auto justify-items-center h-[40rem] [&>*]:text-gray-950' >
            <Form method="post" className="" action="/auth/signup">
                <label className=""> Name:
                    <input type="text" name="Name" className={classes}></input>
                </label>
                <label className=""> LastName:
                    <input type="text" name="LastName" className={classes}></input>
                </label>
                <label className=""> Email:
                    <input type="email" name="Email" className={classes}></input>
                </label>
                <label className=""> address:
                    <input type="address" name="address" className={classes}></input>
                </label>
                <label className=""> Username:
                    <input type="text" name="Username" className={classes}></input>
                </label>
                <label className=""> Password:
                    <input type="password" name="Password" className={classes}></input>
                </label>
                <button className="bg-secondary text-white py-2 px-3 mt-4 rounded-lg text-sm">
                    <input type="submit" ></input>

                </button>
            </Form>

        </div>
    );
};

export const action = async ({ request, params }) => {
    console.log(request);
    console.log(params);
    const data = await request.formData();
    const eventData = {
        name: data.get('Name'),
        lastName: data.get('LastName'),
        email: data.get('Email'),
        address: data.get('address'),
        username: data.get('Username'),
        password: data.get('Password'),
        cart:''
    };
    console.log(eventData);
    const res = await fetch('https://gengis-66d40-default-rtdb.firebaseio.com/users.json', {
        method: "POST",
        body: JSON.stringify(eventData),
        headers: {
            'content-type': 'application/json'
        }
    });
    const data2 = await res.json();
    console.log(data2);
    localStorage.setItem('token', data2.name);
    console.log(localStorage.getItem('token'));

    return redirect('/');
};

export default Signup;