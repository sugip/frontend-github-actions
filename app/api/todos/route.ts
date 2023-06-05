import { NextResponse } from 'next/server';

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 300));

  const data = [
    { title: 'task 1', done: true },
    { title: 'task 2', done: true },
    { title: 'task 3', done: false },
    { title: 'task 4', done: false },
  ];

  return NextResponse.json(data);
}
