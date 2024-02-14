import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  LogOut,
  User,
  ChevronsUp,
  ChevronsDown,
  Plus,
  RotateCcw,
  Trash2,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { DialogClose } from "@radix-ui/react-dialog";

import DialogStudent from "@/components/DialogStudent";

const Home = () => {
  const [buttonActive, setButtonActive] = useState<boolean>(true);
  const [profileOpen, setProfileOpen] = useState<boolean>(false);

  const handleIconButton = () => {
    setButtonActive((prevState) => {
      return prevState ? false : true;
    });
  };

  const handleProfileOpen = () => {
    setProfileOpen((prevState) => {
      return prevState ? false : true;
    });
  };

  const data = {
    name: 'Israel Cruz',
    email: 'israelcruz.contato@gmail.com'
  }

  return (
    <div className="py-6 px-16 relative">
      {profileOpen ? (
        <Dialog open={profileOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogClose onClick={handleProfileOpen}></DialogClose>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div>
              <Label htmlFor="picture">Picture</Label>
              <Input id="picture" type="file" className="mb-6" />

              <Label htmlFor="name">Name</Label>
              <Input id="name" className="mt-2 mb-6" />

              <Label htmlFor="email">Email</Label>
              <Input id="email" className="mt-2" />

              <div className="flex gap-4">
                <Button
                  className="w-full mt-6 bg-white text-black border hover:bg-slate-100"
                  onClick={handleProfileOpen}
                >
                  Cancel
                </Button>
                <Button className="w-full mt-6">Send</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ) : null}

      <header className="flex justify-between">
        <div className="text">
          <h1 className="text-3xl font-bold font-sans text-salte-900">
            Welcome Back
          </h1>
          <p className="text-slate-500 font-normal text-sm">
            Your student list below
          </p>
        </div>

        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleProfileOpen}>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <div className="mt-6 flex gap-4">
        <Input className="w-[276px] h-[32px]" placeholder="Filter Student" />

        <DialogStudent
          asChild={<Button className="h-[32px]">Add</Button>}
          title="Create Studant"
          description="Make changes to your profile here. Click save when you're done."
        />

        <Select>
          <SelectTrigger className="w-[100px] h-[32px] bg-primary text-primary-foreground text-sm font-medium">
            <SelectValue placeholder="Course" />
          </SelectTrigger>
          <SelectContent className="bg-primary text-primary-foreground">
            <SelectItem value="light">All</SelectItem>
            <SelectItem value="dark">TI</SelectItem>
            <SelectItem value="system">DS</SelectItem>
          </SelectContent>
        </Select>

        <Button
          className="w-[100px] h-[32px] self-end flex gap-1"
          onClick={handleIconButton}
        >
          Order
          {buttonActive ? <ChevronsUp size={16} /> : <ChevronsDown size={16} />}
        </Button>
      </div>

      <Table className="mt-6">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Students</TableHead>
            <TableHead className="w-[180px]">Name</TableHead>
            <TableHead className="w-[180px]">Email</TableHead>
            <TableHead className="w-[180px]">Course</TableHead>
            <TableHead className="w-[180px] text-center">Delete</TableHead>
            <TableHead className="w-[180px] text-center">Update</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium w-[100px]">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </TableCell>
            <TableCell className="w-[180px]">Israel Cruz</TableCell>
            <TableCell className="w-[180px]">israelcruz@dev.com</TableCell>
            <TableCell className="w-[180px]">TI</TableCell>
            <TableCell className="w-[180px] text-center">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <button>
                    <Trash2 size={20} className="text-slate-500" />
                  </button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Delete Student</AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure you want to delete? You cannot go back any
                      further, the decision is permanent
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Delete</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </TableCell>
            <TableCell className="w-[180px] text-center">
              <DialogStudent
                asChild={
                  <button>
                    <RotateCcw size={20} className="text-slate-500" />
                  </button>
                }
                title="Edit Studant"
                description="Make changes to your profile here. Click save when you're
                      done."
                      student={data}
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <div className="fixed right-0 bottom-0 px-16 py-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="h-12 w-12 rounded-full">{<Plus />}</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Send Lesson</DialogTitle>
              <DialogDescription>
                Send the lessons to your students by email
              </DialogDescription>
            </DialogHeader>
            <div>
              <Label htmlFor="title_leason">Name Leason</Label>
              <Input id="title_leason" className="mt-2 mb-6" />

              <Label htmlFor="description_leason">Leason</Label>
              <Textarea
                placeholder="Type your leason here."
                id="description_leason"
                className="mt-2 mb-6"
              />

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
      </div>
    </div>
  );
};

export default Home;
