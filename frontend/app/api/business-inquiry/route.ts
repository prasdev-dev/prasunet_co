import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, company, phone, projectType, message } = body;

    console.log('Business inquiry received:', { firstName, lastName, email, company, projectType });

    // Validate required fields
    if (!firstName || !lastName || !email || !company || !projectType || !message) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'All required fields must be filled',
          received: { firstName, lastName, email, company, projectType, message }
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Insert the business inquiry
    const { data, error } = await supabase
      .from('business_inquiries')
      .insert([
        {
          first_name: firstName.trim(),
          last_name: lastName.trim(),
          email: email.trim().toLowerCase(),
          company: company.trim(),
          phone: phone?.trim() || null,
          project_type: projectType.trim(),
          message: message.trim(),
          status: 'new'
        }
      ])
      .select();

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json(
        { 
          success: false, 
          error: `Failed to save inquiry: ${error.message}`,
          details: error
        },
        { status: 500 }
      );
    }

    console.log('Business inquiry saved successfully:', data);

    return NextResponse.json({
      success: true,
      message: 'Business inquiry submitted successfully! We will contact you soon.',
      data: data?.[0]
    });

  } catch (error) {
    console.error('API error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { 
        success: false, 
        error: `Internal server error: ${errorMessage}`,
      },
      { status: 500 }
    );
  }
}
