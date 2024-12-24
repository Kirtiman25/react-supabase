import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components//ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


function AddStudentDialog({
  handleSubmit,
  form,
  handleInputChange,
  submitting
}) {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button>Add Student</Button>
        </DialogTrigger>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>Add Student</DialogTitle>
              <DialogDescription>
                <div className="grid gap-2">
                  <div className="grid grid-cols-4 items-center gap-2">
                    <Label>Name</Label>
                    <Input
                      type="text"
                      name="name"
                      value={form.name}
                      className='col-span-3 h-8'
                      onChange={handleInputChange}
                      placeholder="Enter student name"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-4 items-center gap-2">
                    <Label>Email</Label>
                    <Input
                      type="email"
                      name="email"
                      className='col-span-3 h-8'
                      value={form.email}
                      onChange={handleInputChange}
                      placeholder="Enter student email"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-4 items-center gap-2">
                    <Label>Age</Label>
                    <Input
                      type="number"
                      name="age"
                      className='col-span-3 h-8'
                      value={form.age}
                      onChange={handleInputChange}
                      placeholder="Enter student age"
                      required
                    />
                  </div>
                </div>

              </DialogDescription>
              <DialogFooter> 
                <DialogClose>
                  <Button variant='outline'>Close</Button>
                </DialogClose>
                <Button
                  type="submit"

                  className={`${submitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  disabled={submitting}
                >
                  {submitting ? 'Adding...' : 'Add Student'}
                </Button>
              </DialogFooter>
            </DialogHeader>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AddStudentDialog