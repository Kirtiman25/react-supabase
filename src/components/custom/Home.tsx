import React from 'react';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type Student = {
  id: number;
  name: string;
  age: number;
  grade: string;
  subjects: string[];
};

// Generate a list of 50 students
const students: Student[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Student ${i + 1}`,
  age: 14 + (i % 5), // Ages will cycle between 14 to 18
  grade: `${9 + (i % 4)}th`, // Grades will cycle between 9th and 12th
  subjects: ["Math", "Science", "English", "History", "Art"].slice(0, (i % 5) + 1), // Dynamic subject selection
}));

const StudentTable: React.FC = () => {
  return (
    <div className='p-2'>
      <h2 className='text-center font-bond text-2xl font-mono'>Student Details</h2>
      <Table>
        <TableCaption>College Students Details</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Grade</TableHead>
            <TableHead>Subjects</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell className="font-medium">
                {student.id}
              </TableCell>
              <TableCell>
                {student.name}
              </TableCell>
              <TableCell>
                {student.age}
              </TableCell>
              <TableCell>
                {student.grade}
              </TableCell>
              <TableCell>
                {student.subjects.join(", ")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <p style={{ textAlign: "center", marginTop: "10px" }}>
        Total Students: {students.length}
      </p>
    </div>
  );
};

export default StudentTable;
