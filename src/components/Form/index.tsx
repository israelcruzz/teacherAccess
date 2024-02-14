import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface FormProps {
  title: string;
  description: string;
  btnOne: string;
  btnTwo: string;
  name?: boolean;
}

const FormTeacher = ({ title, description, btnOne, btnTwo, name }: FormProps) => {
  return (
    <>
      <h1 className="text-slate-900 font-bold text-3xl mb-3">{title}</h1>
      <span className="text-slate-500 text-sm mb-6">{description}</span>

      {name && (
        <Input placeholder="Name" className="w-[305px] h-10 mb-6" />
      )}

      <Input placeholder="Email" className="w-[305px] h-10 mb-6" />

      <Input
        placeholder="Password"
        type="password"
        className="w-[305px] h-10 mb-6"
      />

      <Button className="w-[305px] h-10 mb-6">{btnOne}</Button>

      <div className="flex items-center justify-center gap-1">
        <span className=" w-[124px] border-[1.5px]"></span>
        Or
        <span className=" w-[124px] border-[1.5px]"></span>
      </div>

      <Button className="w-[305px] h-10 bg-white border text-black hover:bg-slate-100 mt-6">
        {btnTwo}
      </Button>
    </>
  );
};

export default FormTeacher;
