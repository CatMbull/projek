import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import IndexInput from "../elements/Input/IndexInput";
import Button from "../elements/Button/Button";
import { useState } from "react";

const Login = () => {
  const [activePassword, setActivePassword] = useState(false);
  return (
    <div className="w-4/6 h-4/6">
      <div className="m-2">
        <form>
          <IndexInput type="text" htmlFor="name" placeholder="Username or password" name="name" id="name" className="bg-transparent border-2 border-sky-300 text-white">
            Username or Email
          </IndexInput>

          <div className="relative">
            <IndexInput type={activePassword ? "text" : "password"} htmlFor="password" placeholder="****" name="password" id="password" className="bg-transparent border-2 border-sky-300 text-white">
              Password
              <div className="absolute right-4 bottom-3 cursor-pointer">{activePassword ? <BsEyeSlashFill onClick={() => setActivePassword(false)} /> : <BsEyeFill onClick={() => setActivePassword(true)} />}</div>
            </IndexInput>
          </div>

          <Button className="font-bold mt-3 h-10 bg-red-600 rounded">Login</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
