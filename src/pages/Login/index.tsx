import login from "@/images/login.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import FormTeacher from "@/components/Form";

const Login = () => {
  return (
    <div className="grid grid-cols-2 w-full h-[100vh]">
      <div
        className="w-full bg-cover h-screen relative"
        style={{ backgroundImage: `url('${login}')` }}
      >
        <div className="flex gap-3 items-center p-6">
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <h1 className="font-bold text-base text-white">Teacher Access </h1>

          <div className="absolute left-0 bottom-0 right-0 h-1/2 bg-gradient-to-t from-black/90 to-black/0 pointer-events-none">
          </div>
        </div>
      </div>
      <div className="h-full w-full p-32 flex flex-col items-center justify-center">
        <FormTeacher title="Login" description="Enter your email below to access your account" btnOne="Login" btnTwo="Create Account"/>
      </div>
    </div>
  );
};

export default Login;
