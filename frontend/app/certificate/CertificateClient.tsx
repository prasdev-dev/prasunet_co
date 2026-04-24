'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

interface CertificateData {
  fullName: string;
  fatherName: string;
  gender: string;
  collegeName: string;
  domainOfInternship: string;
  internId: string;
  internshipDuration: string;
  typeOfInternship: string;
  assignedProject: string;
  token: string;
}

interface Result {
  status?: string;
  error?: string;
  certificate?: CertificateData;
}

export default function CertificateClient() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const [result, setResult] = useState<Result | null>(null);

  useEffect(() => {
    if (token) {
      const verifyToken = async () => {
        try {
          const { data, error } = await supabase
            .from('certificates_verify')
            .select('*')
            .eq('token', token)
            .single();

          if (error || !data) {
            setResult({ status: 'Not Verified' });
            return;
          }

          // Map Supabase fields with exact field names (including spaces)
          const certificateData: CertificateData = {
            fullName: data['Full Name'] || '',
            fatherName: data['Father Name'] || '',
            gender: data['Gender'] || '',
            collegeName: data['College Name'] || '',
            domainOfInternship: data['Domain of the Internship'] || '',
            internId: data['Intern ID'] || '',
            internshipDuration: data['Internship Duration'] || '',
            typeOfInternship: data['Type of Internship'] || '',
            assignedProject: data['Your assigned Full Project Name'] || '',
            token: data['token'] || '',
          };

          setResult({ status: 'Verified', certificate: certificateData });
        } catch {
          setResult({ error: 'An error occurred during verification' });
        }
      };

      verifyToken();
    }
  }, [token]);

  return (
    <div>
      <header style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f0f0f0', marginBottom: '20px' }}>
        <h1 style={{ margin: 0, color: '#333' }}>Prasunet Company</h1>
        <p style={{ margin: '5px 0', color: '#666', fontStyle: 'italic' }}>Tech Bharat, Global Impact.</p>
      </header>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 20px' }}>
        {result === null && <div>Loading...</div>}

        {result?.error && (
          <div style={{ textAlign: 'center', padding: '20px', border: '1px solid red', backgroundColor: '#ffe6e6' }}>
            <h1>Verification Result</h1>
            <p style={{ color: 'red' }}>Error: {result.error}</p>
          </div>
        )}

        {result?.status === 'Not Verified' && (
          <div style={{ textAlign: 'center', padding: '20px', border: '1px solid orange', backgroundColor: '#fff3e6' }}>
            <h1>Verification Result</h1>
            <p style={{ color: 'orange' }}>Certificate Not Verified</p>
          </div>
        )}

        {result?.status === 'Verified' && result.certificate && (
          <div style={{ textAlign: 'center', padding: '20px', border: '1px solid green', backgroundColor: '#e6ffe6' }}>
            <h1>Verification Result</h1>
            <p style={{ color: 'green' }}>Certificate Verified</p>
            <div style={{ textAlign: 'left', marginTop: '20px' }}>
              <p><strong>Full Name:</strong> {result.certificate.fullName}</p>
              <p><strong>Father Name:</strong> {result.certificate.fatherName}</p>
              <p><strong>Gender:</strong> {result.certificate.gender}</p>
              <p><strong>College Name:</strong> {result.certificate.collegeName}</p>
              <p><strong>Internship Domain:</strong> {result.certificate.domainOfInternship}</p>
              <p><strong>Intern ID:</strong> {result.certificate.internId}</p>
              <p><strong>Internship Duration:</strong> {result.certificate.internshipDuration}</p>
              <p><strong>Type of Internship:</strong> {result.certificate.typeOfInternship}</p>
              <p><strong>Assigned Project:</strong> {result.certificate.assignedProject}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
