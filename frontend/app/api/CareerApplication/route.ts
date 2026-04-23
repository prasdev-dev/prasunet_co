import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      jobTitle,
      experience,
      resumeUrl,
      coverLetter,
      linkedin,
      github,
      portfolio,
    } = body;

    // Validation
    if (!firstName || !lastName || !email || !phone || !jobTitle || !experience || !resumeUrl) {
      return NextResponse.json(
        { message: 'Missing required fields', error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Invalid email format', error: 'Please enter a valid email' },
        { status: 400 }
      );
    }

    console.log('Career application submission:', { firstName, lastName, email });

    // Check if email already has an application
    const { data: existingApplication, error: checkError } = await supabase
      .from('career_applications')
      .select('id')
      .eq('email', email.toLowerCase())
      .single();

    if (existingApplication) {
      return NextResponse.json(
        { message: 'An application with this email already exists', error: 'Duplicate application' },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('career_applications')
      .insert([
        {
          first_name: firstName,
          last_name: lastName,
          email: email.toLowerCase(),
          phone: phone,
          job_title: jobTitle,
          experience: parseInt(experience),
          resume_url: resumeUrl,
          cover_letter: coverLetter || null,
          linkedin: linkedin || null,
          github: github || null,
          portfolio: portfolio || null,
          status: 'new',
          created_at: new Date().toISOString()
        }
      ])
      .select();

    if (error) {
      console.error('Supabase insert error:', error);

      // Handle duplicate key error
      if (error.code === '23505' || error.message.includes('duplicate')) {
        return NextResponse.json(
          { message: 'An application with this email already exists', error: 'Duplicate application' },
          { status: 400 }
        );
      }

      return NextResponse.json(
        { message: `Failed to save application: ${error.message}`, error: error.message },
        { status: 500 }
      );
    }

    console.log('Career application saved:', data);

    return NextResponse.json(
      { message: 'Application submitted successfully!', data: data?.[0] },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Career application error:', error);
    return NextResponse.json(
      { message: 'Error saving application. Please try again later.', error: error.message },
      { status: 500 }
    );
  }
}
