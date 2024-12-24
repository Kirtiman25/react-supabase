import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import type { Student } from '@/lib/type'
import StudentTable from '@/components/custom/StudentTable';
import { columns } from '@/components/custom/Columns';
import AddStudentDialog from './AddStudentDialog';
import { toast } from 'sonner';

const Students: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [form, setForm] = useState({ name: '', email: '', age: '' });
  const [submitting, setSubmitting] = useState<boolean>(false);

  // Fetch students from the database
  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      const { data, error } = await supabase.from('student').select('*');
      if (error) {
        console.error('Error fetching students:', error);
      } else if (data) {
        setStudents(data);
      }
      setLoading(false);
    };

    fetchStudents();
  }, []);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const { name, email, age } = form;
    const pseudoStudent = {
      name, email, age: parseInt(age, 10)
    }
    const { data, error } = await supabase.from('student').insert([pseudoStudent]).select('id');
    if (error) {
      console.error('Error adding student:', error);
    } else if (data) {
      toast('Student Added!!!')
      setStudents((prev) => [...prev, {
        id: data[0].id,
        ...pseudoStudent
      }]);
      setForm({ name: '', email: '', age: '' }); // Reset the form
    }

    setSubmitting(false);
  };

  return (
    <div className="flex flex-col mx-auto p-4">
      <div className='flex flex-row justify-between'>
        <h1 className="text-2xl font-bold mb-4">Students</h1>
        <AddStudentDialog handleInputChange={handleInputChange} handleSubmit={handleSubmit} form={form} submitting={submitting} />
      </div>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <StudentTable columns={columns} data={students} />
        )}
      </div>
    </div>
  );
};

export default Students;
