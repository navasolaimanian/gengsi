import { useDispatch } from "react-redux";
import { Form, redirect } from "react-router-dom";
import { getToken } from "../Util/auth";
import { setToken } from "../store/auth-action";

const Login = () => {
    const classes = "border block mb-4 mt-2 rounded-lg p-1 outline-0 w-full";
    return (
        <div className='w-96 divide-y md:divide-y-0 md:divide-x mt-[5%] p-10 border rounded-lg shadow bg-white my-12 mx-auto justify-items-center h-[40rem] [&>*]:text-gray-950' >
            <Form method="post" className="" action="/auth/login">

                <label className=""> Email:
                    <input type="email" name="Email" className={classes}></input>
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
    console.log('yay');
    const searchParams = new URL(request.url).searchParams;
    console.log(request.url);
    const mode = searchParams.get('mode') || 'login';
    console.log(mode);
    console.log(request);
    console.log(params);
    const data = await request.formData();
    const eventData = {
        email: data.get('Email'),
        password: data.get('Password'),
    };
    console.log(eventData);
    const res = await fetch('https://gengis-66d40-default-rtdb.firebaseio.com/users.json');

    const data2 = await res.json();
    let isLogin = false;
    for (const user of Object.keys(data2)) {
        console.log(data2[user]);
        console.log(data2[user].email);
        console.log(data2[user].password);
        if (data2[user].email === data.get('Email') && data2[user].password === data.get('Password')) {
            isLogin = true;
            localStorage.setItem('token', user)
        }
    }
    console.log(isLogin);
    console.log(data2);
    console.log(localStorage.getItem('token'));
    // redirect('/');
    return redirect('/');
};

export default Login;