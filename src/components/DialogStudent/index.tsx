import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Button } from "@/components/ui/button";

interface data {
    name: string
    email: string
}

interface DialogStudent {
  asChild: any;
  title: string;
  description: string;
  student?: data
}

const DialogStudent = ({ asChild, title, description, student }: DialogStudent) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{asChild}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div>
          <Label htmlFor="picture">Picture</Label>
          <Input id="picture" type="file" className="mb-6" />

          <Label htmlFor="name">Name</Label>
          <Input id="name" className="mt-2 mb-6" value={student && student.name} />

          <Label htmlFor="email">Email</Label>
          <Input id="email" className="mt-2 mb-6" value={student && student.email}/>

          <Select>
            <SelectTrigger className=" text-sm font-medium">
              <SelectValue placeholder="Course" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dark">TI</SelectItem>
              <SelectItem value="system">DS</SelectItem>
            </SelectContent>
          </Select>

          <Button className="w-full mt-6">Send</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogStudent;
